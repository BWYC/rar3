import { useContract, useNFTs, useAddress, useOwnedNFTs, ThirdwebNftMedia } from "@thirdweb-dev/react";
import Container from "../components/Container/Container";
import NFTGrid from "../components/NFT/bwycg";
import { NFT_COLLECTION_ADDRESS2 } from "../const/contractAddresses";
import ProfilePage from "./profile/[address]";
import styles from "../styles/Profile.module.css";
import Link from "next/link";
import { Spinner } from "@chakra-ui/react"
import tokenPageStyles from "../styles/Token.module.css";
import { NFT as NFTType } from "@thirdweb-dev/sdk";
import SaleInfo from "../components/SaleInfo/SaleInfo";
import React, { useState } from "react";
import TokenPage from "./token/[contractAddress]/[tokenId]";
import Data from "./collections/data1"

export default function Buy1() {
  // Load all of the NFTs from the NFT Collection
  const { contract } = useContract(NFT_COLLECTION_ADDRESS2);
  const { data: data, isLoading: isLoading } = useNFTs(contract, {
    start: 0,
    count: 20,
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
          <h1 style={{color: "white", textAlign: "center", border: "solid 1px gray", width: "50%", padding: "10px", backdropFilter: "blur(100px)", borderRadius: "8px", fontSize: "20px"}}>BWYC II</h1>
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