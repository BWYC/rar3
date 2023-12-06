import Image from "next/image";
import { Eth } from "@web3uikit/icons";
import styles from "../../styles/Profile.module.css";

import {Link, Twitter, Discord, UserTeam, ArrowDown, Dapps, Checkmark } from '@web3uikit/icons'
import Data from "./data";
import truncateEthAddress from "truncate-eth-address";
import { Blockie } from "web3uikit"
import NFTGrid from "../../components/NFT/NFTGrid";
import Sell from "../sell"
import Container from "../../components/Container/Container";


import RR from "../../public/favicon.ico";
import {
  ConnectWallet,
  useNFTs,
  useValidDirectListings,
  useValidEnglishAuctions,
} from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import R from "../../public/rare.png"
import X from "../../public/lg.png"
import { useContract, useContractEvents, useContractRead, useAddress } from "@thirdweb-dev/react";
import randomColor from "../../util/randomColor";
import React, { useState } from "react";
import {
  MARKETPLACE_ADDRESS,
  NFT_COLLECTION_ADDRESS,
} from "../../const/contractAddresses";
import Skeleton from "../../components/Skeleton/Skeleton";
import ListingWrapper from "../../components/ListingWrapper/ListingWrapper";
import { Spinner } from "@chakra-ui/react";

  
const [randomColor1, randomColor2, randomColor3, randomColor4] = [
  randomColor(),
  randomColor(),
  randomColor(),
  randomColor(),
];



export default function Collection() {
  const address = useAddress()
  const verfied = false
  const router = useRouter();
  const [tab, setTab] = useState<"nfts" | "listings" | "auctions" | "sell">("nfts");

  const { contract: nftCollection } = useContract(NFT_COLLECTION_ADDRESS);

  const { contract: marketplace } = useContract(
    MARKETPLACE_ADDRESS,
    "marketplace-v3",
  );

  const { data: Nfts, isLoading: isLoading } = useNFTs(nftCollection, {
    start: 0,
    count: 3100,
  });

  const { data: directListings, isLoading: loadingDirects } =
    useValidDirectListings(marketplace, {
      seller: address,
    });

  const { data: auctionListings, isLoading: loadingAuctions } =
    useValidEnglishAuctions(marketplace, {
      seller: address,
    });

 

  var pfpCover = ("")
  var pfp = ("")

  if (!address) {
return(
  <>
   <Container maxWidth="xl">
      <section>
        <section className={styles.viewCollection_main}> 
      <div className={styles.profileHeader}>
   
            
      <div style={{width: "100%", padding: "5%", height: "20px", marginBottom: "20px"}}></div>
     
        <div
          className={styles.coverImage}
          style={{
            backgroundPosition: "center",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            display: "flex",
            backgroundImage:  `linear-gradient(${randomColor3}, ${randomColor4}, ${randomColor1})`
          }}
        />
         <div
          className={styles.profilePicture}
          style={{
            backgroundImage: `linear-gradient(${randomColor1}, ${randomColor2})`,
            backgroundPosition: "center",
            backgroundSize: "100%",
            zIndex: "1"
            
          }}
       / >
        <hr style={{margin: "3%"}} />
       
 <ConnectWallet />

      </div>
   
    </section>
      </section>
    </Container>
  </>
)
  }
  else {
  return (
    <>
   <Container maxWidth="xl">
      <section>
        <section className={styles.viewCollection_main}> 
      <div className={styles.profileHeader}>
   
         
      <div style={{width: "100%", padding: "5%", height: "20px", marginBottom: "20px"}}></div>
      <Container maxWidth="xl">
      <Image
      src={R}
      alt=""
        className={styles.coverImage}
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
        }}
      />
       <Image
       alt=""
       src={X}
        className={styles.profilePicture}
        style={{
          backgroundImage: `linear-gradient(${randomColor1}, ${randomColor2})`,
          backgroundPosition: "center",
          backgroundSize: "100%",
          zIndex: "1" 
        }}
     / >
      <p>3100 RARE COLLECTIBLES PIONEERING THE DECENTRALIZATION OF NFT ON RAREBAY</p>
      <hr style={{margin: "2%", color: "gray", height: "0.5px"}} />
     <Data />
</Container>
      </div>
    <div className={styles.tabs}>
        <h3
          className={`${styles.tab} 
        ${tab === "nfts" ? styles.activeTab : ""}`}
          onClick={() => setTab("nfts")}
        >
          ITEMS
        </h3>
        <h3
          className={`${styles.tab} 
        ${tab === "listings" ? styles.activeTab : ""}`}
          onClick={() => setTab("listings")}
        >
          Listed
        </h3>
        <h3
          className={`${styles.tab}
        ${tab === "auctions" ? styles.activeTab : ""}`}
          onClick={() => setTab("auctions")}
        >
          Auctioned
        </h3>

     
      </div>

      <div
        className={`${
          tab === "nfts" ? styles.activeTabContent : styles.tabContent
        }`}
      >
        <Container maxWidth="xl">
          {isLoading ? (
            <p> LOADING...</p>
          ) : (
            <Container maxWidth="xl">
            <NFTGrid
            data={Nfts}
            isLoading={isLoading}
            emptyText="Looks like you don't have any RAR3 NFTs. Buy some from DEX"
          />
             </Container>
          )}
       
        </Container>
     
      </div>
      <Container maxWidth="xl">
      <div
        className={`${
          tab === "listings" ? styles.activeTabContent : styles.tabContent
        }`}
      >
        {loadingDirects ? (
          <p> LOADING...</p>
        ) : directListings && directListings.length === 0 ? (
          <p>Nothing for sale yet! Head to the sell tab to list an NFT.</p>
        ) : (
          directListings?.map((listing) => (
            <ListingWrapper listing={listing} key={listing.id} />
          ))
        )}
      </div>
     
      <Container maxWidth="xl">
      <div
        className={`${
          tab === "auctions" ? styles.activeTabContent : styles.tabContent
        }`}
      >
      
      {loadingAuctions ? (
          <p> LOADING ..</p>
        ) : auctionListings && auctionListings.length === 0 ? (
          <p>Nothing for sale yet! Head to the sell tab to list an NFT.</p>
        ) : (
          auctionListings?.map((listing) => (
            <ListingWrapper listing={listing} key={listing.id} />
          ))
        )}

      
      </div>
      </Container>
      <div
        className={`${
          tab === "sell" ? styles.activeTabContent : styles.tabContent
        }`}
      >
          <Container maxWidth="xl">

       <Sell />
       </Container>
      </div>
      </Container>
    </section>
    </section>
      </Container>
    </>
  );
        }
      
}
