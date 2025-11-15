export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <div className="container-custom py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-gray-400 mb-8">Last Updated: November 15, 2025</p>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p>
                DefiShard ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you use our browser extension and mobile application (collectively, the "Service").
              </p>
              <p className="mt-3">
                This Privacy Policy complies with applicable data protection laws, including:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li><strong className="text-white">GDPR</strong> (General Data Protection Regulation - EU/EEA)</li>
                <li><strong className="text-white">CCPA</strong> (California Consumer Privacy Act - California, USA)</li>
                <li><strong className="text-white">UK GDPR</strong> (United Kingdom)</li>
                <li><strong className="text-white">PIPEDA</strong> (Personal Information Protection and Electronic Documents Act - Canada)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-white mb-3">2.1 Information You Provide</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Email address (when you join our waitlist)</li>
                <li>Wallet addresses you create or import</li>
                <li>Transaction data you initiate</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">2.2 Information We Do NOT Collect</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Your private keys or key shares (these never leave your devices)</li>
                <li>Your seed phrases or recovery phrases</li>
                <li>Personal identification information beyond what you provide</li>
                <li>Browsing history or activity outside our application</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Provide and maintain our service</li>
                <li>Notify you about changes to our service</li>
                <li>Provide customer support</li>
                <li>Monitor usage and detect technical issues</li>
                <li>Send you updates and announcements (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
              <p className="mb-3">
                We implement industry-standard security measures to protect your information:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>End-to-end encryption for all sensitive data</li>
                <li>Multi-Party Computation (MPC) technology ensuring your private keys never exist in one place</li>
                <li>Regular security audits and updates</li>
                <li>Secure communication protocols (HTTPS/TLS)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Key Security Architecture</h2>
              <p>
                DefiShard uses Distributed Key Generation (DKG) and Threshold Signature Schemes (TSS). This means:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li>Your private key <strong className="text-white">never exists</strong> on any device</li>
                <li>Key shares are generated independently on your mobile and browser extension</li>
                <li>Transactions are signed using distributed computation without reconstructing the private key</li>
                <li>We cannot access, view, or recover your private keys or key shares</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Third-Party Services and International Transfers</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">6.1 Third-Party Service Providers</h3>
                  <p className="mb-3">
                    We may use third-party services for:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Blockchain RPC providers (to broadcast transactions to blockchain networks)</li>
                    <li>Analytics services (anonymized usage statistics only)</li>
                    <li>Cloud infrastructure providers (for hosting our website and backend services)</li>
                    <li>Email service providers (for waitlist notifications)</li>
                  </ul>
                  <p className="mt-3">
                    These third parties do not have access to your private keys, key shares, or sensitive wallet information. 
                    We ensure all service providers are bound by contractual obligations to protect your data.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">6.2 International Data Transfers</h3>
                  <p className="mb-3">
                    Your information may be transferred to and processed in countries outside your country of residence, 
                    including the United States and other jurisdictions where our service providers operate.
                  </p>
                  <p className="mb-3">
                    For transfers from the EU/EEA/UK, we ensure adequate protection through:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong className="text-white">Standard Contractual Clauses (SCCs):</strong> Approved by the European Commission</li>
                    <li><strong className="text-white">Adequacy Decisions:</strong> Transfers to countries recognized as providing adequate protection</li>
                    <li><strong className="text-white">Additional Safeguards:</strong> Technical and organizational measures to ensure data security</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">6.3 Blockchain Data</h3>
                  <p>
                    Please note that blockchain transactions are public by nature. Once a transaction is broadcast to a blockchain network, 
                    it becomes part of the public ledger and cannot be deleted. This is inherent to blockchain technology, not a choice by DefiShard.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Data Retention</h2>
              <p>
                We retain your information only as long as necessary to provide our services. You can request deletion 
                of your account data at any time by contacting us at <a href="mailto:info@defishard.com" className="text-primary hover:underline">info@defishard.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Your Rights</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">8.1 Rights Under GDPR (EU/EEA/UK Users)</h3>
                  <p className="mb-3">If you are in the European Economic Area or United Kingdom, you have the following rights:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong className="text-white">Right of Access:</strong> Request copies of your personal data</li>
                    <li><strong className="text-white">Right to Rectification:</strong> Request correction of inaccurate data</li>
                    <li><strong className="text-white">Right to Erasure:</strong> Request deletion of your personal data ("right to be forgotten")</li>
                    <li><strong className="text-white">Right to Restrict Processing:</strong> Request limitation of how we use your data</li>
                    <li><strong className="text-white">Right to Data Portability:</strong> Receive your data in a machine-readable format</li>
                    <li><strong className="text-white">Right to Object:</strong> Object to processing based on legitimate interests</li>
                    <li><strong className="text-white">Right to Withdraw Consent:</strong> Withdraw consent at any time (where processing is based on consent)</li>
                    <li><strong className="text-white">Right to Lodge a Complaint:</strong> File a complaint with your local data protection authority</li>
                  </ul>
                  <p className="mt-3 text-sm">
                    <strong>Legal Basis for Processing:</strong> We process your data based on consent, contractual necessity, 
                    legitimate interests, and compliance with legal obligations.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">8.2 Rights Under CCPA (California Users)</h3>
                  <p className="mb-3">If you are a California resident, you have the following rights:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong className="text-white">Right to Know:</strong> Request disclosure of personal information collected</li>
                    <li><strong className="text-white">Right to Delete:</strong> Request deletion of personal information</li>
                    <li><strong className="text-white">Right to Opt-Out:</strong> Opt-out of sale of personal information (Note: We do NOT sell your data)</li>
                    <li><strong className="text-white">Right to Non-Discrimination:</strong> Not be discriminated against for exercising your rights</li>
                    <li><strong className="text-white">Right to Correct:</strong> Request correction of inaccurate personal information</li>
                    <li><strong className="text-white">Right to Limit Use:</strong> Limit use and disclosure of sensitive personal information</li>
                  </ul>
                  <p className="mt-3 text-sm glass-strong rounded-lg p-4 border border-success/30">
                    <strong className="text-success">California Privacy Notice:</strong> We do NOT sell or share your personal information 
                    for cross-context behavioral advertising. We have not sold personal information in the past 12 months.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">8.3 How to Exercise Your Rights</h3>
                  <p className="mb-3">To exercise any of these rights, contact us at:</p>
                  <div className="glass-effect rounded-lg p-4 border border-primary/30">
                    <p>Email: <a href="mailto:info@defishard.com" className="text-primary hover:underline">info@defishard.com</a></p>
                    <p className="mt-2">Subject Line: "Data Rights Request - [Your Right]"</p>
                  </div>
                  <p className="mt-3 text-sm">
                    We will respond to your request within 30 days (or as required by applicable law). 
                    We may need to verify your identity before processing your request.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Children's Privacy</h2>
              <p>
                Our service is not intended for users under the age of 18. We do not knowingly collect personal 
                information from children under 18.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
                the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Contact Information and Data Protection Officer</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">11.1 General Inquiries</h3>
                  <p>
                    If you have any questions about this Privacy Policy, please contact us at:
                  </p>
                  <div className="glass-effect rounded-lg p-4 border border-primary/30 mt-3">
                    <p>Email: <a href="mailto:info@defishard.com" className="text-primary hover:underline">info@defishard.com</a></p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">11.2 EU/EEA/UK Users - Data Protection Officer</h3>
                  <p className="mb-3">
                    For GDPR-related inquiries, you can contact our Data Protection Officer:
                  </p>
                  <div className="glass-effect rounded-lg p-4 border border-primary/30">
                    <p>Email: <a href="mailto:info@defishard.com" className="text-primary hover:underline">info@defishard.com</a></p>
                    <p className="mt-2 text-sm text-gray-400">Response time: Within 30 days of receipt</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">11.3 Supervisory Authorities</h3>
                  <p className="mb-3">
                    If you are in the EU/EEA/UK and believe we have not addressed your concerns adequately, you have the right 
                    to lodge a complaint with your local data protection authority:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li><strong className="text-white">EU:</strong> Your national data protection authority - <a href="https://edpb.europa.eu/about-edpb/board/members_en" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Find your authority</a></li>
                    <li><strong className="text-white">UK:</strong> Information Commissioner's Office (ICO) - <a href="https://ico.org.uk" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">ico.org.uk</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">11.4 California Users</h3>
                  <p>
                    California residents can also contact us toll-free at: <span className="text-white font-semibold">[Your Toll-Free Number]</span>
                  </p>
                  <p className="mt-2 text-sm text-gray-400">
                    Or submit requests through our online form: <a href="/data-request" className="text-primary hover:underline">/data-request</a>
                  </p>
                </div>
              </div>
            </section>

            <section className="border-t border-white/10 pt-8">
              <p className="text-sm text-gray-500">
                <strong>Disclaimer:</strong> This is a beta version of our service. While we implement strong security measures, 
                use of cryptocurrency wallets always carries inherent risks. Please only use funds you can afford to lose 
                during the beta testing period.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

