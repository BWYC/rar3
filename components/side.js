import React from "react";
import Link from "next/link";

import PropTypes from "prop-types";

const Side = (props) => {
  return (
    <>
      <div className={`side-container ${props.rootClassName} `}>
        <div className="side-container01">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="side-image"
          />
          <Link legacyBehavior href="/">
            <a className="side-link">{props.text1}</a>
          </Link>
        </div>
        <div className="side-container02"></div>
        <div className="side-container03">
          <div className="side-container04">
            <span className="side-text">{props.text11}</span>
          </div>
          <div className="side-container05">
            <div className="side-container06">
              <svg viewBox="0 0 1024 1024" className="side-icon">
                <path d="M768 554q70 0 120 51t50 121-50 120-120 50-120-50-50-120 50-121 120-51zM768 640q-34 0-60 26t-26 60 26 59 60 25 60-25 26-59-26-60-60-26zM512 128q70 0 120 50t50 120-50 121-120 51-120-51-50-121 50-120 120-50zM512 214q-34 0-60 25t-26 59 26 60 60 26 60-26 26-60-26-59-60-25zM256 554q70 0 120 51t50 121-50 120-120 50-120-50-50-120 50-121 120-51zM256 640q-34 0-60 26t-26 60 26 59 60 25 60-25 26-59-26-60-60-26z"></path>
              </svg>
              <div className="side-container07">
                <span className="side-text1">{props.text111}</span>
              </div>
            </div>
          </div>
          <div className="side-container08">
            <div className="side-container09">
              <svg viewBox="0 0 1024 1024" className="side-icon02">
                <path d="M1011.328 134.496c-110.752-83.928-281.184-134.034-455.91-134.034-216.12 0-392.226 75.456-483.16 207.020-42.708 61.79-66.33 134.958-70.208 217.474-3.454 73.474 8.884 154.726 36.684 242.146 94.874-284.384 359.82-507.102 665.266-507.102 0 0-285.826 75.232-465.524 308.192-0.112 0.138-2.494 3.090-6.614 8.698-36.080 48.278-67.538 103.162-91.078 165.328-39.87 94.83-76.784 224.948-76.784 381.782h128c0 0-19.43-122.222 14.36-262.79 55.89 7.556 105.858 11.306 150.852 11.306 117.678 0 201.37-25.46 263.388-80.124 55.568-48.978 86.198-114.786 118.624-184.456 49.524-106.408 105.654-227.010 268.654-320.152 9.33-5.332 15.362-14.992 16.056-25.716s-4.040-21.080-12.606-27.572z"></path>
              </svg>
              <div className="side-container10">
                <span className="side-text2">{props.text11112}</span>
              </div>
            </div>
          </div>
          <div className="side-container11">
            <div className="side-container12">
              <div className="side-container13">
                <svg viewBox="0 0 1024 1024" className="side-icon04">
                  <path d="M864 0h-768c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h768c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96zM832 896h-704v-768h704v768zM256 576h448v64h-448zM256 704h448v64h-448zM320 288c0-53.019 42.981-96 96-96s96 42.981 96 96c0 53.019-42.981 96-96 96s-96-42.981-96-96zM480 384h-128c-52.8 0-96 28.8-96 64v64h320v-64c0-35.2-43.2-64-96-64z"></path>
                </svg>
                <div className="side-container14">
                  <span className="side-text3">{props.text11111}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="side-container15">
            <div className="side-container16">
              <svg viewBox="0 0 1024 1024" className="side-icon06">
                <path d="M598 234q0-44 31-75t75-31 75 31 31 75-31 76-75 32-75-32-31-76zM370 512q-24 0-50-16-8-6-32-16l138-138-42-44q-64-64-170-64v-106q82 0 134 19t100 67l274 272q-12 8-18 10-26 16-50 16-22 0-48-16-44-26-94-26t-94 26q-26 16-48 16zM938 704q-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28v-86q26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14 26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14 26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14v86zM938 896q-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28t-94-28q-22-14-48-14-28 0-50 14-46 28-92 28v-86q26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14 26 0 48-14 46-28 94-28t94 28q22 14 48 14 28 0 50-14 46-28 92-28 48 0 94 28 22 14 48 14v86z"></path>
              </svg>
              <div className="side-container17">
                <span className="side-text4">{props.text1111}</span>
              </div>
            </div>
          </div>
          <div className="side-container18">
            <div className="side-container19">
              <svg viewBox="0 0 760.0274285714286 1024" className="side-icon08">
                <path d="M666.857 365.714c7.429 76-24.571 121.714-74.857 147.429 83.429 20 136 69.714 125.714 181.143-13.143 138.857-116 176-263.429 184v145.714h-88v-143.429c-22.286 0-45.714 0-69.714-0.571v144h-88v-145.714c-20.571 0-41.143-0.571-62.286-0.571h-114.286l17.714-104.571c64.571 1.143 63.429 0 63.429 0 24.571 0 31.429-17.714 33.143-29.143v-229.714h9.143c-3.429-0.571-6.857-0.571-9.143-0.571v-164c-3.429-18.286-14.857-38.857-50.857-38.857 0 0 1.143-1.143-63.429 0v-93.714l121.143 0.571c17.714 0 36.571 0 55.429-0.571v-144h88v141.143c23.429-0.571 46.857-1.143 69.714-1.143v-140h88v144c113.143 9.714 202.857 44.571 212.571 148.571zM544 677.143c0-113.143-186.286-96.571-245.714-96.571v193.143c59.429 0 245.714 12.571 245.714-96.571zM503.429 405.143c0-103.429-155.429-88-205.143-88v175.429c49.714 0 205.143 11.429 205.143-87.429z"></path>
              </svg>
              <div className="side-container20">
                <span className="side-text5">{props.text11113}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="side-container21"></div>
      </div>
      <style jsx>
        {`
          .side-container {
            flex: 0 0 auto;
            width: 15%;
            height: 100%;
            display: flex;
            position: relative;
            transition: 0.3s;
            align-items: center;
            font-family: "pixel Nex";
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

          .side-container01 {
            width: 212px;
            height: 107px;
            display: flex;
            position: fixed;
            align-items: center;
            justify-content: flex-start;
          }
          .side-image {
            top: 13px;
            left: 21px;
            width: 83px;
            height: 84px;
            position: absolute;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .side-link {
            top: 46px;
            left: 79px;
            color: #b7b7b7;
            position: absolute;
            font-size: 12;
            transition: 0.3s;
            font-family: "Pixel NES";
            text-decoration: none;
          }
          .side-link:hover {
            color: white;
            font-size: larger;
          }
          .side-container02 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: flex-start;
          }
          .side-container03 {
            width: 200px;
            height: auto;
            display: flex;
            position: fixed;
            margin-top: 89px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .side-container04 {
            width: 171px;
            height: 60px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .side-text {
            color: #ffffff;
            font-size: 10px;
            font-family: "Pixel NES";
          }
          .side-container05 {
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
          .side-container05:hover {
            background: rgba(32, 32, 32, 0.74);
            backdrop-filter: blur(50px);
          }
          .side-container05:active {
            background: #252525;
          }
          .side-container06 {
            flex: 0 0 auto;
            width: 131px;
            height: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .side-icon {
            fill: #ff0000;
            width: 24px;
            height: 24px;
          }
          .side-container07 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .side-text1 {
            color: #ffffff;
            font-size: 10px;
            font-family: "Pixel NES";
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .side-container08 {
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
          .side-container08:hover {
            background: rgba(32, 32, 32, 0.77);
          }
          .side-container08:active {
            background: rgba(28, 28, 28, 0.78);
          }
          .side-container09 {
            flex: 0 0 auto;
            width: 131px;
            height: 50%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .side-icon02 {
            fill: #7effe5;
            width: 24px;
            height: 24px;
          }
          .side-container10 {
            width: 33px;
            height: 11px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .side-text2 {
            color: #ffffff;
            font-size: 10px;
            font-family: "Pixel NES";
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .side-container11 {
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
          .side-container11:hover {
            background: #1c1c1c;
          }
          .side-container12 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .side-container13 {
            flex: 0 0 auto;
            width: 96px;
            height: 50%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .side-icon04 {
            fill: #858585;
            width: 24px;
            height: 24px;
            margin-right: 5px;
          }
          .side-container14 {
            width: 48px;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .side-text3 {
            color: #ffffff;
            font-size: 10px;
            font-family: "Pixel NES";
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .side-container15 {
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
          .side-container15:hover {
            background: #1a1a1a;
          }
          .side-container16 {
            flex: 0 0 auto;
            width: 131px;
            height: 50%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .side-icon06 {
            fill: #00f1ff;
            width: 24px;
            height: 24px;
          }
          .side-container17 {
            width: 48px;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .side-text4 {
            color: #ffffff;
            font-size: 10px;
            font-family: "Pixel NES";
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .side-container18 {
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
          .side-container18:hover {
            background: #1a1a1a;
          }
          .side-container19 {
            flex: 0 0 auto;
            width: 131px;
            height: 50%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .side-icon08 {
            fill: #ff6b00;
            width: 24px;
            height: 24px;
          }
          .side-container20 {
            width: 48px;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .side-text5 {
            color: #ffffff;
            font-size: 10px;
            font-family: "Pixel NES";
            margin-left: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .side-container21 {
            width: 100%;
            height: 414px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }

          @media (max-width: 479px) {
            .side-container {
              display: none;
            }
          }
        `}
      </style>
    </>
  );
};

Side.defaultProps = {
  text11: "EXPLORE RAR3",
  text1: "RAREBAY.XYZ",
  text11111: "PORTFOLIO",
  text111: "DEX",
  text1111: "POOLS",
  text11113: "SATS",
  rootClassName: "",
  image_alt: "image",
  image_src: "/fav-200h.ico",
  rootClassName3: "",
  text11112: "MINT",
};

Side.propTypes = {
  text11: PropTypes.string,
  text1: PropTypes.string,
  text11111: PropTypes.string,
  text111: PropTypes.string,
  text1111: PropTypes.string,
  text11113: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName3: PropTypes.string,
  text11112: PropTypes.string,
};

export default Side;
