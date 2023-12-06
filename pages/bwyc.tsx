import { useContract, useNFTs, useAddress, useOwnedNFTs, ThirdwebNftMedia } from "@thirdweb-dev/react";
import Container from "../components/Container/Container";
import NFTGrid from "../components/NFT/NFTGrid";
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
import { color } from "web3uikit";
import {Twitter, Discord, UserTeam, ArrowDown, Dapps, Checkmark } from '@web3uikit/icons'
import Data from "./collections/data1"
import Skeleton from "../components/Skeleton/Skeleton";


export default function Buy1() {
  // Load all of the NFTs from the NFT Collection
  const verfied = true
  const { contract } = useContract(NFT_COLLECTION_ADDRESS2);
  const { data: data, isLoading: isLoading } = useNFTs(contract, {
    start: 0,
    count: 100,
  });

   const address = useAddress();
   const { data: owned } = useOwnedNFTs(contract, address);
 
   const [selectedNft, setSelectedNft] = useState<NFTType>();


  return (
    <Container maxWidth="lg">
      {!selectedNft ? (
        <>
        <div  style={{color: "white", height: "80px", width: "100%", padding: "1%", backdropFilter: "blur(100px)", borderRadius: "8px", fontSize: "20px", background: "rbg(0, 0, 0, 0.7)", display: "flex", flexDirection: "row", gap: "10px" }}>
        <Data />
        <p className={styles.verify}  style={{color: "white", width: "100%",  padding: "2%", borderRadius: "8px", display: "flex"}}>
        BWYC II
       {verfied ? ( <>
        <Checkmark fontSize={20} style={{background: "green", padding: "1px", border: "dashed 1px", borderRadius: "100%"}} />
       </>)
          : (<></>)}</p>
          <Link href={`/collections/${"0xF6C2584850Fd1F50fc979F72888Fb67CFa39a2C2"}`} style={{textAlign: "center", padding: "2%", border: "solid 1px gray", background: "rgba(0, 0, 50, 0.3)", fontSize: "14px", borderRadius: "8px", width: "30%", height: "60px"}}><p>VIEW ITEMS</p></Link>
        </div>
        <NFTGrid
              data={data}
              isLoading={isLoading}
              overrideOnclickBehavior={(nft) => {
                setSelectedNft(nft);
              }}
              emptyText={
                "Looks like you don't own any BWYC in your Wallet. Buy some From DEX"
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