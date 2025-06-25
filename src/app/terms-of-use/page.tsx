"use client";

import React from "react";
import ScrollableContainer from "../../components/ScrollableContainer";

const TermsOfUsePage: React.FC = () => {
  return (
    <div className="h-full flex flex-col">
      <ScrollableContainer className="flex-1 p-8 md:p-16">
        <div className="max-w-2xl mx-auto">
          <section className="bg-white/5 border border-white/10 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-cyan-400 mb-3">
              Terms of Use Overview
            </h2>
            <div className="text-white leading-relaxed">
              <p>
                If you&lsquo;re 18+, not American, and not doing anything illegal, you&lsquo;re good. This is non-custodial - we can&lsquo;t rug you because your funds stay in your wallet until you deposit.
                You&lsquo;re dealing directly with smart contracts. We find yields, you decide if you want to ape in. No guarantees, no hand-holding. Don&lsquo;t use this if you can&lsquo;t handle DeFi risks.
              </p>
            </div>
          </section>

          <div className="prose prose-invert max-w-none">
            <div className="space-y-8">
              <section className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-cyan-400 mb-3">
                  1. Eligibility and User Restrictions
                </h2>
                <div className="text-white leading-relaxed space-y-4">
                  <p>You represent and warrant that:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      You are not a &ldquo;U.S. Person&rdquo; as defined under
                      Regulation S of the United States Securities Act of 1933.
                      HyperPool does not permit access or use by U.S. Persons.
                    </li>
                    <li>
                      You are not accessing the Platform from any jurisdiction
                      that is subject to U.S. sanctions or embargoes (e.g.,
                      OFAC-sanctioned regions).
                    </li>
                    <li>
                      You are at least 18 years old and have the legal capacity
                      to enter into these Terms.
                    </li>
                    <li>
                      You are not using the Platform for any unlawful or
                      prohibited purpose.
                    </li>
                  </ul>
                  <div className="mt-4 p-4 bg-blue-900/30 border border-blue-600 rounded-lg">
                    <p className="text-blue-300 font-medium">
                      HyperPool employs geo-blocking and frontend restrictions
                      to deter U.S. Persons from accessing the Platform.
                      However, it is your responsibility to ensure compliance
                      with your local laws and regulations.
                    </p>
                  </div>
                </div>
              </section>

              <section className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-cyan-400 mb-3">
                  2. Platform Functionality and No Custody
                </h2>
                <div className="text-white leading-relaxed space-y-4">
                  <p>
                    HyperPool operates as a non-custodial, smart contract-based
                    staking and yield aggregation service. When you interact
                    with the Platform, you are engaging directly with
                    open-source Ethereum-compatible smart contracts. HyperPool
                    does not control, manage, or hold your assets at any point.
                  </p>
                  <p>HyperPool does not:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Hold user funds in centralized accounts</li>
                    <li>Access or withdraw tokens on your behalf</li>
                    <li>Provide investment, tax, legal, or financial advice</li>
                    <li>Guarantee any specific yield or return</li>
                  </ul>
                  <p className="font-medium">
                    You are solely responsible for safeguarding your wallet
                    credentials and for all transactions initiated from your
                    address.
                  </p>
                </div>
              </section>

              <section className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-cyan-400 mb-3">
                  3. Assumption of Risk
                </h2>
                <div className="text-white leading-relaxed space-y-4">
                  <p className="font-semibold text-white">
                    By using HyperPool, you acknowledge and accept that:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Interacting with DeFi protocols involves smart contract
                      risk, protocol risk, impermanent loss, volatility, and
                      potential loss of funds.
                    </li>
                    <li>
                      Third-party protocols integrated into the Platform may be
                      unaudited or subject to critical vulnerabilities.
                    </li>
                    <li>
                      Performance data (e.g., APY) is estimated, not guaranteed,
                      and may change without notice.
                    </li>
                    <li>
                      Token prices and liquidity conditions in DeFi are highly
                      volatile and may result in slippage, loss, or complete
                      capital impairment.
                    </li>
                    <li>
                      You use HyperPool at your own risk and understand that
                      DeFi is experimental and may result in total loss of your
                      digital assets.
                    </li>
                  </ul>
                </div>
              </section>

              <section className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-cyan-400 mb-3">
                  4. Restrictions on Use
                </h2>
                <div className="text-white leading-relaxed space-y-4">
                  <p>You agree not to use the Platform to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Violate any applicable law, regulation, or contractual
                      obligation
                    </li>
                    <li>
                      Engage in fraud, market manipulation, or deceptive
                      practices
                    </li>
                    <li>
                      Transact on behalf of any prohibited or sanctioned person
                      or entity
                    </li>
                    <li>
                      Attempt to interfere with the smart contracts, UI, or any
                      component of the Platform
                    </li>
                  </ul>
                  <p className="font-medium">
                    HyperPool reserves the right to restrict access to users
                    suspected of violating these Terms or applicable law.
                  </p>
                </div>
              </section>

              <section className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-cyan-400 mb-3">
                  5. Dispute Resolution and Arbitration
                </h2>
                <div className="text-white leading-relaxed space-y-4">
                  <p>
                    All disputes, claims, or controversies arising out of or
                    relating to these Terms or the use of the Platform shall be
                    resolved exclusively through binding arbitration under the
                    rules of the American Arbitration Association (AAA).
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Arbitration may be conducted remotely via video or
                      teleconference
                    </li>
                    <li>
                      You waive your right to a jury trial and agree not to
                      participate in any class action lawsuit against HyperPool
                      or its contributors
                    </li>
                  </ul>
                </div>
              </section>

              <section className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-cyan-400 mb-3">
                  6. Limitation of Liability
                </h2>
                <div className="text-white leading-relaxed space-y-4">
                  <p>
                    To the fullest extent permitted by applicable law, in no
                    event shall HyperPool, its developers, contributors,
                    affiliates, or representatives be liable for:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Any indirect, incidental, special, punitive, or
                      consequential damages
                    </li>
                    <li>
                      Any loss of funds, data, profits, or reputation arising
                      out of your use or inability to use the Platform
                    </li>
                    <li>
                      The performance or failure of any third-party protocol or
                      blockchain network
                    </li>
                  </ul>
                  <p className="font-medium">
                    All services are provided &ldquo;as is&rdquo; and &ldquo;as
                    available&rdquo; without warranties of any kind.
                  </p>
                </div>
              </section>

              <section className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-cyan-400 mb-3">
                  7. Indemnification
                </h2>
                <div className="text-white leading-relaxed space-y-4">
                  <p>
                    You agree to indemnify, defend, and hold harmless HyperPool,
                    its affiliates, developers, contributors, and service
                    providers from any claims, losses, damages, liabilities, or
                    costs (including legal fees) arising out of:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Your violation of these Terms</li>
                    <li>Your use of the Platform</li>
                    <li>
                      Any transaction or interaction you perform through
                      HyperPool
                    </li>
                  </ul>
                </div>
              </section>

              <section className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-cyan-400 mb-3">
                  8. Changes and Updates
                </h2>
                <div className="text-white leading-relaxed space-y-4">
                  <p>
                    HyperPool reserves the right to modify these Terms at any
                    time. Any changes will be effective immediately upon
                    posting. Your continued use of the Platform constitutes
                    acceptance of the updated Terms.
                  </p>
                </div>
              </section>

              <section className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-cyan-400 mb-3">
                  9. Contact and Legal Entity
                </h2>
                <div className="text-white leading-relaxed">
                  <p className="mt-2">Email: <a href="mailto:Yo@hyperpool.io" className="text-cyan-400 hover:text-cyan-300">Yo@hyperpool.io</a></p>
                  <p>Corporate address: Hyperpool LLC 1309 Coffeen Avenue, STE 1200 Sheridan, Wyoming 82801</p>
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

export default TermsOfUsePage;
