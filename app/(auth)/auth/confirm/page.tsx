import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Confirm Your Invitation",
};

/**
 * Invite emails link here (not straight to Supabase's verify endpoint, and
 * not to /set-password) specifically so that a real click is required before
 * the single-use token is consumed. Email providers (Gmail, Outlook) often
 * pre-fetch links in emails to scan them for safety, which silently burns a
 * one-time token before the recipient ever sees it. Scanners issue GET
 * requests but don't submit forms, so gating the actual verification behind
 * a POST triggered by this button defeats that.
 */
export default async function ConfirmInvitePage({
  searchParams,
}: {
  searchParams: Promise<{ token_hash?: string; type?: string }>;
}) {
  const { token_hash, type } = await searchParams;

  if (!token_hash || !type) {
    return (
      <p className="text-sm text-red-600">
        This link is missing required information. Contact the fund for a new invite.
      </p>
    );
  }

  return (
    <form action="/api/auth/confirm" method="post" className="space-y-5 text-center">
      <h1 className="text-2xl text-black">Confirm Your Invitation</h1>
      <p className="text-sm text-stone">Click below to continue setting up your account.</p>
      <input type="hidden" name="token_hash" value={token_hash} />
      <input type="hidden" name="type" value={type} />
      <button type="submit" className="btn-primary w-full justify-center">
        Confirm & Continue
      </button>
    </form>
  );
}
