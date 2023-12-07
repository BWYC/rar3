import React from "react";
import Link from "next/link";
import Head from "next/head";
import Stake from "./stake"
import Stake1 from "./stake1"
import Stake2 from "./stake2"

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
import Modal from 'react-modal';
import Container from "../components/Container/Container";



const customStyles = {
  content: {
    top: '55%',
    left: '50%',
    right: 'auto',
    paddingBottom: '10%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: "80%",
    overflow: "scroll",
    borderRadius: "16px",
    background: "rgba(0, 0, 0, 0.54)",
    border: "solid 2px",
    backdropFilter: "blur(10px)",
    color:  "white",
    overflowX: "hidden",
    textAlign: "center"
  },
};

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


const Mints = (props) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalIsOpen1, setIsOpen1] = React.useState(false);
  const [modalIsOpen2, setIsOpen2] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function openModal1() {
    setIsOpen1(true);
  }
  function openModal2() {
    setIsOpen2(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = 'orange';
  }

  function closeModal() {
    setIsOpen(false);
  }
  function closeModal1() {
    setIsOpen1(false);
  }
  function closeModal2() {
    setIsOpen2(false);
  }
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
      <div className="mints-container">
        <Head>
          <title>mints - RareBay | DEX1</title>
          <meta property="og:title" content="mints - RareBay | DEX1" />
        </Head>
      <Container maxWidth="xl">
            <div className="mints-container35">
              <div className="mints-container36">
                <div className="mints-container37">
                  <Link legacyBehavior href="/mints">
                    <a className="mints-link10">
                      <h1 className="mints-heading1">MINT AND STAKE AIO </h1>
                    </a>
                  </Link>
                </div>
                <div className="mints-container38">
            <div className="mints-container39">
              <div className="mints-container40">
                <div className="mints-container41">
                  <div className="mints-container42">
                    <React.Fragment>
                      <iframe
                        src="https://embed.ipfscdn.io/ipfs/bafybeicd3qfzelz4su7ng6n523virdsgobrc5pcbarhwqv3dj3drh645pi/?contract=0x98E8B58c44e3c7f08171bb57aeD010fDF71B351E&chain=%7B%22name%22%3A%22Core+Blockchain+Mainnet%22%2C%22chain%22%3A%22Core%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fcore-blockchain.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Core+Blockchain+Native+Token%22%2C%22symbol%22%3A%22CORE%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22core%22%2C%22chainId%22%3A1116%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22core-blockchain%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmeTQaBCkpbsxNNWTpoNrMsnwnAEf1wYTcn7CiiZGfUXD2%22%2C%22width%22%3A200%2C%22height%22%3A217%2C%22format%22%3A%22png%22%7D%7D&clientId=678d5b0199cde588796872ea22804505&theme=dark&primaryColor=blue"
                        width="85%"
                        height="100%"
                        style={{
                          border: "2px solid gray",
                          borderRadius: "16px",
                          backgroundColor: "gray",
                          marginLeft: "10%"
                        }}
                      />
                    </React.Fragment>
                  </div>
                </div>
                <div style={{height: "20px"}}></div>
                <button className="pools-button button" onClick={openModal1}>STAKE</button>
              <Modal
        isOpen={modalIsOpen1}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="STAKE"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>WHALECARD STAKING POOL</h2>
        <div><Stake2 />
        <div style={{height: "10px"}}></div>
        <button className='button' onClick={closeModal1}>EXIT</button>
        </div>
       
      </Modal>
              </div>
              <div className="mints-container43">
                <div className="mints-container44">
                  <div className="mints-container45">
                    <React.Fragment>
                      <iframe
                        src="https://embed.ipfscdn.io/ipfs/bafybeicd3qfzelz4su7ng6n523virdsgobrc5pcbarhwqv3dj3drh645pi/?contract=0x9bA655328197b3fF54b9554294ef8017CdC09AC3&chain=%7B%22name%22%3A%22Core+Blockchain+Mainnet%22%2C%22chain%22%3A%22Core%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fcore-blockchain.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Core+Blockchain+Native+Token%22%2C%22symbol%22%3A%22CORE%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22core%22%2C%22chainId%22%3A1116%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22core-blockchain%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmeTQaBCkpbsxNNWTpoNrMsnwnAEf1wYTcn7CiiZGfUXD2%22%2C%22width%22%3A200%2C%22height%22%3A217%2C%22format%22%3A%22png%22%7D%7D&clientId=678d5b0199cde588796872ea22804505&theme=dark&primaryColor=blue"
                        width="90%"
                        height="100%"
                        style={{
                          border: "2px solid gray",
                          borderRadius: "16px",
                          backgroundColor: "gray",
                          marginLeft: "5%"
                        }}
                      />
                    </React.Fragment>
                  </div>
                </div>
                <div style={{height: "20px"}}></div>
                <button className="pools-button button" onClick={openModal}>STAKE</button>
              <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="STAKE"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>RAR3 STAKING POOL</h2>
        <div><Stake />
        <div style={{height: "10px"}}></div>
        <button className='button' onClick={closeModal}>EXIT</button>
        </div>
       
      </Modal>
              </div>
              <div className="mints-container46">
                <div className="mints-container47">
                  <div className="mints-container48">
                    <React.Fragment>
                      <iframe
                        src="https://embed.ipfscdn.io/ipfs/bafybeicd3qfzelz4su7ng6n523virdsgobrc5pcbarhwqv3dj3drh645pi/?contract=0xF6C2584850Fd1F50fc979F72888Fb67CFa39a2C2&chain=%7B%22name%22%3A%22Core+Blockchain+Mainnet%22%2C%22chain%22%3A%22Core%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fcore-blockchain.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Core+Blockchain+Native+Token%22%2C%22symbol%22%3A%22CORE%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22core%22%2C%22chainId%22%3A1116%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22core-blockchain%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmeTQaBCkpbsxNNWTpoNrMsnwnAEf1wYTcn7CiiZGfUXD2%22%2C%22width%22%3A200%2C%22height%22%3A217%2C%22format%22%3A%22png%22%7D%7D&clientId=678d5b0199cde588796872ea22804505&theme=dark&primaryColor=blue"
                        width="90%"
                        height="100%"
                        style={{
                          border: "2px solid gray",
                          borderRadius: "16px",
                          backgroundColor: "gray",
                          marginLeft: "5%"
                        }}
                      />
                    </React.Fragment>
                  </div>
                </div>
                <div style={{height: "20px"}}></div>
                <button className="pools-button button" onClick={openModal2}>STAKE</button>
              <Modal
        isOpen={modalIsOpen2}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal2}
        style={customStyles}
        contentLabel="STAKE"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>BWYC ii STAKING POOL</h2>
        <div><Stake1 />
        <div style={{height: "10px"}}></div>
        <button className='button' onClick={closeModal2}>EXIT</button>
        </div>
       
      </Modal>
              </div>
            </div>
          </div>
              </div>
            </div>
            </Container>
          </div>

      <style jsx>
        {`
          .mints-container {
            width: 100%;
            display: flex;
            overflow: auto;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            
            background-image: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.55) 0%,
              rgb(0, 25, 50) 100%
            );
          }
          .mints-container01 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-size-size-maxwidth);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .mints-container02 {
            width: 100%;
            height: var(--dl-size-size-xlarge);
            display: flex;
            align-items: center;
            font-family: "pixel NES";
            flex-direction: column;
            justify-content: flex-start;
          }
          .mints-container02:active {
            border-bottom: solid 2px white;
          }
          .mints-container03 {
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .mints-container04 {
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
          .mints-container04:hover {
            background: rgba(100, 100, 100, 0.69);
          }
          .mints-icon {
            fill: #008aff;
            width: 23px;
            height: 21px;
          }
          .mints-text {
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
            border-top-width: 0px;
            border-left-width: 0px;
            border-bottom-width: 0px;
          }
          .mints-text:hover {
            color: var(--dl-color-gray-500);
            padding: 10;
            font-size: large;
            background: #7fbeff;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .mints-text:active {
            color: var(--dl-color-gray-500);
            padding: var(--dl-space-space-halfunit);
            background: #7fbeff;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .mints-icon02 {
            fill: #00ff27;
            width: 19px;
            height: 13px;
          }
          .mints-text01 {
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
            border-top-width: 0px;
            border-left-width: 0px;
            border-bottom-width: 0px;
          }
          .mints-text01:hover {
            color: var(--dl-color-gray-500);
            padding: 10;
            font-size: large;
            background: #7fbeff;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .mints-text01:active {
            color: var(--dl-color-gray-500);
            padding: var(--dl-space-space-halfunit);
            background: #7fbeff;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .mints-icon04 {
            fill: #8100ff;
            width: 19px;
            height: 17px;
          }
          .mints-text02 {
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
            border-top-width: 0px;
            border-left-width: 0px;
            border-bottom-width: 0px;
          }
          .mints-text02:hover {
            color: var(--dl-color-gray-500);
            padding: 10;
            font-size: large;
            background: #7fbeff;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .mints-text02:active {
            color: var(--dl-color-gray-500);
            padding: var(--dl-space-space-halfunit);
            background: #7fbeff;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .mints-navbar-interactive {
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
          .mints-desktop-menu {
            flex: 1;
            display: none;
            justify-content: space-between;
          }
          .mints-container05 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .mints-buttons {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .mints-burger-menu {
            width: 63px;
            height: 56px;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-unit);
            justify-content: center;
          }
          .mints-icon06 {
            fill: #6f6f6f;
            width: 36px;
            height: 50%;
            transition: 0.3s;
          }
          .mints-icon06:hover {
            width: var(--dl-size-size-small);
          }
          .mints-link {
            display: contents;
          }
          .mints-image {
            width: 67px;
            height: 63px;
            text-decoration: none;
          }
          .mints-mobile-menu {
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
          .mints-nav {
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
          .mints-top {
            width: 100%;
            display: flex;
            align-self: flex-end;
            margin-top: 0px;
            align-items: center;
            margin-bottom: 0px;
            padding-right: var(--dl-space-space-unit);
            justify-content: flex-end;
          }
          .mints-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .mints-icon08 {
            fill: #d9d9d9;
            width: 32px;
            height: 25px;
            margin-top: var(--dl-space-space-unit);
          }
          .mints-container06 {
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

          .mints-container07 {
            width: 232px;
            height: 93px;
            display: flex;
            position: fixed;
            align-items: center;
            justify-content: center;
          }
          .mints-image1 {
            top: 6px;
            left: -19px;
            width: 83px;
            filter: grayscale();
            height: 84px;
            position: absolute;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .mints-link01 {
            display: contents;
          }
          .mints-heading {
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
          .mints-heading:hover {
            font-size: 1em;
          }
          .mints-container08 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: flex-start;
          }
          .mints-container09 {
            width: 100%;
            height: auto;
            display: flex;
            position: fixed;
            margin-top: 91px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .mints-container10 {
            width: 100%;
            height: 60px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .mints-text03 {
            color: #ffffff;
            font-size: 13px;
            font-family: "Pixel NES";
          }
          .mints-link02 {
            display: contents;
          }
          .mints-container11 {
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
          .mints-container11:hover {
            color: var(--dl-color-gray-black);
            background: aliceblue;
          }
          .mints-container11:active {
            background: #252525;
          }
          .mints-container12 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .mints-icon10 {
            fill: #ff0000;
            width: 24px;
            height: 24px;
          }
          .mints-text04 {
            font-size: 1em;
            align-self: center;
            font-family: "Pixel NES";
            margin-left: var(--dl-space-space-unit);
          }
          .mints-container13 {
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
          .mints-container13:hover {
            color: var(--dl-color-gray-black);
            background: aliceblue;
          }
          .mints-container13:active {
            background: #252525;
          }
          .mints-container14 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .mints-icon12 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
          }
          .mints-text05 {
            font-size: 1em;
            align-self: center;
            font-family: "Pixel NES";
            margin-left: var(--dl-space-space-unit);
          }
          .mints-link03 {
            display: contents;
          }
          .mints-container15 {
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
          .mints-container15:hover {
            color: var(--dl-color-gray-black);
            background: aliceblue;
          }
          .mints-container15:active {
            background: #252525;
          }
          .mints-container16 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .mints-icon14 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .mints-text06 {
            font-size: 1em;
            align-self: center;
            font-family: "Pixel NES";
            margin-left: var(--dl-space-space-unit);
          }
          .mints-link04 {
            display: contents;
          }
          .mints-container17 {
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
          .mints-container17:hover {
            color: var(--dl-color-gray-black);
            background: aliceblue;
          }
          .mints-container17:active {
            background: #252525;
          }
          .mints-container18 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .mints-icon16 {
            fill: #ff9302;
            width: 24px;
            height: 24px;
          }
          .mints-text07 {
            font-size: 1em;
            align-self: center;
            font-family: "Pixel NES";
            margin-left: var(--dl-space-space-unit);
          }
          .mints-container19 {
            width: 100%;
            height: auto;
            display: flex;
            position: fixed;
            margin-top: 91px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .mints-container20 {
            width: 100%;
            height: 60px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .mints-text08 {
            color: #ffffff;
            font-size: 13px;
            font-family: "Pixel NES";
          }
          .mints-link05 {
            display: contents;
          }
          .mints-container21 {
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
          .mints-container21:hover {
            color: var(--dl-color-gray-black);
            background: aliceblue;
          }
          .mints-container21:active {
            background: #252525;
          }
          .mints-container22 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .mints-icon18 {
            fill: #ff0000;
            width: 24px;
            height: 24px;
          }
          .mints-text09 {
            font-size: 1em;
            align-self: center;
            font-family: "Pixel NES";
            margin-left: var(--dl-space-space-unit);
          }
          .mints-container23 {
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
          .mints-container23:hover {
            color: var(--dl-color-gray-black);
            background: aliceblue;
          }
          .mints-container23:active {
            background: #252525;
          }
          .mints-container24 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .mints-icon20 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
          }
          .mints-link06 {
            font-size: 1em;
            align-self: center;
            font-family: "Pixel NES";
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .mints-link07 {
            display: contents;
          }
          .mints-container25 {
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
          .mints-container25:hover {
            color: var(--dl-color-gray-black);
            background: aliceblue;
          }
          .mints-container25:active {
            background: #252525;
          }
          .mints-container26 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .mints-icon22 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .mints-text10 {
            font-size: 1em;
            align-self: center;
            font-family: "Pixel NES";
            margin-left: var(--dl-space-space-unit);
          }
          .mints-link08 {
            display: contents;
          }
          .mints-container27 {
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
          .mints-container27:hover {
            color: var(--dl-color-gray-black);
            background: aliceblue;
          }
          .mints-container27:active {
            background: #252525;
          }
          .mints-container28 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .mints-icon24 {
            fill: #ff9302;
            width: 24px;
            height: 24px;
          }
          .mints-text11 {
            font-size: 1em;
            align-self: center;
            font-family: "Pixel NES";
            margin-left: var(--dl-space-space-unit);
          }
          .mints-link09 {
            display: contents;
          }
          .mints-container29 {
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
          .mints-container29:hover {
            color: var(--dl-color-gray-black);
            background: aliceblue;
          }
          .mints-container29:active {
            background: #252525;
          }
          .mints-container30 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .mints-icon26 {
            fill: var(--dl-color-success-700);
            width: 24px;
            height: 24px;
          }
          .mints-text12 {
            font-size: 1em;
            align-self: center;
            font-family: "Pixel NES";
            margin-left: var(--dl-space-space-unit);
          }
          .mints-container31 {
            width: 100%;
            height: 414px;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .mints-container32 {
            width: var(--dl-size-size-xlarge);
            height: var(--dl-size-size-small);
            display: flex;
            align-items: flex-start;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: solid;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .mints-container33 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: 1017px;
            height: 100%;
            display: flex;
            align-items: center;
            margin-right: 0px;
            padding-right: var(--dl-space-space-unit);
            justify-content: flex-end;
          }
          .mints-icon28 {
            fill: var(--dl-color-gray-500);
            width: 35px;
            height: 28px;
          }
          .mints-container34 {
            width: var(--dl-size-size-xlarge);
            height: var(--dl-size-size-small);
            display: flex;
            align-items: flex-start;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: solid;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .mints-container35 {
            width: 100%;
            height: 100%;
            display: flex;
            margin-top: 118px;
            align-items: flex-start;
            flex-direction: column;
          }
          .mints-container36 {
            width: 100%;
            height: auto;
            display: flex;
            z-index: auto;
            position: inherit;
            align-self: center;
            margin-top: 0px;
            align-items: center;
            padding-top: 0px;
            flex-direction: column;
            justify-content: center;
          }
          .mints-container37 {
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
          .mints-link10 {
            display: contents;
          }
          .mints-heading1 {
            color: rgb(140, 140, 140);
            width: auto;
            height: 56px;
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
              rgb(255, 255, 255) 0%,
              rgb(45, 45, 45) 49%,
              rgb(255, 0, 0) 98%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .mints-heading1:hover {
            font-size: 1em;
          }
          .mints-container38 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            justify-content: center;
          }
          .mints-container39 {
            width: 1449px;
            height: 840px;
            display: flex;
            position: relative;
            align-self: center;
            align-items: center;
            font-family: "pixel NES";
            padding-top: var(--dl-space-space-oneandhalfunits);
            border-color: #2f2f2f;
            border-width: 1px;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .mints-container40 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .mints-container41 {
            width: 396px;
            height: 677px;
            margin-right: 0px;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .mints-container42 {
            display: contents;
          }
          .mints-button {
            color: #9c9c9c;
            width: 260px;
            height: 48px;
            box-shadow: 5px 6px 0px 0px #5f5f5f;
            margin-top: var(--dl-space-space-unit);
            transition: 0.3s;
            border-color: #4e4e4e;
            border-width: 0.5px;
            border-radius: var(--dl-radius-radius-radius8);
            background-color: #252525;
          }
          .mints-button:hover {
            color: var(--dl-color-gray-white);
            font-size: x-large;
            background: gray;
          }
          .mints-container43 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .mints-container44 {
            width: 368px;
            height: 680px;
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
          }
          .mints-container45 {
            display: contents;
          }
          .mints-button1 {
            color: #a6a6a6;
            width: 260px;
            height: 48px;
            box-shadow: 5px 6px 0px 0px #555555;
            margin-top: var(--dl-space-space-unit);
            transition: 0.3s;
            border-color: #818181;
            border-width: 0.5px;
            border-radius: var(--dl-radius-radius-radius8);
            background-color: #202020;
          }
          .mints-button1:hover {
            font-size: x-large;
          }
          .mints-container46 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .mints-container47 {
            width: 361px;
            height: 677px;
            align-self: center;
            margin-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
          }
          .mints-container48 {
            display: contents;
          }
          .mints-button2 {
            color: #d4d4d4;
            width: 260px;
            height: 48px;
            box-shadow: 5px 6px 0px 0px #555555;
            margin-top: var(--dl-space-space-unit);
            transition: 0.3s;
            border-color: #7b7b7b;
            border-width: 0.5px;
            border-radius: var(--dl-radius-radius-radius8);
            background-color: #2d2d2d;
          }
          .mints-button2:hover {
            font-size: x-large;
          }
          @media (max-width: 1600px) {
            .mints-desktop-menu {
              display: none;
            }
            .mints-burger-menu {
              display: flex;
            }
          }
          @media (max-width: 1004px) {
            .mints-container33 {
              width: auto;
            }
          }
          @media (max-width: 479px) {
            .mints-container{
               min-height: 2800px;
            }
            .mints-container01 {
              height: 1819px;
            }
            .mints-container02 {
              width: 100%;
              height: 323px;
              margin-right: 0px;
            }
            .mints-container03 {
              height: 142px;
            }
            .mints-container04 {
              top: 69px;
              left: -2px;
              width: 100%;
              height: 65px;
              justify-content: center;
            }
            .mints-navbar-interactive {
              padding: var(--dl-space-space-unit);
              padding-right: 16px;
            }
            .mints-icon06 {
              fill: #d9d9d9;
              width: 58px;
              height: 42px;
            }
            .mints-image {
              width: 59px;
            }
            .mints-mobile-menu {
              width: 278px;
              height: 1098px;
              padding: 16px;
              border-color: #444444;
              border-width: 0.5px;
            }
            .mints-nav {
              height: auto;
              border-width: 0px;
              justify-content: flex-start;
              background-color: transparent;
            }
            .mints-top {
              align-items: flex-start;
            }
            .mints-container06 {
              height: 559px;
              border-color: rgba(53, 53, 53, 0.04);
            }
            .mints-container07 {
              width: 265px;
              height: 82px;
              justify-content: center;
            }
            .mints-image1 {
              top: -7px;
              left: -10px;
            }
            .mints-heading {
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
            .mints-container31 {
              height: 379px;
            }
            .mints-container32 {
              height: var(--dl-size-size-small);
            }
            .mints-container33 {
              width: auto;
              display: none;
            }
            .mints-container34 {
              height: var(--dl-size-size-small);
            }
            .mints-container35 {
              height: auto;
              margin-top: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .mints-container36 {
              height: 47px;
              margin-top: 0px;
            }
            .mints-container37 {
              width: 355px;
              height: 114px;
            }
            .mints-heading1 {
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
            .mints-container38 {
              align-items: center;
            }
            .mints-container39 {
              width: 100%;
              height: 2509px;
              display: flex;
              margin-top: var(--dl-space-space-twounits);
              margin-bottom: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .mints-container40 {
              width: 100%;
              border-color: #484848;
              border-width: 1px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-twounits);
              border-top-width: 0px;
              border-left-width: 0px;
              border-right-width: 0px;
            }
            .mints-container41 {
              margin-top: var(--dl-space-space-twounits);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .mints-container43 {
              border-color: #4e4e4e;
              border-width: 1px;
              margin-bottom: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
              border-top-width: 0px;
              border-left-width: 0px;
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .mints-container44 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .mints-container46 {
              border-color: #434343;
              border-width: 1px;
              margin-bottom: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
              justify-content: center;
              border-top-width: 0px;
              border-left-width: 0px;
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .mints-container47 {
              margin-left: 0px;
            }
          }
          .home-container {
            font-family: Pixel NES;
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background: linear-gradient(
              90deg,
              rgb(0, 0, 0, 0.5),
              rgba(0, 50, 150, 0.206),
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
            width: 80%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            margin-top: 2%;
          }
          .home-container36 {
            width: 100%;
            height: 100%;
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
            height: 100%;
            display: flex;
            position: relative;
            align-self: center;
            margin-top: 100px;
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
              rgb(255, 0, 0) 98%
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
            width: 100%;
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
            background-image: url("/1080x360-1200w.jpeg");
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
            width: 90%;
            font-family: Pixel NES;
            height: 375px;
            display: flex;
            align-items: center;
            flex-direction: column;
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
              margin-top: 150px;
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

export default Mints;
