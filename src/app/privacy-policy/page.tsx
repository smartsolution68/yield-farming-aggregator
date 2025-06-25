"use client";

import React from "react";
import ScrollableContainer from "../../components/ScrollableContainer";

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="h-full flex flex-col">
      <ScrollableContainer className="flex-1 p-8 md:p-16">
        <div className="max-w-2xl mx-auto">
          <section className="bg-white/5 border border-white/10 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-cyan-400 mb-3">
              Privacy Policy Overview
            </h2>
            <div className="text-white leading-relaxed">
              <p>
                We don&lsquo;t want your personal info. No names, emails, phone numbers, or KYC nonsense. We don&lsquo;t link your wallet to your identity either.
                We check your IP for 0.2 seconds to geo-block US users (sorry, regulations), then immediately delete it. That&lsquo;s it. No tracking, no data harvesting, no BS.
              </p>
            </div>
          </section>

          <div className="prose prose-invert max-w-none">
            <div className="space-y-8">
              <section className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-cyan-400 mb-3">
                  1. No Collection of Personally Identifiable Information (PII)
                </h2>
                <div className="text-white leading-relaxed space-y-4">
                  <p>
                    We are a non-custodial, decentralized platform and do not
                    request, store, or process any PII, including but not
                    limited to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Names, email addresses, phone numbers</li>
                    <li>
                      Wallet ownership data (other than what is publicly visible
                      on the blockchain)
                    </li>
                    <li>Government-issued identification or KYC data</li>
                  </ul>
                  <p>
                    We do not offer account registration or login systems and do
                    not associate wallet addresses with user identities.
                  </p>
                </div>
              </section>

              <section className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-cyan-400 mb-3">
                  2. IP Address Handling and Geo-Blocking
                </h2>
                <div className="text-white leading-relaxed space-y-4">
                  <p>
                    To comply with jurisdictional restrictions, HyperPool
                    implements IP-based geo-blocking to prevent access from
                    prohibited regions (e.g., the United States). However:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      IP addresses are checked in real-time for geofencing
                      purposes only
                    </li>
                    <li>
                      We do not log, retain, or associate IP addresses with any
                      wallet or user behavior
                    </li>
                    <li>No IP metadata is shared with third parties</li>
                  </ul>
                  <p>
                    This temporary and non-identifiable data is processed solely
                    for compliance enforcement and is discarded immediately
                    after the access check.
                  </p>
                </div>
              </section>

              <section className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-cyan-400 mb-3">
                  3. Cookies and Local Storage
                </h2>
                <div className="text-white leading-relaxed space-y-4">
                  <p>
                    HyperPool uses only essential cookies and local storage as
                    needed to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Maintain UI session state (e.g., dark/light mode, modal
                      dismissals)
                    </li>
                    <li>
                      Protect the site from replay attacks or DDoS threats
                    </li>
                    <li>
                      Optimize gas estimation or transaction handling during a
                      session
                    </li>
                  </ul>
                  <p>
                    We do not use tracking cookies, fingerprinting tools, or
                    persistent identifiers. All cookie usage complies with
                    minimal privacy best practices.
                  </p>
                </div>
              </section>

              <section className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-cyan-400 mb-3">
                  4. No Behavioral Tracking or Analytics
                </h2>
                <div className="text-white leading-relaxed space-y-4">
                  <p>HyperPool does not use any of the following:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Google Analytics, Mixpanel, Hotjar, Segment, or other
                      analytics trackers
                    </li>
                    <li>Web beacons, heatmaps, or screen recording tools</li>
                    <li>Referral tracking pixels or third-party ad systems</li>
                  </ul>
                  <p>
                    We respect your privacy by design and do not analyze or
                    store how you use the site.
                  </p>
                </div>
              </section>

              <section className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-cyan-400 mb-3">
                  5. On-Chain Data Transparency
                </h2>
                <div className="text-white leading-relaxed space-y-4">
                  <p>
                    All user interactions with the Platform occur on-chain, and
                    data such as wallet addresses, deposits, strategy
                    selections, and yields are publicly visible on the
                    blockchain. HyperPool:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Does not control or censor on-chain data</li>
                    <li>Does not link wallet addresses to user identities</li>
                    <li>
                      Cannot erase or modify historical blockchain activity
                    </li>
                  </ul>
                  <p>
                    Blockchain activity is subject to the transparency of the
                    underlying network and cannot be anonymized by HyperPool.
                  </p>
                </div>
              </section>

              <section className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-cyan-400 mb-3">
                  6. User Rights and Control
                </h2>
                <div className="text-white leading-relaxed space-y-4">
                  <p>
                    As a user of a Web3-native interface, you maintain full
                    control over your:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Wallet and private keys</li>
                    <li>Funds and tokens</li>
                    <li>Interaction history (as recorded on-chain)</li>
                  </ul>
                  <p>
                    You may disconnect your wallet or stop using the site at any
                    time. There are no accounts to delete, and no off-chain user
                    data stored that would require erasure.
                  </p>
                </div>
              </section>

              <section className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-cyan-400 mb-3">
                  7. Third-Party Services
                </h2>
                <div className="text-white leading-relaxed space-y-4">
                  <p>
                    HyperPool may interact with public APIs (e.g., price feeds,
                    gas oracles) or node providers to function. These services
                    may have their own privacy practices, but:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      HyperPool does not share wallet or session data with these
                      providers
                    </li>
                    <li>
                      All third-party interactions are stateless and
                      non-user-specific
                    </li>
                    <li>
                      We carefully select providers who align with our
                      privacy-first architecture
                    </li>
                  </ul>
                </div>
              </section>

              <section className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-cyan-400 mb-3">
                  8. Policy Updates
                </h2>
                <div className="text-white leading-relaxed space-y-4">
                  <p>
                    We may update this Privacy Policy to reflect changes in
                    functionality or legal requirements. Updates will be posted
                    on this page with a revised effective date. Continued use of
                    the Platform constitutes your acceptance of the revised
                    policy.
                  </p>
                </div>
              </section>

              <section className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-cyan-400 mb-3">
                  9. Contact
                </h2>
                <div className="text-white leading-relaxed">
                  <p>
                    If you have questions about this Privacy Policy or data
                    handling practices, please contact us at:
                  </p>
                  <p className="mt-2">Email: <a href="mailto:Yo@hyperpool.io" className="text-cyan-400 hover:text-cyan-300">Yo@hyperpool.io</a></p>
                </div>
              </section>
              <div className="mt-8">
                <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
                  <p className="text-white leading-relaxed">
                    © 2025 Hyperpool LLC. 1309 Coffeen Avenue, STE 1200, Sheridan, Wyoming 82801. 
                  </p>
                  <p>
                    Built for degens, by degens.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </ScrollableContainer>
    </div>
  );
};

export default PrivacyPolicyPage;
