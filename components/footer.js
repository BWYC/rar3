import React from 'react'

import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <>
      <div className={`footer-container ${props.rootClassName} `}>
        <div className="footer-container1">
          <span className="footer-text">{props.text11}</span>
        </div>
      </div>
      <style jsx>
        {`
          .footer-container {
            width: 100%;
            height: 56px;
            display: flex;
            z-index: 1;
            position: static;
            align-items: center;
            font-family: 'pixel NES';
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: 6px;
            justify-content: center;
            background-color: #121212;
            border-top-width: 1px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .footer-container1 {
            width: auto;
            height: 42px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .footer-text {
            color: #969696;
            width: auto;
            text-align: center;
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

Footer.defaultProps = {
  text1: 'TERMS AND SERVICE',
  text11: 'RAREBAY ALL RIGHTS RESERVED  ©️ 2023',
  rootClassName: '',
}

Footer.propTypes = {
  text1: PropTypes.string,
  text11: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Footer
