import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "../components/Providers"; // ✅ import Providers
import TopBar from "../components/TopBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HyperPool",
  description: "Autonomous Yield Routing for DeFi Degens",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cove, maximum-scale=1, user-scalable=no"></meta>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col">
            <TopBar className="border-b border-theme relative z-50 flex-shrink-0" />
            <main className="flex-1 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
