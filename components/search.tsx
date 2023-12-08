import React, { useState } from 'react'

import PropTypes from 'prop-types'

const Search = (props) => {
  const [isVisible, setIsVisible] = useState('newState')
  return (
    <>
      <div className={`search-container ${props.rootClassName} `}>
        <input
          type="text"
          id="search"
          value="Search "
          placeholder="Search"
          backdrop-filter="blur(50px)"
          className="search-textinput input"
        />
        <svg viewBox="0 0 950.8571428571428 1024" className="search-icon">
          <path d="M658.286 475.429c0-141.143-114.857-256-256-256s-256 114.857-256 256 114.857 256 256 256 256-114.857 256-256zM950.857 950.857c0 40-33.143 73.143-73.143 73.143-19.429 0-38.286-8-51.429-21.714l-196-195.429c-66.857 46.286-146.857 70.857-228 70.857-222.286 0-402.286-180-402.286-402.286s180-402.286 402.286-402.286 402.286 180 402.286 402.286c0 81.143-24.571 161.143-70.857 228l196 196c13.143 13.143 21.143 32 21.143 51.429z"></path>
        </svg>
      </div>
      <style jsx>
        {`
          .search-container {
            display: flex;
            position: relative;
            color: gray;
          }
          .search-textinput {
            width: 163px;
            height: 39px;
            transition: 0.3s;
            border-color: #6f6f6f;
            border-radius: var(--dl-radius-radius-radius8);
            backdrop-filter: blur(10px);
            background-color: inherit;
          }
          .search-textinput:focus {
            border: solid blue 2px;
          }
          .search-textinput:hover {
            color: #d8d8d8;
          }
          .search-icon {
            top: 8px;
            fill: #d9d9d9;
            right: 6px;
            width: 18px;
            height: 21px;
            position: absolute;
          }
          .search-root-class-name {
            align-self: center;
          }
          .search-root-class-name1 {
            margin-top: 0px;
            margin-left: var(--dl-space-space-twounits);
          }
          .search-root-class-name2 {
            margin-top: 0px;
            margin-left: var(--dl-space-space-twounits);
          }
          .search-root-class-name3 {
            margin-top: 0px;
            margin-left: var(--dl-space-space-twounits);
          }
          .search-root-class-name4 {
            margin-top: 0px;
            margin-left: var(--dl-space-space-twounits);
          }
          .search-root-class-name5 {
            margin-top: 0px;
            margin-left: var(--dl-space-space-twounits);
          }
          .search-root-class-name6 {
            margin-top: 0px;
            margin-left: var(--dl-space-space-twounits);
          }
          .search-root-class-name7 {
            margin-top: 0px;
            margin-left: var(--dl-space-space-twounits);
          }

          @media (max-width: 1004px) {
            .search-textinput {
              width: 211px;
            }
          }
          @media (max-width: 479px) {
            .search-container {
              width: auto;
            }
            .search-textinput {
              width: 134px;
              align-self: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
            .search-icon {
              top: 9px;
              fill: #d9d9d9;
              right: 25px;
            }
            .search-root-class-name1 {
              margin-top: 0px;
            }
            .search-root-class-name2 {
              margin-top: 0px;
            }
            .search-root-class-name3 {
              margin-top: 0px;
            }
            .search-root-class-name4 {
              margin-top: 0px;
            }
            .search-root-class-name5 {
              margin-top: 0px;
            }
            .search-root-class-name6 {
              margin-top: 0px;
            }
            .search-root-class-name7 {
              margin-top: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

Search.defaultProps = {
  textinput_placeholder: 'placeholder',
  rootClassName: '',
}

Search.propTypes = {
  textinput_placeholder: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Search
