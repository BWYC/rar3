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
import Container from "../components/Container/Container"




const Home = (props) => {

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


  return (
    <>
 
      <div className="home-container">
        <Head>
          <title>RareBay | HOME OF RAR3</title>
          <meta property="og:title" content="RareBay | DEX1" />
        </Head>
            <div className="home-container35">
              <div className="home-container36">
                <div className="home-container37">
                  <Link className="home-link12" href="#">
                    
                      <h1 className="home-heading1">WELCOME TO RAR3BAY</h1>
                  
                  </Link>
                </div>
              </div>
              <div className="home-container38">
     <video loop autoPlay autoFocus src="RARE.mp4" style={{border: "solid 2px white", borderRadius: "16px", width: "70%"}}/>           
              </div>
              <div className="home-container39">
                <div className="home-container40">
                  <div className="home-container41">
                    <div className="home-container42">
                      <div className="home-container43">
                        <div className="home-container44">
                          <Image
                          style={{borderRadius: "100%"}}
                          width={30}
                          height={30}
                            alt="image"
                            src="/gfdgfhyu1-200h.png"
                            className="home-image2"
                          />
                          <span className="home-text12">rar31oneS</span>
                        </div>
                        <div className="home-container45">
                          <div className="home-container46">
                            <span className="home-text13">
                             3100 RAR3 COLLECTIBLES PIONEERING THE DECENTRALIZATION OF NFTS ON RAREBAY DEX
                            </span>
                          </div>
                          <div className="home-container47">
                            <span className="home-text14">FLOOR: 0.0</span>
                            <a href={`/collection`} className="home-text15">VIEW ITEMS</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="home-container48">
                    <div className="home-container49">
                      <div className="home-container50">
                        <div className="home-container51">
                          <Image
                          style={{borderRadius: "100%"}}
                          width={30}
                          height={30}
                            alt="image"
                            src="/sdzhksgdasha-200w.png"
                            className="home-image3"
                          />
                          <span className="home-text16">BWYC II</span>
                        </div>
                        <div className="home-container52">
                          <div className="home-container53">
                            <span className="home-text17">
                             BoredWhalesYachtClub Season 2
                            </span>
                          </div>
                          <div className="home-container54">
                            <span className="home-text18">FLOOR: 0.0</span>
                            <a href={`/collection2`} className="home-text15">VIEW ITEMS</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="home-container55">
                    <div className="home-container56">
                      <div className="home-container57">
                        <div className="home-container58">
                          <Image
                          style={{borderRadius: "100%"}}
                          width={30}
                          height={30}
                            alt="image"
                            src="/sf-200h.png"
                            className="home-image4"
                          />
                          <span className="home-text20">BWYC I</span>
                        </div>
                        <div className="home-container59">
                          <div className="home-container60">
                            <span className="home-text21">
                           BoredWhalesYachtClub
                            </span>
                          </div>
                          <div className="home-container61">
                            <span className="home-text22">FLOOR: 0.0</span>
                            <span className="home-text23">VIEW ITEMS</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="home-container62">
                    <div className="home-container63">
                      <div className="home-container64">
                        <div className="home-container65">
                          <Image
                          style={{borderRadius: "100%"}}
                          width={30}
                          height={30}
                            alt="image"
                            src="/whls%20(1)-200h.jpg"
                            className="home-image5"
                          />
                          <span className="home-text24">WHALECARDS</span>
                        </div>
                        <div className="home-container66">
                          <div className="home-container67">
                            <span className="home-text25">
                              Collection Description
                            </span>
                          </div>
                          <div className="home-container68">
                            <span className="home-text26">FLOOR: 0.0</span>
                            <span className="home-text27">VIEW ITEMS</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Container maxWidth="lg">
        <div className="home-container69">
          <div className="home-feature-card">
            <h2 className="home-text28">HOME OF RARE</h2>
            <span className="home-text28">discover, track, collect, OWN</span>
            <Link legacyBehavior href="/dex">
              <a className="home-link13">GET STARTED</a>
            </Link>
          </div>
        </div>
        </Container>
          </div>
     
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-image: linear-gradient(
              45deg,
              rgba(0, 0, 0, 0.55) 0%,
              rgb(0, 25, 50) 100%
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
            font-size: 13px;
            font-family: "Pixel NES";
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
            width: 100%;
            font-family: Pixel NES;
            height: 375px;
            display: flex;
            align-items: center;
            flex-direction: column;
            color: inital;
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
            background-image: linear-gradient(
              45deg,
              rgba(0, 0, 0, 0.55) 0%,
              rgb(0, 50, 60) 60%
            );
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
              height: 1819px;
            }
            .home-container02 {
              width: 100%;
              height: 1113px;
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
    
    </>
  );
};

export default Home;
