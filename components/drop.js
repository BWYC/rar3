import React from 'react'

import PropTypes from 'prop-types'

const Drop = (props) => {
  return (
    <>
      <div className={`drop-container ${props.rootClassName} `}>
        <div className="drop-container01">
          <div className="drop-container02">
            <div className="drop-container03">
              <div className="drop-container04">
                <img
                  alt={props.image_alt36}
                  src={props.image_src36}
                  className="drop-image"
                />
                <span className="drop-text">{props.text1316}</span>
              </div>
              <div className="drop-container05">
                <div className="drop-container06">
                  <span className="drop-text01">{props.text1311118}</span>
                </div>
                <div className="drop-container07">
                  <span className="drop-text02">{props.text13111126}</span>
                  <span className="drop-text03">{props.text13111116}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="drop-container08">
          <div className="drop-container09">
            <div className="drop-container10">
              <div className="drop-container11">
                <img
                  alt={props.image_alt361}
                  src={props.image_src361}
                  className="drop-image1"
                />
                <span className="drop-text04">{props.text13161}</span>
              </div>
              <div className="drop-container12">
                <div className="drop-container13">
                  <span className="drop-text05">{props.text13111181}</span>
                </div>
                <div className="drop-container14">
                  <span className="drop-text06">{props.text131111261}</span>
                  <span className="drop-text07">{props.text131111161}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="drop-container15">
          <div className="drop-container16">
            <div className="drop-container17">
              <div className="drop-container18">
                <img
                  alt={props.image_alt35}
                  src={props.image_src35}
                  className="drop-image2"
                />
                <span className="drop-text08">{props.text1315}</span>
              </div>
              <div className="drop-container19">
                <div className="drop-container20">
                  <span className="drop-text09">{props.text1311117}</span>
                </div>
                <div className="drop-container21">
                  <span className="drop-text10">{props.text13111125}</span>
                  <span className="drop-text11">{props.text13111115}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="drop-container22">
          <div className="drop-container23">
            <div className="drop-container24">
              <div className="drop-container25">
                <img
                  alt={props.image_alt34}
                  src={props.image_src34}
                  className="drop-image3"
                />
                <span className="drop-text12">{props.text1314}</span>
              </div>
              <div className="drop-container26">
                <div className="drop-container27">
                  <span className="drop-text13">{props.text1311116}</span>
                </div>
                <div className="drop-container28">
                  <span className="drop-text14">{props.text13111124}</span>
                  <span className="drop-text15">{props.text13111114}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .drop-container {
            width: 100%;
            height: 328px;
            display: flex;
            position: relative;
            align-self: center;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: 1px;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: center;
          }
          .drop-container01 {
            width: 250px;
            height: 276px;
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-unit);
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
            background-image: url('/rare-800w.png');
            background-position: center;
          }
          .drop-container01:hover {
            width: 50%;
            filter: opacity(0.7);
            align-items: center;
            backdrop-filter: blur(20px);
          }
          .drop-container02 {
            color: transparent;
            width: 100%;
            height: 100%;
            position: relative;
            align-self: flex-start;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .drop-container02:hover {
            color: initial;
            filter: opacity(1);
            font-size: 25px;
            backdrop-filter: blur(10px);
          }
          .drop-container03 {
            width: 200px;
            height: 100%;
            align-items: flex-start;
            flex-direction: column;
          }
          .drop-container04 {
            gap: 5;
            width: 100%;
            height: 52px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .drop-image {
            width: 51px;
            height: 48px;
            object-fit: cover;
            border-color: #464646;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .drop-text {
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
          .drop-container05 {
            width: 100%;
          }
          .drop-container06 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .drop-text01 {
            width: 100%;
            font-size: 10px;
            align-self: center;
            margin-top: 0px;
            padding-top: var(--dl-space-space-unit);
            padding-left: 1px;
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .drop-container07 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .drop-text02 {
            width: 100%;
            font-size: 20px;
            align-self: center;
            margin-top: 0px;
            font-family: 'Pixel NES';
            padding-top: var(--dl-space-space-unit);
            padding-left: 1px;
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .drop-text03 {
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
          .drop-text03:hover {
            background: rgba(119, 119, 119, 0.68);
            backdrop-filter: blur(50px);
          }
          .drop-container08 {
            width: 250px;
            height: 276px;
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-unit);
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
            background-image: url('/kjbcvcx-800w.png');
            background-position: center;
          }
          .drop-container08:hover {
            width: 50%;
            filter: opacity(0.7);
            align-items: center;
            backdrop-filter: blur(20px);
          }
          .drop-container09 {
            color: transparent;
            width: 100%;
            height: 100%;
            position: relative;
            align-self: flex-start;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .drop-container09:hover {
            color: initial;
            filter: opacity(1);
            font-size: 25px;
            backdrop-filter: blur(10px);
          }
          .drop-container10 {
            width: 200px;
            height: 100%;
            align-items: flex-start;
            flex-direction: column;
          }
          .drop-container11 {
            gap: 5;
            width: 100%;
            height: 52px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .drop-image1 {
            width: 51px;
            height: 48px;
            object-fit: cover;
            border-color: #464646;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .drop-text04 {
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
          .drop-container12 {
            width: 100%;
          }
          .drop-container13 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .drop-text05 {
            width: 100%;
            font-size: 10px;
            align-self: center;
            margin-top: 0px;
            padding-top: var(--dl-space-space-unit);
            padding-left: 1px;
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .drop-container14 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .drop-text06 {
            width: 100%;
            font-size: 20px;
            align-self: center;
            margin-top: 0px;
            font-family: 'Pixel NES';
            padding-top: var(--dl-space-space-unit);
            padding-left: 1px;
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .drop-text07 {
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
          .drop-text07:hover {
            background: rgba(119, 119, 119, 0.68);
            backdrop-filter: blur(50px);
          }
          .drop-container15 {
            width: 250px;
            height: 276px;
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-unit);
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
            background-image: url('/adhsilzs%3Bl-800w.png');
            background-position: center;
          }
          .drop-container15:hover {
            width: 50%;
            filter: opacity(0.7);
            align-items: center;
            backdrop-filter: blur(20px);
          }
          .drop-container16 {
            color: transparent;
            width: 100%;
            height: 100%;
            position: relative;
            align-self: flex-start;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .drop-container16:hover {
            color: initial;
            filter: opacity(1);
            font-size: 25px;
            backdrop-filter: blur(10px);
          }
          .drop-container17 {
            width: 200px;
            height: 100%;
            align-items: flex-start;
            flex-direction: column;
          }
          .drop-container18 {
            gap: 5;
            width: 100%;
            height: 52px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .drop-image2 {
            width: 51px;
            height: 48px;
            object-fit: cover;
            border-color: #464646;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .drop-text08 {
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
          .drop-container19 {
            width: 100%;
          }
          .drop-container20 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .drop-text09 {
            width: 100%;
            font-size: 10px;
            align-self: center;
            margin-top: 0px;
            padding-top: var(--dl-space-space-unit);
            padding-left: 1px;
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .drop-container21 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .drop-text10 {
            width: 100%;
            font-size: 20px;
            align-self: center;
            margin-top: 0px;
            font-family: 'Pixel NES';
            padding-top: var(--dl-space-space-unit);
            padding-left: 1px;
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .drop-text11 {
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
          .drop-text11:hover {
            background: rgba(119, 119, 119, 0.68);
            backdrop-filter: blur(50px);
          }
          .drop-container22 {
            width: 250px;
            height: 276px;
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-unit);
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
            background-image: url('/ehksds-800w.png');
            background-position: center;
          }
          .drop-container22:hover {
            width: 50%;
            filter: opacity(0.7);
            align-items: center;
            backdrop-filter: blur(20px);
          }
          .drop-container23 {
            color: transparent;
            width: 100%;
            height: 100%;
            position: relative;
            align-self: flex-start;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .drop-container23:hover {
            color: initial;
            filter: opacity(1);
            font-size: 25px;
            backdrop-filter: blur(10px);
          }
          .drop-container24 {
            width: 200px;
            height: 100%;
            align-items: flex-start;
            flex-direction: column;
          }
          .drop-container25 {
            gap: 5;
            width: 100%;
            height: 52px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .drop-image3 {
            width: 51px;
            height: 48px;
            object-fit: cover;
            border-color: #464646;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .drop-text12 {
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
          .drop-container26 {
            width: 100%;
          }
          .drop-container27 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .drop-text13 {
            width: 100%;
            font-size: 10px;
            align-self: center;
            margin-top: 0px;
            padding-top: var(--dl-space-space-unit);
            padding-left: 1px;
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .drop-container28 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .drop-text14 {
            width: 100%;
            font-size: 20px;
            align-self: center;
            margin-top: 0px;
            font-family: 'Pixel NES';
            padding-top: var(--dl-space-space-unit);
            padding-left: 1px;
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .drop-text15 {
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
          .drop-text15:hover {
            background: rgba(119, 119, 119, 0.68);
            backdrop-filter: blur(50px);
          }

          @media (max-width: 479px) {
            .drop-container {
              height: 1287px;
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

Drop.defaultProps = {
  text1311118: 'Collection Description',
  text12: 'VIEW ITEMS',
  image_src32: 'b8d39b41-22b0-42d6-8389-dbb780965fb3',
  text13111111: 'VIEW ITEMS',
  image_alt33: 'image',
  image_src2: '9b4a779a-9126-423b-9ebc-73864324acb1',
  text8: 'FLOOR: 0 CORE 🗲',
  text1312: 'BWYC II',
  image_alt36: 'image',
  text13111112: 'VIEW ITEMS',
  text11: 'VOLUME: 0 CORE 🗲',
  text9: 'VOLUME: 0 CORE 🗲',
  text13161: 'BWYC II',
  text1311114: 'Collection Description',
  text1314: 'BWYC II',
  text1311113: 'Collection Description',
  text131111161: 'VIEW ITEMS',
  image_src36: '/gfdgfhyu1-200h.png',
  image_alt1: 'image',
  text10: 'VIEW ITEMS',
  text1: 'ITEMS: 10000',
  image_src3: 'b23ea074-05ee-4a5e-be09-72603f9a3ddc',
  image_src361: '/sdzhksgdasha-200w.png',
  image_alt: 'image',
  text3: 'BWYC I',
  text1311115: 'Collection Description',
  image_src: 'b8d39b41-22b0-42d6-8389-dbb780965fb3',
  image_src34: '/whls%20(1)-200h.jpg',
  image_src35: '/sf-200h.png',
  text13111116: 'VIEW ITEMS',
  text6: 'WHALECARDS',
  text13111122: 'FLOOR: 0.0',
  image_src33: 'c7fe840e-7367-4dba-aaa2-d74881872630',
  text13111125: 'FLOOR: 0.0',
  text13111181: 'Collection Description',
  text13: 'VOLUME: 0 CORE 🗲',
  text1313: 'BWYC I',
  text4: 'ITEMS: 10000',
  text13111115: 'VIEW ITEMS',
  text1311111: 'VIEW ITEMS',
  text5: 'FLOOR: 0 CORE 🗲',
  text1311: 'BWYC II',
  text131111261: 'FLOOR: 0.0',
  text: 'RAR310NES',
  text14: 'VIEW ITEMS',
  text7: 'ITEMS: 10000',
  text1316: 'BWYC II',
  image_alt31: 'image',
  image_src31: '9588fc8e-794e-491c-9c07-f66a042a1197',
  text1311112: 'FLOOR: 0.0',
  text131: 'BWYC II',
  text13111126: 'FLOOR: 0.0',
  image_alt34: 'image',
  text1311117: 'Collection Description',
  text13111124: 'FLOOR: 0.0',
  image_alt35: 'image',
  text1315: 'BWYC II',
  image_src1: 'c7fe840e-7367-4dba-aaa2-d74881872630',
  rootClassName: '',
  image_alt32: 'image',
  image_alt3: 'image',
  text13111123: 'FLOOR: 0.0',
  image_alt2: 'image',
  text131111: 'Collection Description',
  image_alt361: 'image',
  text13111121: 'FLOOR: 0.0',
  text13111114: 'VIEW ITEMS',
  text1311116: 'Collection Description',
  text2: 'FLOOR: 0 CORE 🗲',
  text13111113: 'VIEW ITEMS',
}

Drop.propTypes = {
  text1311118: PropTypes.string,
  text12: PropTypes.string,
  image_src32: PropTypes.string,
  text13111111: PropTypes.string,
  image_alt33: PropTypes.string,
  image_src2: PropTypes.string,
  text8: PropTypes.string,
  text1312: PropTypes.string,
  image_alt36: PropTypes.string,
  text13111112: PropTypes.string,
  text11: PropTypes.string,
  text9: PropTypes.string,
  text13161: PropTypes.string,
  text1311114: PropTypes.string,
  text1314: PropTypes.string,
  text1311113: PropTypes.string,
  text131111161: PropTypes.string,
  image_src36: PropTypes.string,
  image_alt1: PropTypes.string,
  text10: PropTypes.string,
  text1: PropTypes.string,
  image_src3: PropTypes.string,
  image_src361: PropTypes.string,
  image_alt: PropTypes.string,
  text3: PropTypes.string,
  text1311115: PropTypes.string,
  image_src: PropTypes.string,
  image_src34: PropTypes.string,
  image_src35: PropTypes.string,
  text13111116: PropTypes.string,
  text6: PropTypes.string,
  text13111122: PropTypes.string,
  image_src33: PropTypes.string,
  text13111125: PropTypes.string,
  text13111181: PropTypes.string,
  text13: PropTypes.string,
  text1313: PropTypes.string,
  text4: PropTypes.string,
  text13111115: PropTypes.string,
  text1311111: PropTypes.string,
  text5: PropTypes.string,
  text1311: PropTypes.string,
  text131111261: PropTypes.string,
  text: PropTypes.string,
  text14: PropTypes.string,
  text7: PropTypes.string,
  text1316: PropTypes.string,
  image_alt31: PropTypes.string,
  image_src31: PropTypes.string,
  text1311112: PropTypes.string,
  text131: PropTypes.string,
  text13111126: PropTypes.string,
  image_alt34: PropTypes.string,
  text1311117: PropTypes.string,
  text13111124: PropTypes.string,
  image_alt35: PropTypes.string,
  text1315: PropTypes.string,
  image_src1: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt32: PropTypes.string,
  image_alt3: PropTypes.string,
  text13111123: PropTypes.string,
  image_alt2: PropTypes.string,
  text131111: PropTypes.string,
  image_alt361: PropTypes.string,
  text13111121: PropTypes.string,
  text13111114: PropTypes.string,
  text1311116: PropTypes.string,
  text2: PropTypes.string,
  text13111113: PropTypes.string,
}

export default Drop
