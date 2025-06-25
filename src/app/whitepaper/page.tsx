import React from "react";
import ScrollableContainer from "../../components/ScrollableContainer";

interface WhitepaperSection {
  title: string;
  content: string | string[];
}

const WhitepaperPage: React.FC = () => {
  const sections: WhitepaperSection[] = [
    {
      title: "Abstract",
      content: [
        "HyperPool is a smart-contract-based protocol that automatically reallocates user funds to the highest-yielding DeFi pools in real time. Built for crypto-native users who seek maximum gains without the constant chart-watching grind.",
        "HyperPool combines autonomous yield routing with exposure to high-risk, high-reward opportunities. We made a robot that hunts alpha 24/7 so you don't have to live on DeFiPulse refreshing APY charts.",
      ]
    },
    {
      title: "Problem",
      content: [
        "DeFi is fragmented and chaotic. Yield opportunities shift faster than your favorite influencer's opinions. Most users are missing optimal returns due to:",
        "• Manual pool switching - Who has time to babysit liquidity pools all day?",
        "• Gas inefficiency - Spending $50 in gas to claim $20 in rewards hits different",
        "• Complex UIs - Some protocols look like they were designed by aliens",
        '• Lack of reliable intelligence - Most "yield optimization" is just educated gambling',
        "",
        "Most existing yield optimizers cater to safe, conservative gains that barely beat inflation. The degen class deserves better.",
      ],
    },
    {
      title: "Solution: The Alpha Hunter",
      content: [
        "HyperPool automates aggressive yield hunting. Users deposit once, select their risk tolerance, and HyperPool routes funds across integrated pools based on real-time APY analysis and gas cost optimization.",
        "No more manually switching between 47 different yield farms at 3 AM. Yes more automated alpha hunting while you sleep or argue about tokenomics on Discord."
      ]
    },
    {
      title: "How It Works",
      content: [
        "Step 1: Connect Wallet",
        "- Standard Web3 onboarding - if you've used DeFi before, you know the drill.",
        "Step 2: Choose Your Risk Tier",
        "- We're not your financial advisor, but we'll give you options:",
        "• Steady Mode: Blue-chip protocols only (5–10% APY) - For the risk-averse",
        "• Growth Mode: Balanced risk/reward (10–20% APY) - The sweet spot for most degens",
        "• Surge Mode: High-octane territory (20–100%+ APY) - For those who live dangerously",
        "Step 3: Deposit Tokens",
        "- Currently supporting USDC on Polygon because we're not trying to bankrupt you with Ethereum gas fees.",
        "Step 4: Let the Machines Work",
        "- Our Smart Contracts + Bot Engine continuously scan pools and reallocate funds automatically. Supported protocols include Curve, Convex, Aave, Lido, Beefy, Stargate, and select experimental farms.",
      ],
    },
    {
      title: "Technical Architecture",
      content: [
        "Vault Contract",
        "• Accepts user deposits and manages positions with audited security.",
        "Strategy Engine",
        "• Continuously calculates optimal yield routes using real-time data feeds and gas cost analysis. Think quantitative hedge fund algorithm, but for degens.",
        "Bot Layer",
        "• Executes reallocation transactions based on pre-defined triggers. No human emotions, no FOMO, no panic selling.",
        "Non-Custodial Architecture",
        "• Your funds remain in user-controlled smart vaults. We can't rug you even if we wanted to."
      ],
    },
    {
      title: "Tokenomics (Maybe)",
      content: [
        "HyperPool may introduce a native governance token to:",
        "• Incentivize liquidity - Reward the early adopters",
        "• Reward usage - Active users get the good stuff",
        "• Support decentralized governance - Let the community decide",
        "",
        'Token design will emphasize sustainability and long-term alignment, not typical "number go up" ponzinomics. Any token launch will be done responsibly with proper legal structure.',
      ],
    },
    {
      title: "Legal Structure",
      content: [
        "• Cayman Foundation DAO: Owns smart contracts, brand, and treasury",
        "• Wyoming LLC: Operates frontend, marketing, and operations",
        "• Offshore SPV: Facilitates token issuance (if applicable)",
        "We did our homework on regulatory compliance because getting shut down would be a major vibe killer."
      ],
    },
    {
      title: "Why HyperPool Hits Different?",
      content: [
        "Degen-First Design",
        "• Built specifically for yield-hungry users who understand that high returns come with high risks. No hand-holding, no false promises.",
        "Real-Time APY Optimization",
        "• No waiting around for manual rebalancing. Our bots are faster than your reflexes and never sleep.",
        "Fully Automated",
        "• Deposit your funds and let the system work. Perfect for busy degens who have better things to do.",
        "Transparent & Auditable",
        "• Open-source smart contracts and verifiable on-chain transactions. Trust, but verify."
      ],
    },
    {
      title: "Risk Disclosure",
      content: [
        "This is DeFi, not a savings account. Smart contracts can get exploited, protocols can fail, and markets can crash. We hunt high yields, which means high risks.",
        "Only deposit what you can afford to lose completely. Potential risks include smart contract bugs, third-party protocol failures, market volatility, and regulatory changes.",
        "We're yield hunters, not miracle workers. DYOR and invest responsibly."
      ]
    },
    {
      title: "Conclusion",
      content: [
        "HyperPool delivers what DeFi was meant to be: autonomous, high-yield, crypto-native income generation that doesn't require a PhD in computer science.",
        "Set it. Stake it. Let the pool hunt for you.",
        "The age of manual yield farming is over. Welcome to intelligent automation.",
      ],
    },
  ];

  const renderContent = (content: string | string[]): React.ReactNode => {
    if (typeof content === "string") {
      return <p className="text-white leading-relaxed">{content}</p>;
    }

    return (
      <div className="space-y-2">
        {content.map((line, index) => (
          <p key={index} className="text-white leading-relaxed">
            {line}
          </p>
        ))}
      </div>
    );
  };

  return (
    <div className="h-full flex flex-col">
      <ScrollableContainer className="flex-1 p-8 md:p-16">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-theme-primary mb-4">
              HyperPool: Autonomous Yield Routing for DeFi Degens
            </h1>
            <div className="space-y-2 text-white">
              <p className="text-xl">Version 1.0</p>
              <p className="text-lg">Launch Date: 6/25/2025</p>
              <p className="text-lg">TL;DR: We built the ultimate yield farming bot so you can touch grass while your bags grow</p>
            </div>
            <div className="mt-6 p-4 bg-blue-900/30 border border-blue-600 rounded-lg">
              <p className="text-blue-300">
                This whitepaper outlines HyperPool&apos;s autonomous yield
                routing protocol, designed for crypto-native users seeking
                maximized DeFi returns through smart contract automation. Some items are not live yet.
              </p>
            </div>
          </div>

          {/* Sections */}
          <div className="prose prose-invert max-w-none">
            <div className="space-y-8">
              {sections.map((section, index) => (
                <section
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-lg p-6"
                >
                  <h2 className="text-lg font-semibold text-cyan-400 mb-3">
                    {section.title}
                  </h2>
                  <div className="text-white leading-relaxed">
                    {renderContent(section.content)}
                  </div>
                </section>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
              <p className="text-white leading-relaxed">
                Features may evolve based on market conditions and community feedback. Always DYOR and never invest more than you can afford to lose.
              </p>
            </div>
          </div>
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
      </ScrollableContainer>
    </div>
  );
};

export default WhitepaperPage;
