import React from "react";
import Link from "next/link";
import Head from "next/head";

import Search from "../components/search";
import Footer from "../components/footer";
import { ConnectWallet } from "@thirdweb-dev/react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import ReactThemeToggleButton from "../components/toggle"
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useAddress } from "@thirdweb-dev/react";
import { useAccount, useConnect } from "wagmi";
import { Blockie } from "web3uikit";
import styles from "../styles/Home.module.css";
import Banner from "../components/banner";



const light = { background: "white" };
const dark = { background: "black" };

const GlobalStyle = createGlobalStyle`
.body{
  background: black;
  transition: background 0.4s;
  color: white;
}
`;

const Grid = (props) => {

  const address = useAddress()
  const { connect, connectors } = useConnect();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

 

  useEffect(() => {
    if (!address) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [address]);



const { themes, setTheme } = useTheme()
const [ isDark, setDark ] = useState(false)

const theme = isDark ? dark : light;
const themez = isDark ? setTheme("dark") : setTheme("light");

  return (
    <>
    <ThemeProvider theme={theme}>
      <div className="home-container">
        <Head>
          <title>RareBay | DEX</title>
          <meta property="og:title" content="RareBay | HOME OF RARE" />
        </Head>
        <div className="home-container01">
          <div className="home-container02">
            <div className="home-container03">
              <div className="home-container04">
                <Link href="/">
                   <svg viewBox="0 0 1024 1024" className="home-icon">
                  <path d="M725.333 896v-85.333c0-58.88-23.936-112.299-62.464-150.869s-91.989-62.464-150.869-62.464h-298.667c-58.88 0-112.299 23.936-150.869 62.464s-62.464 91.989-62.464 150.869v85.333c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-85.333c0-35.371 14.293-67.285 37.504-90.496s55.125-37.504 90.496-37.504h298.667c35.371 0 67.285 14.293 90.496 37.504s37.504 55.125 37.504 90.496v85.333c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667zM576 298.667c0-58.88-23.936-112.299-62.464-150.869s-91.989-62.464-150.869-62.464-112.299 23.936-150.869 62.464-62.464 91.989-62.464 150.869 23.936 112.299 62.464 150.869 91.989 62.464 150.869 62.464 112.299-23.936 150.869-62.464 62.464-91.989 62.464-150.869zM490.667 298.667c0 35.371-14.293 67.285-37.504 90.496s-55.125 37.504-90.496 37.504-67.285-14.293-90.496-37.504-37.504-55.125-37.504-90.496 14.293-67.285 37.504-90.496 55.125-37.504 90.496-37.504 67.285 14.293 90.496 37.504 37.504 55.125 37.504 90.496zM695.168 499.499l85.333 85.333c16.683 16.683 43.691 16.683 60.331 0l170.667-170.667c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-140.501 140.501-55.168-55.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                </svg>
                </Link>
                <Link
                  href="/portfolio"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-text"
                >
                   <div  className="home-link01">
                  OWNED
                  </div>
                </Link>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon02"
                >
                  <path d="M920.571 475.429c0 19.429-8 38.286-21.143 51.429l-372 372.571c-13.714 13.143-32.571 21.143-52 21.143s-38.286-8-51.429-21.143l-372-372.571c-13.714-13.143-21.714-32-21.714-51.429s8-38.286 21.714-52l42.286-42.857c13.714-13.143 32.571-21.143 52-21.143s38.286 8 51.429 21.143l168 168v-402.286c0-40 33.143-73.143 73.143-73.143h73.143c40 0 73.143 33.143 73.143 73.143v402.286l168-168c13.143-13.143 32-21.143 51.429-21.143s38.286 8 52 21.143l42.857 42.857c13.143 13.714 21.143 32.571 21.143 52z"></path>
                </svg>
                <Link
                  href="/sell"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link"
                >
                   <div  className="home-link01">
                   SELL
                  </div>
              
                </Link>
                <svg viewBox="0 0 1024 1024" className="home-icon04">
                  <path d="M1024 576v-384h-192v-64c0-35.2-28.8-64-64-64h-704c-35.2 0-64 28.8-64 64v192c0 35.2 28.8 64 64 64h704c35.2 0 64-28.8 64-64v-64h128v256h-576v128h-32c-17.674 0-32 14.326-32 32v320c0 17.674 14.326 32 32 32h128c17.674 0 32-14.326 32-32v-320c0-17.674-14.326-32-32-32h-32v-64h576zM768 192h-704v-64h704v64z"></path>
                </svg>
                <Link
                  href="/create"
                >

                  <div  className="home-link01">
                  CREATE
                  </div>
                
                </Link>
              </div>
              <header data-thq="thq-navbar" className="home-navbar-interactive">
                <div data-thq="thq-navbar-nav" className="home-desktop-menu">
                  <div className="home-container05">
                    <Search rootClassName="search-root-class-name15"></Search>
                  </div>
                  <div className="home-buttons">
                  <div style={{display: "flex", gap: "20px", padding: "10px", borderRadius: "8px", backdropFilter: "blur(100px)", filter: "opacity(1)", background: "rgba(0, 0, 0, 0.281)", fontSize: "13px" }}>
</div>  

                  
                  </div>
                </div>
                <div data-thq="thq-burger-menu" className="home-burger-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon06">
                    <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </div>
                <Link legacyBehavior href="#">
                  <a className="home-link02">
                    <Image
                    style={{borderRadius: "100%"}}
                    width={30}
                    height={30}
                      alt="logo"
                      src="/fav-200h.ico"
                      className="home-image"
                    />
                  </a>
                </Link>
                <Search rootClassName="search-root-class-name14"></Search>
                <div data-thq="thq-mobile-menu" className="home-mobile-menu">
                  <div className="home-nav">
                    <div className="home-top">
                      <div
                        data-thq="thq-close-menu"
                        className="home-close-menu"
                      >
                        <svg viewBox="0 0 1024 1024" className="home-icon08">
                          <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="home-container06">
               
                      <div className="home-container07">
                        <Image
                        style={{borderRadius: "100%"}}
                        width={30}
                        height={30}
                          alt="image"
                          src="/fav-200h.ico"
                          className="home-image1"
                        />
                        <Link legacyBehavior href="#">
                          <a className="home-link03">
                            <h1 className="home-heading">RAR3BAY</h1>
                          </a>
                        </Link>
                      </div>
                      <div className="home-container08"></div>
                      <div className="home-container09">
                        <div className="home-container10">
                        <Banner />
                        </div>
                        <Link legacyBehavior href="/dex">
                          <a className="home-link04">
                            <div className="home-container11">
                              <div className="home-container12">
                                <svg
                                  viewBox="0 0 1024 1024"
                                  className="home-icon10"
                                >
                                  <path d="M768 554q70 0 120 51t50 121-50 120-120 50-120-50-50-120 50-121 120-51zM768 640q-34 0-60 26t-26 60 26 59 60 25 60-25 26-59-26-60-60-26zM512 128q70 0 120 50t50 120-50 121-120 51-120-51-50-121 50-120 120-50zM512 214q-34 0-60 25t-26 59 26 60 60 26 60-26 26-60-26-59-60-25zM256 554q70 0 120 51t50 121-50 120-120 50-120-50-50-120 50-121 120-51zM256 640q-34 0-60 26t-26 60 26 59 60 25 60-25 26-59-26-60-60-26z"></path>
                                </svg>
                                <span className="home-text02">DEX</span>
                              </div>
                            </div>
                          </a>
                        </Link>
                        <div className="home-container13">
                          <div className="home-container14">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="home-icon12"
                            >
                              <path d="M598 234q0-44 31-75t75-31 75 31 31 75-31 76-75 32-75-32-31-76zM370 512q-24 0-50-16-8-6-32-16l138-138-42-44q-64-64-170-64v-106q82 0 134 19t100 67l274 272q-12 8-18 10-26 16-50 16-22 0-48-16-44-26-94-26t-94 26q-26 16-48 16zM938 704q-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28v-86q26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14 26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14 26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14v86zM938 896q-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28t-94-28q-22-14-48-14-28 0-50 14-46 28-92 28v-86q26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14 26 0 48-14 46-28 94-28t94 28q22 14 48 14 28 0 50-14 46-28 92-28 48 0 94 28 22 14 48 14v86z"></path>
                            </svg>
                            <span className="home-text03">POOLS</span>
                          </div>
                        </div>
                        <Link legacyBehavior href="/portfolio">
                          <a className="home-link05">
                            <div className="home-container15">
                              <div className="home-container16">
                                <svg
                                  viewBox="0 0 1024 1024"
                                  className="home-icon14"
                                >
                                  <path d="M864 0h-768c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h768c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96zM832 896h-704v-768h704v768zM256 576h448v64h-448zM256 704h448v64h-448zM320 288c0-53.019 42.981-96 96-96s96 42.981 96 96c0 53.019-42.981 96-96 96s-96-42.981-96-96zM480 384h-128c-52.8 0-96 28.8-96 64v64h320v-64c0-35.2-43.2-64-96-64z"></path>
                                </svg>
                                <span className="home-text04">portfolio</span>
                              </div>
                            </div>
                          </a>
                        </Link>
                        <Link legacyBehavior href="/sats">
                          <a className="home-link06">
                            <div className="home-container17">
                              <div className="home-container18">
                                <svg
                                  viewBox="0 0 760.0274285714286 1024"
                                  className="home-icon16"
                                >
                                  <path d="M666.857 365.714c7.429 76-24.571 121.714-74.857 147.429 83.429 20 136 69.714 125.714 181.143-13.143 138.857-116 176-263.429 184v145.714h-88v-143.429c-22.286 0-45.714 0-69.714-0.571v144h-88v-145.714c-20.571 0-41.143-0.571-62.286-0.571h-114.286l17.714-104.571c64.571 1.143 63.429 0 63.429 0 24.571 0 31.429-17.714 33.143-29.143v-229.714h9.143c-3.429-0.571-6.857-0.571-9.143-0.571v-164c-3.429-18.286-14.857-38.857-50.857-38.857 0 0 1.143-1.143-63.429 0v-93.714l121.143 0.571c17.714 0 36.571 0 55.429-0.571v-144h88v141.143c23.429-0.571 46.857-1.143 69.714-1.143v-140h88v144c113.143 9.714 202.857 44.571 212.571 148.571zM544 677.143c0-113.143-186.286-96.571-245.714-96.571v193.143c59.429 0 245.714 12.571 245.714-96.571zM503.429 405.143c0-103.429-155.429-88-205.143-88v175.429c49.714 0 205.143 11.429 205.143-87.429z"></path>
                                </svg>
                                <span className="home-text05">SATS</span>
                              </div>
                            </div>
                          </a>
                        </Link>
                      </div>
                      <div className="home-container19">
                        <div className="home-container20">
                         <Banner />
                        </div>
                        <Link legacyBehavior href="/dex">
                          <a className="home-link07">
                            <div className="home-container21">
                              <div className="home-container22">
                                <svg
                                  viewBox="0 0 1024 1024"
                                  className="home-icon18"
                                >
                                  <path d="M768 554q70 0 120 51t50 121-50 120-120 50-120-50-50-120 50-121 120-51zM768 640q-34 0-60 26t-26 60 26 59 60 25 60-25 26-59-26-60-60-26zM512 128q70 0 120 50t50 120-50 121-120 51-120-51-50-121 50-120 120-50zM512 214q-34 0-60 25t-26 59 26 60 60 26 60-26 26-60-26-59-60-25zM256 554q70 0 120 51t50 121-50 120-120 50-120-50-50-120 50-121 120-51zM256 640q-34 0-60 26t-26 60 26 59 60 25 60-25 26-59-26-60-60-26z"></path>
                                </svg>
                                <span className="home-text07">DEX</span>
                              </div>
                            </div>
                          </a>
                        </Link>
                        <Link legacyBehavior href="/pools">
                          <a className="home-link08">
                            <div className="home-container23">
                              <div className="home-container24">
                                <svg
                                  viewBox="0 0 1024 1024"
                                  className="home-icon20"
                                >
                                  <path d="M598 234q0-44 31-75t75-31 75 31 31 75-31 76-75 32-75-32-31-76zM370 512q-24 0-50-16-8-6-32-16l138-138-42-44q-64-64-170-64v-106q82 0 134 19t100 67l274 272q-12 8-18 10-26 16-50 16-22 0-48-16-44-26-94-26t-94 26q-26 16-48 16zM938 704q-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28v-86q26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14 26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14 26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14v86zM938 896q-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28t-94-28q-22-14-48-14-28 0-50 14-46 28-92 28v-86q26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14 26 0 48-14 46-28 94-28t94 28q22 14 48 14 28 0 50-14 46-28 92-28 48 0 94 28 22 14 48 14v86z"></path>
                                </svg>
                                <span className="home-text08">POOLS</span>
                              </div>
                            </div>
                          </a>
                        </Link>
                        <Link legacyBehavior href="/portfolio">
                          <a className="home-link09">
                            <div className="home-container25">
                              <div className="home-container26">
                                <svg
                                  viewBox="0 0 1024 1024"
                                  className="home-icon22"
                                >
                                  <path d="M864 0h-768c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h768c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96zM832 896h-704v-768h704v768zM256 576h448v64h-448zM256 704h448v64h-448zM320 288c0-53.019 42.981-96 96-96s96 42.981 96 96c0 53.019-42.981 96-96 96s-96-42.981-96-96zM480 384h-128c-52.8 0-96 28.8-96 64v64h320v-64c0-35.2-43.2-64-96-64z"></path>
                                </svg>
                                <span className="home-text09">portfolio</span>
                              </div>
                            </div>
                          </a>
                        </Link>
                        <Link legacyBehavior href="/sats">
                          <a className="home-link10">
                            <div className="home-container27">
                              <div className="home-container28">
                                <svg
                                  viewBox="0 0 760.0274285714286 1024"
                                  className="home-icon24"
                                >
                                  <path d="M666.857 365.714c7.429 76-24.571 121.714-74.857 147.429 83.429 20 136 69.714 125.714 181.143-13.143 138.857-116 176-263.429 184v145.714h-88v-143.429c-22.286 0-45.714 0-69.714-0.571v144h-88v-145.714c-20.571 0-41.143-0.571-62.286-0.571h-114.286l17.714-104.571c64.571 1.143 63.429 0 63.429 0 24.571 0 31.429-17.714 33.143-29.143v-229.714h9.143c-3.429-0.571-6.857-0.571-9.143-0.571v-164c-3.429-18.286-14.857-38.857-50.857-38.857 0 0 1.143-1.143-63.429 0v-93.714l121.143 0.571c17.714 0 36.571 0 55.429-0.571v-144h88v141.143c23.429-0.571 46.857-1.143 69.714-1.143v-140h88v144c113.143 9.714 202.857 44.571 212.571 148.571zM544 677.143c0-113.143-186.286-96.571-245.714-96.571v193.143c59.429 0 245.714 12.571 245.714-96.571zM503.429 405.143c0-103.429-155.429-88-205.143-88v175.429c49.714 0 205.143 11.429 205.143-87.429z"></path>
                                </svg>
                                <span className="home-text10">SATS</span>
                              </div>
                            </div>
                          </a>
                        </Link>
                        <Link legacyBehavior href="/mints">
                          <a className="home-link11">
                            <div className="home-container29">
                              <div className="home-container30">
                                <svg
                                  viewBox="0 0 1024 1024"
                                  className="home-icon26"
                                >
                                  <path d="M1011.328 134.496c-110.752-83.928-281.184-134.034-455.91-134.034-216.12 0-392.226 75.456-483.16 207.020-42.708 61.79-66.33 134.958-70.208 217.474-3.454 73.474 8.884 154.726 36.684 242.146 94.874-284.384 359.82-507.102 665.266-507.102 0 0-285.826 75.232-465.524 308.192-0.112 0.138-2.494 3.090-6.614 8.698-36.080 48.278-67.538 103.162-91.078 165.328-39.87 94.83-76.784 224.948-76.784 381.782h128c0 0-19.43-122.222 14.36-262.79 55.89 7.556 105.858 11.306 150.852 11.306 117.678 0 201.37-25.46 263.388-80.124 55.568-48.978 86.198-114.786 118.624-184.456 49.524-106.408 105.654-227.010 268.654-320.152 9.33-5.332 15.362-14.992 16.056-25.716s-4.040-21.080-12.606-27.572z"></path>
                                </svg>
                                <span className="home-text11">MINTS</span>
                              </div>
                            </div>
                          </a>
                        </Link>
                      </div>
                      <div className="home-container31"></div>
                      <div id="connecting" className="home-container32">
                      <ReactThemeToggleButton
        isDark={isDark}
        invertedIconLogic
        onChange={() => setDark((prev) => !prev)}
        />
        <hr />
     
                      </div>
                      
                    </div>
                  </div>
                </div>
                
                <div id="connect" className="home-container33">
                <ReactThemeToggleButton
        isDark={isDark}
        invertedIconLogic
        onChange={() => setDark((prev) => !prev)}
        />
                  <div id="connecting" className="home-container34">

                  </div>
                  {isLoggedIn ? (
          <section>
            {connectors.map((connector) => (
              <>
 <ConnectWallet

 style={{border: "solid", borderColor: "initial", borderWidth: "0.5px", fontFamily: "Pixel NES"}}
 modalSize={"compact"}
 theme={({
   colors: {
     modalBg: " rgba(0, 0, 50, 0.638)",
     dropdownBg: "initial",
     accentText: "white",
     accentButtonBg: "#0064fa",
     borderColor: "initial",
     primaryText: "white"
   },
 })}
 btnTitle={"CONNECT"}
 modalTitle={"RAREBAY"}
 switchToActiveChain={true}
 welcomeScreen={{
   title: "WELCOME TO THE HOME OF RAR3",
   Image: {
     src: "https://bafybeid3fqzkm3eciwpla4tijoj3ifcxhcxskcnayohd4dvysfngp2w72a.ipfs.nftstorage.link/ipfs/bafybeid3fqzkm3eciwpla4tijoj3ifcxhcxskcnayohd4dvysfngp2w72a/xcxczxz.png",
     width: 150,
     height: 150,
   },
   subtitle:
     "Connect wallet to get started.",
 }}
 modalTitleIconUrl={
   "https://bafybeid3fqzkm3eciwpla4tijoj3ifcxhcxskcnayohd4dvysfngp2w72a.ipfs.nftstorage.link/ipfs/bafybeid3fqzkm3eciwpla4tijoj3ifcxhcxskcnayohd4dvysfngp2w72a/xcxczxz.png"
 }
/>
</>
            ))}
          </section>
        ) : (
          <section className={styles.loggedIn_section}>
<ConnectWallet 
   theme={({
   colors: {
     modalBg: " rgba(0, 0, 50, 0.638)",
     dropdownBg: "black",
     accentText: "initial",
     accentButtonBg: "#0064fa",
     borderColor: "initial",
     primaryText: "white",
     background: "black",
     backdropFilter: "blur(10px)"
   },
  })}
   style={{background: "black", color: "white", border: "solid", color: "white", textShadow: "currentColor 5px 5px 16px", borderWidth: "0.5px"}} /><div style={{width: "45px", height: "45px", padding: "3.8px", border: "solid", marginTop: "5px", borderRadius: "100%", marginLeft: "5px", color: "initial" }}><Blockie seed={address} />
   </div>
          </section>
        )}
                </div>
              </header>
      </div>
      </div>
       </div>
       </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background: linear-gradient(
              130deg,
              rgb(0, 0, 0, 0.5),
              rgba(0, 100, 200, 0.906),
              rgba(0, 0, 0, 0.506)
            );
          }
          .home-container01 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-container02 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            font-family: "pixel NES";
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-container02:active {
            border-bottom: solid 2px white;
          }
          .home-container03 {
            width: 100%;
            height: auto;
            display: flex;
            z-index: 1;
            align-items: center;
            justify-content: center;
          }
          .home-container04 {
            top: 67px;
            right: 0px;
            width: 100%;
            height: 54px;
            display: flex;
            outline: solid dark 0.5px;
            z-index: 1;
            position: fixed;
            transition: 0.3s;
            align-items: center;
            border-color: #3f3f3f;
            border-width: 1px;
            justify-content: center;
            background-color: #181818;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .home-container04:hover {
            background: rgba(100, 100, 100, 0.69);
          }
          .home-icon {
            fill: #008aff;
            width: 23px;
            height: 21px;
          }
          .home-text {
            color: #bababa;
            font-size: 10px;
            transition: 0.3s;
            font-family: "Pixel NES";
            margin-left: 1px;
            padding-top: 2px;
            border-color: #626262;
            border-width: 1px;
            margin-right: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: 2px;
            text-decoration: none;
            border-top-width: 0px;
            border-left-width: 0px;
            border-bottom-width: 0px;
          }
          .home-text:hover {
            color: var(--dl-color-gray-500);
            padding: 10;
            font-size: large;
            background: #7fbeff;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .home-text:active {
            color: var(--dl-color-gray-500);
            padding: var(--dl-space-space-halfunit);
            background: #7fbeff;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .home-icon02 {
            fill: #00ff27;
            width: 19px;
            height: 13px;
          }
          .home-link {
            color: #bababa;
            font-size: 10px;
            transition: 0.3s;
            font-family: "Pixel NES";
            margin-left: 1px;
            padding-top: 2px;
            border-color: #626262;
            border-width: 1px;
            margin-right: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: 2px;
            text-decoration: none;
            border-top-width: 0px;
            border-left-width: 0px;
            border-bottom-width: 0px;
          }
          .home-link:hover {
            color: var(--dl-color-gray-500);
            padding: 10;
            font-size: large;
            background: #7fbeff;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .home-link:active {
            color: var(--dl-color-gray-500);
            padding: var(--dl-space-space-halfunit);
            background: #7fbeff;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .home-icon04 {
            fill: #8100ff;
            width: 19px;
            height: 17px;
          }
          .home-link01 {
            color: #bababa;
            font-size: 10px;
            transition: 0.3s;
            font-family: "Pixel NES";
            margin-left: 1px;
            padding-top: 2px;
            border-color: #626262;
            border-width: 1px;
            margin-right: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: 2px;
            text-decoration: none;
            border-top-width: 0px;
            border-left-width: 0px;
            border-bottom-width: 0px;
          }
          .home-link01:hover {
            color: var(--dl-color-gray-500);
            padding: 10;
            font-size: large;
            background: #7fbeff;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .home-link01:active {
            color: var(--dl-color-gray-500);
            padding: var(--dl-space-space-halfunit);
            background: #7fbeff;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .home-navbar-interactive {
            top: -1px;
            color: var(--dl-color-gray-500);
            right: -1px;
            width: 100%;
            height: 68px;
            display: flex;
            z-index: 1;
            position: fixed;
            align-self: flex-start;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: 35px;
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: 11px;
            backdrop-filter: blur(10px);
            justify-content: center;
          }
          .home-desktop-menu {
            flex: 1;
            display: none;
            justify-content: space-between;
          }
          .home-container05 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .home-buttons {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-burger-menu {
            width: 63px;
            height: 56px;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-unit);
            justify-content: center;
            cursor: pointer;
          }
          .home-burger-menu:hover{
            background: gray;
            border-radius: 16px;
            cursor: pointer;
            margin-left: 50px;
          }
          .home-icon06 {
            fill: #606060;
            width: 36px;
            height: 50%;
          }
          .home-link02 {
            display: contents;
          }
          .home-image {
            width: 67px;
            height: 63px;
            text-decoration: none;
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 265px;
            height: 1317px;
            display: flex;
            z-index: 1;
            position: absolute;
            transform: translateX(-100%);
            box-shadow: 5px 5px 10px 0px #005ba3;
            transition: 0.5s;
            flex-direction: column;
            padding-bottom: 32px;
            justify-content: space-between;
            background-color: rgba(83, 83, 83, 0.86);
          }
          .home-nav {
            width: 100%;
            height: var(--dl-size-size-maxwidth);
            display: flex;
            z-index: 1;
            align-self: center;
            background: rgba(0, 0, 0, 0.77);
            align-items: center;
            border-color: #5f5f5f;
            border-width: 0.5px;
            flex-direction: column;
            backdrop-filter: blur(500px);
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 1px;
            border-bottom-width: 0px;
          }
          .home-top {
            width: 100%;
            display: flex;
            align-self: flex-end;
            margin-top: 0px;
            align-items: center;
            margin-bottom: 0px;
            padding-right: var(--dl-space-space-unit);
            justify-content: flex-end;
          }
          .home-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon08 {
            fill: #d9d9d9;
            width: 36px;
            height: 28px;
            margin-top: var(--dl-space-space-unit);
            cursor: pointer;
          }
          .home-container06 {
            width: 209px;
            height: 1274px;
            display: flex;
            position: relative;
            transition: 0.3s;
            align-items: center;
            font-family: "pixel Nex";
            border-color: #252525;
            border-width: 0.5px;
            flex-direction: column;
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }

          .home-container07 {
            width: 232px;
            height: 93px;
            display: flex;
            position: fixed;
            align-items: center;
            justify-content: center;
          }
          .home-image1 {
            top: 6px;
            left: -19px;
            width: 83px;
            filter: grayscale();
            height: 84px;
            position: absolute;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .home-link03 {
            display: contents;
          }
          .home-heading {
            color: rgb(140, 140, 140);
            height: 24px;
            font-size: 1.5em;
            align-self: center;
            background: -webkit-linear-gradient(
              rgb(1, 12, 241),
              rgb(250, 100, 100)
            );
            margin-top: 0px;
            text-align: center;
            transition: 0.3s;
            font-family: "Pixel NES";
            text-decoration: none;
            background-image: linear-gradient(
              rgb(255, 255, 255) 0%,
              rgb(45, 45, 45) 49%,
              rgb(255, 0, 0) 98%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .home-heading:hover {
            font-size: 1em;
          }
          .home-container08 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: flex-start;
          }
          .home-container09 {
            width: 100%;
            height: auto;
            display: flex;
            position: fixed;
            margin-top: 91px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container10 {
            width: 100%;
            height: 60px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text01 {
            color: #ffffff;
            font-size: 12px;
            font-family: "Pixel NES";
            margin-bottom: 5%;
          }
          .home-link04 {
            display: contents;
          }
          .home-container11 {
            width: 100%;
            height: 60px;
            display: flex;
            align-self: flex-start;
            transition: 0.3s;
            align-items: center;
            border-color: #272727;
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
            border-top-width: 1px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-container11:hover {
            color: var(--dl-color-gray-black);
            background: aliceblue;
          }
          .home-container11:active {
            background: #252525;
          }
          .home-container12 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .home-icon10 {
            fill: #ff0000;
            width: 24px;
            height: 24px;
          }
          .home-text02 {
            font-size: 1em;
            align-self: center;
            font-family: "Pixel NES";
            margin-left: var(--dl-space-space-unit);
          }
          .home-container13 {
            width: 100%;
            height: 60px;
            display: flex;
            align-self: flex-start;
            transition: 0.3s;
            align-items: center;
            border-color: #272727;
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
            border-top-width: 1px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-container13:hover {
            color: var(--dl-color-gray-black);
            background: aliceblue;
          }
          .home-container13:active {
            background: #252525;
          }
          .home-container14 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .home-icon12 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
          }
          .home-text03 {
            font-size: 1em;
            align-self: center;
            font-family: "Pixel NES";
            margin-left: var(--dl-space-space-unit);
          }
          .home-link05 {
            display: contents;
          }
          .home-container15 {
            width: 100%;
            height: 60px;
            display: flex;
            align-self: flex-start;
            transition: 0.3s;
            align-items: center;
            border-color: #272727;
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
            border-top-width: 1px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-container15:hover {
            color: var(--dl-color-gray-black);
            background: aliceblue;
          }
          .home-container15:active {
            background: #252525;
          }
          .home-container16 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .home-icon14 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .home-text04 {
            font-size: 1em;
            align-self: center;
            font-family: "Pixel NES";
            margin-left: var(--dl-space-space-unit);
          }
          .home-link06 {
            display: contents;
          }
          .home-container17 {
            width: 100%;
            height: 60px;
            display: flex;
            align-self: flex-start;
            transition: 0.3s;
            align-items: center;
            border-color: #272727;
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
            border-top-width: 1px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-container17:hover {
            color: var(--dl-color-gray-black);
            background: aliceblue;
          }
          .home-container17:active {
            background: #252525;
          }
          .home-container18 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .home-icon16 {
            fill: #ff9302;
            width: 24px;
            height: 24px;
          }
          .home-text05 {
            font-size: 1em;
            align-self: center;
            font-family: "Pixel NES";
            margin-left: var(--dl-space-space-unit);
          }
          .home-container19 {
            width: 100%;
            height: auto;
            display: flex;
            position: fixed;
            margin-top: 91px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container20 {
            width: 100%;
            height: 60px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text06 {
            color: #ffffff;
            font-size: 13px;
            font-family: "Pixel NES";
          }
          .home-link07 {
            display: contents;
          }
          .home-container21 {
            width: 100%;
            height: 60px;
            display: flex;
            align-self: flex-start;
            transition: 0.3s;
            align-items: center;
            border-color: #272727;
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
            border-top-width: 1px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-container21:hover {
            color: var(--dl-color-gray-black);
            background: aliceblue;
          }
          .home-container21:active {
            background: #252525;
          }
          .home-container22 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .home-icon18 {
            fill: #ff0000;
            width: 24px;
            height: 24px;
          }
          .home-text07 {
            font-size: 1em;
            align-self: center;
            font-family: "Pixel NES";
            margin-left: var(--dl-space-space-unit);
          }
          .home-link08 {
            display: contents;
          }
          .home-container23 {
            width: 100%;
            height: 60px;
            display: flex;
            align-self: flex-start;
            transition: 0.3s;
            align-items: center;
            border-color: #272727;
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
            border-top-width: 1px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-container23:hover {
            color: var(--dl-color-gray-black);
            background: aliceblue;
          }
          .home-container23:active {
            background: #252525;
          }
          .home-container24 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .home-icon20 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
          }
          .home-text08 {
            font-size: 1em;
            align-self: center;
            font-family: "Pixel NES";
            margin-left: var(--dl-space-space-unit);
          }
          .home-link09 {
            display: contents;
          }
          .home-container25 {
            width: 100%;
            height: 60px;
            display: flex;
            align-self: flex-start;
            transition: 0.3s;
            align-items: center;
            border-color: #272727;
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
            border-top-width: 1px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-container25:hover {
            color: var(--dl-color-gray-black);
            background: aliceblue;
          }
          .home-container25:active {
            background: #252525;
          }
          .home-container26 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .home-icon22 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .home-text09 {
            font-size: 1em;
            align-self: center;
            font-family: "Pixel NES";
            margin-left: var(--dl-space-space-unit);
          }
          .home-link10 {
            display: contents;
          }
          .home-container27 {
            width: 100%;
            height: 60px;
            display: flex;
            align-self: flex-start;
            transition: 0.3s;
            align-items: center;
            border-color: #272727;
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
            border-top-width: 1px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-container27:hover {
            color: var(--dl-color-gray-black);
            background: aliceblue;
          }
          .home-container27:active {
            background: #252525;
          }
          .home-container28 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .home-icon24 {
            fill: #ff9302;
            width: 24px;
            height: 24px;
          }
          .home-text10 {
            font-size: 1em;
            align-self: center;
            font-family: "Pixel NES";
            margin-left: var(--dl-space-space-unit);
          }
          .home-link11 {
            display: contents;
          }
          .home-container29 {
            width: 100%;
            height: 60px;
            display: flex;
            align-self: flex-start;
            transition: 0.3s;
            align-items: center;
            border-color: #272727;
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
            border-top-width: 1px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-container29:hover {
            color: var(--dl-color-gray-black);
            background: aliceblue;
          }
          .home-container29:active {
            background: #252525;
          }
          .home-container30 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .home-icon26 {
            fill: var(--dl-color-success-700);
            width: 24px;
            height: 24px;
          }
          .home-text11 {
            font-size: 1em;
            align-self: center;
            font-family: "Pixel NES";
            margin-left: var(--dl-space-space-unit);
          }
          .home-container31 {
            width: 100%;
            height: 414px;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container32 {
            width: var(--dl-size-size-xlarge);
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
            justify-items: center;
            flex-direction: column;
            padding: 1%;
          }
          .home-container33 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: 1017px;
            height: 20px;
            display: flex;
            align-items: center;
            margin-top: 4px;
            padding-right: var(--dl-space-space-unit);
            justify-content: flex-end;
          }
          .home-icon28 {
            fill: #9c9c9c;
            width: 35px;
            height: 28px;
          }
          .home-container34 {
            width: var(--dl-size-size-xlarge);
            height: var(--dl-size-size-small);
            display: flex;
            align-items: flex-start;
            justify-items: center;
            align-items: center;
            margin-top: 5px;
          }
          .home-container35 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-container36 {
            width: 100%;
            height: auto;
            display: flex;
            position: inherit;
            align-self: center;
            margin-top: 115px;
            align-items: center;
            padding-top: 0px;
            flex-direction: column;
            justify-content: center;
          }
          .home-container37 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-self: center;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link12 {
            display: contents;
          }
          .home-heading1 {
            color: rgb(140, 140, 140);
            height: 100%;
            font-size: 3em;
            align-self: center;
            background: -webkit-linear-gradient(
              rgb(1, 12, 241),
              rgb(250, 100, 100)
            );
            margin-top: 0px;
            text-align: center;
            transition: 0.3s;
            font-family: "Pixel NES";
            text-decoration: none;
            background-image: linear-gradient(
              180deg,
              rgb(255, 255, 255) 0%,
              rgb(45, 45, 45) 49%,
              rgb(0, 100, 250) 98%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .home-heading1:hover {
            font-size: 2em;
          }
          .home-container38 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-threeunits);
            margin-right: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .home-video {
            width: 70%;
            filter: opacity(1);
            height: auto;
            margin-left: var(--dl-space-space-oneandhalfunits);
            border-color: #424242;
            border-width: 1px;
            margin-right: var(--dl-space-space-oneandhalfunits);
            border-radius: var(--dl-radius-radius-radius8);
          }
          .home-container39 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
          }
          .home-container40 {
            width: 100%;
            height: 328px;
            display: flex;
            position: relative;
            align-self: center;
            transition: 0.3s;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: 1px;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: center;
          }
          .home-container40:hover {
            width: 90%;
          }
          .home-container41 {
            width: 250px;
            height: 276px;
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-unit);
            transition: 0.3s;
            align-items: center;
            margin-left: var(--dl-space-space-unit);
            border-color: #ffffff;
            border-width: 1px;
            margin-right: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url("/rare-1200w.png");
            background-position: center;
          }
          .home-container41:hover {
            width: 80%;
          }
          .home-container42 {
            color: transparent;
            width: 100%;
            height: 100%;
            position: relative;
            align-self: flex-start;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            border-color: #8e8e8e;
            border-width: 1px;
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: center;
          }
          .home-container42:hover {
            color: initial;
            filter: opacity(1);
            font-size: 25px;
            backdrop-filter: blur(10px);
          }
          .home-container43 {
            width: 200px;
            height: 100%;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container44 {
            gap: 5;
            width: 100%;
            height: 52px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .home-image2 {
            width: 51px;
            height: 48px;
            object-fit: cover;
            border-color: #464646;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .home-text12 {
            width: 100%;
            padding: 2px;
            text-align: center;
            margin-left: var(--dl-space-space-unit);
            padding-top: 2px;
            padding-left: 0px;
            margin-bottom: 0px;
            padding-right: 2px;
            padding-bottom: 2px;
          }
          .home-container45 {
            width: 100%;
          }
          .home-container46 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .home-text13 {
            width: 100%;
            font-size: 10px;
            align-self: center;
            margin-top: 0px;
            padding-top: var(--dl-space-space-unit);
            padding-left: 1px;
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-container47 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text14 {
            width: 100%;
            font-size: 20px;
            align-self: center;
            margin-top: 0px;
            font-family: "Pixel NES";
            padding-top: var(--dl-space-space-unit);
            padding-left: 1px;
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-text15 {
            width: 100%;
            border: solid 1px;
            font-size: medium;
            align-self: center;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-text15:hover {
            background: rgba(119, 119, 119, 0.68);
            backdrop-filter: blur(50px);
          }
          .home-container48 {
            width: 250px;
            height: 276px;
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-unit);
            transition: 0.3s;
            align-items: center;
            margin-left: var(--dl-space-space-unit);
            border-color: #ffffff;
            border-width: 1px;
            margin-right: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url("/w.jpeg");
            background-position: center;
          }
          .home-container48:hover {
            width: 80%;
          }
          .home-container49 {
            color: transparent;
            width: 100%;
            height: 100%;
            position: relative;
            align-self: flex-start;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            border-color: #8e8e8e;
            border-width: 1px;
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: center;
          }
          .home-container49:hover {
            color: initial;
            filter: opacity(1);
            font-size: 25px;
            backdrop-filter: blur(10px);
          }
          .home-container50 {
            width: 200px;
            height: 100%;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container51 {
            gap: 5;
            width: 100%;
            height: 52px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .home-image3 {
            width: 51px;
            height: 48px;
            object-fit: cover;
            border-color: #464646;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .home-text16 {
            width: 100%;
            padding: 2px;
            text-align: center;
            margin-left: var(--dl-space-space-unit);
            padding-top: 2px;
            padding-left: 0px;
            margin-bottom: 0px;
            padding-right: 2px;
            padding-bottom: 2px;
          }
          .home-container52 {
            width: 100%;
          }
          .home-container53 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .home-text17 {
            width: 100%;
            font-size: 10px;
            align-self: center;
            margin-top: 0px;
            padding-top: var(--dl-space-space-unit);
            padding-left: 1px;
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-container54 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text18 {
            width: 100%;
            font-size: 20px;
            align-self: center;
            margin-top: 0px;
            font-family: "Pixel NES";
            padding-top: var(--dl-space-space-unit);
            padding-left: 1px;
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-text19 {
            width: 100%;
            border: solid 1px;
            font-size: medium;
            align-self: center;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-text19:hover {
            background: rgba(119, 119, 119, 0.68);
            backdrop-filter: blur(50px);
          }
          .home-container55 {
            width: 250px;
            height: 276px;
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-unit);
            transition: 0.3s;
            align-items: center;
            margin-left: var(--dl-space-space-unit);
            border-color: #ffffff;
            border-width: 1px;
            margin-right: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url("/adhsilzs%3Bl-1200w.png");
            background-position: center;
          }
          .home-container55:hover {
            width: 80%;
          }
          .home-container56 {
            color: transparent;
            width: 100%;
            height: 100%;
            position: relative;
            align-self: flex-start;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            border-color: #8e8e8e;
            border-width: 1px;
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: center;
          }
          .home-container56:hover {
            color: initial;
            filter: opacity(1);
            font-size: 25px;
            backdrop-filter: blur(10px);
          }
          .home-container57 {
            width: 200px;
            height: 100%;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container58 {
            gap: 5;
            width: 100%;
            height: 52px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .home-image4 {
            width: 51px;
            height: 48px;
            object-fit: cover;
            border-color: #464646;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .home-text20 {
            width: 100%;
            padding: 2px;
            text-align: center;
            margin-left: var(--dl-space-space-unit);
            padding-top: 2px;
            padding-left: 0px;
            margin-bottom: 0px;
            padding-right: 2px;
            padding-bottom: 2px;
          }
          .home-container59 {
            width: 100%;
          }
          .home-container60 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .home-text21 {
            width: 100%;
            font-size: 10px;
            align-self: center;
            margin-top: 0px;
            padding-top: var(--dl-space-space-unit);
            padding-left: 1px;
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-container61 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text22 {
            width: 100%;
            font-size: 20px;
            align-self: center;
            margin-top: 0px;
            font-family: "Pixel NES";
            padding-top: var(--dl-space-space-unit);
            padding-left: 1px;
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-text23 {
            width: 100%;
            border: solid 1px;
            font-size: medium;
            align-self: center;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-text23:hover {
            background: rgba(119, 119, 119, 0.68);
            backdrop-filter: blur(50px);
          }
          .home-container62 {
            width: 250px;
            height: 276px;
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-unit);
            transition: 0.3s;
            align-items: center;
            margin-left: var(--dl-space-space-unit);
            border-color: #ffffff;
            border-width: 1px;
            margin-right: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url("/ehksds-1200w.png");
            background-position: center;
          }
          .home-container62:hover {
            width: 80%;
          }
          .home-container63 {
            color: transparent;
            width: 100%;
            height: 100%;
            position: relative;
            align-self: flex-start;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            border-color: #8e8e8e;
            border-width: 1px;
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: center;
          }
          .home-container63:hover {
            color: initial;
            filter: opacity(1);
            font-size: 25px;
            backdrop-filter: blur(10px);
          }
          .home-container64 {
            width: 200px;
            height: 100%;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container65 {
            gap: 5;
            width: 100%;
            height: 52px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .home-image5 {
            width: 51px;
            height: 48px;
            object-fit: cover;
            border-color: #464646;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .home-text24 {
            width: 100%;
            padding: 2px;
            text-align: center;
            margin-left: var(--dl-space-space-unit);
            padding-top: 2px;
            padding-left: 0px;
            margin-bottom: 0px;
            padding-right: 2px;
            padding-bottom: 2px;
          }
          .home-container66 {
            width: 100%;
          }
          .home-container67 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .home-text25 {
            width: 100%;
            font-size: 10px;
            align-self: center;
            margin-top: 0px;
            padding-top: var(--dl-space-space-unit);
            padding-left: 1px;
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-container68 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text26 {
            width: 100%;
            font-size: 20px;
            align-self: center;
            margin-top: 0px;
            font-family: "Pixel NES";
            padding-top: var(--dl-space-space-unit);
            padding-left: 1px;
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-text27 {
            width: 100%;
            border: solid 1px;
            font-size: medium;
            align-self: center;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-text27:hover {
            background: rgba(119, 119, 119, 0.68);
            backdrop-filter: blur(50px);
          }
          .home-container69 {
            width: 75%;
            font-family: Pixel NES;
            height: 375px;
            display: flex;
            align-items: center;
            flex-direction: column;
            color: lightgray;
          }
          .home-feature-card {
            width: 100%;
            height: 206px;
            display: flex;
            padding: var(--dl-space-space-twounits);
            transition: 0.3s;
            align-items: center;
            border-color: #6f6f6f;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            background-color: rgba(217, 217, 217, 0.49);
          }
          .home-feature-card:hover {
            font-size: larger;
          }
          .home-icon32 {
            width: 68px;
            height: 36px;
          }
          .home-text28 {
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text29 {
            color: var(--dl-color-gray-700);
            text-align: center;
          }
          .home-link13 {
            font-size: 0.75rem;
            margin-top: var(--dl-space-space-unit);
            font-weight: 500;
            text-decoration: none;
          }
          .home-video1 {
            top: -346px;
            left: -1434px;
            width: 4500px;
            filter: opacity(0.1);
            height: auto;
            z-index: -1;
            position: fixed;
            align-self: center;
            border-color: #575757;
            border-width: 1px;
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-unit);
          }
          @media (max-width: 1600px) {
            .home-desktop-menu {
              display: none;
            }
            .home-burger-menu {
              display: flex;
            }
          }
          @media (max-width: 1004px) {
            .home-container33 {
              width: auto;
            }
            .home-container38 {
              width: auto;
              height: auto;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
              padding-left: 0px;
            }
            .home-video {
              width: 838px;
              height: auto;
            }
          }
          @media (max-width: 479px) {
            .home-container01 {
            }
            .home-container02 {
              width: 100%;
              margin-right: 0px;
            }
            .home-container03 {
              height: 142px;
            }
            .home-container04 {
              top: 69px;
              left: -2px;
              width: 100%;
              height: 65px;
              justify-content: center;
            }
            .home-navbar-interactive {
              padding: var(--dl-space-space-unit);
              padding-right: 16px;
            }
            .home-icon06 {
              fill: #d9d9d9;
              width: 58px;
              height: 42px;
            }
            .home-image {
              width: 59px;
            }
            .home-mobile-menu {
              width: 278px;
              height: 1098px;
              padding: 16px;
              box-shadow: 5px 5px 10px 0px rgba(2, 208, 247, 0.29);
              border-color: #444444;
              border-width: 0.5px;
              background-color: rgba(24, 24, 24, 0.86);
            }
            .home-nav {
              width: 289px;
              height: auto;
              border-width: 0px;
              justify-content: flex-start;
              background-color: transparent;
            }
            .home-top {
              align-items: flex-start;
            }
            .home-container06 {
              height: 559px;
              border-color: rgba(53, 53, 53, 0.04);
            }
            .home-container07 {
              width: 265px;
              height: 82px;
              justify-content: center;
            }
            .home-image1 {
              top: -7px;
              left: -10px;
            }
            .home-heading {
              width: 100%;
              height: 35px;
              font-size: 2em;
              text-align: center;
              background-image: linear-gradient(
                180deg,
                rgb(255, 255, 255) 0%,
                rgb(45, 45, 45) 49%,
                rgb(255, 0, 0) 98%
              );
            }
            .home-container31 {
              height: 379px;
            }
            .home-container32 {
              height: var(--dl-size-size-small);
            }
            .home-container33 {
              width: auto;
              display: none;
            }
            .home-container34 {
              height: var(--dl-size-size-small);
            }
            .home-container35 {
              height: 100%;
              margin-top: 135px;
            }
            .home-container36 {
              height: auto;
              margin-top: 0px;
            }
            .home-container37 {
              width: 355px;
              height: 114px;
            }
            .home-heading1 {
              width: 100%;
              height: 79px;
              font-size: 2em;
              text-align: center;
              background-image: linear-gradient(
                180deg,
                rgb(255, 255, 255) 0%,
                rgb(45, 45, 45) 49%,
                rgb(255, 0, 0) 98%
              );
            }
            .home-container38 {
              width: 306px;
              height: 58px;
            }
            .home-video {
              width: 100%;
            }
            .home-container39 {
              margin-top: var(--dl-space-space-fourunits);
            }
            .home-container40 {
              height: 1287px;
              display: flex;
              align-items: center;
              flex-direction: column;
            }
            .home-feature-card {
              height: 197px;
              padding-top: 0px;
            }
            .home-text28 {
              font-style: normal;
              font-weight: 500;
            }
            .home-text29 {
              color: var(--dl-color-gray-700);
            }
            .home-video1 {
              width: 100%;
              height: 100%;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
      </ThemeProvider>
    </>
  );
};

export default Grid;
