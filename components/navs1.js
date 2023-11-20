import React from 'react'

import Search from './search'

const Navs1 = (props) => {
  return (
    <>
      <div className="navs1-container">
        <svg viewBox="0 0 1024 1024" className="navs1-icon">
          <path d="M726 768q34 0 59 26t25 60-25 59-59 25-60-25-26-59 26-60 60-26zM42 86h140l40 84h632q18 0 30 13t12 31q0 2-6 20l-152 276q-24 44-74 44h-318l-38 70-2 6q0 10 10 10h494v86h-512q-34 0-59-26t-25-60q0-20 10-40l58-106-154-324h-86v-84zM298 768q34 0 60 26t26 60-26 59-60 25-59-25-25-59 25-60 59-26z"></path>
        </svg>
        <Search rootClassName="search-root-class-name2"></Search>
        <div className="navs1-container1"></div>
      </div>
      <style jsx>
        {`
          .navs1-container {
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
          .navs1-icon {
            top: 20px;
            fill: #ababab;
            right: 102px;
            width: 31px;
            height: 25px;
            position: absolute;
            transition: 0.3s;
          }
          .navs1-icon:hover {
            width: 40;
            height: 40;
            background: transparent;
          }
          .navs1-container1 {
            flex: 0 0 auto;
            right: 179px;
            width: 188px;
            bottom: -1px;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
          }
          @media (max-width: 479px) {
            .navs1-container {
              top: -2px;
              left: -7px;
              width: 100%;
              height: 72px;
            }
            .navs1-icon {
              top: 19px;
              right: 31px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Navs1
