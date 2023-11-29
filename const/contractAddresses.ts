/** Replace the values below with the addresses of your smart contracts. */

// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { CoreBlockchain } from "@thirdweb-dev/chains";

export const NETWORK = CoreBlockchain;

// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
export const MARKETPLACE_ADDRESS = "0x69d5dDE5aF1fa6Cf5b86EC9B907c9bA1879c717f";

// 3. The address of your NFT collection smart contract.
export const NFT_COLLECTION_ADDRESS =
  "0x9bA655328197b3fF54b9554294ef8017CdC09AC3";
  export const NFT_COLLECTION_ADDRESS2 =
  "0xF6C2584850Fd1F50fc979F72888Fb67CFa39a2C2";
export const NFT_COLLECTION_ADDRESS1 =
  "0x0C9d4b90771ACa4B3E541924545E36104751dADA";

// (Optional) Set up the URL of where users can view transactions on
// For example, below, we use Mumbai.polygonscan to view transactions on the Mumbai testnet.
export const ETHERSCAN_URL = "https://scan.coredao.org/";

export const nftDropContractAddress =
  "0x0C9d4b90771ACa4B3E541924545E36104751dADA";

export const stakingContractAddress =
  "0x5F8a5cc9935f5743F5880C6E2ad4C2ac18AF12fb";

export const tokenContractAddress =
  "0x0B2d702B9139256fDA18bB8D52a4826183787CEB";
export const aLinks = "https://scan.coredao.org"