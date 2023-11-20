import React from 'react'

import PropTypes from 'prop-types'

const Link = (props) => {
  return (
    <>
      <div className={`link-container ${props.rootClassName} `}>
        <svg viewBox="0 0 1024 1024" className="link-icon">
          <path d="M725.333 896v-85.333c0-58.88-23.936-112.299-62.464-150.869s-91.989-62.464-150.869-62.464h-298.667c-58.88 0-112.299 23.936-150.869 62.464s-62.464 91.989-62.464 150.869v85.333c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-85.333c0-35.371 14.293-67.285 37.504-90.496s55.125-37.504 90.496-37.504h298.667c35.371 0 67.285 14.293 90.496 37.504s37.504 55.125 37.504 90.496v85.333c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667zM576 298.667c0-58.88-23.936-112.299-62.464-150.869s-91.989-62.464-150.869-62.464-112.299 23.936-150.869 62.464-62.464 91.989-62.464 150.869 23.936 112.299 62.464 150.869 91.989 62.464 150.869 62.464 112.299-23.936 150.869-62.464 62.464-91.989 62.464-150.869zM490.667 298.667c0 35.371-14.293 67.285-37.504 90.496s-55.125 37.504-90.496 37.504-67.285-14.293-90.496-37.504-37.504-55.125-37.504-90.496 14.293-67.285 37.504-90.496 55.125-37.504 90.496-37.504 67.285 14.293 90.496 37.504 37.504 55.125 37.504 90.496zM695.168 499.499l85.333 85.333c16.683 16.683 43.691 16.683 60.331 0l170.667-170.667c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-140.501 140.501-55.168-55.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
        </svg>
        <span className="link-text">{props.text}</span>
        <svg viewBox="0 0 950.8571428571428 1024" className="link-icon2">
          <path d="M920.571 475.429c0 19.429-8 38.286-21.143 51.429l-372 372.571c-13.714 13.143-32.571 21.143-52 21.143s-38.286-8-51.429-21.143l-372-372.571c-13.714-13.143-21.714-32-21.714-51.429s8-38.286 21.714-52l42.286-42.857c13.714-13.143 32.571-21.143 52-21.143s38.286 8 51.429 21.143l168 168v-402.286c0-40 33.143-73.143 73.143-73.143h73.143c40 0 73.143 33.143 73.143 73.143v402.286l168-168c13.143-13.143 32-21.143 51.429-21.143s38.286 8 52 21.143l42.857 42.857c13.143 13.714 21.143 32.571 21.143 52z"></path>
        </svg>
        <span className="link-text1">{props.text1}</span>
        <svg viewBox="0 0 1024 1024" className="link-icon4">
          <path d="M1024 576v-384h-192v-64c0-35.2-28.8-64-64-64h-704c-35.2 0-64 28.8-64 64v192c0 35.2 28.8 64 64 64h704c35.2 0 64-28.8 64-64v-64h128v256h-576v128h-32c-17.674 0-32 14.326-32 32v320c0 17.674 14.326 32 32 32h128c17.674 0 32-14.326 32-32v-320c0-17.674-14.326-32-32-32h-32v-64h576zM768 192h-704v-64h704v64z"></path>
        </svg>
        <span className="link-text2">{props.text2}</span>
      </div>
      <style jsx>
        {`
          .link-container {
            top: 84px;
            right: 1px;
            width: 100%;
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
          .link-container:hover {
            background: rgba(0, 0, 0, 0.89);
          }
          .link-icon {
            fill: #d9d9d9;
            width: 23px;
            height: 21px;
          }
          .link-text {
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
          .link-text:hover {
            padding: 10;
            font-size: large;
            background: #585858;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .link-text:active {
            background: #2b2b2b;
          }
          .link-icon2 {
            fill: #d9d9d9;
            width: 19px;
            height: 13px;
          }
          .link-text1 {
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
          .link-text1:hover {
            padding: 10;
            font-size: large;
            background: #585858;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .link-text1:active {
            background: #2b2b2b;
          }
          .link-icon4 {
            fill: #d9d9d9;
            width: 19px;
            height: 17px;
          }
          .link-text2 {
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
          .link-text2:hover {
            padding: 10;
            font-size: large;
            background: #585858;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .link-text2:active {
            background: #2b2b2b;
          }
          @media (max-width: 479px) {
            .link-container {
              top: 69px;
              left: -2px;
              width: auto;
              height: 65px;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

Link.defaultProps = {
  text3: 'SELL',
  text2: 'CREATE',
  text4: 'CREATE',
  text: 'OWNED',
  rootClassName: '',
  text1: 'SELL',
  rootClassName2: '',
}

Link.propTypes = {
  text3: PropTypes.string,
  text2: PropTypes.string,
  text4: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  rootClassName2: PropTypes.string,
}

export default Link
