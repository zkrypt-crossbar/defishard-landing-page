export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <div className="container-custom py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8">Terms of Service</h1>
          <p className="text-gray-400 mb-8">Last Updated: November 15, 2025</p>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using DefiShard's browser extension and mobile application (the "Service"), you agree 
                to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
              <p>
                DefiShard provides a cryptocurrency wallet solution using Multi-Party Computation (MPC) technology 
                to secure your digital assets. The Service includes:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li>Browser extension for connecting to DeFi applications</li>
                <li>Mobile application for transaction approval</li>
                <li>Distributed key generation and threshold signature capabilities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Beta Testing Disclaimer</h2>
              <div className="glass-strong rounded-xl p-6 border border-yellow-500/30">
                <p className="font-semibold text-yellow-400 mb-3">IMPORTANT: Beta Software Warning</p>
                <p className="mb-3">
                  DefiShard is currently in BETA testing. This means:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>The software may contain bugs, errors, or security vulnerabilities</li>
                  <li>Features may change or be discontinued without notice</li>
                  <li>There is a risk of loss of funds</li>
                  <li>The Service may be temporarily unavailable</li>
                </ul>
                <p className="mt-3 font-semibold text-white">
                  YOU ACKNOWLEDGE THAT YOU USE THIS BETA SOFTWARE AT YOUR OWN RISK. ONLY USE FUNDS YOU CAN AFFORD TO LOSE.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3A. Cryptocurrency-Specific Risks</h2>
              <div className="space-y-4">
                <p className="font-semibold text-white">
                  Cryptocurrency transactions carry inherent risks. By using DefiShard, you acknowledge and accept the following risks:
                </p>
                
                <div className="glass-effect rounded-lg p-4 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-2">Volatility Risk</h3>
                  <p className="text-sm">
                    Cryptocurrency prices are highly volatile. The value of your assets may increase or decrease rapidly and substantially.
                  </p>
                </div>

                <div className="glass-effect rounded-lg p-4 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-2">Irreversibility Risk</h3>
                  <p className="text-sm">
                    Blockchain transactions are irreversible. Once confirmed, transactions cannot be undone, cancelled, or charged back. 
                    Sending funds to an incorrect address may result in permanent loss.
                  </p>
                </div>

                <div className="glass-effect rounded-lg p-4 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-2">Smart Contract Risk</h3>
                  <p className="text-sm">
                    DeFi protocols use smart contracts that may contain bugs, vulnerabilities, or be subject to exploits. 
                    We are not responsible for losses resulting from third-party smart contract failures.
                  </p>
                </div>

                <div className="glass-effect rounded-lg p-4 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-2">Regulatory Risk</h3>
                  <p className="text-sm">
                    Cryptocurrency regulations are evolving. Future regulatory changes may affect the legality, use, transfer, 
                    or value of cryptocurrencies in your jurisdiction.
                  </p>
                </div>

                <div className="glass-effect rounded-lg p-4 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-2">Network Risk</h3>
                  <p className="text-sm">
                    Blockchain networks may experience congestion, forks, or failures. Network issues may delay transactions or 
                    result in higher fees.
                  </p>
                </div>

                <div className="glass-effect rounded-lg p-4 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-2">Phishing and Social Engineering Risk</h3>
                  <p className="text-sm">
                    Malicious actors may attempt to impersonate DefiShard or trick you into revealing sensitive information. 
                    Always verify URLs and never share your key shares or recovery information.
                  </p>
                </div>

                <div className="glass-effect rounded-lg p-4 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-2">Device Compromise Risk</h3>
                  <p className="text-sm">
                    If both your mobile device and computer are compromised simultaneously, your key shares may be at risk. 
                    Maintain strong device security practices.
                  </p>
                </div>

                <p className="mt-4 text-sm text-gray-400">
                  <strong className="text-white">Mitigation:</strong> While DefiShard's MPC architecture significantly reduces the risk 
                  of single-device compromise, it cannot eliminate all cryptocurrency-related risks. Always exercise caution, 
                  verify transactions carefully, and never invest more than you can afford to lose.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. User Responsibilities</h2>
              <p className="mb-3">You are responsible for:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Maintaining the security of your devices (mobile phone and computer)</li>
                <li>Keeping your recovery information secure and confidential</li>
                <li>All activities that occur under your wallet</li>
                <li>Ensuring you comply with all applicable laws and regulations</li>
                <li>Verifying transaction details before approving</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Key Management and Security</h2>
              <p className="mb-3">
                DefiShard uses Distributed Key Generation (DKG) and Threshold Signature Schemes (TSS):
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Your private key <strong className="text-white">never exists</strong> on any device</li>
                <li>You maintain control of your key shares on your devices</li>
                <li>We cannot access, recover, or restore your key shares</li>
                <li>Loss of access to both your mobile and browser extension may result in permanent loss of funds</li>
              </ul>
              <p className="mt-4 font-semibold text-white">
                WE ARE NOT CUSTODIANS. We do not have access to your funds or the ability to reverse transactions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Prohibited Activities and Compliance</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">6.1 General Prohibitions</h3>
                  <p className="mb-3">You may not use the Service to:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Engage in illegal activities or violate any laws</li>
                    <li>Infringe on intellectual property rights</li>
                    <li>Transmit malware or harmful code</li>
                    <li>Attempt to hack, reverse engineer, or compromise the Service</li>
                    <li>Impersonate others or provide false information</li>
                    <li>Engage in market manipulation or fraud</li>
                    <li>Violate sanctions or export control laws</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">6.2 Sanctions and Restricted Territories</h3>
                  <div className="glass-strong rounded-xl p-6 border border-danger/30">
                    <p className="font-semibold text-white mb-3">OFAC and Sanctions Compliance</p>
                    <p className="mb-3">
                      You represent and warrant that you are not:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Located in, resident of, or organized under the laws of any country subject to comprehensive sanctions 
                        (including but not limited to Cuba, Iran, North Korea, Syria, and certain regions of Ukraine)</li>
                      <li>Listed on any U.S., EU, UK, or UN sanctions list (including OFAC SDN list)</li>
                      <li>Owned or controlled by any person or entity on a sanctions list</li>
                      <li>Acting on behalf of any sanctioned person or entity</li>
                    </ul>
                    <p className="mt-3 text-sm">
                      We reserve the right to block access from restricted territories. Using VPNs or other tools to circumvent 
                      geographical restrictions is prohibited and may result in immediate termination.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">6.3 Anti-Money Laundering (AML) Compliance</h3>
                  <p className="mb-3">
                    While DefiShard is a non-custodial wallet and does not conduct KYC, you agree:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Not to use the Service for money laundering, terrorist financing, or other illicit activities</li>
                    <li>To comply with all applicable AML/CTF laws in your jurisdiction</li>
                    <li>That we may report suspicious activity to relevant authorities as required by law</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">6.4 Tax Compliance</h3>
                  <p>
                    You are solely responsible for determining what, if any, taxes apply to your cryptocurrency transactions and 
                    for reporting and remitting taxes to the appropriate authorities. We do not provide tax advice.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">6.5 Securities Laws</h3>
                  <p>
                    You acknowledge that certain digital assets may be securities in your jurisdiction. You are responsible for 
                    ensuring your transactions comply with applicable securities laws.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Intellectual Property</h2>
              <p>
                The Service, including all code, design, graphics, and content, is owned by DefiShard and protected 
                by intellectual property laws. You may not copy, modify, distribute, or create derivative works without 
                our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Disclaimers</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">8.1 No Warranties</h3>
                  <p>
                    THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. 
                    WE DISCLAIM ALL WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, 
                    AND NON-INFRINGEMENT.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">8.2 No Financial Advice</h3>
                  <p>
                    DefiShard does not provide investment, financial, legal, or tax advice. All decisions regarding 
                    cryptocurrency transactions are your sole responsibility.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">8.3 Third-Party DApps</h3>
                  <p>
                    We are not responsible for third-party decentralized applications (DApps) you interact with 
                    through our Service. You use such DApps at your own risk.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Limitation of Liability</h2>
              <div className="glass-strong rounded-xl p-6 border border-danger/30">
                <p className="font-semibold text-white mb-3">LIMITATION OF LIABILITY</p>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, DEFISHARD SHALL NOT BE LIABLE FOR ANY INDIRECT, 
                  INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, 
                  DATA, OR CRYPTOCURRENCY, WHETHER IN CONTRACT, TORT, OR OTHERWISE, ARISING FROM YOUR USE OF 
                  THE SERVICE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                </p>
                <p className="mt-3">
                  IN NO EVENT SHALL OUR TOTAL LIABILITY EXCEED $100 USD.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless DefiShard and its officers, directors, employees, 
                and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising 
                from your use of the Service or violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Termination</h2>
              <p>
                We reserve the right to terminate or suspend your access to the Service at any time, with or without 
                notice, for any reason, including violation of these Terms. Upon termination, you remain responsible 
                for securing your key shares and funds.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Changes to Terms</h2>
              <p>
                We may modify these Terms at any time. Continued use of the Service after changes constitutes 
                acceptance of the modified Terms. Material changes will be communicated through the Service or via email.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">13. Governing Law and Jurisdiction</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">13.1 General Governing Law</h3>
                  <p>
                    These Terms are governed by and construed in accordance with the laws of [Your Jurisdiction - e.g., Delaware, United States], 
                    without regard to conflict of law principles.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">13.2 Regional Variations</h3>
                  <p className="mb-3">
                    Notwithstanding the above, certain provisions may vary based on your location to comply with local laws:
                  </p>
                  
                  <div className="space-y-3">
                    <div className="glass-effect rounded-lg p-4 border border-white/10">
                      <p className="font-semibold text-white mb-2">European Union / EEA / UK Users</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>You have additional consumer rights under EU Consumer Protection Directives</li>
                        <li>GDPR data protection rights apply (see Privacy Policy)</li>
                        <li>Unfair contract terms may be unenforceable under EU law</li>
                        <li>You may bring legal proceedings in your country of residence</li>
                      </ul>
                    </div>

                    <div className="glass-effect rounded-lg p-4 border border-white/10">
                      <p className="font-semibold text-white mb-2">California Users</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>CCPA privacy rights apply (see Privacy Policy)</li>
                        <li>You have the right to opt-out of arbitration</li>
                        <li>California Civil Code Section 1542 waiver may apply</li>
                      </ul>
                    </div>

                    <div className="glass-effect rounded-lg p-4 border border-white/10">
                      <p className="font-semibold text-white mb-2">Canadian Users</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>PIPEDA privacy rights apply (see Privacy Policy)</li>
                        <li>Quebec users: Additional consumer protection under Quebec law</li>
                      </ul>
                    </div>

                    <div className="glass-effect rounded-lg p-4 border border-white/10">
                      <p className="font-semibold text-white mb-2">Australian Users</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Australian Consumer Law (ACL) guarantees apply</li>
                        <li>Certain warranties cannot be excluded</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">13.3 Regulatory Compliance</h3>
                  <p className="mb-3">
                    DefiShard is a non-custodial wallet solution. We do not:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Hold, custody, or control your funds</li>
                    <li>Act as a financial institution, money transmitter, or payment service provider</li>
                    <li>Facilitate exchanges or conversions between fiat and cryptocurrency</li>
                    <li>Provide investment advice or financial services</li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-400">
                    <strong>Note:</strong> You are responsible for compliance with all applicable laws in your jurisdiction, 
                    including tax reporting, AML/KYC requirements, and securities regulations.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">14. Dispute Resolution and Arbitration</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">14.1 Informal Dispute Resolution</h3>
                  <p>
                    Before filing a claim, you agree to contact us at <a href="mailto:info@defishard.com" className="text-primary hover:underline">info@defishard.com</a> and 
                    attempt to resolve the dispute informally. We will have 60 days to attempt resolution.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">14.2 Binding Arbitration (US Users Only)</h3>
                  <div className="glass-strong rounded-xl p-6 border border-yellow-500/30">
                    <p className="font-semibold text-yellow-400 mb-3">ARBITRATION AGREEMENT - PLEASE READ CAREFULLY</p>
                    <p className="mb-3">
                      If you are located in the United States, you agree that disputes will be resolved by binding arbitration 
                      in accordance with the Federal Arbitration Act and the rules of the American Arbitration Association (AAA).
                    </p>
                    <ul className="list-disc list-inside space-y-2 mb-4">
                      <li>Arbitration will be conducted on an individual basis (no class actions)</li>
                      <li>The arbitrator's decision is final and binding</li>
                      <li>You waive your right to a jury trial</li>
                      <li>Limited discovery and appeal rights</li>
                    </ul>
                    <p className="font-semibold text-white mb-2">Opt-Out Right:</p>
                    <p className="text-sm">
                      You may opt-out of arbitration within 30 days of first accepting these Terms by sending written notice to 
                      <a href="mailto:info@defishard.com" className="text-primary hover:underline ml-1">info@defishard.com</a> with 
                      subject "Arbitration Opt-Out" and including your name and wallet address.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">14.3 Class Action Waiver</h3>
                  <p>
                    You agree to resolve disputes with us on an individual basis only. You waive any right to participate in 
                    class action lawsuits or class-wide arbitration.
                  </p>
                  <p className="mt-3 text-sm text-gray-400">
                    <strong>Exception:</strong> This class action waiver does not apply where prohibited by law (e.g., certain EU jurisdictions, 
                    California Labor Code claims).
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">14.4 Small Claims Court</h3>
                  <p>
                    Either party may bring an individual action in small claims court instead of arbitration if the claim is 
                    within the court's jurisdiction.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">14.5 Non-US Users</h3>
                  <p className="mb-3">
                    If you are outside the United States:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong className="text-white">EU/EEA/UK:</strong> You may bring proceedings in your country of residence. Consumer protection laws apply.</li>
                    <li><strong className="text-white">Other Jurisdictions:</strong> Disputes will be resolved in the courts of [Your Jurisdiction], subject to local mandatory consumer laws.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">14.6 Injunctive Relief</h3>
                  <p>
                    Either party may seek injunctive or equitable relief in court to prevent actual or threatened infringement, 
                    misappropriation, or violation of intellectual property rights.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">15. Severability</h2>
              <p>
                If any provision of these Terms is found to be unenforceable, the remaining provisions shall remain 
                in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">16. Contact Information</h2>
              <p>
                For questions about these Terms, contact us at:
              </p>
              <p className="mt-3">
                Email: <a href="mailto:info@defishard.com" className="text-primary hover:underline">info@defishard.com</a>
              </p>
            </section>

            <section className="border-t border-white/10 pt-8">
              <p className="text-sm text-gray-500">
                By using DefiShard, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

