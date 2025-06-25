"use client";

import React from "react";

// import ScrollableContainer from "./ScrollableContainer";

const FAQPage: React.FC = () => {

    const faqData = [
        {
            question: "What is HyperPool?",
            answer:
                "HyperPool is a decentralized platform that helps you earn high yields on your crypto by automatically moving your funds between the best-performing pools. It’s like having a smart assistant that finds the top DeFi opportunities for you—no research or guesswork needed.",
        },
        {
            question: "How does it work?",
            answer:
                "HyperPool uses advanced algorithms and smart contracts to scan multiple DeFi platforms and pick the most profitable options. Your crypto is securely moved between these pools to maximize returns, while you stay in full control of your assets at all times.",
        },
        {
            question: "How do I use the site?",
            answer:
                "Just deposit USDC on Polygon. We handle everything else—tracking, optimizing, and moving your funds.",
        },
        {
            question: "What are the fees?",
            answer:
                "HyperPool only takes 10% of the profits you earn. If you don’t make money, we don’t either. There are no hidden fees—just pure performance-based rewards. If you deposit $1,000 and it goes up to $1,200 we get $20 and you get $1,180 when you withdraw.",
        },
        {
            question: "Is there a lockup time?",
            answer:
                "There is no lockup time on our end but many high yield pools do require a time commitment. Each yield pool has its own formula for lockup time. During this time you will not be able to withdraw your funds.",
        },
        {
            question: "Is this actually safe or just another rug?",
            answer:
                "Non-custodial and battle-tested. Your funds never leave your wallet until you explicitly deposit. Smart contracts are audited and we don’t have access to your private keys.",
        },
        {
            question: "What kind of yields are we talking about?",
            answer:
                "High risk, high return. Or nothing. We hunt the highest-performing pools across DeFi but make no promises. Our algo chases alpha wherever it lives. Some days you moon, some days you don’t. That’s DeFi.",
        },
        {
            question: "How does the auto-farming actually work?",
            answer:
                "Drop USDC → Our smart contracts scan 50+ DeFi protocols → Auto-deploy to highest yields → Compound rewards → You collect. All automated, all transparent on-chain. No manual pool hopping needed.",
        },
        {
            question: "Why can’t US degens use this yet?",
            answer:
                "US regs incoming, not ready yet. We’re working on compliance but want to launch globally first. US degens—stay tuned, we’re coming for you soon™. For now, it’s non-US only.",
        },
        {
            question: "What happens if I get rekt?",
            answer:
                "You lose your money. Simple as that. This is DeFi, not a savings account. Smart contracts can get exploited, protocols can fail, markets can crash. Only deposit what you can afford to lose completely. We’re not your financial advisor, we’re yield hunters.",
        },
    ];

    return (
        <div className="h-full flex flex-col">
            <div className="flex-1 p-4 pt-0 md:p-12">
                <div className="max-w-2xl mx-auto">

                    <div className="space-y-6">
                        {faqData.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white/5 border border-white/10 rounded-lg p-6"
                            >
                                <h3 className="text-lg font-semibold text-cyan-400 mb-3">
                                    {index + 1}. &ldquo;{faq.question}&rdquo;
                                </h3>
                                <p className="text-white leading-relaxed">
                                    <span className="font-semibold text-primary-orange">
                                        Answer:
                                    </span>{" "}
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                        <div
                            className="mt-12 bg-white/5 border border-white/10 rounded-lg p-6"
                        >
                            <h3 className="text-lg font-semibold text-cyan-400 mb-3">
                                11. &ldquo;How do I contact you?&rdquo;
                            </h3>
                            <p className="text-white leading-relaxed">
                                <span className="font-semibold text-primary-orange">
                                    Answer:
                                </span>{" "}
                                Our email address is <a href="mailto:Yo@hyperpool.io" className="text-cyan-400 hover:text-cyan-300">Yo@hyperpool.io</a>
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 bg-red-500/10 border border-red-500/30 rounded-lg p-6">
                        {/* <h2 className="text-xl font-semibold text-red-300 mb-3">
                            ⚠️ Risk Warning
                        </h2> */}
                        <p className="text-red-300 text-center">
                            This is DeFi, not a bank. High yields come with high risks. Smart
                            contracts can be exploited, protocols can fail, and you can lose
                            everything. Only invest what you can afford to lose completely.
                            We&apos;re yield hunters, not financial advisors. DYOR.
                        </p>
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
            </div>
        </div>
    );
};

export default FAQPage;
