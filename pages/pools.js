import React from 'react'
import Head from 'next/head'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Stake from "./stake"
import Stake1 from "./stake1"
import Stake2 from "./stake2"


const customStyles = {
  content: {
    top: '55%',
    left: '50%',
    right: 'auto',
    paddingBottom: '10%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: "80%",
    overflow: "scroll",
    borderRadius: "16px",
    background: "rgba(0, 0, 0, 0.54)",
    border: "solid 2px",
    backdropFilter: "blur(10px)",
    color:  "white",
    overflowX: "hidden",
    textAlign: "center"
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement();

const Pools = (props) => {
  
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalIsOpen1, setIsOpen1] = React.useState(false);
  const [modalIsOpen2, setIsOpen2] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function openModal1() {
    setIsOpen1(true);
  }
  function openModal2() {
    setIsOpen2(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = 'orange';
  }

  function closeModal() {
    setIsOpen(false);
  }
  function closeModal1() {
    setIsOpen1(false);
  }
  function closeModal2() {
    setIsOpen2(false);
  }

  return (
    <>
      <div className="pools-container">
        <Head>
          <title>Stake - RareBay | POOLS</title>
          <meta property="og:title" content="Pools - RareBay | DEX" />
        </Head>
        <div className="pools-container01"></div>
        <div className="pools-container02"></div>
        <div className="pools-container03">
          <div className="pools-pricing">
            <div className="pools-pricing-card">
              <svg viewBox="0 0 1024 1024" className="pools-icon">
                <path d="M598 234q0-44 31-75t75-31 75 31 31 75-31 76-75 32-75-32-31-76zM370 512q-24 0-50-16-8-6-32-16l138-138-42-44q-64-64-170-64v-106q82 0 134 19t100 67l274 272q-12 8-18 10-26 16-50 16-22 0-48-16-44-26-94-26t-94 26q-26 16-48 16zM938 704q-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28v-86q26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14 26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14 26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14v86zM938 896q-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28t-94-28q-22-14-48-14-28 0-50 14-46 28-92 28v-86q26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14 26 0 48-14 46-28 94-28t94 28q22 14 48 14 28 0 50-14 46-28 92-28 48 0 94 28 22 14 48 14v86z"></path>
              </svg>
              <span className="pools-text">RAR310NES POOL</span>
              <div className="pools-container04">
                <span className="pools-text01">0.5 WHLS</span>
              </div>
              <div className="pools-container05">
                <span className="pools-text02">
                  <span>LOCK PERIOD: 46 WEEKS </span>
                  <br></br>
                </span>
                <span className="pools-text05">
                  <span>UNCLAIMABLE</span>
                  <br></br>
                </span>
              </div>
              <button className="pools-button button" onClick={openModal}>STAKE</button>
              <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="STAKE"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>STAKING POOL</h2>
        <div><Stake />
        <div style={{height: "10px"}}></div>
        <button className='button' onClick={closeModal}>EXIT</button>
        </div>
       
      </Modal>
            </div>
            <div className="pools-pricing-card1">
              <svg viewBox="0 0 1024 1024" className="pools-icon2">
                <path d="M598 234q0-44 31-75t75-31 75 31 31 75-31 76-75 32-75-32-31-76zM370 512q-24 0-50-16-8-6-32-16l138-138-42-44q-64-64-170-64v-106q82 0 134 19t100 67l274 272q-12 8-18 10-26 16-50 16-22 0-48-16-44-26-94-26t-94 26q-26 16-48 16zM938 704q-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28v-86q26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14 26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14 26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14v86zM938 896q-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28t-94-28q-22-14-48-14-28 0-50 14-46 28-92 28v-86q26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14 26 0 48-14 46-28 94-28t94 28q22 14 48 14 28 0 50-14 46-28 92-28 48 0 94 28 22 14 48 14v86z"></path>
              </svg>
              <span className="pools-text08">BWYC POOL</span>
              <div className="pools-container06">
                <span className="pools-text09">1 WHLS</span>
              </div>
              <div className="pools-container07">
                <span className="pools-text10">
                  <span>LOCK PERIOD: 1 MONTH</span>
                  <br></br>
                </span>
                <span className="pools-text13">
                  <span>CLAIMABLE</span>
                  <br></br>
                </span>
              </div>
              <a href='https://app.youngparrotnft.com/core/pools/nfts/bwyc-whls' className="pools-button button" disabled>STAKE</a>
   
            </div>
            <div className="pools-pricing-card2">
              <svg viewBox="0 0 1024 1024" className="pools-icon4">
                <path d="M598 234q0-44 31-75t75-31 75 31 31 75-31 76-75 32-75-32-31-76zM370 512q-24 0-50-16-8-6-32-16l138-138-42-44q-64-64-170-64v-106q82 0 134 19t100 67l274 272q-12 8-18 10-26 16-50 16-22 0-48-16-44-26-94-26t-94 26q-26 16-48 16zM938 704q-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28v-86q26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14 26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14 26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14v86zM938 896q-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28t-94-28q-22-14-48-14-28 0-50 14-46 28-92 28v-86q26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14 26 0 48-14 46-28 94-28t94 28q22 14 48 14 28 0 50-14 46-28 92-28 48 0 94 28 22 14 48 14v86z"></path>
              </svg>
              <span className="pools-text16">BWYC II POOL</span>
              <div className="pools-container08">
                <span className="pools-text17">0.5 WHLS</span>
              </div>
              <div className="pools-container09">
                <span className="pools-text18">
                  <span>LOCK PERIOD: 1 MONTH</span>
                  <br></br>
                </span>
                <span className="pools-text21">
                  <span>UNCLAIMABLE</span>
                  <br></br>
                </span>
              </div>
              <button className="pools-button button" onClick={openModal1}>STAKE</button>
              <Modal
        isOpen={modalIsOpen1}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal1}
        style={customStyles}
        contentLabel="STAKE"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>STAKING POOL</h2>
        <div><Stake1 />
        <div style={{height: "10px"}}></div>
        <button className='button' onClick={closeModal1}>EXIT</button>
        </div>
       
      </Modal>
            </div>
            <div
  style={{
    height: '90vh',
    transform: 'scale(1)'
  }}
>
  <div>
   
  </div>
</div>
            <div className="pools-pricing-card3">
              <svg viewBox="0 0 1024 1024" className="pools-icon6">
                <path d="M598 234q0-44 31-75t75-31 75 31 31 75-31 76-75 32-75-32-31-76zM370 512q-24 0-50-16-8-6-32-16l138-138-42-44q-64-64-170-64v-106q82 0 134 19t100 67l274 272q-12 8-18 10-26 16-50 16-22 0-48-16-44-26-94-26t-94 26q-26 16-48 16zM938 704q-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28v-86q26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14 26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14 26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14v86zM938 896q-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28-46 0-92-28-22-14-50-14-26 0-48 14-46 28-94 28t-94-28q-22-14-48-14-28 0-50 14-46 28-92 28v-86q26 0 48-14 46-28 94-28 46 0 92 28 22 14 50 14 26 0 48-14 46-28 94-28t94 28q22 14 48 14 28 0 50-14 46-28 92-28 48 0 94 28 22 14 48 14v86z"></path>
              </svg>
              <span className="pools-text24">WHALECARD POOL</span>
              <div className="pools-container10">
                <span className="pools-text25">2 WHLS</span>
              </div>
              <div className="pools-container11">
                <span className="pools-text26">
                  <span>LOCK PERIOD: 1 MONTH</span>
                  <br></br>
                </span>
                <span className="pools-text29">
                  <span>CLAIMABLE</span>
                  <br></br>
                </span>
              </div>
              <button className="pools-button button" onClick={openModal2}>STAKE</button>
              <Modal
        isOpen={modalIsOpen2}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal2}
        style={customStyles}
        contentLabel="STAKE"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>STAKING POOL</h2>
        <div><Stake2 />
        <div style={{height: "10px"}}></div>
        <button className='button' onClick={closeModal2}>EXIT</button>
        </div>
       
      </Modal>
            </div>
          </div>
        </div>
        <div className="pools-container12"></div>
      </div>
      <style jsx>
        {`
          .pools-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
            background-image: linear-gradient(
              45deg,
              rgba(0, 0, 0, 0.55) 0%,
              rgb(0, 25, 50) 100%
            );
          }
          .pools-container01 {
            width: 100%;
            height: 202px;
            display: flex;
            align-items: flex-start;
          }
          .pools-container02 {
            width: 100%;
            height: 162px;
            display: flex;
            align-items: flex-start;
          }
          .pools-container03 {
            width: 100%;
            height: 250px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .pools-pricing {
            width: 100%;
            height: 599px;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            font-family: 'Pixel Nes';
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-twounits);
            backdrop-filter: blur(50px);
            justify-content: center;
          }
          .pools-pricing-card {
            width: var(--dl-size-size-xxlarge);
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            max-width: 450px;
            margin-top: var(--dl-space-space-unit);
            min-height: 450px;
            transition: 0.3s;
            align-items: center;
            margin-left: var(--dl-space-space-unit);
            border-color: initial;
            border-width: 1px;
            margin-right: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            backdrop-filter: blur(50px);
          }
          .pools-pricing-card:hover {
            transform: scale(1.02);
          }
          .pools-icon {
            width: 24px;
            height: 24px;
          }
          .pools-text {
            color: rgb(111, 111, 111);
            font-size: 1.5rem;
            text-align: center;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-twounits);
            text-transform: uppercase;
          }
          .pools-container04 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .pools-text01 {
            font-size: 1.5rem;
            text-align: center;
            font-weight: 700;
          }
          .pools-container05 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .pools-text02 {
            align-self: center;
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .pools-text05 {
            color: #961c00;
            align-self: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
            background-color: #191919;
          }
          .pools-button {
            color: var(--dl-color-gray-white);
            margin-top: auto;
            padding-top: var(--dl-space-space-unit);
            border-color: initial;
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          .pools-pricing-card1 {
            width: var(--dl-size-size-xxlarge);
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            max-width: 450px;
            margin-top: var(--dl-space-space-unit);
            min-height: 450px;
            transition: 0.3s;
            align-items: center;
            margin-left: var(--dl-space-space-unit);
            border-color: initial;
            border-width: 1px;
            margin-right: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            backdrop-filter: blur(50px);
          }
          .pools-pricing-card1:hover {
            transform: scale(1.02);
          }
          .pools-icon2 {
            width: 24px;
            height: 24px;
          }
          .pools-text08 {
            color: #626262;
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-twounits);
            text-transform: uppercase;
          }
          .pools-container06 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .pools-text09 {
            font-size: 1.5rem;
            text-align: center;
            font-weight: 700;
          }
          .pools-container07 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .pools-text10 {
            align-self: center;
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .pools-text13 {
            color: rgb(84, 166, 0);
            align-self: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
            background-color: rgb(25, 25, 25);
          }
          .pools-button1 {
            color: var(--dl-color-gray-white);
            margin-top: auto;
            padding-top: var(--dl-space-space-unit);
            border-color: #d6c7c7;
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          .pools-pricing-card2 {
            width: var(--dl-size-size-xxlarge);
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            max-width: 450px;
            margin-top: var(--dl-space-space-unit);
            min-height: 450px;
            transition: 0.3s;
            align-items: center;
            margin-left: var(--dl-space-space-unit);
            padding-top: 32px;
            border-color: initial;
            border-width: 1px;
            margin-right: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            backdrop-filter: blur(50px);
          }
          .pools-pricing-card2:hover {
            transform: scale(1.02);
          }
          .pools-icon4 {
            width: 24px;
            height: 24px;
          }
          .pools-text16 {
            color: rgb(98, 98, 98);
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-twounits);
            text-transform: uppercase;
          }
          .pools-container08 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .pools-text17 {
            font-size: 1.5rem;
            text-align: center;
            font-weight: 700;
          }
          .pools-container09 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .pools-text18 {
            align-self: center;
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .pools-text21 {
            color: #961c00;
            align-self: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
            background-color: #191919;
          }
          .pools-button2 {
            color: var(--dl-color-gray-white);
            margin-top: auto;
            padding-top: var(--dl-space-space-unit);
            border-color: #d6c7c7;
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          .pools-pricing-card3 {
            width: var(--dl-size-size-xxlarge);
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            max-width: 450px;
            margin-top: var(--dl-space-space-unit);
            min-height: 450px;
            transition: 0.3s;
            align-items: center;
            border-color: initial;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            backdrop-filter: blur(50px);
          }
          .pools-pricing-card3:hover {
            transform: scale(1.02);
          }
          .pools-icon6 {
            width: 24px;
            height: 24px;
          }
          .pools-text24 {
            color: rgb(80, 80, 80);
            font-size: 1.5rem;
            text-align: center;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-twounits);
            text-transform: uppercase;
          }
          .pools-container10 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .pools-text25 {
            font-size: 1.5rem;
            text-align: center;
            font-weight: 700;
          }
          .pools-container11 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .pools-text26 {
            align-self: center;
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .pools-text29 {
            color: rgb(84, 166, 0);
            align-self: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
            background-color: rgb(25, 25, 25);
          }
          .pools-button3 {
            color: var(--dl-color-gray-white);
            margin-top: auto;
            padding-top: var(--dl-space-space-unit);
            border-color: #d6c7c7;
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          .pools-container12 {
            width: 100%;
            height: 331px;
            display: flex;
            align-items: flex-start;
          }
          @media (max-width: 1004px) {
            .pools-container01 {
              height: 702px;
            }
            .pools-pricing {
              height: var(--dl-size-size-maxwidth);
              display: flex;
              margin-top: 59px;
              flex-direction: column;
            }
            .pools-container12 {
              height: 939px;
            }
          }
          @media (max-width: 991px) {
            .pools-pricing-card {
              width: 100%;
              max-width: 100%;
              align-items: center;
            }
            .pools-pricing-card1 {
              width: 100%;
              max-width: 100%;
              align-items: center;
            }
            .pools-pricing-card2 {
              width: 100%;
              max-width: 100%;
              align-items: center;
            }
            .pools-pricing-card3 {
              width: 100%;
              max-width: 100%;
              align-items: center;
            }
          }
          @media (max-width: 767px) {
            .pools-pricing-card {
              width: 100%;
              max-width: 450px;
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .pools-pricing-card1 {
              width: 100%;
              max-width: 450px;
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .pools-pricing-card2 {
              width: 100%;
              max-width: 450px;
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .pools-pricing-card3 {
              width: 100%;
              max-width: 450px;
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .pools-container01 {
              height: 707px;
            }
            .pools-pricing {
              height: var(--dl-size-size-maxwidth);
              display: flex;
              flex-direction: column;
            }
            .pools-pricing-card {
              width: 294px;
              margin-right: 0px;
            }
            .pools-text {
              color: #c5c5c5;
            }
            .pools-text01 {
              text-align: center;
            }
            .pools-pricing-card1 {
              width: 294px;
              margin-right: 0px;
            }
            .pools-text08 {
              color: #d2d2d2;
            }
            .pools-text09 {
              text-align: center;
            }
            .pools-pricing-card2 {
              width: 294px;
              margin-right: 0px;
            }
            .pools-text16 {
              color: #b7b7b7;
            }
            .pools-text17 {
              text-align: center;
            }
            .pools-pricing-card3 {
              width: 294px;
              margin-right: 0px;
            }
            .pools-text24 {
              color: #c5bfbf;
            }
            .pools-text25 {
              text-align: center;
            }
            .pools-container12 {
              height: 901px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Pools
