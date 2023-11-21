import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

import Search from './search'
import Head from "next/head";
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


const light = { background: "white" };
const dark = { background: "black" };

const GlobalStyle = createGlobalStyle`
body{
  background: linear-gradient(
    0deg,
    rgb(0, 0, 0, 0.9),
    rgba(0, 50, 150, 0.506)
  );
  transition: background 0.4s;
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
  const [isVisible, setIsVisible] = useState(false)
  return (
    <>
      <div className={`grid-container ${props.rootClassName} `}>
        <div className="grid-container01">
          <div className="grid-container02">
            <div className="grid-container03">
              <svg viewBox="0 0 1024 1024" className="grid-icon">
                <path d="M725.333 896v-85.333c0-58.88-23.936-112.299-62.464-150.869s-91.989-62.464-150.869-62.464h-298.667c-58.88 0-112.299 23.936-150.869 62.464s-62.464 91.989-62.464 150.869v85.333c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-85.333c0-35.371 14.293-67.285 37.504-90.496s55.125-37.504 90.496-37.504h298.667c35.371 0 67.285 14.293 90.496 37.504s37.504 55.125 37.504 90.496v85.333c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667zM576 298.667c0-58.88-23.936-112.299-62.464-150.869s-91.989-62.464-150.869-62.464-112.299 23.936-150.869 62.464-62.464 91.989-62.464 150.869 23.936 112.299 62.464 150.869 91.989 62.464 150.869 62.464 112.299-23.936 150.869-62.464 62.464-91.989 62.464-150.869zM490.667 298.667c0 35.371-14.293 67.285-37.504 90.496s-55.125 37.504-90.496 37.504-67.285-14.293-90.496-37.504-37.504-55.125-37.504-90.496 14.293-67.285 37.504-90.496 55.125-37.504 90.496-37.504 67.285 14.293 90.496 37.504 37.504 55.125 37.504 90.496zM695.168 499.499l85.333 85.333c16.683 16.683 43.691 16.683 60.331 0l170.667-170.667c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-140.501 140.501-55.168-55.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
              </svg>
              <span className="grid-text">{props.text}</span>
              <svg viewBox="0 0 950.8571428571428 1024" className="grid-icon02">
                <path d="M920.571 475.429c0 19.429-8 38.286-21.143 51.429l-372 372.571c-13.714 13.143-32.571 21.143-52 21.143s-38.286-8-51.429-21.143l-372-372.571c-13.714-13.143-21.714-32-21.714-51.429s8-38.286 21.714-52l42.286-42.857c13.714-13.143 32.571-21.143 52-21.143s38.286 8 51.429 21.143l168 168v-402.286c0-40 33.143-73.143 73.143-73.143h73.143c40 0 73.143 33.143 73.143 73.143v402.286l168-168c13.143-13.143 32-21.143 51.429-21.143s38.286 8 52 21.143l42.857 42.857c13.143 13.714 21.143 32.571 21.143 52z"></path>
              </svg>
              <span className="grid-text01">{props.text12}</span>
              <svg viewBox="0 0 1024 1024" className="grid-icon04">
                <path d="M1024 576v-384h-192v-64c0-35.2-28.8-64-64-64h-704c-35.2 0-64 28.8-64 64v192c0 35.2 28.8 64 64 64h704c35.2 0 64-28.8 64-64v-64h128v256h-576v128h-32c-17.674 0-32 14.326-32 32v320c0 17.674 14.326 32 32 32h128c17.674 0 32-14.326 32-32v-320c0-17.674-14.326-32-32-32h-32v-64h576zM768 192h-704v-64h704v64z"></path>
              </svg>
              <span className="grid-text02">{props.text23}</span>
            </div>
            <header data-thq="thq-navbar" className="grid-navbar-interactive">
              <div data-thq="thq-navbar-nav" className="grid-desktop-menu">
                <div className="grid-container04">
                  <Search rootClassName="search-root-class-name8"></Search>
                </div>
                <div className="grid-buttons">
                  <button className="button">CONNECT</button>
                </div>
              </div>
              <div data-thq="thq-burger-menu" className="grid-burger-menu">
                <svg viewBox="0 0 1024 1024" className="grid-icon06">
                  <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
           <a className="grid-link" href="/">
              
                  <img alt="logo" src="/fav-200h.ico" className="grid-image" />
           
              </a>
              <Search rootClassName="search-root-class-name9"></Search>
              <div data-thq="thq-mobile-menu" className="grid-mobile-menu">
                <div className="grid-nav">
                  <div className="grid-top">
                    <div data-thq="thq-close-menu" className="grid-close-menu">
                      <svg viewBox="0 0 1024 1024" className="grid-icon08">
                        <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="grid-container05">
                    <div className="grid-container06">
                      <img
                        alt={props.image_alt4}
                        src={props.image_src4}
                        className="grid-image1"
                      />
                   <a href="/" className="grid-link1">
                     
                          <h1 className="grid-heading">{props.Heading2}</h1>
                   
                      </a>
                    </div>
                    <div className="grid-container07"></div>
                    <div className="grid-container08">
                      <div className="grid-container09">
                        <span className="grid-text03">{props.text15}</span>
                      </div>
                   <a className="grid-link2" href="/dex">
                      
                          <div className="grid-container10">
                            <div className="grid-container11">
                              <svg
                                viewBox="0 0 1024 1024"
                                className="grid-icon10"
                              >
                                <path d="M768 554q70 0 120 51t50 121-50 120-120 50-120-50-50-120 50-121 120-51zM768 640q-34 0-60 26t-26 60 26 59 60 25 60-25 26-59-26-60-60-26zM512 128q70 0 120 50t50 120-50 121-120 51-120-51-50-121 50-120 120-50zM512 214q-34 0-60 25t-26 59 26 60 60 26 60-26 26-60-26-59-60-25zM256 554q70 0 120 51t50 121-50 120-120 50-120-50-50-120 50-121 120-51zM256 640q-34 0-60 26t-26 60 26 59 60 25 60-25 26-59-26-60-60-26z"></path>
                              </svg>
                              <span className="grid-text04">
                                {props.text17}
                              </span>
                            </div>
                          </div>
                     
                      </a>
                      <div className="grid-container12">
                        <div className="grid-container13">
                          <svg viewBox="0 0 1024 1024" className="grid-icon12">
                            <path d="M598 234q0-44 31-75t75-31 75 31 31 75-31 76-75 32-75-32-31-76zM370 512q-24 0-50-16-8-6-32-16l138-138-42-44q-64-64-170-64v-106q82 0 134 19t100 67l274 272q-12 8-18 10-26 16-50 16-22 0-48-16-44-26-94-26t-94 26q-26 16-48 16zM938 704q-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28v-86q26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14 26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14 26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14v86zM938 896q-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28t-94-28q-22-14-48-14-28 0-50 14-46 28-92 28v-86q26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14 26 0 48-14 46-28 94-28t94 28q22 14 48 14 28 0 50-14 46-28 92-28 48 0 94 28 22 14 48 14v86z"></path>
                          </svg>
                          <span className="grid-text05">{props.text18}</span>
                        </div>
                      </div>
                   <a  className="grid-link3"href="/portfolio">
                      
                          <div className="grid-container14">
                            <div className="grid-container15">
                              <svg
                                viewBox="0 0 1024 1024"
                                className="grid-icon14"
                              >
                                <path d="M864 0h-768c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h768c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96zM832 896h-704v-768h704v768zM256 576h448v64h-448zM256 704h448v64h-448zM320 288c0-53.019 42.981-96 96-96s96 42.981 96 96c0 53.019-42.981 96-96 96s-96-42.981-96-96zM480 384h-128c-52.8 0-96 28.8-96 64v64h320v-64c0-35.2-43.2-64-96-64z"></path>
                              </svg>
                              <span className="grid-text06">
                                {props.text19}
                              </span>
                            </div>
                          </div>
                      
                      </a>
                   <a className="grid-link4" href="/sats">
                      
                          <div className="grid-container16">
                            <div className="grid-container17">
                              <svg
                                viewBox="0 0 760.0274285714286 1024"
                                className="grid-icon16"
                              >
                                <path d="M666.857 365.714c7.429 76-24.571 121.714-74.857 147.429 83.429 20 136 69.714 125.714 181.143-13.143 138.857-116 176-263.429 184v145.714h-88v-143.429c-22.286 0-45.714 0-69.714-0.571v144h-88v-145.714c-20.571 0-41.143-0.571-62.286-0.571h-114.286l17.714-104.571c64.571 1.143 63.429 0 63.429 0 24.571 0 31.429-17.714 33.143-29.143v-229.714h9.143c-3.429-0.571-6.857-0.571-9.143-0.571v-164c-3.429-18.286-14.857-38.857-50.857-38.857 0 0 1.143-1.143-63.429 0v-93.714l121.143 0.571c17.714 0 36.571 0 55.429-0.571v-144h88v141.143c23.429-0.571 46.857-1.143 69.714-1.143v-140h88v144c113.143 9.714 202.857 44.571 212.571 148.571zM544 677.143c0-113.143-186.286-96.571-245.714-96.571v193.143c59.429 0 245.714 12.571 245.714-96.571zM503.429 405.143c0-103.429-155.429-88-205.143-88v175.429c49.714 0 205.143 11.429 205.143-87.429z"></path>
                              </svg>
                              <span className="grid-text07">
                                {props.text20}
                              </span>
                            </div>
                          </div>
                     
                      </a>
                    </div>
                    <div className="grid-container18">
                      <div className="grid-container19">
                        <span className="grid-text08">{props.text16}</span>
                      </div>
                   <a className="grid-link5" href="/dex">
                       
                          <div className="grid-container20">
                            <div className="grid-container21">
                              <svg
                                viewBox="0 0 1024 1024"
                                className="grid-icon18"
                              >
                                <path d="M768 554q70 0 120 51t50 121-50 120-120 50-120-50-50-120 50-121 120-51zM768 640q-34 0-60 26t-26 60 26 59 60 25 60-25 26-59-26-60-60-26zM512 128q70 0 120 50t50 120-50 121-120 51-120-51-50-121 50-120 120-50zM512 214q-34 0-60 25t-26 59 26 60 60 26 60-26 26-60-26-59-60-25zM256 554q70 0 120 51t50 121-50 120-120 50-120-50-50-120 50-121 120-51zM256 640q-34 0-60 26t-26 60 26 59 60 25 60-25 26-59-26-60-60-26z"></path>
                              </svg>
                              <span className="grid-text09">
                                {props.text22}
                              </span>
                            </div>
                          </div>
                      
                      </a>
                      <div className="grid-container22">
                        <div className="grid-container23">
                          <svg viewBox="0 0 1024 1024" className="grid-icon20">
                            <path d="M598 234q0-44 31-75t75-31 75 31 31 75-31 76-75 32-75-32-31-76zM370 512q-24 0-50-16-8-6-32-16l138-138-42-44q-64-64-170-64v-106q82 0 134 19t100 67l274 272q-12 8-18 10-26 16-50 16-22 0-48-16-44-26-94-26t-94 26q-26 16-48 16zM938 704q-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28v-86q26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14 26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14 26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14v86zM938 896q-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28t-94-28q-22-14-48-14-28 0-50 14-46 28-92 28v-86q26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14 26 0 48-14 46-28 94-28t94 28q22 14 48 14 28 0 50-14 46-28 92-28 48 0 94 28 22 14 48 14v86z"></path>
                          </svg>
                          <span className="grid-text10">{props.text24}</span>
                        </div>
                      </div>
                   <a className="grid-link6" href="/portfolio">
                       
                          <div className="grid-container24">
                            <div className="grid-container25">
                              <svg
                                viewBox="0 0 1024 1024"
                                className="grid-icon22"
                              >
                                <path d="M864 0h-768c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h768c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96zM832 896h-704v-768h704v768zM256 576h448v64h-448zM256 704h448v64h-448zM320 288c0-53.019 42.981-96 96-96s96 42.981 96 96c0 53.019-42.981 96-96 96s-96-42.981-96-96zM480 384h-128c-52.8 0-96 28.8-96 64v64h320v-64c0-35.2-43.2-64-96-64z"></path>
                              </svg>
                              <span className="grid-text11">
                                {props.text25}
                              </span>
                            </div>
                          </div>
                    
                      </a>
                   <a className="grid-link7" href="/sats">
                        
                          <div className="grid-container26">
                            <div className="grid-container27">
                              <svg
                                viewBox="0 0 760.0274285714286 1024"
                                className="grid-icon24"
                              >
                                <path d="M666.857 365.714c7.429 76-24.571 121.714-74.857 147.429 83.429 20 136 69.714 125.714 181.143-13.143 138.857-116 176-263.429 184v145.714h-88v-143.429c-22.286 0-45.714 0-69.714-0.571v144h-88v-145.714c-20.571 0-41.143-0.571-62.286-0.571h-114.286l17.714-104.571c64.571 1.143 63.429 0 63.429 0 24.571 0 31.429-17.714 33.143-29.143v-229.714h9.143c-3.429-0.571-6.857-0.571-9.143-0.571v-164c-3.429-18.286-14.857-38.857-50.857-38.857 0 0 1.143-1.143-63.429 0v-93.714l121.143 0.571c17.714 0 36.571 0 55.429-0.571v-144h88v141.143c23.429-0.571 46.857-1.143 69.714-1.143v-140h88v144c113.143 9.714 202.857 44.571 212.571 148.571zM544 677.143c0-113.143-186.286-96.571-245.714-96.571v193.143c59.429 0 245.714 12.571 245.714-96.571zM503.429 405.143c0-103.429-155.429-88-205.143-88v175.429c49.714 0 205.143 11.429 205.143-87.429z"></path>
                              </svg>
                              <span className="grid-text12">
                                {props.text26}
                              </span>
                            </div>
                          </div>
                 
                      </a>
                    </div>
                    <div className="grid-container28"></div>
                    <div id="connecting" className="grid-container29"></div>
                  </div>
                </div>
              </div>
              <div id="connect" className="grid-container30">
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
     accentText: "#0064fa",
     accentButtonBg: "#0064fa",
     borderColor: "initial",
     primaryText: "white"
   },
 })}
 btnTitle={"CONNECT"}
 modalTitle={"RAREBAY"}
 switchToActiveChain={true}
 welcomeScreen={{
   title: "NFT DEX",
   img: {
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
   style={{background: "black", border: "solid", color: "gray", textShadow: "currentColor 5px 5px 16px", borderWidth: "0.5px"}} /><div style={{width: "45px", height: "45px", padding: "3.8px", border: "solid", marginTop: "5px", borderRadius: "100%", marginLeft: "5px", color: "initial" }}><Blockie seed={address} /></div>
          </section>
        )}
              </div>
            </header>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .grid-container {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .grid-container01 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            font-family: 'pixel NES';
            flex-direction: column;
            justify-content: flex-start;
          }
          .grid-container01:active {
            border-bottom: solid 2px white;
          }
          .grid-container02 {
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .grid-container03 {
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
            background-color: #010101;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .grid-container03:hover {
            background: rgba(100, 100, 100, 0.69);
          }
          .grid-icon {
            fill: #008aff;
            width: 23px;
            height: 21px;
          }
          .grid-text {
            color: #bababa;
            font-size: 10px;
            transition: 0.3s;
            font-family: 'Pixel NES';
            margin-left: 1px;
            padding-top: 2px;
            border-color: #626262;
            border-width: 1px;
            margin-right: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: 2px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-bottom-width: 0px;
          }
          .grid-text:hover {
            color: var(--dl-color-gray-500);
            padding: 10;
            font-size: large;
            background: #7fbeff;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .grid-text:active {
            color: var(--dl-color-gray-500);
            padding: var(--dl-space-space-halfunit);
            background: #7fbeff;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .grid-icon02 {
            fill: #00ff27;
            width: 19px;
            height: 13px;
          }
          .grid-text01 {
            color: #bababa;
            font-size: 10px;
            transition: 0.3s;
            font-family: 'Pixel NES';
            margin-left: 1px;
            padding-top: 2px;
            border-color: #626262;
            border-width: 1px;
            margin-right: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: 2px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-bottom-width: 0px;
          }
          .grid-text01:hover {
            color: var(--dl-color-gray-500);
            padding: 10;
            font-size: large;
            background: #7fbeff;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .grid-text01:active {
            color: var(--dl-color-gray-500);
            padding: var(--dl-space-space-halfunit);
            background: #7fbeff;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .grid-icon04 {
            fill: #8100ff;
            width: 19px;
            height: 17px;
          }
          .grid-text02 {
            color: #bababa;
            font-size: 10px;
            transition: 0.3s;
            font-family: 'Pixel NES';
            margin-left: 1px;
            padding-top: 2px;
            border-color: #626262;
            border-width: 1px;
            margin-right: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: 2px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-bottom-width: 0px;
          }
          .grid-text02:hover {
            color: var(--dl-color-gray-500);
            padding: 10;
            font-size: large;
            background: #7fbeff;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .grid-text02:active {
            color: var(--dl-color-gray-500);
            padding: var(--dl-space-space-halfunit);
            background: #7fbeff;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .grid-navbar-interactive {
            color: #e2e2e2;
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
          .grid-desktop-menu {
            flex: 1;
            display: none;
            justify-content: space-between;
          }
          .grid-container04 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .grid-buttons {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .grid-burger-menu {
            width: 63px;
            height: 56px;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-unit);
            justify-content: center;
          }
          .grid-icon06 {
            fill: #d9d9d9;
            width: 36px;
            height: 50%;
          }
          .grid-link {
            display: contents;
          }
          .grid-image {
            width: 67px;
            height: 63px;
            text-decoration: none;
          }
          .grid-mobile-menu {
            top: 0px;
            left: 0px;
            width: 265px;
            height: 100%;
            display: flex;
            position: absolute;
            transform: translateX(-100%);
            transition: 0.5s;
            flex-direction: column;
            padding-bottom: 32px;
            justify-content: space-between;
            background-color: #0e0e0e;
          }
          .grid-nav {
            width: 100%;
            height: var(--dl-size-size-maxwidth);
            display: flex;
            z-index: 1;
            align-self: center;
            align-items: center;
            border-color: #5f5f5f;
            border-width: 0.5px;
            flex-direction: column;
            backdrop-filter: blur(10px);
            justify-content: center;
            background-color: rgba(6, 6, 6, 0.94);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 1px;
            border-bottom-width: 0px;
          }
          .grid-top {
            width: 100%;
            display: flex;
            align-self: flex-end;
            margin-top: 0px;
            align-items: center;
            margin-bottom: 0px;
            padding-right: var(--dl-space-space-unit);
            justify-content: flex-end;
          }
          .grid-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .grid-icon08 {
            fill: #d9d9d9;
            width: 32px;
            height: 25px;
            margin-top: var(--dl-space-space-unit);
          }
          .grid-container05 {
            width: 209px;
            height: 1274px;
            display: flex;
            position: relative;
            transition: 0.3s;
            align-items: center;
            font-family: 'pixel Nex';
            border-color: #252525;
            border-width: 0.5px;
            flex-direction: column;
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }

          .grid-container06 {
            width: 232px;
            height: 93px;
            display: flex;
            position: fixed;
            align-items: center;
            justify-content: center;
          }
          .grid-image1 {
            top: 6px;
            left: -19px;
            width: 83px;
            filter: grayscale();
            height: 84px;
            position: absolute;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .grid-link1 {
            display: contents;
          }
          .grid-heading {
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
            font-family: 'Pixel NES';
            text-decoration: none;
            background-image: linear-gradient(
              rgb(255, 255, 255) 0%,
              rgb(45, 45, 45) 49%,
              rgb(255, 0, 0) 98%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .grid-heading:hover {
            font-size: 1em;
          }
          .grid-container07 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: flex-start;
          }
          .grid-container08 {
            width: 100%;
            height: auto;
            display: flex;
            position: fixed;
            margin-top: 91px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .grid-container09 {
            width: 100%;
            height: 60px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .grid-text03 {
            color: #ffffff;
            font-size: 13px;
            font-family: 'Pixel NES';
          }
          .grid-link2 {
            display: contents;
          }
          .grid-container10 {
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
          .grid-container10:hover {
            color: var(--dl-color-gray-black);
            background: aliceblue;
          }
          .grid-container10:active {
            background: #252525;
          }
          .grid-container11 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .grid-icon10 {
            fill: #ff0000;
            width: 24px;
            height: 24px;
          }
          .grid-text04 {
            font-size: 1em;
            align-self: center;
            font-family: 'Pixel NES';
            margin-left: var(--dl-space-space-unit);
          }
          .grid-container12 {
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
          .grid-container12:hover {
            color: var(--dl-color-gray-black);
            background: aliceblue;
          }
          .grid-container12:active {
            background: #252525;
          }
          .grid-container13 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .grid-icon12 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
          }
          .grid-text05 {
            font-size: 1em;
            align-self: center;
            font-family: 'Pixel NES';
            margin-left: var(--dl-space-space-unit);
          }
          .grid-link3 {
            display: contents;
          }
          .grid-container14 {
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
          .grid-container14:hover {
            color: var(--dl-color-gray-black);
            background: aliceblue;
          }
          .grid-container14:active {
            background: #252525;
          }
          .grid-container15 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .grid-icon14 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .grid-text06 {
            font-size: 1em;
            align-self: center;
            font-family: 'Pixel NES';
            margin-left: var(--dl-space-space-unit);
          }
          .grid-link4 {
            display: contents;
          }
          .grid-container16 {
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
          .grid-container16:hover {
            color: var(--dl-color-gray-black);
            background: aliceblue;
          }
          .grid-container16:active {
            background: #252525;
          }
          .grid-container17 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .grid-icon16 {
            fill: #ff9302;
            width: 24px;
            height: 24px;
          }
          .grid-text07 {
            font-size: 1em;
            align-self: center;
            font-family: 'Pixel NES';
            margin-left: var(--dl-space-space-unit);
          }
          .grid-container18 {
            width: 100%;
            height: auto;
            display: flex;
            position: fixed;
            margin-top: 91px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .grid-container19 {
            width: 100%;
            height: 60px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .grid-text08 {
            color: #ffffff;
            font-size: 13px;
            font-family: 'Pixel NES';
          }
          .grid-link5 {
            display: contents;
          }
          .grid-container20 {
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
          .grid-container20:hover {
            color: var(--dl-color-gray-black);
            background: aliceblue;
          }
          .grid-container20:active {
            background: #252525;
          }
          .grid-container21 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .grid-icon18 {
            fill: #ff0000;
            width: 24px;
            height: 24px;
          }
          .grid-text09 {
            font-size: 1em;
            align-self: center;
            font-family: 'Pixel NES';
            margin-left: var(--dl-space-space-unit);
          }
          .grid-container22 {
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
          .grid-container22:hover {
            color: var(--dl-color-gray-black);
            background: aliceblue;
          }
          .grid-container22:active {
            background: #252525;
          }
          .grid-container23 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .grid-icon20 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
          }
          .grid-text10 {
            font-size: 1em;
            align-self: center;
            font-family: 'Pixel NES';
            margin-left: var(--dl-space-space-unit);
          }
          .grid-link6 {
            display: contents;
          }
          .grid-container24 {
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
          .grid-container24:hover {
            color: var(--dl-color-gray-black);
            background: aliceblue;
          }
          .grid-container24:active {
            background: #252525;
          }
          .grid-container25 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .grid-icon22 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .grid-text11 {
            font-size: 1em;
            align-self: center;
            font-family: 'Pixel NES';
            margin-left: var(--dl-space-space-unit);
          }
          .grid-link7 {
            display: contents;
          }
          .grid-container26 {
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
          .grid-container26:hover {
            color: var(--dl-color-gray-black);
            background: aliceblue;
          }
          .grid-container26:active {
            background: #252525;
          }
          .grid-container27 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .grid-icon24 {
            fill: #ff9302;
            width: 24px;
            height: 24px;
          }
          .grid-text12 {
            font-size: 1em;
            align-self: center;
            font-family: 'Pixel NES';
            margin-left: var(--dl-space-space-unit);
          }
          .grid-container28 {
            width: 100%;
            height: 414px;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .grid-container29 {
            width: var(--dl-size-size-xlarge);
            height: var(--dl-size-size-small);
            display: flex;
            align-items: flex-start;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: solid;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .grid-container30 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: 1017px;
            height: 100%;
            display: flex;
            align-items: center;
            margin-top: 4px;
            padding-right: var(--dl-space-space-unit);
            justify-content: flex-end;
          }
          .grid-icon26 {
            fill: #d9d9d9;
            width: 35px;
            height: 28px;
          }
          .grid-container31 {
            width: var(--dl-size-size-xlarge);
            height: var(--dl-size-size-small);
            display: flex;
            align-items: flex-start;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: solid;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
          }

          @media (max-width: 1600px) {
            .grid-desktop-menu {
              display: none;
            }
            .grid-burger-menu {
              display: flex;
            }
          }
          @media (max-width: 1004px) {
            .grid-container30 {
              width: auto;
            }
          }
          @media (max-width: 479px) {
            .grid-container {
              height: 1819px;
            }
            .grid-container01 {
              width: 100%;
              height: 1113px;
              margin-right: 0px;
            }
            .grid-container02 {
              height: 142px;
            }
            .grid-container03 {
              top: 69px;
              left: -2px;
              width: 100%;
              height: 65px;
              justify-content: center;
            }
            .grid-navbar-interactive {
              padding: var(--dl-space-space-unit);
              padding-right: 16px;
            }
            .grid-icon06 {
              fill: #d9d9d9;
              width: 58px;
              height: 42px;
            }
            .grid-image {
              width: 59px;
            }
            .grid-mobile-menu {
              width: 278px;
              height: 1098px;
              padding: 16px;
              border-color: #444444;
              border-width: 0.5px;
            }
            .grid-nav {
              height: auto;
              border-width: 0px;
              justify-content: flex-start;
              background-color: transparent;
            }
            .grid-top {
              align-items: flex-start;
            }
            .grid-container05 {
              height: 559px;
              border-color: rgba(53, 53, 53, 0.04);
            }
            .grid-container06 {
              width: 265px;
              height: 82px;
              justify-content: center;
            }
            .grid-image1 {
              top: -7px;
              left: -10px;
            }
            .grid-heading {
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
            .grid-container28 {
              height: 379px;
            }
            .grid-container29 {
              height: var(--dl-size-size-small);
            }
            .grid-container30 {
              width: auto;
              display: none;
            }
            .grid-container31 {
              height: var(--dl-size-size-small);
            }
          }
        `}
      </style>
    </>
  )
}

