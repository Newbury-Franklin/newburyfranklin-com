import "server-only";
import { createAdminClient } from "@/lib/supabase/admin";
import { Role } from "@/lib/generated/prisma/client";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/**
 * Sends a Supabase Auth invite email: admin-only account creation, secure
 * single-use link, investor/admin sets their own password on first visit.
 * Token expiry + single-use enforcement is handled entirely by Supabase Auth.
 *
 * The intended role is embedded as user_metadata at invite time, so
 * /api/auth/complete-signup knows whether to provision an ADMIN or INVESTOR
 * Profile without having to guess from the email address.
 */
export async function inviteUserByEmail(email: string, role: Role) {
  const supabase = createAdminClient();
  return supabase.auth.admin.inviteUserByEmail(email, {
    redirectTo: `${SITE_URL}/set-password`,
    data: { role },
  });
}
