import React from 'react'

import PropTypes from 'prop-types'

const AppComponent = (props) => {
  return (
    <>
      <div className="app-component-container">
        <div className="app-component-container1">
          <div className="app-component-container2">
            <div className="app-component-container3">
              <img
                alt={props.image_alt}
                src={props.image_src}
                className="app-component-image"
              />
              <span className="app-component-text">{props.text}</span>
            </div>
            <div className="app-component-container4">
              <div className="app-component-container5">
                <span className="app-component-text1">{props.text1}</span>
              </div>
              <div className="app-component-container6">
                <span className="app-component-text2">{props.text2}</span>
                <span className="app-component-text3">{props.text3}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .app-component-container {
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
            background-image: url('/rare-300h.png');
            background-position: center;
          }
          .app-component-container1 {
            color: transparent;
            width: 100%;
            height: 100%;
            position: relative;
            align-self: flex-start;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            border-color: #8e8e8e;
            border-width: 1px;
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: center;
          }
          .app-component-container1:hover {
            color: initial;
            filter: opacity(1);
            font-size: 25px;
            backdrop-filter: blur(10px);
          }
          .app-component-container2 {
            width: 200px;
            height: 100%;
            align-items: flex-start;
            flex-direction: column;
          }
          .app-component-container3 {
            gap: 5;
            width: 100%;
            height: 52px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .app-component-image {
            width: 51px;
            height: 48px;
            object-fit: cover;
            border-color: #464646;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .app-component-text {
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
          .app-component-container4 {
            width: 100%;
          }
          .app-component-container5 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .app-component-text1 {
            width: 100%;
            font-size: 10px;
            align-self: center;
            margin-top: 0px;
            padding-top: var(--dl-space-space-unit);
            padding-left: 1px;
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .app-component-container6 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .app-component-text2 {
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
          .app-component-text3 {
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
          .app-component-text3:hover {
            background: rgba(119, 119, 119, 0.68);
            backdrop-filter: blur(50px);
          }
        `}
      </style>
    </>
  )
}

AppComponent.defaultProps = {
  text2: 'FLOOR: 0.0',
  image_alt: 'image',
  image_src: '/gfdgfhyu1-200h.png',
  text1: 'Collection Description',
  text3: 'VIEW ITEMS',
  text: 'BWYC II',
}

AppComponent.propTypes = {
  text2: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  text1: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
}

export default AppComponent
