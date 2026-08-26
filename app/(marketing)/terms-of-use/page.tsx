import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Newbury Franklin’s privacy policy and terms of use.",
};

export default function TermsOfUse() {
  return (
    <section className="section bg-white pt-36">
      <div className="container-page max-w-3xl">
        <h1 className="mb-10 text-3xl text-black sm:text-4xl">Terms of Use</h1>

        <h5 className="mb-4 text-xl text-navy">Privacy Policy</h5>

        <div className="space-y-5 text-stone">
          <p>
            <em>Our Commitment to Your Privacy</em>: We are sensitive to the privacy concerns of our individual
            limited partners and clients. We have a policy of protecting the confidentiality and security of
            information we collect about you. We are providing you with this notice to help you better understand
            why and how we collect certain personal information, the care with which we treat that information, and
            how we use that information.
          </p>

          <p>
            <em>Sources of Non-Public Information</em>: In connection with forming and operating our private
            investment funds and/or performing asset management services for our limited partners and clients, we
            collect and maintain non-public personal information from the following sources:
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li>
              Information we receive from you in conversations over the telephone, in voicemails, through written
              correspondence, via e-mail, or in subscription agreements, investor questionnaires, applications or
              other forms,
            </li>
            <li>Information about your transactions with us or others, and</li>
            <li>
              Information captured on our website, including registration information and any information captured
              via &ldquo;cookies.&rdquo;
            </li>
          </ul>

          <p>
            <em>Disclosure of Information</em>: We do not disclose any non-public personal information about you to
            anyone, except as permitted or required by law or regulation and to service providers. Former Limited
            Partners and Clients: We maintain non-public personal information of our former limited partners and
            clients and apply the same policies that apply to current limited partners and clients.
          </p>

          <p>
            <em>Information Security</em>: We consider the protection of sensitive information to be a sound
            business practice, and to that end we employ physical, electronic and procedural safeguards to protect
            your non-public personal information in our possession or under our control.
          </p>

          <p>
            <em>Further Information</em>: We reserve the right to change our privacy policies and this Privacy
            Notice at any time. The examples contained within this notice are illustrations only and are not
            intended to be exclusive. This notice is intended to comply with the privacy provisions of applicable
            U.S. federal law. You may have additional rights under other foreign or domestic laws that may apply to
            you.
          </p>
        </div>
      </div>
    </section>
  );
}
