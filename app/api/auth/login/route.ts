import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { db } from "@/lib/db";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
  }

  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error || !data.user) {
    return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
  }

  const profile = await db.profile
    .update({ where: { id: data.user.id }, data: { lastLoginAt: new Date() } })
    .catch(() => null);

  if (!profile) {
    await supabase.auth.signOut();
    return NextResponse.json(
      { error: "Your account isn't set up yet. Contact the fund." },
      { status: 403 }
    );
  }

  return NextResponse.json({ redirectTo: profile.role === "ADMIN" ? "/admin" : "/portal" });
}
