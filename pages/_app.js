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
import Footer from "../components/footer";
import Banner from "../components/banner"

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
 <ChakraProvider theme={{}}>
    <ThirdwebProvider
    clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
    activeChain={NETWORK}
    supportedWallets={[
      metamaskWallet({ recommended: true }),
      walletConnect(),
      localWallet(),
    ]}
  >
  
      <NextNProgress
        color="skyblue"
        startPosition={0.3}
        stopDelayMs={200}
        height={4.5}
        showOnShallow={true}
      />
     
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <Grid />
        
      <Component className="body" {...pageProps} />
      <Footer />
      </NextThemesProvider>
    
     
  </ThirdwebProvider>
  </ChakraProvider>
  </WagmiConfig>

  
  )
}
