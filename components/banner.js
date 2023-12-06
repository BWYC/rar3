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


const Banner = (props) => {

  return (
    <>
      <div className={`footer-container ${props.rootClassName} `}>
        <div className="footer-container1">
          <Link href="/">  <Image width="20" height="20" src={C} alt="core"/></Link><p style={{marginLeft: "-15%"}}>mainnet</p>
      
        </div>
      </div>
      <style jsx>
        {`
          .footer-container {
            width: 300px;
            height: auto;
            display: flex;
            z-index: 100;
            position: absolute;
            align-items: center;
            font-family: 'pixel NES';
            flex-direction: row;
            padding-bottom: 6px;
            justify-content: center;
            margin-top: -30%;
            margin-left: -5%;
            cursor: pointer;
            color: initial;
            font-size: 10px;
          }
          .footer-container1 {
            width: auto;
            height: 42px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rbga(0, 0, 0, 0.7);
            marginRight: 0.5%;
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

Banner.defaultProps = {
  text1: 'TERMS AND SERVICE',
  text11: 'RAREBAY ALL RIGHTS RESERVED  ©️ 2023',
  rootClassName: '',
}

Banner.propTypes = {
  text1: PropTypes.string,
  text11: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Banner;
