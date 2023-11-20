import React from 'react'

import PropTypes from 'prop-types'

const Video = (props) => {
  return (
    <>
      <div className={`video-container ${props.rootClassName} `}>
        <video
          src={props.video_src}
          muted
          preload="none"
          autoPlay
          playsInline
          className="video-video"
        ></video>
      </div>
      <style jsx>
        {`
          .video-container {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
          }
          .video-video {
            width: 100%;
            height: 100%;
            align-self: center;
            border-color: #575757;
            border-width: 1px;
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-unit);
          }
          .video-root-class-name {
            align-self: center;
          }
          .video-root-class-name1 {
            align-self: center;
          }
          @media (max-width: 479px) {
            .video-video {
              width: 100%;
              height: 100%;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Video.defaultProps = {
  video_src:
    'https://bafybeihgbct4yo3zx7jedm3s4w46jlfkbwehzjistubox2tva5ycmlrpgm.ipfs.nftstorage.link/ipfs/bafybeihgbct4yo3zx7jedm3s4w46jlfkbwehzjistubox2tva5ycmlrpgm/Untitled%20video%20-%20Made%20with%20Clipchamp.mp4',
  rootClassName: '',
}

Video.propTypes = {
  video_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Video
