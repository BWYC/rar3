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
import { color } from "web3uikit";
import {Twitter, Discord, UserTeam, ArrowDown, Dapps, Checkmark } from '@web3uikit/icons'
import Data from "./collections/data"


export default function Buy() {
  // Load all of the NFTs from the NFT Collection
  const verfied = true
  const { contract } = useContract(NFT_COLLECTION_ADDRESS);
  const { data: data, isLoading: isLoading } = useNFTs(contract, {
    start: 0,
    count: 50,
  });

   const address = useAddress();
   const { data: owned } = useOwnedNFTs(contract, address);
 
   const [selectedNft, setSelectedNft] = useState<NFTType>();

  if (isLoading) {
    return (
<Container maxWidth="xl">
LOADING...<Spinner size="md" />
</Container>
    );
  }

  return (
    <Container maxWidth="lg">
      {!selectedNft ? (
        <>
        <div  style={{color: "white", height: "80px", width: "100%", padding: "1%", backdropFilter: "blur(100px)", borderRadius: "8px", fontSize: "20px", background: "rbg(0, 0, 0, 0.7)", display: "flex", flexDirection: "row", gap: "10px" }}>
        <Data />
        <p className={styles.verify}  style={{color: "white", width: "100%",  padding: "2%", borderRadius: "8px", display: "flex"}}>
        RAR31ONES
       {verfied ? ( <>
        <Checkmark fontSize={20} style={{background: "green", padding: "1px", border: "dashed 1px", borderRadius: "100%"}} />
       </>)
          : (<></>)}</p>
          <Link href={`/collections/${"0x69d5dDE5aF1fa6Cf5b86EC9B907c9bA1879c717f"}`} style={{textAlign: "center", padding: "2%", border: "solid 1px gray", background: "rgba(0, 0, 50, 0.3)", fontSize: "14px", borderRadius: "8px", width: "40%", height: "60px"}}><p>VIEW ITEMS</p></Link>
        </div>
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