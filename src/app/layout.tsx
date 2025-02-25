import type { Metadata } from "next";
import "./globals.css";
import { ParaSolanaProvider, backpackWallet, glowWallet, phantomWallet } from "@getpara/solana-wallet-connectors";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl } from "@solana/web3.js";
import Script from 'next/script';

const solanaNetwork = WalletAdapterNetwork.Devnet;
const endpoint = clusterApiUrl(solanaNetwork);

export const metadata: Metadata = {
  title: "Para Modal Starter | Next.js",
  description: "A starter template for using the Para Modal with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ParaSolanaProvider
          endpoint={endpoint}
          wallets={[glowWallet, phantomWallet, backpackWallet]}
          chain={solanaNetwork}
          appIdentity={{
            name: "Sample App",
            uri: `https://sample-app.com`,
          }}
        >
          {children}
        </ParaSolanaProvider>
      </body>
    </html>
  );
}
