import {
    ThirdwebNftMedia,
    useContract,
    useValidDirectListings,
    useValidEnglishAuctions,
  } from "@thirdweb-dev/react";
  import { NFT } from "@thirdweb-dev/sdk";
  import React from "react";
  import {
    MARKETPLACE_ADDRESS,
    NFT_COLLECTION_ADDRESS2,
  } from "../../const/contractAddresses";
  import Skeleton from "../Skeleton/Skeleton";
  import styles from "./NFT.module.css";
  import truncateEthAddress from "truncate-eth-address";
  import { Tooltip } from "web3uikit";

  
  type Props = {
    nft: NFT;
  };
  
  export default function NFTComponent({ nft }: Props) {
    const { contract: marketplace, isLoading: loadingContract } = useContract(
      MARKETPLACE_ADDRESS,
      "marketplace-v3",
    );
  
    // 1. Load if the NFT is for direct listing
    const { data: directListing, isLoading: loadingDirect } =
      useValidDirectListings(marketplace, {
        tokenContract: NFT_COLLECTION_ADDRESS2,
        tokenId: nft.metadata.id,
      });
  
    // 2. Load if the NFT is for auction
    const { data: auctionListing, isLoading: loadingAuction } =
      useValidEnglishAuctions(marketplace, {
        tokenContract: NFT_COLLECTION_ADDRESS2,
        tokenId: nft.metadata.id,
      });
    const owner = nft.owner as string;
  
    return (
      <>
<Tooltip content={"Buy"} position="bottom">
        <ThirdwebNftMedia metadata={nft.metadata} style={{width: "100%", height: "100%", borderRadius: "16px", overflow: "hidden"}} />
  
        <p className={styles.nftName}>
          {nft.metadata.id}: {truncateEthAddress(owner)}
        </p>
        </Tooltip>
      </>
    );
  }