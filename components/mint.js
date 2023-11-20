import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

const Mint = (props) => {
  return (
    <>
      <div className={`mint-container ${props.rootClassName} `}>
        <div className="mint-container01">
          <div className="mint-container02">
            <div className="mint-container03">
              <React.Fragment>
                <iframe
                  src="https://embed.ipfscdn.io/ipfs/bafybeicd3qfzelz4su7ng6n523virdsgobrc5pcbarhwqv3dj3drh645pi/?contract=0x98E8B58c44e3c7f08171bb57aeD010fDF71B351E&chain=%7B%22name%22%3A%22Core+Blockchain+Mainnet%22%2C%22chain%22%3A%22Core%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fcore-blockchain.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Core+Blockchain+Native+Token%22%2C%22symbol%22%3A%22CORE%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22core%22%2C%22chainId%22%3A1116%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22core-blockchain%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmeTQaBCkpbsxNNWTpoNrMsnwnAEf1wYTcn7CiiZGfUXD2%22%2C%22width%22%3A200%2C%22height%22%3A217%2C%22format%22%3A%22png%22%7D%7D&clientId=678d5b0199cde588796872ea22804505&theme=dark&primaryColor=blue"
                  width="600px"
                  height="600px"
                  style={{ maxWidth: '100%' }}
                  frameBorder="0"
                />
              </React.Fragment>
            </div>
          </div>
          <button type="button" className="mint-button button">
            {props.button1}
          </button>
        </div>
        <div className="mint-container04">
          <div className="mint-container05">
            <div className="mint-container06">
              <React.Fragment>
                <iframe
                  src="https://embed.ipfscdn.io/ipfs/bafybeicd3qfzelz4su7ng6n523virdsgobrc5pcbarhwqv3dj3drh645pi/?contract=0x9bA655328197b3fF54b9554294ef8017CdC09AC3&chain=%7B%22name%22%3A%22Core+Blockchain+Mainnet%22%2C%22chain%22%3A%22Core%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fcore-blockchain.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Core+Blockchain+Native+Token%22%2C%22symbol%22%3A%22CORE%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22core%22%2C%22chainId%22%3A1116%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22core-blockchain%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmeTQaBCkpbsxNNWTpoNrMsnwnAEf1wYTcn7CiiZGfUXD2%22%2C%22width%22%3A200%2C%22height%22%3A217%2C%22format%22%3A%22png%22%7D%7D&clientId=678d5b0199cde588796872ea22804505&theme=dark&primaryColor=blue"
                  width="600px"
                  height="600px"
                  style={{ maxWidth: '100%' }}
                  frameBorder="0"
                />
              </React.Fragment>
            </div>
          </div>
          <button type="button" className="mint-button1 button">
            {props.button2}
          </button>
        </div>
        <div className="mint-container07">
          <div className="mint-container08">
            <div className="mint-container09">
              <React.Fragment>
                <iframe
                  src="https://embed.ipfscdn.io/ipfs/bafybeicd3qfzelz4su7ng6n523virdsgobrc5pcbarhwqv3dj3drh645pi/?contract=0xF6C2584850Fd1F50fc979F72888Fb67CFa39a2C2&chain=%7B%22name%22%3A%22Core+Blockchain+Mainnet%22%2C%22chain%22%3A%22Core%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fcore-blockchain.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Core+Blockchain+Native+Token%22%2C%22symbol%22%3A%22CORE%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22core%22%2C%22chainId%22%3A1116%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22core-blockchain%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmeTQaBCkpbsxNNWTpoNrMsnwnAEf1wYTcn7CiiZGfUXD2%22%2C%22width%22%3A200%2C%22height%22%3A217%2C%22format%22%3A%22png%22%7D%7D&clientId=678d5b0199cde588796872ea22804505&theme=dark&primaryColor=blue"
                  width="600px"
                  height="600px"
                  style={{ maxWidth: '100%' }}
                  frameBorder="0"
                />
              </React.Fragment>
            </div>
          </div>
          <button type="button" className="mint-button2 button">
            {props.button}
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .mint-container {
            width: 100%;
            height: 674px;
            display: flex;
            position: relative;
            align-self: center;
            align-items: center;
            font-family: 'pixel NES';
            padding-top: var(--dl-space-space-oneandhalfunits);
            border-color: #2f2f2f;
            border-width: 1px;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .mint-container01 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .mint-container02 {
            width: auto;
            height: 561px;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .mint-container03 {
            display: contents;
          }
          .mint-button {
            color: #9c9c9c;
            width: 260px;
            height: 48px;
            box-shadow: 5px 6px 0px 0px #5f5f5f;
            margin-top: var(--dl-space-space-unit);
            transition: 0.3s;
            border-color: #4e4e4e;
            border-width: 0.5px;
            border-radius: var(--dl-radius-radius-radius8);
            background-color: #252525;
          }
          .mint-button:hover {
            color: var(--dl-color-gray-white);
            font-size: x-large;
            background: gray;
          }
          .mint-container04 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .mint-container05 {
            width: auto;
            height: 558px;
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
          }
          .mint-container06 {
            display: contents;
          }
          .mint-button1 {
            color: #a6a6a6;
            width: 260px;
            height: 48px;
            box-shadow: 5px 6px 0px 0px #555555;
            margin-top: var(--dl-space-space-unit);
            transition: 0.3s;
            border-color: #818181;
            border-width: 0.5px;
            border-radius: var(--dl-radius-radius-radius8);
            background-color: #202020;
          }
          .mint-button1:hover {
            font-size: x-large;
          }
          .mint-container07 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .mint-container08 {
            width: auto;
            height: 560px;
            align-self: center;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .mint-container09 {
            display: contents;
          }
          .mint-button2 {
            color: #d4d4d4;
            width: 260px;
            height: 48px;
            box-shadow: 5px 6px 0px 0px #555555;
            margin-top: var(--dl-space-space-unit);
            transition: 0.3s;
            border-color: #7b7b7b;
            border-width: 0.5px;
            border-radius: var(--dl-radius-radius-radius8);
            background-color: #2d2d2d;
          }
          .mint-button2:hover {
            font-size: x-large;
          }

          @media (max-width: 479px) {
            .mint-container {
              height: 1706px;
              display: flex;
              margin-top: var(--dl-space-space-twounits);
              margin-bottom: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .mint-container02 {
              margin-top: var(--dl-space-space-twounits);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .mint-container05 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .mint-root-class-name {
              margin-top: var(--dl-space-space-fourunits);
              margin-bottom: var(--dl-space-space-fourunits);
            }
          }
        `}
      </style>
    </>
  )
}

Mint.defaultProps = {
  button1: 'STAKE',
  rootClassName: '',
  button: 'STAKE',
  button2: 'STAKE',
}

Mint.propTypes = {
  button1: PropTypes.string,
  rootClassName: PropTypes.string,
  button: PropTypes.string,
  button2: PropTypes.string,
}

export default Mint
