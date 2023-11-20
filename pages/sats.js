import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Search from '../components/search'
import Footer from '../components/footer'

const Sats = (props) => {
  return (
    <>
      <div className="sats-container">
        <Head>
          <title>sats - RareBay | DEX1</title>
          <meta property="og:title" content="sats - RareBay | DEX1" />
        </Head>
        <div className="sats-container01">
          <div className="sats-container02">
            <div className="sats-container03">
              <div className="sats-container04">
                <svg viewBox="0 0 1024 1024" className="sats-icon">
                  <path d="M725.333 896v-85.333c0-58.88-23.936-112.299-62.464-150.869s-91.989-62.464-150.869-62.464h-298.667c-58.88 0-112.299 23.936-150.869 62.464s-62.464 91.989-62.464 150.869v85.333c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-85.333c0-35.371 14.293-67.285 37.504-90.496s55.125-37.504 90.496-37.504h298.667c35.371 0 67.285 14.293 90.496 37.504s37.504 55.125 37.504 90.496v85.333c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667zM576 298.667c0-58.88-23.936-112.299-62.464-150.869s-91.989-62.464-150.869-62.464-112.299 23.936-150.869 62.464-62.464 91.989-62.464 150.869 23.936 112.299 62.464 150.869 91.989 62.464 150.869 62.464 112.299-23.936 150.869-62.464 62.464-91.989 62.464-150.869zM490.667 298.667c0 35.371-14.293 67.285-37.504 90.496s-55.125 37.504-90.496 37.504-67.285-14.293-90.496-37.504-37.504-55.125-37.504-90.496 14.293-67.285 37.504-90.496 55.125-37.504 90.496-37.504 67.285 14.293 90.496 37.504 37.504 55.125 37.504 90.496zM695.168 499.499l85.333 85.333c16.683 16.683 43.691 16.683 60.331 0l170.667-170.667c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-140.501 140.501-55.168-55.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                </svg>
                <span className="sats-text">OWNED</span>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="sats-icon02"
                >
                  <path d="M920.571 475.429c0 19.429-8 38.286-21.143 51.429l-372 372.571c-13.714 13.143-32.571 21.143-52 21.143s-38.286-8-51.429-21.143l-372-372.571c-13.714-13.143-21.714-32-21.714-51.429s8-38.286 21.714-52l42.286-42.857c13.714-13.143 32.571-21.143 52-21.143s38.286 8 51.429 21.143l168 168v-402.286c0-40 33.143-73.143 73.143-73.143h73.143c40 0 73.143 33.143 73.143 73.143v402.286l168-168c13.143-13.143 32-21.143 51.429-21.143s38.286 8 52 21.143l42.857 42.857c13.143 13.714 21.143 32.571 21.143 52z"></path>
                </svg>
                <span className="sats-text01">SELL</span>
                <svg viewBox="0 0 1024 1024" className="sats-icon04">
                  <path d="M1024 576v-384h-192v-64c0-35.2-28.8-64-64-64h-704c-35.2 0-64 28.8-64 64v192c0 35.2 28.8 64 64 64h704c35.2 0 64-28.8 64-64v-64h128v256h-576v128h-32c-17.674 0-32 14.326-32 32v320c0 17.674 14.326 32 32 32h128c17.674 0 32-14.326 32-32v-320c0-17.674-14.326-32-32-32h-32v-64h576zM768 192h-704v-64h704v64z"></path>
                </svg>
                <span className="sats-text02">CREATE</span>
              </div>
              <header data-thq="thq-navbar" className="sats-navbar-interactive">
                <div data-thq="thq-navbar-nav" className="sats-desktop-menu">
                  <div className="sats-container05">
                    <Search rootClassName="search-root-class-name21"></Search>
                  </div>
                  <div className="sats-buttons">
                    <button className="button">CONNECT</button>
                  </div>
                </div>
                <div data-thq="thq-burger-menu" className="sats-burger-menu">
                  <svg viewBox="0 0 1024 1024" className="sats-icon06">
                    <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </div>
                <Link href="/">
                  <a className="sats-link">
                    <img
                      alt="logo"
                      src="/fav-200h.ico"
                      className="sats-image"
                    />
                  </a>
                </Link>
                <Search rootClassName="search-root-class-name20"></Search>
                <div data-thq="thq-mobile-menu" className="sats-mobile-menu">
                  <div className="sats-nav">
                    <div className="sats-top">
                      <div
                        data-thq="thq-close-menu"
                        className="sats-close-menu"
                      >
                        <svg viewBox="0 0 1024 1024" className="sats-icon08">
                          <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="sats-container06">
                      <div className="sats-container07">
                        <img
                          alt="image"
                          src="/fav-200h.ico"
                          className="sats-image1"
                        />
                        <Link href="/">
                          <a className="sats-link01">
                            <h1 className="sats-heading">RAR3BAY</h1>
                          </a>
                        </Link>
                      </div>
                      <div className="sats-container08"></div>
                      <div className="sats-container09">
                        <div className="sats-container10">
                          <span className="sats-text03">EXPLORE RAR3</span>
                        </div>
                        <Link href="/dex">
                          <a className="sats-link02">
                            <div className="sats-container11">
                              <div className="sats-container12">
                                <svg
                                  viewBox="0 0 1024 1024"
                                  className="sats-icon10"
                                >
                                  <path d="M768 554q70 0 120 51t50 121-50 120-120 50-120-50-50-120 50-121 120-51zM768 640q-34 0-60 26t-26 60 26 59 60 25 60-25 26-59-26-60-60-26zM512 128q70 0 120 50t50 120-50 121-120 51-120-51-50-121 50-120 120-50zM512 214q-34 0-60 25t-26 59 26 60 60 26 60-26 26-60-26-59-60-25zM256 554q70 0 120 51t50 121-50 120-120 50-120-50-50-120 50-121 120-51zM256 640q-34 0-60 26t-26 60 26 59 60 25 60-25 26-59-26-60-60-26z"></path>
                                </svg>
                                <span className="sats-text04">DEX</span>
                              </div>
                            </div>
                          </a>
                        </Link>
                        <div className="sats-container13">
                          <div className="sats-container14">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="sats-icon12"
                            >
                              <path d="M598 234q0-44 31-75t75-31 75 31 31 75-31 76-75 32-75-32-31-76zM370 512q-24 0-50-16-8-6-32-16l138-138-42-44q-64-64-170-64v-106q82 0 134 19t100 67l274 272q-12 8-18 10-26 16-50 16-22 0-48-16-44-26-94-26t-94 26q-26 16-48 16zM938 704q-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28v-86q26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14 26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14 26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14v86zM938 896q-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28t-94-28q-22-14-48-14-28 0-50 14-46 28-92 28v-86q26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14 26 0 48-14 46-28 94-28t94 28q22 14 48 14 28 0 50-14 46-28 92-28 48 0 94 28 22 14 48 14v86z"></path>
                            </svg>
                            <span className="sats-text05">POOLS</span>
                          </div>
                        </div>
                        <Link href="/portfolio">
                          <a className="sats-link03">
                            <div className="sats-container15">
                              <div className="sats-container16">
                                <svg
                                  viewBox="0 0 1024 1024"
                                  className="sats-icon14"
                                >
                                  <path d="M864 0h-768c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h768c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96zM832 896h-704v-768h704v768zM256 576h448v64h-448zM256 704h448v64h-448zM320 288c0-53.019 42.981-96 96-96s96 42.981 96 96c0 53.019-42.981 96-96 96s-96-42.981-96-96zM480 384h-128c-52.8 0-96 28.8-96 64v64h320v-64c0-35.2-43.2-64-96-64z"></path>
                                </svg>
                                <span className="sats-text06">portfolio</span>
                              </div>
                            </div>
                          </a>
                        </Link>
                        <Link href="/sats">
                          <a className="sats-link04">
                            <div className="sats-container17">
                              <div className="sats-container18">
                                <svg
                                  viewBox="0 0 760.0274285714286 1024"
                                  className="sats-icon16"
                                >
                                  <path d="M666.857 365.714c7.429 76-24.571 121.714-74.857 147.429 83.429 20 136 69.714 125.714 181.143-13.143 138.857-116 176-263.429 184v145.714h-88v-143.429c-22.286 0-45.714 0-69.714-0.571v144h-88v-145.714c-20.571 0-41.143-0.571-62.286-0.571h-114.286l17.714-104.571c64.571 1.143 63.429 0 63.429 0 24.571 0 31.429-17.714 33.143-29.143v-229.714h9.143c-3.429-0.571-6.857-0.571-9.143-0.571v-164c-3.429-18.286-14.857-38.857-50.857-38.857 0 0 1.143-1.143-63.429 0v-93.714l121.143 0.571c17.714 0 36.571 0 55.429-0.571v-144h88v141.143c23.429-0.571 46.857-1.143 69.714-1.143v-140h88v144c113.143 9.714 202.857 44.571 212.571 148.571zM544 677.143c0-113.143-186.286-96.571-245.714-96.571v193.143c59.429 0 245.714 12.571 245.714-96.571zM503.429 405.143c0-103.429-155.429-88-205.143-88v175.429c49.714 0 205.143 11.429 205.143-87.429z"></path>
                                </svg>
                                <span className="sats-text07">SATS</span>
                              </div>
                            </div>
                          </a>
                        </Link>
                      </div>
                      <div className="sats-container19">
                        <div className="sats-container20">
                          <span className="sats-text08">EXPLORE RAR3</span>
                        </div>
                        <Link href="/dex">
                          <a className="sats-link05">
                            <div className="sats-container21">
                              <div className="sats-container22">
                                <svg
                                  viewBox="0 0 1024 1024"
                                  className="sats-icon18"
                                >
                                  <path d="M768 554q70 0 120 51t50 121-50 120-120 50-120-50-50-120 50-121 120-51zM768 640q-34 0-60 26t-26 60 26 59 60 25 60-25 26-59-26-60-60-26zM512 128q70 0 120 50t50 120-50 121-120 51-120-51-50-121 50-120 120-50zM512 214q-34 0-60 25t-26 59 26 60 60 26 60-26 26-60-26-59-60-25zM256 554q70 0 120 51t50 121-50 120-120 50-120-50-50-120 50-121 120-51zM256 640q-34 0-60 26t-26 60 26 59 60 25 60-25 26-59-26-60-60-26z"></path>
                                </svg>
                                <span className="sats-text09">DEX</span>
                              </div>
                            </div>
                          </a>
                        </Link>
                        <div className="sats-container23">
                          <div className="sats-container24">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="sats-icon20"
                            >
                              <path d="M598 234q0-44 31-75t75-31 75 31 31 75-31 76-75 32-75-32-31-76zM370 512q-24 0-50-16-8-6-32-16l138-138-42-44q-64-64-170-64v-106q82 0 134 19t100 67l274 272q-12 8-18 10-26 16-50 16-22 0-48-16-44-26-94-26t-94 26q-26 16-48 16zM938 704q-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28v-86q26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14 26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14 26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14v86zM938 896q-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28t-94-28q-22-14-48-14-28 0-50 14-46 28-92 28v-86q26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14 26 0 48-14 46-28 94-28t94 28q22 14 48 14 28 0 50-14 46-28 92-28 48 0 94 28 22 14 48 14v86z"></path>
                            </svg>
                            <span className="sats-text10">POOLS</span>
                          </div>
                        </div>
                        <Link href="/portfolio">
                          <a className="sats-link06">
                            <div className="sats-container25">
                              <div className="sats-container26">
                                <svg
                                  viewBox="0 0 1024 1024"
                                  className="sats-icon22"
                                >
                                  <path d="M864 0h-768c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h768c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96zM832 896h-704v-768h704v768zM256 576h448v64h-448zM256 704h448v64h-448zM320 288c0-53.019 42.981-96 96-96s96 42.981 96 96c0 53.019-42.981 96-96 96s-96-42.981-96-96zM480 384h-128c-52.8 0-96 28.8-96 64v64h320v-64c0-35.2-43.2-64-96-64z"></path>
                                </svg>
                                <span className="sats-text11">portfolio</span>
                              </div>
                            </div>
                          </a>
                        </Link>
                        <Link href="/sats">
                          <a className="sats-link07">
                            <div className="sats-container27">
                              <div className="sats-container28">
                                <svg
                                  viewBox="0 0 760.0274285714286 1024"
                                  className="sats-icon24"
                                >
                                  <path d="M666.857 365.714c7.429 76-24.571 121.714-74.857 147.429 83.429 20 136 69.714 125.714 181.143-13.143 138.857-116 176-263.429 184v145.714h-88v-143.429c-22.286 0-45.714 0-69.714-0.571v144h-88v-145.714c-20.571 0-41.143-0.571-62.286-0.571h-114.286l17.714-104.571c64.571 1.143 63.429 0 63.429 0 24.571 0 31.429-17.714 33.143-29.143v-229.714h9.143c-3.429-0.571-6.857-0.571-9.143-0.571v-164c-3.429-18.286-14.857-38.857-50.857-38.857 0 0 1.143-1.143-63.429 0v-93.714l121.143 0.571c17.714 0 36.571 0 55.429-0.571v-144h88v141.143c23.429-0.571 46.857-1.143 69.714-1.143v-140h88v144c113.143 9.714 202.857 44.571 212.571 148.571zM544 677.143c0-113.143-186.286-96.571-245.714-96.571v193.143c59.429 0 245.714 12.571 245.714-96.571zM503.429 405.143c0-103.429-155.429-88-205.143-88v175.429c49.714 0 205.143 11.429 205.143-87.429z"></path>
                                </svg>
                                <span className="sats-text12">SATS</span>
                              </div>
                            </div>
                          </a>
                        </Link>
                        <Link href="/mints">
                          <a className="sats-link08">
                            <div className="sats-container29">
                              <div className="sats-container30">
                                <svg
                                  viewBox="0 0 1024 1024"
                                  className="sats-icon26"
                                >
                                  <path d="M1011.328 134.496c-110.752-83.928-281.184-134.034-455.91-134.034-216.12 0-392.226 75.456-483.16 207.020-42.708 61.79-66.33 134.958-70.208 217.474-3.454 73.474 8.884 154.726 36.684 242.146 94.874-284.384 359.82-507.102 665.266-507.102 0 0-285.826 75.232-465.524 308.192-0.112 0.138-2.494 3.090-6.614 8.698-36.080 48.278-67.538 103.162-91.078 165.328-39.87 94.83-76.784 224.948-76.784 381.782h128c0 0-19.43-122.222 14.36-262.79 55.89 7.556 105.858 11.306 150.852 11.306 117.678 0 201.37-25.46 263.388-80.124 55.568-48.978 86.198-114.786 118.624-184.456 49.524-106.408 105.654-227.010 268.654-320.152 9.33-5.332 15.362-14.992 16.056-25.716s-4.040-21.080-12.606-27.572z"></path>
                                </svg>
                                <span className="sats-text13">MINTS</span>
                              </div>
                            </div>
                          </a>
                        </Link>
                      </div>
                      <div className="sats-container31"></div>
                      <div id="connecting" className="sats-container32"></div>
                    </div>
                  </div>
                </div>
                <div id="connect" className="sats-container33">
                  <svg viewBox="0 0 1024 1024" className="sats-icon28">
                    <path d="M384 928c0 53.019-42.981 96-96 96s-96-42.981-96-96c0-53.019 42.981-96 96-96s96 42.981 96 96z"></path>
                    <path d="M1024 928c0 53.019-42.981 96-96 96s-96-42.981-96-96c0-53.019 42.981-96 96-96s96 42.981 96 96z"></path>
                    <path d="M1024 512v-384h-768c0-35.346-28.654-64-64-64h-192v64h128l48.074 412.054c-29.294 23.458-48.074 59.5-48.074 99.946 0 70.696 57.308 128 128 128h768v-64h-768c-35.346 0-64-28.654-64-64 0-0.218 0.014-0.436 0.016-0.656l831.984-127.344z"></path>
                  </svg>
                  <div id="connecting" className="sats-container34"></div>
                </div>
              </header>
            </div>
            <div className="sats-container35">
              <div className="sats-container36">
                <div className="sats-container37">
                  <div className="sats-container38">
                    <Link href="/sats">
                      <a className="sats-link09">
                        <h1 className="sats-heading1">COMING SOON</h1>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name7"></Footer>
        <video
          src="https://bafybeifgabyizcobjwu6qs47yyt66oq3lgevgj6tsnbkldmc5epnzmr2hm.ipfs.nftstorage.link/ipfs/bafybeifgabyizcobjwu6qs47yyt66oq3lgevgj6tsnbkldmc5epnzmr2hm/hold.mp4"
          loop
          muted
          preload="none"
          autoPlay
          playsInline
          className="sats-video"
        ></video>
      </div>
      <style jsx>
        {`
          .sats-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: #000000;
          }
          .sats-container01 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-size-size-maxwidth);
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .sats-container02 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            font-family: 'pixel NES';
            flex-direction: column;
            justify-content: flex-start;
          }
          .sats-container02:active {
            border-bottom: solid 2px white;
          }
          .sats-container03 {
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .sats-container04 {
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
          .sats-container04:hover {
            background: rgba(100, 100, 100, 0.69);
          }
          .sats-icon {
            fill: #008aff;
            width: 23px;
            height: 21px;
          }
          .sats-text {
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
          .sats-text:hover {
            color: var(--dl-color-gray-500);
            padding: 10;
            font-size: large;
            background: #7fbeff;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .sats-text:active {
            color: var(--dl-color-gray-500);
            padding: var(--dl-space-space-halfunit);
            background: #7fbeff;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .sats-icon02 {
            fill: #00ff27;
            width: 19px;
            height: 13px;
          }
          .sats-text01 {
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
          .sats-text01:hover {
            color: var(--dl-color-gray-500);
            padding: 10;
            font-size: large;
            background: #7fbeff;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .sats-text01:active {
            color: var(--dl-color-gray-500);
            padding: var(--dl-space-space-halfunit);
            background: #7fbeff;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .sats-icon04 {
            fill: #8100ff;
            width: 19px;
            height: 17px;
          }
          .sats-text02 {
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
          .sats-text02:hover {
            color: var(--dl-color-gray-500);
            padding: 10;
            font-size: large;
            background: #7fbeff;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .sats-text02:active {
            color: var(--dl-color-gray-500);
            padding: var(--dl-space-space-halfunit);
            background: #7fbeff;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .sats-navbar-interactive {
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
          .sats-desktop-menu {
            flex: 1;
            display: none;
            justify-content: space-between;
          }
          .sats-container05 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .sats-buttons {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .sats-burger-menu {
            width: 63px;
            height: 56px;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-unit);
            justify-content: center;
          }
          .sats-icon06 {
            fill: #929292;
            width: 36px;
            height: 50%;
          }
          .sats-link {
            display: contents;
          }
          .sats-image {
            width: 67px;
            height: 63px;
            text-decoration: none;
          }
          .sats-mobile-menu {
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
          .sats-nav {
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
          .sats-top {
            width: 100%;
            display: flex;
            align-self: flex-end;
            margin-top: 0px;
            align-items: center;
            margin-bottom: 0px;
            padding-right: var(--dl-space-space-unit);
            justify-content: flex-end;
          }
          .sats-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .sats-icon08 {
            fill: #d9d9d9;
            width: 32px;
            height: 25px;
            margin-top: var(--dl-space-space-unit);
          }
          .sats-container06 {
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

          .sats-container07 {
            width: 232px;
            height: 93px;
            display: flex;
            position: fixed;
            align-items: center;
            justify-content: center;
          }
          .sats-image1 {
            top: 6px;
            left: -19px;
            width: 83px;
            filter: grayscale();
            height: 84px;
            position: absolute;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .sats-link01 {
            display: contents;
          }
          .sats-heading {
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
          .sats-heading:hover {
            font-size: 1em;
          }
          .sats-container08 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: flex-start;
          }
          .sats-container09 {
            width: 100%;
            height: auto;
            display: flex;
            position: fixed;
            margin-top: 91px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .sats-container10 {
            width: 100%;
            height: 60px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .sats-text03 {
            color: #ffffff;
            font-size: 13px;
            font-family: 'Pixel NES';
          }
          .sats-link02 {
            display: contents;
          }
          .sats-container11 {
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
          .sats-container11:hover {
            color: var(--dl-color-gray-black);
            background: aliceblue;
          }
          .sats-container11:active {
            background: #252525;
          }
          .sats-container12 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .sats-icon10 {
            fill: #ff0000;
            width: 24px;
            height: 24px;
          }
          .sats-text04 {
            font-size: 1em;
            align-self: center;
            font-family: 'Pixel NES';
            margin-left: var(--dl-space-space-unit);
          }
          .sats-container13 {
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
          .sats-container13:hover {
            color: var(--dl-color-gray-black);
            background: aliceblue;
          }
          .sats-container13:active {
            background: #252525;
          }
          .sats-container14 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .sats-icon12 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
          }
          .sats-text05 {
            font-size: 1em;
            align-self: center;
            font-family: 'Pixel NES';
            margin-left: var(--dl-space-space-unit);
          }
          .sats-link03 {
            display: contents;
          }
          .sats-container15 {
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
          .sats-container15:hover {
            color: var(--dl-color-gray-black);
            background: aliceblue;
          }
          .sats-container15:active {
            background: #252525;
          }
          .sats-container16 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .sats-icon14 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .sats-text06 {
            font-size: 1em;
            align-self: center;
            font-family: 'Pixel NES';
            margin-left: var(--dl-space-space-unit);
          }
          .sats-link04 {
            display: contents;
          }
          .sats-container17 {
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
          .sats-container17:hover {
            color: var(--dl-color-gray-black);
            background: aliceblue;
          }
          .sats-container17:active {
            background: #252525;
          }
          .sats-container18 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .sats-icon16 {
            fill: #ff9302;
            width: 24px;
            height: 24px;
          }
          .sats-text07 {
            font-size: 1em;
            align-self: center;
            font-family: 'Pixel NES';
            margin-left: var(--dl-space-space-unit);
          }
          .sats-container19 {
            width: 100%;
            height: auto;
            display: flex;
            position: fixed;
            margin-top: 91px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .sats-container20 {
            width: 100%;
            height: 60px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .sats-text08 {
            color: #ffffff;
            font-size: 13px;
            font-family: 'Pixel NES';
          }
          .sats-link05 {
            display: contents;
          }
          .sats-container21 {
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
          .sats-container21:hover {
            color: var(--dl-color-gray-black);
            background: aliceblue;
          }
          .sats-container21:active {
            background: #252525;
          }
          .sats-container22 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .sats-icon18 {
            fill: #ff0000;
            width: 24px;
            height: 24px;
          }
          .sats-text09 {
            font-size: 1em;
            align-self: center;
            font-family: 'Pixel NES';
            margin-left: var(--dl-space-space-unit);
          }
          .sats-container23 {
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
          .sats-container23:hover {
            color: var(--dl-color-gray-black);
            background: aliceblue;
          }
          .sats-container23:active {
            background: #252525;
          }
          .sats-container24 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .sats-icon20 {
            fill: var(--dl-color-primary-500);
            width: 24px;
            height: 24px;
          }
          .sats-text10 {
            font-size: 1em;
            align-self: center;
            font-family: 'Pixel NES';
            margin-left: var(--dl-space-space-unit);
          }
          .sats-link06 {
            display: contents;
          }
          .sats-container25 {
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
          .sats-container25:hover {
            color: var(--dl-color-gray-black);
            background: aliceblue;
          }
          .sats-container25:active {
            background: #252525;
          }
          .sats-container26 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .sats-icon22 {
            fill: #d9d9d9;
            width: 24px;
            height: 24px;
          }
          .sats-text11 {
            font-size: 1em;
            align-self: center;
            font-family: 'Pixel NES';
            margin-left: var(--dl-space-space-unit);
          }
          .sats-link07 {
            display: contents;
          }
          .sats-container27 {
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
          .sats-container27:hover {
            color: var(--dl-color-gray-black);
            background: aliceblue;
          }
          .sats-container27:active {
            background: #252525;
          }
          .sats-container28 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .sats-icon24 {
            fill: #ff9302;
            width: 24px;
            height: 24px;
          }
          .sats-text12 {
            font-size: 1em;
            align-self: center;
            font-family: 'Pixel NES';
            margin-left: var(--dl-space-space-unit);
          }
          .sats-link08 {
            display: contents;
          }
          .sats-container29 {
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
          .sats-container29:hover {
            color: var(--dl-color-gray-black);
            background: aliceblue;
          }
          .sats-container29:active {
            background: #252525;
          }
          .sats-container30 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .sats-icon26 {
            fill: var(--dl-color-success-700);
            width: 24px;
            height: 24px;
          }
          .sats-text13 {
            font-size: 1em;
            align-self: center;
            font-family: 'Pixel NES';
            margin-left: var(--dl-space-space-unit);
          }
          .sats-container31 {
            width: 100%;
            height: 414px;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .sats-container32 {
            width: var(--dl-size-size-xlarge);
            height: var(--dl-size-size-small);
            display: flex;
            align-items: flex-start;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: solid;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .sats-container33 {
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
          .sats-icon28 {
            fill: #d9d9d9;
            width: 35px;
            height: 28px;
          }
          .sats-container34 {
            width: var(--dl-size-size-xlarge);
            height: var(--dl-size-size-small);
            display: flex;
            align-items: flex-start;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: solid;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .sats-container35 {
            width: 100%;
            height: 675px;
            display: flex;
            margin-top: 118px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .sats-container36 {
            width: 100%;
            height: 224px;
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
          .sats-container37 {
            width: 100%;
            height: 1000px;
            display: flex;
            position: relative;
            align-self: center;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .sats-container38 {
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
          .sats-link09 {
            display: contents;
          }
          .sats-heading1 {
            color: rgb(140, 140, 140);
            height: 100%;
            z-index: 1;
            font-size: 5em;
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
              180deg,
              rgb(183, 0, 1) 0%,
              rgb(106, 11, 12) 51%,
              rgb(240, 203, 53) 100%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .sats-heading1:hover {
            font-size: 3em;
          }
          .sats-video {
            top: -346px;
            left: -1434px;
            width: 4500px;
            filter: opacity(0.2);
            height: auto;
            position: fixed;
            align-self: center;
            border-color: #575757;
            border-width: 1px;
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-unit);
          }
          @media (max-width: 1600px) {
            .sats-desktop-menu {
              display: none;
            }
            .sats-burger-menu {
              display: flex;
            }
          }
          @media (max-width: 1004px) {
            .sats-container33 {
              width: auto;
            }
          }
          @media (max-width: 479px) {
            .sats-container01 {
              height: 1819px;
            }
            .sats-container02 {
              width: 100%;
              height: 100%;
              margin-right: 0px;
            }
            .sats-container03 {
              height: 142px;
            }
            .sats-container04 {
              top: 69px;
              left: -2px;
              width: 100%;
              height: 65px;
              justify-content: center;
            }
            .sats-navbar-interactive {
              padding: var(--dl-space-space-unit);
              padding-right: 16px;
            }
            .sats-icon06 {
              fill: #d9d9d9;
              width: 58px;
              height: 42px;
            }
            .sats-image {
              width: 59px;
            }
            .sats-mobile-menu {
              width: 278px;
              height: 1098px;
              padding: 16px;
              border-color: #444444;
              border-width: 0.5px;
            }
            .sats-nav {
              height: auto;
              border-width: 0px;
              justify-content: flex-start;
              background-color: transparent;
            }
            .sats-top {
              align-items: flex-start;
            }
            .sats-container06 {
              height: 559px;
              border-color: rgba(53, 53, 53, 0.04);
            }
            .sats-container07 {
              width: 265px;
              height: 82px;
              justify-content: center;
            }
            .sats-image1 {
              top: -7px;
              left: -10px;
            }
            .sats-heading {
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
            .sats-container31 {
              height: 379px;
            }
            .sats-container32 {
              height: var(--dl-size-size-small);
            }
            .sats-container33 {
              width: auto;
              display: none;
            }
            .sats-container34 {
              height: var(--dl-size-size-small);
            }
            .sats-container35 {
              height: 319px;
              margin-top: 0px;
            }
            .sats-container36 {
              height: auto;
              margin-top: 0px;
            }
            .sats-container37 {
              width: 355px;
              height: 119px;
            }
            .sats-container38 {
              width: 355px;
              height: 52px;
            }
            .sats-heading1 {
              width: 100%;
              height: 50px;
              font-size: 2em;
              text-align: center;
              background-image: linear-gradient(
                315deg,
                rgb(0, 0, 0) 0%,
                rgb(0, 11, 255) 100%
              );
            }
            .sats-video {
              width: 100%;
              height: 100%;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Sats
