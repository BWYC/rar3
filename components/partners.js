import React from 'react'

import PropTypes from 'prop-types'
import useState from "react"
import {Discord2, TwitterOutline, Network} from '@web3uikit/icons'
import Image from 'next/image'
import X from "../public/x.png"
import C from "../public/core.png"
import { NetworkInput } from '@thirdweb-dev/sdk'
import { NetworkSelector } from '@thirdweb-dev/react'
import Link from 'next/link'


const Patner = (props) => {

  return (
    <>
      <div className={`footer-container ${props.rootClassName} `}>
        <div className="footer-container1">
          <Link href="https://coredao.org">  <Image width="50" height="50" src={C} alt="CORE"/></Link>
      
        </div>
        <div className="footer-container1">
          <Link href="https://rarebay.xyz">  <Image width="60" height="60" src="/fav-200h.ico" alt="RARE" style={{borderRadius: "100%"}}/></Link>
      
        </div>
        <div className="footer-container1">
          <Link href="https://thirdweb.com">  <Image width="100" height="80" src="/3rd.png" alt="ThirdWeb" style={{borderRadius: "8px", border: "solid 0px gray"}} /></Link>
      
        </div>
        <div className="footer-container1">
          <Link href="https://metamask.io">  <Image width="48" height="48" src="/mt.png" alt="MetaMask" /></Link>
      
        </div>
        <div className="footer-container1">
          <Link href="https://bitcoin.org">  <Image width="50" height="50" src="/btc.png" alt="Bitcoin" /></Link>
      
        </div>
        <div className="footer-container1">
          <Link href="https://nextjs.org">  <Image width="50" height="50" src="/px.png" alt="NextJS" /></Link>
      
        </div>
      </div>
      <style jsx>
        {`
          .footer-container {
            width: 100%;
            height: 60px;
            display: flex;
            z-index: auto;
            position: absolute;
            align-items: center;
            font-family: 'pixel NES';
            flex-direction: row;
            padding-bottom: 6px;
            justify-content: center;
            margin-top: -5%;
            padding: 2%;
            margin-left: -5%;
            cursor: pointer;
            color: initial;
            font-size: 10px;
            background: initial;
            backdrop-filter: blur(50px);
            justify-self: center;
          }
          .footer-container1 {
            width: auto;
            height: 42px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rbga(0, 0, 0, 0.7);
            margin: 3%;
            cursor: pointer;
            gap: 20px;
            color: white;
          }
          .footer-container2 {
            width: 100%;
            height: 42px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rbga(0, 0, 0, 0.7);
            color: lightgray;
          }
          .footer-text {
            width: 100%;
            text-align: center;
            color: initial;
          }
          .footer-root-class-name {
            left: -2px;
            bottom: -2px;
          }
          .footer-root-class-name1 {
            right: 0px;
            bottom: -11px;
          }
          .footer-root-class-name2 {
            right: 0px;
            bottom: -11px;
          }
          .footer-root-class-name3 {
            right: -1px;
            bottom: -14px;
          }
          .footer-root-class-name4 {
            left: -5px;
            bottom: -12px;
          }
          .footer-root-class-name5 {
            left: -2px;
            bottom: -2px;
          }
          .footer-root-class-name6 {
            left: -2px;
            bottom: -2px;
          }
          .footer-root-class-name7 {
            left: -2px;
            bottom: -2px;
          }
          .footer-root-class-name8 {
            left: -2px;
            bottom: -2px;
          }
          .footer-root-class-name9 {
            left: -2px;
            bottom: -2px;
          }
          .footer-root-class-name10 {
            left: -2px;
            bottom: -2px;
          }
          @media (max-width: 1004px) {
            .footer-text {
              font-size: 13px;
            }
          }
          @media (max-width: 479px) {
            .footer-container{
              display: none;
            }
            .footer-container1 {
              gap: 10;
              width: auto;
            }
            .footer-text {
              font-size: 10px;
            }
          }
        `}
      </style>
    </>
  )
}



export default Patner;
