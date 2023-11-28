import { useContract, useNFTs, useAddress, useOwnedNFTs, ThirdwebNftMedia } from "@thirdweb-dev/react";
import Container from "../components/Container/Container";
import NFTGrid from "../components/NFT/NFTGrid";
import { NFT_COLLECTION_ADDRESS } from "../const/contractAddresses";
import ProfilePage from "./profile/[address]";
import styles from "../styles/Profile.module.css";
import Link from "next/link";
import { Spinner } from "@chakra-ui/react"
import tokenPageStyles from "../styles/Token.module.css";
import { NFT as NFTType } from "@thirdweb-dev/sdk";
import SaleInfo from "../components/SaleInfo/SaleInfo";
import React, { useState } from "react";
import TokenPage from "./token/[contractAddress]/[tokenId]";

export default function Buy() {
  // Load all of the NFTs from the NFT Collection
  const { contract } = useContract(NFT_COLLECTION_ADDRESS);
  const { data: data, isLoading: isLoading } = useNFTs(contract, {
    start: 0,
    count: 3100,
  });

   const address = useAddress();
   const { data: owned } = useOwnedNFTs(contract, address);
 
   const [selectedNft, setSelectedNft] = useState<NFTType>();

  if (isLoading) {
    return (
      <div
        style={{
          width: "100%",
          alignItems: "center",
          textAlign: "center",
          marginBottom: "50%"
        }}
      >
        <h3> <Spinner size='lg' /></h3>
      </div>
    );
  }

  return (
    <Container maxWidth="lg">
      {!selectedNft ? (
        <>
        <NFTGrid
              data={data}
              isLoading={isLoading}
              overrideOnclickBehavior={(nft) => {
                setSelectedNft(nft);
              }}
              emptyText={
                "Looks like you don't own any NFT in your Wallet. Head to the buy page to buy some!"
              }
            />
        </>
      ):(
<>
<button
                  onClick={() => {
                    setSelectedNft(undefined);
                  }}
                  className={tokenPageStyles.crossButton}
                >
                  X
                </button>
                <Container maxWidth="lg">
                <TokenPage contractMetadata={selectedNft.metadata} nft={selectedNft} />
                </Container>

</>
      )}
      </Container>
  );
}