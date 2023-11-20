import React from 'react'

import PropTypes from 'prop-types'

const Brand = (props) => {
  return (
    <>
      <div className="brand-container">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="brand-image"
        />
        <span className="brand-text">{props.text}</span>
      </div>
      <style jsx>
        {`
          .brand-container {
            width: 308px;
            height: 107px;
            display: flex;
            position: fixed;
            align-items: center;
            justify-content: flex-start;
          }
          .brand-image {
            top: 13px;
            left: 21px;
            width: 83px;
            height: 84px;
            position: absolute;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .brand-text {
            top: 46px;
            left: 79px;
            color: #b7b7b7;
            position: absolute;
            font-size: 20px;
            font-family: 'Pixel NES';
          }
        `}
      </style>
    </>
  )
}

Brand.defaultProps = {
  text: 'RAREBAY.XYZ',
  image_alt: 'image',
  image_src: '/fav-200h.ico',
}

Brand.propTypes = {
  text: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default Brand
