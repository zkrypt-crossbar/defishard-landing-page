export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <div className="container-custom py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8">Cookie Policy</h1>
          <p className="text-gray-400 mb-8">Last Updated: November 15, 2025</p>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p>
                This Cookie Policy explains how DefiShard ("we", "our", or "us") uses cookies and similar technologies 
                on our website and in our browser extension. By using our Service, you consent to the use of cookies 
                as described in this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. What Are Cookies and Similar Technologies?</h2>
              <p className="mb-3">
                Cookies are small text files stored on your device when you visit a website or use an application. 
                We also use similar technologies including:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong className="text-white">Local Storage:</strong> Browser storage for larger amounts of data</li>
                <li><strong className="text-white">Session Storage:</strong> Temporary storage that clears when you close the browser</li>
                <li><strong className="text-white">IndexedDB:</strong> Database storage for structured data</li>
                <li><strong className="text-white">Web Beacons/Pixels:</strong> Tiny images used to track page visits (we do NOT use these for advertising)</li>
              </ul>
              <p className="mt-3">
                These technologies help us provide functionality, improve performance, and understand how users interact with our Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2A. Compliance with Cookie Laws</h2>
              <div className="space-y-4">
                <p>
                  This Cookie Policy complies with applicable cookie and tracking regulations, including:
                </p>
                
                <div className="glass-effect rounded-lg p-4 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-2">EU ePrivacy Directive (Cookie Law)</h3>
                  <p className="text-sm mb-2">
                    For EU/EEA users, we obtain consent before using non-essential cookies, as required by the ePrivacy Directive and GDPR Article 5(3).
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Essential cookies: No consent required</li>
                    <li>Non-essential cookies: Consent required before placement</li>
                    <li>Right to withdraw consent at any time</li>
                  </ul>
                </div>

                <div className="glass-effect rounded-lg p-4 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-2">UK PECR (Privacy and Electronic Communications Regulations)</h3>
                  <p className="text-sm">
                    UK users have the same rights as EU users under PECR. We follow ICO guidance on cookie compliance.
                  </p>
                </div>

                <div className="glass-effect rounded-lg p-4 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-2">CCPA (California)</h3>
                  <p className="text-sm mb-2">
                    California residents: Cookies may be considered "personal information" under CCPA. We do NOT sell data collected via cookies.
                  </p>
                  <p className="text-sm text-success">
                    ✓ Do Not Sell My Personal Information: We honor this right by default—we never sell your data.
                  </p>
                </div>

                <div className="glass-effect rounded-lg p-4 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-2">Other Jurisdictions</h3>
                  <p className="text-sm">
                    We comply with local cookie and privacy laws in all jurisdictions where we operate, including Canada (PIPEDA), 
                    Australia (Privacy Act), and Brazil (LGPD).
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Types of Cookies We Use</h2>
              
              <div className="space-y-6">
                <div className="glass-effect rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-3">3.1 Essential Cookies</h3>
                  <p className="mb-2">
                    <strong className="text-white">Purpose:</strong> Required for the Service to function properly
                  </p>
                  <p className="mb-2">
                    <strong className="text-white">Examples:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Authentication and session management</li>
                    <li>Security features and fraud prevention</li>
                    <li>Remembering your wallet connection preferences</li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-400">
                    These cookies cannot be disabled as they are essential for the Service to work.
                  </p>
                </div>

                <div className="glass-effect rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-3">3.2 Functional Cookies</h3>
                  <p className="mb-2">
                    <strong className="text-white">Purpose:</strong> Enhance functionality and user experience
                  </p>
                  <p className="mb-2">
                    <strong className="text-white">Examples:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Language and region preferences</li>
                    <li>Theme settings (dark/light mode)</li>
                    <li>Recently viewed transactions</li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-400">
                    You can control these cookies through your browser settings.
                  </p>
                </div>

                <div className="glass-effect rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-3">3.3 Analytics Cookies</h3>
                  <p className="mb-2">
                    <strong className="text-white">Purpose:</strong> Help us understand how users interact with our Service
                  </p>
                  <p className="mb-2">
                    <strong className="text-white">Information Collected:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Pages visited and features used (anonymized)</li>
                    <li>Time spent on the Service</li>
                    <li>Error messages and performance metrics</li>
                    <li>Device type and browser information</li>
                  </ul>
                  <p className="mt-3 text-sm text-green-400">
                    ✓ All analytics data is anonymized and does not contain personal information or wallet data.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. What We Do NOT Track</h2>
              <div className="glass-strong rounded-xl p-6 border border-success/30">
                <p className="font-semibold text-white mb-3">Your Privacy is Protected</p>
                <p className="mb-3">DefiShard does NOT use cookies to track:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Your private keys or key shares</li>
                  <li>Your wallet addresses or transaction details (beyond what's necessary for the Service)</li>
                  <li>Your browsing activity outside of DefiShard</li>
                  <li>Personal identification information for advertising purposes</li>
                </ul>
                <p className="mt-3 font-semibold text-success">
                  We do NOT sell or share your data with third-party advertisers.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Local Storage</h2>
              <p>
                In addition to cookies, our browser extension uses browser local storage to securely store:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li>Your encrypted key share (never leaves your device)</li>
                <li>Wallet configuration and preferences</li>
                <li>Transaction history cache</li>
              </ul>
              <p className="mt-3 font-semibold text-white">
                This data is encrypted and stored locally on your device. It is never transmitted to our servers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Third-Party Cookies</h2>
              <p>
                We may use third-party services that set their own cookies:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li><strong className="text-white">Analytics providers:</strong> For anonymized usage statistics</li>
                <li><strong className="text-white">RPC providers:</strong> For blockchain network connections</li>
                <li><strong className="text-white">CDN services:</strong> For faster content delivery</li>
              </ul>
              <p className="mt-3">
                These third parties have their own privacy policies. We choose partners with strong privacy commitments.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Managing Cookies</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">7.1 Browser Settings</h3>
                  <p>
                    Most browsers allow you to control cookies through their settings. You can:
                  </p>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Block all cookies</li>
                    <li>Accept only first-party cookies</li>
                    <li>Delete cookies after each session</li>
                    <li>View and delete individual cookies</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">7.2 Browser-Specific Instructions</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong className="text-white">Chrome:</strong> Settings → Privacy and Security → Cookies</li>
                    <li><strong className="text-white">Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                    <li><strong className="text-white">Safari:</strong> Preferences → Privacy → Cookies and Website Data</li>
                    <li><strong className="text-white">Edge:</strong> Settings → Privacy → Cookies and Site Permissions</li>
                    <li><strong className="text-white">Brave:</strong> Settings → Shields → Cookies</li>
                  </ul>
                </div>
              </div>

              <p className="mt-4 text-yellow-400">
                ⚠️ Note: Blocking essential cookies may prevent the Service from functioning properly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Mobile Application</h2>
              <p>
                Our mobile application does not use traditional browser cookies but may use similar technologies:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li>Device identifiers for authentication</li>
                <li>Local encrypted storage for your key share</li>
                <li>Session tokens for secure communication</li>
              </ul>
              <p className="mt-3">
                You can manage these permissions through your device's settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Cookie Retention</h2>
              <p>
                Different types of cookies have different lifespans:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                <li><strong className="text-white">Session cookies:</strong> Deleted when you close your browser</li>
                <li><strong className="text-white">Persistent cookies:</strong> Remain until expiration date or manual deletion</li>
                <li><strong className="text-white">Essential cookies:</strong> May last up to 1 year</li>
                <li><strong className="text-white">Analytics cookies:</strong> Typically expire after 13 months</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time. We will notify you of material changes by 
                posting a notice on our website or through the Service. Continued use after changes constitutes 
                acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Your Consent</h2>
              <p>
                By using DefiShard, you consent to our use of cookies as described in this policy. If you do not 
                agree with our use of cookies, you should disable them through your browser settings or discontinue 
                use of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Contact Us</h2>
              <p>
                If you have questions about our use of cookies, please contact us at:
              </p>
              <p className="mt-3">
                Email: <a href="mailto:info@defishard.com" className="text-primary hover:underline">info@defishard.com</a>
              </p>
            </section>

            <section className="border-t border-white/10 pt-8">
              <div className="glass-effect rounded-xl p-6 border border-primary/30">
                <p className="font-semibold text-white mb-2">Our Commitment to Privacy</p>
                <p className="text-sm">
                  At DefiShard, we believe in transparency and user control. We use cookies and similar technologies 
                  responsibly to provide and improve our Service while respecting your privacy. Your cryptographic 
                  keys and wallet data are always under your exclusive control and are never exposed through cookies 
                  or tracking technologies.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

