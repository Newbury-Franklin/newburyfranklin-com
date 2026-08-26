import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { db } from "@/lib/db";
import { Role } from "@/lib/generated/prisma/client";

/**
 * Called right after a freshly-invited user calls supabase.auth.updateUser
 * to set their password. Provisions their Profile row (role comes from the
 * user_metadata set at invite time — see lib/auth/invite.ts) and, for
 * investors, links + activates the matching Investor record.
 */
export async function POST() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || !user.email) {
    return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
  }

  const role = user.user_metadata?.role as Role | undefined;
  if (role !== Role.ADMIN && role !== Role.INVESTOR) {
    return NextResponse.json(
      { error: "This account wasn't invited properly. Contact the fund." },
      { status: 400 }
    );
  }

  const profile = await db.profile.upsert({
    where: { id: user.id },
    create: { id: user.id, email: user.email, role },
    update: {},
  });

  if (role === Role.INVESTOR) {
    const investor = await db.investor.findUnique({ where: { email: user.email } });
    if (!investor) {
      return NextResponse.json(
        { error: "No matching investor record found for this email. Contact the fund." },
        { status: 400 }
      );
    }

    await db.investor.update({
      where: { id: investor.id },
      data: { profileId: profile.id, status: "ACTIVE", acceptedAt: new Date() },
    });
    await db.auditLog.create({
      data: {
        actorId: profile.id,
        action: "INVITE_ACCEPTED",
        targetType: "Investor",
        targetId: investor.id,
      },
    });
  } else {
    await db.auditLog.create({
      data: {
        actorId: profile.id,
        action: "INVITE_ACCEPTED",
        targetType: "Profile",
        targetId: profile.id,
      },
    });
  }

  return NextResponse.json({ redirectTo: role === Role.ADMIN ? "/admin" : "/portal" });
}