Grid.defaultProps = {
  heading1: 'WELCOME TO RAR3BAY',
  text1: 'RAREBAY.XYZ',
  text112: 'VOLUME: 0 CORE 🗲',
  rootClassName21: '',
  image_src11: 'c7fe840e-7367-4dba-aaa2-d74881872630',
  Heading: 'RAR3BAY',
  text12: 'SELL',
  image_alt3: 'image',
  text121: 'VIEW ITEMS',
  image_src1: 'b8d39b41-22b0-42d6-8389-dbb780965fb3',
  text2: 'RAR310NES',
  text20: 'SATS',
  rootClassName1221: '',
  text11111: 'PORTFOLIO',
  image_alt1: 'image',
  rootClassName1231: '',
  text8: 'FLOOR: 0 CORE 🗲',
  text24: 'POOLS',
  text25: 'portfolio',
  image_alt11: 'image',
  text10: 'VIEW ITEMS',
  text131: 'ITEMS: 10000',
  image_src: '22e33a1b-f6d8-4daf-b476-e403779c8096',
  text11113: 'SATS',
  rootClassName6: '',
  text11112: 'MINT',
  image_alt4: 'image',
  text7: 'ITEMS: 10000',
  text111: 'DEX',
  text16: 'EXPLORE RAR3',
  text: 'OWNED',
  image_src4: '/fav-200h.ico',
  text11: 'EXPLORE RAR3',
  rootClassName7: '',
  text3: 'BWYC I',
  text13111: 'VOMUME: 10 CORE',
  rootClassName12: '',
  rootClassName1241: '',
  rootClassName1: '',
  text14: 'VIEW ITEMS',
  text1111: 'POOLS',
  rootClassName125: '',
  text9: 'VOLUME: 0 CORE 🗲',
  image_alt: 'image',
  Heading2: 'RAR3BAY',
  rootClassName121: '',
  image_alt2: 'image',
  text6: 'WHALECARDS',
  rootClassName124: '',
  rootClassName123: '',
  image_src3: '22e33a1b-f6d8-4daf-b476-e403779c8096',
  rootClassName3: '',
  text26: 'SATS',
  text18: 'POOLS',
  text19: 'portfolio',
  text22: 'DEX',
  text13: 'ITEMS: 10000',
  text17: 'DEX',
  rootClassName1253: '',
  rootClassName111: '',
  rootClassName4: '',
  rootClassName11: '',
  text13113: 'FLOOR: 0 CORE',
  rootClassName1252: '',
  text132: 'VOLUME: 0 CORE 🗲',
  rootClassName5: '',
  video_src:
    'https://bafybeihgbct4yo3zx7jedm3s4w46jlfkbwehzjistubox2tva5ycmlrpgm.ipfs.nftstorage.link/ipfs/bafybeihgbct4yo3zx7jedm3s4w46jlfkbwehzjistubox2tva5ycmlrpgm/Untitled%20video%20-%20Made%20with%20Clipchamp.mp4',
  text23: 'CREATE',
  text15: 'EXPLORE RAR3',
  rootClassName: '',
  text5: 'FLOOR: 0 CORE 🗲',
  text4: 'ITEMS: 10000',
  rootClassName1251: '',
  text21: 'FLOOR: 0 CORE 🗲',
  rootClassName2: '',
  image_src2: '9b4a779a-9126-423b-9ebc-73864324acb1',
  rootClassName122: '',
  Heading1: 'RAR3BAY',
  heading: 'EXPLORE RAR3',
}

