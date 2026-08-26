import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import SetPasswordForm from "./SetPasswordForm";

export const metadata: Metadata = {
  title: "Set Your Password",
};

export default async function SetPasswordPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // No session means the invite link was never confirmed (or already used) —
  // send them back to request a fresh one rather than showing a dead form.
  if (!user) redirect("/login?error=expired_link");

  return <SetPasswordForm />;
}
