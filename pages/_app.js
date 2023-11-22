import "./style.css";
import { ThirdwebProvider, lightTheme } from "@thirdweb-dev/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import styled, { createGlobalStyle } from "styled-components";
import NextNProgress from "nextjs-progressbar";
import { NETWORK } from "../const/contractAddresses";
import {
  ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  localWallet,
  embeddedWallet,
} from "@thirdweb-dev/react";
import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import Grid from "../components/grid"
import { ChakraProvider } from '@chakra-ui/react'

const { publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()],
)
 
const config = createConfig({
  publicClient,
  webSocketPublicClient,
})


import React from "react";
export default function MyApp({ Component: Component, pageProps: pageProps }) {
  return (
    <WagmiConfig  config={config}>

    <ThirdwebProvider
    clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
    activeChain={NETWORK}
    supportedWallets={[
      metamaskWallet({ recommended: true }),
      walletConnect(),
      localWallet(),
    ]}
  >
      <NextThemesProvider attribute="class" defaultTheme="dark">
      <NextNProgress
        color="yellow"
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
        showOnShallow={true}
      />
      <ChakraProvider>
    <Grid />
      <Component {...pageProps} />
      </ChakraProvider>
      </NextThemesProvider>
  </ThirdwebProvider>
  </WagmiConfig>

  
  )
}
