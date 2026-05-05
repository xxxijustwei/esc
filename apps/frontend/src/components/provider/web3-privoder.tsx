"use client";

import "@rainbow-me/rainbowkit/styles.css";
import {
  connectorsForWallets,
  darkTheme,
  Locale,
  lightTheme,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import {
  injectedWallet,
  metaMaskWallet,
  rainbowWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { useLocale } from "next-intl";
import { useTheme } from "next-themes";
import { createConfig, http, WagmiProvider } from "wagmi";
import { arbitrum, base, bsc, mainnet } from "wagmi/chains";

const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended",
      wallets:
        typeof indexedDB !== "undefined"
          ? [metaMaskWallet, rainbowWallet, walletConnectWallet]
          : [injectedWallet],
    },
  ],
  {
    appName: "Dapp",
    projectId: process.env.WALLET_CONNECT_PROJECT_ID ?? "",
  },
);

const config = createConfig({
  connectors,
  chains: [mainnet, bsc, arbitrum, base],
  transports: {
    [mainnet.id]: http(),
    [bsc.id]: http(),
    [arbitrum.id]: http(),
    [base.id]: http(),
  },
  ssr: true,
});

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  const locale = useLocale();
  const theme = useTheme();
  return (
    <WagmiProvider config={config}>
      <RainbowKitProvider
        theme={theme.resolvedTheme === "dark" ? darkTheme() : lightTheme()}
        locale={locale as Locale}
        modalSize="compact"
      >
        {children}
      </RainbowKitProvider>
    </WagmiProvider>
  );
};