Grid.propTypes = {
  heading1: PropTypes.string,
  text1: PropTypes.string,
  text112: PropTypes.string,
  rootClassName21: PropTypes.string,
  image_src11: PropTypes.string,
  Heading: PropTypes.string,
  text12: PropTypes.string,
  image_alt3: PropTypes.string,
  text121: PropTypes.string,
  image_src1: PropTypes.string,
  text2: PropTypes.string,
  text20: PropTypes.string,
  rootClassName1221: PropTypes.string,
  text11111: PropTypes.string,
  image_alt1: PropTypes.string,
  rootClassName1231: PropTypes.string,
  text8: PropTypes.string,
  text24: PropTypes.string,
  text25: PropTypes.string,
  image_alt11: PropTypes.string,
  text10: PropTypes.string,
  text131: PropTypes.string,
  image_src: PropTypes.string,
  text11113: PropTypes.string,
  rootClassName6: PropTypes.string,
  text11112: PropTypes.string,
  image_alt4: PropTypes.string,
  text7: PropTypes.string,
  text111: PropTypes.string,
  text16: PropTypes.string,
  text: PropTypes.string,
  image_src4: PropTypes.string,
  text11: PropTypes.string,
  rootClassName7: PropTypes.string,
  text3: PropTypes.string,
  text13111: PropTypes.string,
  rootClassName12: PropTypes.string,
  rootClassName1241: PropTypes.string,
  rootClassName1: PropTypes.string,
  text14: PropTypes.string,
  text1111: PropTypes.string,
  rootClassName125: PropTypes.string,
  text9: PropTypes.string,
  image_alt: PropTypes.string,
  Heading2: PropTypes.string,
  rootClassName121: PropTypes.string,
  image_alt2: PropTypes.string,
  text6: PropTypes.string,
  rootClassName124: PropTypes.string,
  rootClassName123: PropTypes.string,
  image_src3: PropTypes.string,
  rootClassName3: PropTypes.string,
  text26: PropTypes.string,
  text18: PropTypes.string,
  text19: PropTypes.string,
  text22: PropTypes.string,
  text13: PropTypes.string,
  text17: PropTypes.string,
  rootClassName1253: PropTypes.string,
  rootClassName111: PropTypes.string,
  rootClassName4: PropTypes.string,
  rootClassName11: PropTypes.string,
  text13113: PropTypes.string,
  rootClassName1252: PropTypes.string,
  text132: PropTypes.string,
  rootClassName5: PropTypes.string,
  video_src: PropTypes.string,
  text23: PropTypes.string,
  text15: PropTypes.string,
  rootClassName: PropTypes.string,
  text5: PropTypes.string,
  text4: PropTypes.string,
  rootClassName1251: PropTypes.string,
  text21: PropTypes.string,
  rootClassName2: PropTypes.string,
  image_src2: PropTypes.string,
  rootClassName122: PropTypes.string,
  Heading1: PropTypes.string,
  heading: PropTypes.string,
}

export default Grid
