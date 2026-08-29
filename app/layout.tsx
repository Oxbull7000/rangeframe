import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "./providers";
import ConstellationGrid from "@/components/ui/constellation-grid";
import { GrainBackground } from "@/components/ui/grain-background";
import "./globals.css";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap"
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "RangeFrame | Concentrated Liquidity on Solana",
  description: "Create, simulate, sign, monitor, and exit concentrated liquidity positions without giving up wallet custody."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable}`}>
        <ConstellationGrid />
        <GrainBackground />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
