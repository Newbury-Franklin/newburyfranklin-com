import "server-only";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { db } from "@/lib/db";
import { Role } from "@/lib/generated/prisma/client";

/**
 * Call at the top of app/admin/layout.tsx or app/portal/layout.tsx.
 * Middleware already blocks unauthenticated requests to these route groups;
 * this layer enforces the *role* (and re-checks on every request, so an
 * admin revoking access takes effect immediately rather than waiting for a
 * token to expire).
 */
export async function requireRole(role: Role) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const profile = await db.profile.findUnique({ where: { id: user.id } });

  if (!profile || profile.role !== role) {
    redirect("/login");
  }

  return { user, profile };
}

/** Investor-specific: also confirms their access hasn't been revoked. */
export async function requireActiveInvestor() {
  const { user, profile } = await requireRole(Role.INVESTOR);

  const investor = await db.investor.findUnique({
    where: { profileId: profile.id },
    include: { platformAccess: true },
  });

  if (!investor || investor.status !== "ACTIVE") {
    redirect("/login");
  }

  return { user, profile, investor };
}
