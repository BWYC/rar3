import React from 'react'

import PropTypes from 'prop-types'

const Title = (props) => {
  return (
    <>
      <div className={`title-container ${props.rootClassName} `}>
        <div className="title-container1"></div>
        <h1 className="title-text">{props.heading}</h1>
      </div>
      <style jsx>
        {`
          .title-container {
            width: 1307px;
            height: 132px;
            display: flex;
            position: relative;
            align-self: center;
            align-items: center;
            border-color: #393939;
            border-width: 0.5px;
            flex-direction: column;
            justify-content: flex-start;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .title-container1 {
            width: 1307px;
            height: 48px;
            display: flex;
            align-self: center;
            align-items: flex-start;
            justify-content: center;
          }
          .title-text {
            color: rgb(140, 140, 140);
            height: 0px;
            align-self: center;
            background: -webkit-linear-gradient(
              rgb(1, 12, 241),
              rgb(250, 100, 100)
            );
            margin-top: 0px;
            text-align: center;
            padding-bottom: var(--dl-space-space-twounits);
            background-image: -webkit-linear-gradient(
              top,
              rgb(1, 12, 241),
              rgb(250, 100, 100)
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          @media (max-width: 479px) {
            .title-container {
              width: 355px;
              height: 42px;
            }
            .title-container1 {
              width: 355px;
              height: 42px;
            }
            .title-text {
              height: 134px;
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

Title.defaultProps = {
  heading: 'RECENT DROPS',
  rootClassName: '',
}

Title.propTypes = {
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Title
