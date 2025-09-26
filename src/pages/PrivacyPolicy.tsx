import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-6 py-12 prose prose-invert max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <p className="text-muted-foreground">Last updated: 26 September 2025</p>

        <p>
          This Privacy Policy describes how our software studio ("we", "us", or "our")
          collects, uses, and discloses information in connection with the design, development,
          and delivery of software and related services for our clients.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Scope</h2>
        <p>
          We build software solutions for a wide range of clients and industries. This policy
          covers information we process through our own websites, communications, and during the
          provision of services to clients. Where we act as a processor on behalf of a client,
          that client’s privacy notice governs how end-user data is handled.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Information We Collect</h2>
        <ul className="list-disc pl-6">
          <li>
            Contact information: such as name, email address, phone number, and company details
            provided when you contact us or engage our services.
          </li>
          <li>
            Business and project information: details you choose to share about your project
            requirements, goals, timelines, and related materials.
          </li>
          <li>
            Technical information: basic usage data and diagnostics from our website or hosted
            demos (e.g., IP address, device/browser characteristics, pages viewed, and timestamps).
          </li>
          <li>
            Communications: records of emails, messages, meeting notes, and support interactions.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">How We Use Information</h2>
        <ul className="list-disc pl-6">
          <li>To provide, operate, and improve our services and websites.</li>
          <li>To communicate with you about proposals, projects, and support.</li>
          <li>To personalize content and understand engagement with our materials.</li>
          <li>To comply with legal obligations and enforce agreements.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">Sharing of Information</h2>
        <p>
          We may share information with trusted service providers who assist in delivering our
          services (e.g., hosting, analytics, communications). We require such providers to handle
          data consistent with applicable law and appropriate safeguards. We may also share
          information when required by law, to protect rights and safety, or in connection with a
          business transaction (e.g., merger or acquisition).
        </p>

        <h2 className="text-2xl font-semibold mt-8">Data Retention</h2>
        <p>
          We retain information for as long as necessary to fulfill the purposes outlined in this
          policy, unless a longer retention period is required or permitted by law or by our
          agreements with clients.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Security</h2>
        <p>
          We implement reasonable administrative, technical, and organizational measures designed
          to protect information. No security method is perfect, and we cannot guarantee absolute
          security.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Your Choices</h2>
        <p>
          You may contact us to access, correct, or delete certain information, or to express
          preferences regarding communications. If you are an end user of a client application,
          please contact the relevant client directly.
        </p>

        <h2 className="text-2xl font-semibold mt-8">International Transfers</h2>
        <p>
          We may process information in countries other than your own. Where required, we apply
          appropriate safeguards to such transfers.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Children</h2>
        <p>
          Our services are not directed to children and we do not knowingly collect personal
          information from children.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. The updated version will be
          indicated by an updated "Last updated" date and will be effective when posted.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Contact Us</h2>
        <p>
          If you have questions about this policy or our privacy practices, please contact us at
          privacy@thewisemonkey.co.uk.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;


