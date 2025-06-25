"use client";

import React from "react";
import ScrollableContainer from "../../components/ScrollableContainer";

const ProtocolRiskDisclosurePage: React.FC = () => {
  return (
    <div className="h-full flex flex-col">
      <ScrollableContainer className="flex-1 p-8 md:p-16">
        <div className="max-w-2xl mx-auto">

          <section className="bg-white/5 border border-white/10 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-cyan-400 mb-3">
              Risk Disclosure Overview
            </h2>
            <div className="text-white leading-relaxed">
              <p>
                You could lose everything. Smart contracts have bugs. Protocols get hacked. Markets crash. We farm on other people&lsquo;s protocols - if they fail, you lose.
                This is degen territory, not a savings account. Only deposit what you can afford to lose completely. We&lsquo;re yield hunters, not your financial advisor. DYOR.
              </p>
            </div>
          </section>

          <div className="prose prose-invert max-w-none">
            <div className="space-y-8">
              <section className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-cyan-400 mb-3">
                  1. Smart Contract Risks
                </h2>
                <div className="text-white leading-relaxed space-y-4">
                  <p>
                    HyperPool is built entirely on smart contracts deployed to
                    public blockchains. These contracts:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Are open-source and may contain coding errors, logic
                      flaws, or vulnerabilities.
                    </li>
                    <li>
                      Are not infallible and may be exploited or fail due to
                      bugs, unexpected behaviors, or network-level issues.
                    </li>
                    <li>
                      Once deployed, are typically immutable unless explicitly
                      upgradable through multisig or governance — and such
                      upgrades may themselves introduce new risk.
                    </li>
                  </ul>
                  <p className="font-semibold text-primary-blue">
                    Losses resulting from bugs, exploits, or other issues in
                    HyperPool&apos;s smart contracts are your sole
                    responsibility.
                  </p>
                </div>
              </section>

              <section className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-cyan-400 mb-3">
                  2. Third-Party Protocol Risks
                </h2>
                <div className="text-white leading-relaxed space-y-4">
                  <p>
                    HyperPool aggregates yield by allocating user funds to
                    third-party DeFi protocols (e.g., Curve, AAVE, Lido, Beefy,
                    Compound, etc.). These protocols:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>May be unaudited or only partially audited.</li>
                    <li>
                      Are managed independently by teams over which HyperPool
                      has no control.
                    </li>
                    <li>
                      Can experience economic attacks, oracle manipulation,
                      governance abuse, or liquidity crises.
                    </li>
                  </ul>
                  <p className="font-semibold text-primary-blue">
                    Any failure, misbehavior, or malicious update by a
                    third-party protocol can result in partial or complete loss
                    of your deposited assets. HyperPool does not guarantee the
                    safety or solvency of any protocol it interacts with.
                  </p>
                </div>
              </section>

              <section className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-cyan-400 mb-3">
                  3. Yield Volatility and Estimation Risk
                </h2>
                <div className="text-white leading-relaxed space-y-4">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Displayed APYs or estimated returns are not guaranteed and
                      are subject to change in real-time due to market
                      conditions, liquidity shifts, and protocol dynamics.
                    </li>
                    <li>
                      APYs are based on current data but do not reflect
                      slippage, performance fees, or gas costs.
                    </li>
                    <li>
                      HyperPool does not offer fixed-income products or promise
                      any minimum or maximum return.
                    </li>
                    <li>
                      Past performance is not indicative of future results. You
                      may experience periods of negative yield or no yield at
                      all.
                    </li>
                  </ul>
                </div>
              </section>

              <section className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-cyan-400 mb-3">
                  4. Gas and Network Risks
                </h2>
                <div className="text-white leading-relaxed space-y-4">
                  <p>
                    All transactions on HyperPool are conducted on public
                    blockchains (e.g., Ethereum, Arbitrum, etc.) and are:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Subject to variable gas fees, network congestion, and
                      transaction failures.
                    </li>
                    <li>Irreversible once confirmed.</li>
                    <li>
                      Dependent on the stability of the underlying blockchain
                      network and its validators.
                    </li>
                  </ul>
                  <p className="font-medium">
                    You are responsible for all gas fees and for ensuring that
                    you interact only from secure wallets and environments.
                  </p>
                </div>
              </section>

              <section className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-cyan-400 mb-3">
                  5. Performance Fees
                </h2>
                <div className="text-white leading-relaxed space-y-4">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      HyperPool charges a 10% performance fee, applied only to
                      generated yield, not to the user&apos;s principal.
                    </li>
                    <li>
                      Fees are directed to the platform&apos;s protocol
                      treasury, managed via a multisig wallet with independent
                      signers.
                    </li>
                    <li>
                      Fee collection is executed on-chain through smart
                      contracts and is non-refundable.
                    </li>
                    <li>
                      You consent to this fee structure by interacting with any
                      HyperPool strategy or vault.
                    </li>
                    <li>
                      Fees are deducted at the time of user withdrawal.
                    </li>
                  </ul>
                </div>
              </section>

              <section className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-cyan-400 mb-3">
                  6. Platform-Level Risk and Governance
                </h2>
                <div className="text-white leading-relaxed space-y-4">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      HyperPool&apos;s architecture includes bot-driven strategy
                      selection and automated fund routing. If the bot engine
                      fails or misbehaves due to bad logic or oracle errors,
                      user funds may be inefficiently allocated or exposed to
                      degraded protocols.
                    </li>
                    <li>
                      The protocol may be governed or modified in the future via
                      community or DAO involvement. Changes to governance may
                      introduce new operational or regulatory risks.
                    </li>
                    <li>
                      Multisig signers may have the authority to pause
                      contracts, migrate strategies, or initiate emergency
                      withdrawals in accordance with pre-established protocols.
                    </li>
                  </ul>
                </div>
              </section>

              <section className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-cyan-400 mb-3">
                  7. Emergency Events and Pauses
                </h2>
                <div className="text-white leading-relaxed space-y-4">
                  <p>
                    HyperPool includes built-in emergency response features,
                    including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Pausable contracts to immediately halt deposits,
                      withdrawals, and routing.
                    </li>
                    <li>
                      Admin-triggered strategy disablement in case of protocol
                      failure or exploit.
                    </li>
                    <li>
                      Emergency withdrawal mechanisms allowing users to exit
                      affected vaults during critical incidents.
                    </li>
                  </ul>
                  <p className="font-semibold text-primary-blue">
                    While these features aim to protect users, no response
                    system is instant or infallible. In fast-moving exploits,
                    funds may still be compromised before a full mitigation
                    takes place.
                  </p>
                </div>
              </section>

              <section className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-cyan-400 mb-3">
                  8. Legal and Jurisdictional Disclaimer
                </h2>
                <div className="text-white leading-relaxed space-y-4">
                  <p>
                    HyperPool is not regulated or licensed in any jurisdiction.
                    Its decentralized nature may create ambiguity under global
                    financial laws. Users are responsible for:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      Ensuring compliance with their local laws and tax
                      obligations.
                    </li>
                    <li>
                      Not accessing the Platform if they are a &ldquo;U.S.
                      Person&rdquo; or are located in a restricted jurisdiction.
                    </li>
                  </ul>
                  <p className="font-semibold">
                    You use HyperPool at your own risk and are solely
                    responsible for your actions.
                  </p>
                </div>
              </section>

              <section id="risk" className="bg-green-900/30 border border-green-600 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-green-300 mb-4">
                  ✅ User Acknowledgment (Required for Use)
                </h2>
                <div className="text-green-200 space-y-4">
                  <p className="font-semibold">
                    Before interacting with any HyperPool smart contract, you
                    must acknowledge:
                  </p>
                  <div className="bg-green-800/30 border border-green-700 rounded p-4 my-4">
                    <p className="italic font-medium">
                      &ldquo;I understand that using HyperPool involves smart
                      contract, protocol, and market risks. I accept full
                      responsibility for any losses and acknowledge that no
                      yields are guaranteed. I am not a U.S. Person and I comply
                      with the Terms of Use.&rdquo;
                    </p>
                  </div>
                  <p className="text-sm">
                    A checkbox confirming this acknowledgment must be completed
                    prior to staking.
                  </p>
                </div>
              </section>

              <section className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-cyan-400 mb-3">
                  9. Contact Information
                </h2>
                <div className="text-white leading-relaxed">
                  <p>
                    For questions about risks or protocol security, please
                    contact us at:
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

export default ProtocolRiskDisclosurePage;
