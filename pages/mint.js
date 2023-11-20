import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Search from '../components/search'
import Mint from '../components/mint'
import Footer from '../components/footer'

const Mint = (props) => {
  return (
    <>
      <div className="mint-container">
        <Head>
          <title>Mint - RareBay | DEX</title>
          <meta property="og:title" content="Mint - RareBay | DEX" />
        </Head>
        <div className="mint-container01">
          <div className="mint-container02">
            <div className="mint-container03">
              <img
                alt="image"
                src="22e33a1b-f6d8-4daf-b476-e403779c8096"
                className="mint-image"
              />
              <Link href="/">
                <a className="mint-link">RAREBAY.XYZ</a>
              </Link>
            </div>
            <div className="mint-container04"></div>
            <div className="mint-container05">
              <div className="mint-container06">
                <span className="mint-text">EXPLORE RAR3</span>
              </div>
              <div className="mint-container07">
                <div className="mint-container08">
                  <svg viewBox="0 0 1024 1024" className="mint-icon">
                    <path d="M768 554q70 0 120 51t50 121-50 120-120 50-120-50-50-120 50-121 120-51zM768 640q-34 0-60 26t-26 60 26 59 60 25 60-25 26-59-26-60-60-26zM512 128q70 0 120 50t50 120-50 121-120 51-120-51-50-121 50-120 120-50zM512 214q-34 0-60 25t-26 59 26 60 60 26 60-26 26-60-26-59-60-25zM256 554q70 0 120 51t50 121-50 120-120 50-120-50-50-120 50-121 120-51zM256 640q-34 0-60 26t-26 60 26 59 60 25 60-25 26-59-26-60-60-26z"></path>
                  </svg>
                  <div className="mint-container09">
                    <Link href="/dex">
                      <a className="mint-link1">DEX</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mint-container10">
                <div className="mint-container11">
                  <svg viewBox="0 0 1024 1024" className="mint-icon02">
                    <path d="M1011.328 134.496c-110.752-83.928-281.184-134.034-455.91-134.034-216.12 0-392.226 75.456-483.16 207.020-42.708 61.79-66.33 134.958-70.208 217.474-3.454 73.474 8.884 154.726 36.684 242.146 94.874-284.384 359.82-507.102 665.266-507.102 0 0-285.826 75.232-465.524 308.192-0.112 0.138-2.494 3.090-6.614 8.698-36.080 48.278-67.538 103.162-91.078 165.328-39.87 94.83-76.784 224.948-76.784 381.782h128c0 0-19.43-122.222 14.36-262.79 55.89 7.556 105.858 11.306 150.852 11.306 117.678 0 201.37-25.46 263.388-80.124 55.568-48.978 86.198-114.786 118.624-184.456 49.524-106.408 105.654-227.010 268.654-320.152 9.33-5.332 15.362-14.992 16.056-25.716s-4.040-21.080-12.606-27.572z"></path>
                  </svg>
                  <div className="mint-container12">
                    <Link href="/mint">
                      <a className="mint-link2">MINT</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mint-container13">
                <div className="mint-container14">
                  <div className="mint-container15">
                    <svg viewBox="0 0 1024 1024" className="mint-icon04">
                      <path d="M864 0h-768c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h768c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96zM832 896h-704v-768h704v768zM256 576h448v64h-448zM256 704h448v64h-448zM320 288c0-53.019 42.981-96 96-96s96 42.981 96 96c0 53.019-42.981 96-96 96s-96-42.981-96-96zM480 384h-128c-52.8 0-96 28.8-96 64v64h320v-64c0-35.2-43.2-64-96-64z"></path>
                    </svg>
                    <div className="mint-container16">
                      <Link href="/portfolio">
                        <a className="mint-link3">PORTFOLIO</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mint-container17">
                <div className="mint-container18">
                  <svg viewBox="0 0 1024 1024" className="mint-icon06">
                    <path d="M598 234q0-44 31-75t75-31 75 31 31 75-31 76-75 32-75-32-31-76zM370 512q-24 0-50-16-8-6-32-16l138-138-42-44q-64-64-170-64v-106q82 0 134 19t100 67l274 272q-12 8-18 10-26 16-50 16-22 0-48-16-44-26-94-26t-94 26q-26 16-48 16zM938 704q-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28v-86q26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14 26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14 26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14v86zM938 896q-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28t-94-28q-22-14-48-14-28 0-50 14-46 28-92 28v-86q26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14 26 0 48-14 46-28 94-28t94 28q22 14 48 14 28 0 50-14 46-28 92-28 48 0 94 28 22 14 48 14v86z"></path>
                  </svg>
                  <div className="mint-container19">
                    <Link href="/pools">
                      <a className="mint-link4">POOLS</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mint-container20">
                <div className="mint-container21">
                  <svg
                    viewBox="0 0 760.0274285714286 1024"
                    className="mint-icon08"
                  >
                    <path d="M666.857 365.714c7.429 76-24.571 121.714-74.857 147.429 83.429 20 136 69.714 125.714 181.143-13.143 138.857-116 176-263.429 184v145.714h-88v-143.429c-22.286 0-45.714 0-69.714-0.571v144h-88v-145.714c-20.571 0-41.143-0.571-62.286-0.571h-114.286l17.714-104.571c64.571 1.143 63.429 0 63.429 0 24.571 0 31.429-17.714 33.143-29.143v-229.714h9.143c-3.429-0.571-6.857-0.571-9.143-0.571v-164c-3.429-18.286-14.857-38.857-50.857-38.857 0 0 1.143-1.143-63.429 0v-93.714l121.143 0.571c17.714 0 36.571 0 55.429-0.571v-144h88v141.143c23.429-0.571 46.857-1.143 69.714-1.143v-140h88v144c113.143 9.714 202.857 44.571 212.571 148.571zM544 677.143c0-113.143-186.286-96.571-245.714-96.571v193.143c59.429 0 245.714 12.571 245.714-96.571zM503.429 405.143c0-103.429-155.429-88-205.143-88v175.429c49.714 0 205.143 11.429 205.143-87.429z"></path>
                  </svg>
                  <div className="mint-container22">
                    <Link href="/sats">
                      <a className="mint-link5">SATS</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mint-container23"></div>
          </div>
          <div className="mint-container24">
            <div className="mint-container25">
              <Search rootClassName="search-root-class-name3"></Search>
              <div className="mint-container26">
                <svg viewBox="0 0 1024 1024" className="mint-icon10">
                  <path d="M726 768q34 0 59 26t25 60-25 59-59 25-60-25-26-59 26-60 60-26zM42 86h140l40 84h632q18 0 30 13t12 31q0 2-6 20l-152 276q-24 44-74 44h-318l-38 70-2 6q0 10 10 10h494v86h-512q-34 0-59-26t-25-60q0-20 10-40l58-106-154-324h-86v-84zM298 768q34 0 60 26t26 60-26 59-60 25-59-25-25-59 25-60 59-26z"></path>
                </svg>
              </div>
            </div>
            <div className="mint-container27">
              <div className="mint-container28">
                <svg viewBox="0 0 1024 1024" className="mint-icon12">
                  <path d="M725.333 896v-85.333c0-58.88-23.936-112.299-62.464-150.869s-91.989-62.464-150.869-62.464h-298.667c-58.88 0-112.299 23.936-150.869 62.464s-62.464 91.989-62.464 150.869v85.333c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-85.333c0-35.371 14.293-67.285 37.504-90.496s55.125-37.504 90.496-37.504h298.667c35.371 0 67.285 14.293 90.496 37.504s37.504 55.125 37.504 90.496v85.333c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667zM576 298.667c0-58.88-23.936-112.299-62.464-150.869s-91.989-62.464-150.869-62.464-112.299 23.936-150.869 62.464-62.464 91.989-62.464 150.869 23.936 112.299 62.464 150.869 91.989 62.464 150.869 62.464 112.299-23.936 150.869-62.464 62.464-91.989 62.464-150.869zM490.667 298.667c0 35.371-14.293 67.285-37.504 90.496s-55.125 37.504-90.496 37.504-67.285-14.293-90.496-37.504-37.504-55.125-37.504-90.496 14.293-67.285 37.504-90.496 55.125-37.504 90.496-37.504 67.285 14.293 90.496 37.504 37.504 55.125 37.504 90.496zM695.168 499.499l85.333 85.333c16.683 16.683 43.691 16.683 60.331 0l170.667-170.667c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-140.501 140.501-55.168-55.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                </svg>
                <span className="mint-text1">OWNED</span>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="mint-icon14"
                >
                  <path d="M920.571 475.429c0 19.429-8 38.286-21.143 51.429l-372 372.571c-13.714 13.143-32.571 21.143-52 21.143s-38.286-8-51.429-21.143l-372-372.571c-13.714-13.143-21.714-32-21.714-51.429s8-38.286 21.714-52l42.286-42.857c13.714-13.143 32.571-21.143 52-21.143s38.286 8 51.429 21.143l168 168v-402.286c0-40 33.143-73.143 73.143-73.143h73.143c40 0 73.143 33.143 73.143 73.143v402.286l168-168c13.143-13.143 32-21.143 51.429-21.143s38.286 8 52 21.143l42.857 42.857c13.143 13.714 21.143 32.571 21.143 52z"></path>
                </svg>
                <span className="mint-text2">SELL</span>
                <svg viewBox="0 0 1024 1024" className="mint-icon16">
                  <path d="M1024 576v-384h-192v-64c0-35.2-28.8-64-64-64h-704c-35.2 0-64 28.8-64 64v192c0 35.2 28.8 64 64 64h704c35.2 0 64-28.8 64-64v-64h128v256h-576v128h-32c-17.674 0-32 14.326-32 32v320c0 17.674 14.326 32 32 32h128c17.674 0 32-14.326 32-32v-320c0-17.674-14.326-32-32-32h-32v-64h576zM768 192h-704v-64h704v64z"></path>
                </svg>
                <span className="mint-text3">CREATE</span>
              </div>
            </div>
            <div className="mint-container29"></div>
            <img
              alt="image"
              src="22e33a1b-f6d8-4daf-b476-e403779c8096"
              className="mint-image1"
            />
            <div className="mint-container30"></div>
            <h1 className="mint-text4"> NFT DROPS</h1>
            <div className="mint-container31"></div>
            <Mint rootClassName="mint-root-class-name"></Mint>
            <div className="mint-container32"></div>
          </div>
          <Footer rootClassName="footer-root-class-name2"></Footer>
        </div>
      </div>
      <style jsx>
        {`
          .mint-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: #040404;
          }
          .mint-container01 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-size-size-maxwidth);
            display: flex;
            position: relative;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .mint-container02 {
            flex: 0 0 auto;
            width: 15%;
            height: 100%;
            display: flex;
            position: relative;
            transition: 0.3s;
            align-items: center;
            font-family: 'pixel Nex';
            border-color: #252525;
            border-width: 0.5px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: rgba(0, 0, 0, 0.68);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0.5px;
            border-bottom-width: 0px;
          }

          .mint-container03 {
            width: 277px;
            height: 107px;
            display: flex;
            position: fixed;
            align-items: center;
            justify-content: flex-start;
          }
          .mint-image {
            top: 13px;
            left: 21px;
            width: 83px;
            height: 84px;
            position: absolute;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .mint-link {
            top: 46px;
            left: 79px;
            color: #b7b7b7;
            position: absolute;
            font-size: 12;
            transition: 0.3s;
            font-family: 'Pixel NES';
            text-decoration: none;
          }
          .mint-link:hover {
            color: white;
            font-size: larger;
          }
          .mint-container04 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: flex-start;
          }
          .mint-container05 {
            width: 200px;
            height: auto;
            display: flex;
            position: fixed;
            margin-top: 89px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .mint-container06 {
            width: 171px;
            height: 60px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .mint-text {
            color: #ffffff;
            font-size: 10px;
            font-family: 'Pixel NES';
          }
          .mint-container07 {
            width: 171px;
            height: 60px;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-color: #272727;
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-top-width: 1px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .mint-container07:hover {
            background: rgba(32, 32, 32, 0.74);
            backdrop-filter: blur(50px);
          }
          .mint-container07:active {
            background: #252525;
          }
          .mint-container08 {
            flex: 0 0 auto;
            width: 131px;
            height: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .mint-icon {
            fill: #ff0000;
            width: 24px;
            height: 24px;
          }
          .mint-container09 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .mint-link1 {
            color: #ffffff;
            font-size: 10px;
            font-family: 'Pixel NES';
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .mint-container10 {
            width: 171px;
            height: 60px;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-color: #252525;
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .mint-container10:hover {
            background: rgba(32, 32, 32, 0.77);
          }
          .mint-container10:active {
            background: rgba(28, 28, 28, 0.78);
          }
          .mint-container11 {
            flex: 0 0 auto;
            width: 131px;
            height: 50%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .mint-icon02 {
            fill: #7effe5;
            width: 24px;
            height: 24px;
          }
          .mint-container12 {
            width: 33px;
            height: 11px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .mint-link2 {
            color: #ffffff;
            font-size: 10px;
            font-family: 'Pixel NES';
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .mint-container13 {
            width: 171px;
            height: 60px;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-color: #222222;
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .mint-container13:hover {
            background: #1c1c1c;
          }
          .mint-container14 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .mint-container15 {
            flex: 0 0 auto;
            width: 96px;
            height: 50%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .mint-icon04 {
            fill: #858585;
            width: 24px;
            height: 24px;
            margin-right: 5px;
          }
          .mint-container16 {
            width: 48px;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .mint-link3 {
            color: #ffffff;
            font-size: 10px;
            font-family: 'Pixel NES';
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .mint-container17 {
            width: 171px;
            height: 60px;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-color: #292929;
            border-width: 1px;
            padding-right: 11px;
            flex-direction: column;
            justify-content: center;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .mint-container17:hover {
            background: #1a1a1a;
          }
          .mint-container18 {
            flex: 0 0 auto;
            width: 131px;
            height: 50%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .mint-icon06 {
            fill: #00f1ff;
            width: 24px;
            height: 24px;
          }
          .mint-container19 {
            width: 48px;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .mint-link4 {
            color: #ffffff;
            font-size: 10px;
            font-family: 'Pixel NES';
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .mint-container20 {
            width: 171px;
            height: 60px;
            display: flex;
            transition: 0.3s;
            align-items: center;
            border-color: #292929;
            border-width: 1px;
            padding-right: 11px;
            flex-direction: column;
            justify-content: center;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .mint-container20:hover {
            background: #1a1a1a;
          }
          .mint-container21 {
            flex: 0 0 auto;
            width: 131px;
            height: 50%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .mint-icon08 {
            fill: #ff6b00;
            width: 24px;
            height: 24px;
          }
          .mint-container22 {
            width: 48px;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .mint-link5 {
            color: #ffffff;
            font-size: 10px;
            font-family: 'Pixel NES';
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .mint-container23 {
            width: 100%;
            height: 414px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .mint-container24 {
            flex: 0 0 auto;
            width: 85%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            font-family: 'pixel NES';
            flex-direction: column;
            justify-content: flex-start;
            background-color: #000000;
          }
          .mint-container24:active {
            border-bottom: solid 2px white;
          }
          .mint-container25 {
            width: 1370px;
            height: 57px;
            display: flex;
            z-index: 1;
            position: fixed;
            align-items: center;
            border-color: #2d2d2d;
            border-width: 0.5px;
            backdrop-filter: blur(20px);
            justify-content: flex-start;
            background-color: rgba(19, 19, 19, 0.59);
          }
          .mint-container26 {
            flex: 0 0 auto;
            right: 0px;
            width: 180px;
            bottom: 13px;
            height: 38px;
            margin: var(--dl-space-space-unit);
            display: flex;
            position: absolute;
            margin-top: 0px;
            align-items: center;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: auto;
            justify-content: center;
          }
          .mint-icon10 {
            fill: #ababab;
            width: 35px;
            height: 27px;
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
          }
          .mint-icon10:hover {
            width: 40;
            height: 40;
            background: transparent;
          }
          .mint-container27 {
            width: 1380px;
            height: 164px;
            display: flex;
            position: fixed;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .mint-container28 {
            width: 1382px;
            height: 63px;
            display: flex;
            z-index: 1;
            position: fixed;
            transition: 0.3s;
            align-items: center;
            border-color: #3f3f3f;
            border-width: 1px;
            justify-content: center;
            background-color: rgba(26, 26, 26, 0.97);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .mint-container28:hover {
            background: rgba(0, 0, 0, 0.89);
          }
          .mint-icon12 {
            fill: #d9d9d9;
            width: 23px;
            height: 21px;
          }
          .mint-text1 {
            color: #bababa;
            transition: 0.3s;
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
          .mint-text1:hover {
            padding: 10;
            font-size: large;
            background: #585858;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .mint-text1:active {
            background: #2b2b2b;
          }
          .mint-icon14 {
            fill: #d9d9d9;
            width: 19px;
            height: 13px;
          }
          .mint-text2 {
            color: #bababa;
            transition: 0.3s;
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
          .mint-text2:hover {
            padding: 10;
            font-size: large;
            background: #585858;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .mint-text2:active {
            background: #2b2b2b;
          }
          .mint-icon16 {
            fill: #d9d9d9;
            width: 19px;
            height: 17px;
          }
          .mint-text3 {
            color: #bababa;
            transition: 0.3s;
            margin-left: 1px;
            padding-top: 2px;
            border-color: #717171;
            border-width: 1px;
            margin-right: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: 2px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-bottom-width: 0px;
          }
          .mint-text3:hover {
            padding: 10;
            font-size: large;
            background: #585858;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .mint-text3:active {
            background: #2b2b2b;
          }
          .mint-container29 {
            width: 100%;
            height: 140px;
            display: flex;
            align-items: flex-start;
          }
          .mint-image1 {
            top: 13px;
            left: 21px;
            width: 83px;
            height: 84px;
            display: none;
            position: fixed;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .mint-container30 {
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .mint-text4 {
            color: rgb(140, 140, 140);
            height: 0px;
            align-self: center;
            background: -webkit-linear-gradient(
              rgb(1, 12, 241),
              rgb(250, 100, 100)
            );
            margin-top: 0px;
            text-align: center;
            padding-bottom: var(--dl-space-space-twounits);
            background-image: -webkit-linear-gradient(
              top,
              rgb(1, 12, 241),
              rgb(250, 100, 100)
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .mint-container31 {
            width: 1307px;
            height: 42px;
            display: flex;
            align-self: center;
            align-items: flex-start;
            border-color: #393939;
            border-width: 0.5px;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .mint-container32 {
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 308px;
            display: none;
            padding: var(--dl-space-space-unit);
            overflow: hidden;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: 1px;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: center;
          }
          @media (max-width: 1200px) {
            .mint-container02 {
              border-color: #353535;
              border-width: 0.5px;
            }
            .mint-container03 {
              width: 246px;
            }
            .mint-image {
              top: 25px;
              left: 28px;
              width: 66px;
              height: 60px;
            }
            .mint-container25 {
              width: 1017px;
              height: 62px;
              margin-right: 0px;
              background-color: rgba(30, 30, 30, 0.47);
            }
            .mint-container27 {
              width: 1015px;
              border-width: 0px;
            }
            .mint-container28 {
              width: 1068px;
              height: 64px;
            }
            .mint-image1 {
              display: none;
            }
            .mint-container30 {
              border-width: 0px;
            }
          }
          @media (max-width: 991px) {
            .mint-container02 {
              width: 291px;
              padding-right: 0px;
            }
            .mint-container03 {
              width: 361px;
            }
            .mint-image {
              left: 36px;
              bottom: 22px;
            }
            .mint-link {
              top: 37px;
              left: 106px;
            }
            .mint-container24 {
              width: 696px;
            }
            .mint-container25 {
              width: 714px;
            }
            .mint-icon10 {
              top: 14px;
              right: 82px;
            }
            .mint-container27 {
              width: 719px;
              border-width: 0px;
            }
            .mint-image1 {
              display: none;
            }
          }
          @media (max-width: 767px) {
            .mint-container01 {
              height: 1903px;
            }
            .mint-container02 {
              display: none;
            }
            .mint-container03 {
              width: 145px;
            }
            .mint-container24 {
              width: 100%;
              height: 100%;
              align-items: flex-start;
              justify-content: flex-start;
            }
            .mint-container25 {
              width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .mint-icon10 {
              top: 20px;
              right: 122px;
            }
            .mint-container27 {
              width: 766px;
            }
            .mint-container28 {
              width: 748px;
              height: 70px;
            }
            .mint-image1 {
              top: -3px;
              left: -14px;
              display: flex;
            }
            .mint-text4 {
              width: 766px;
            }
            .mint-container32 {
              width: 673px;
              height: 1166px;
              display: flex;
              flex-direction: column;
              padding-bottom: 0px;
            }
          }
          @media (max-width: 479px) {
            .mint-container01 {
              height: 1819px;
            }
            .mint-container02 {
              display: none;
            }
            .mint-container24 {
              width: 100%;
              height: 1839px;
              margin-right: 0px;
            }
            .mint-container25 {
              width: 100%;
              height: 72px;
            }
            .mint-icon10 {
              top: 19px;
              right: 31px;
            }
            .mint-container27 {
              width: 100%;
              height: 203px;
              justify-content: center;
            }
            .mint-container28 {
              width: 478px;
              height: 65px;
              justify-content: center;
            }
            .mint-image1 {
              top: 0px;
              left: -1px;
              width: 63px;
              height: 60px;
              display: flex;
              padding-left: var(--dl-space-space-unit);
            }
            .mint-text4 {
              height: 134px;
              text-align: center;
            }
            .mint-container31 {
              width: 355px;
              height: 42px;
            }
            .mint-container32 {
              width: 100%;
              height: 1174px;
              display: flex;
              align-items: center;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default Mint
