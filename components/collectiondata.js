import React, { useState } from 'react'

import PropTypes from 'prop-types'

const Collectiondata = (props) => {
  const [isVisible, setIsVisible] = useState(true)
  return (
    <>
      <div
        onLoad={() => setIsVisible(false)}
        className="collectiondata-container"
      >
        <div className="collectiondata-container1">
          <div className="collectiondata-container2">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="collectiondata-image"
            />
            <span className="collectiondata-text">{props.text13}</span>
          </div>
          <div className="collectiondata-container3">
            <div className="collectiondata-container4">
              <span className="collectiondata-text1">{props.text131111}</span>
            </div>
            <div className="collectiondata-container5">
              <span className="collectiondata-text2">{props.text1311112}</span>
              <span className="collectiondata-text3">{props.text1311111}</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .collectiondata-container {
            color: transparent;
            width: 100%;
            height: 258px;
            position: relative;
            align-self: flex-start;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .collectiondata-container:hover {
            color: #81c9ff;
            filter: opacity(1);
            font-size: 25px;
          }
          .collectiondata-container1 {
            width: 200px;
            height: 100%;
            align-items: flex-start;
            flex-direction: column;
          }
          .collectiondata-container2 {
            gap: 5;
            width: 262px;
            height: 52px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .collectiondata-image {
            width: 51px;
            height: 48px;
            object-fit: cover;
            border-color: #464646;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
          }
          .collectiondata-text {
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
          .collectiondata-container3 {
            width: 100%;
          }
          .collectiondata-container4 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .collectiondata-text1 {
            width: 100%;
            font-size: 10px;
            align-self: center;
            margin-top: 0px;
            padding-top: var(--dl-space-space-unit);
            padding-left: 1px;
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .collectiondata-container5 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .collectiondata-text2 {
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
          .collectiondata-text3 {
            width: 100%;
            border: solid 1px;
            font-size: medium;
            align-self: center;
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .collectiondata-text3:hover {
            background: rgba(119, 119, 119, 0.68);
            backdrop-filter: blur(50px);
          }
        `}
      </style>
    </>
  )
}

Collectiondata.defaultProps = {
  text1311112: 'FLOOR: 0.0',
  text13: 'BWYC II',
  text131111: 'Collection Description',
  image_alt: 'image',
  image_src: '/sdzhksgdasha-200w.png',
  text1311111: 'VIEW ITEMS',
}

Collectiondata.propTypes = {
  text1311112: PropTypes.string,
  text13: PropTypes.string,
  text131111: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  text1311111: PropTypes.string,
}

export default Collectiondata
