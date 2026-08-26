import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { db } from "@/lib/db";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Sign In",
};

const ERROR_MESSAGES: Record<string, string> = {
  expired_link: "That invite link has expired or was already used. Contact the fund for a new one.",
  invalid_link: "That link is invalid. Contact the fund for a new invite.",
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    const profile = await db.profile.findUnique({ where: { id: user.id } });
    if (profile) redirect(profile.role === "ADMIN" ? "/admin" : "/portal");
  }

  const { error } = await searchParams;
  const errorMessage = error ? ERROR_MESSAGES[error] : null;

  return (
    <div className="space-y-5">
      {errorMessage && (
        <p className="rounded-sm bg-red-50 px-4 py-3 text-sm text-red-600">{errorMessage}</p>
      )}
      <LoginForm />
    </div>
  );
}
