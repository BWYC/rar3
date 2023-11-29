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
  useOwnedNFTs,
  useValidDirectListings,
  useValidEnglishAuctions,
} from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import R from "../../public/whale.png"
import B from "../../public/3.png"
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



export default function Profile() {
  const address = useAddress()
  const verfied = false
  const router = useRouter();
  const [tab, setTab] = useState<"nfts" | "listings" | "auctions" | "sell">("nfts");

  const { contract: nftCollection } = useContract(NFT_COLLECTION_ADDRESS);

  const { contract: marketplace } = useContract(
    MARKETPLACE_ADDRESS,
    "marketplace-v3",
  );

  const { data: ownedNfts, isLoading: isLoading } = useOwnedNFTs(
    nftCollection,
    address,
  );

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
   <section className={styles.container}>
      <section>
        <section className={styles.viewCollection_main}> 
      <div className={styles.profileHeader}>
   
         
      <div style={{width: "100%", padding: "5%", height: "20px", marginBottom: "20px"}}></div>
      <Container maxWidth="lg">
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
  </Container>

      </div>
    <section className={styles.CollectionHeroSection}>
     
      <section>
        <section className={styles.collection_marketplace_title_icons}>
          <section>
      
          </section>
        </section>
      </section>
      <section>
       
      </section>
    </section>
    </section>
      </section>
    </section>
  </>
)
  }
  else {
  return (
    <>
   <section className={styles.container}>
      <section>
        <section className={styles.viewCollection_main}> 
      <div className={styles.profileHeader}>
   
         
      <div style={{width: "100%", padding: "5%", height: "20px", marginBottom: "20px"}}></div>
      <Container maxWidth="lg">
      <div
          className={styles.coverImage}
          style={{
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            backgroundImage:  `linear-gradient(${randomColor3}, ${randomColor4}, ${randomColor1})`
          }}
        />
       
         <div
          className={styles.profilePicture}
          style={{
            backgroundPosition: "center",
            backgroundSize: "100%",
            zIndex: "1"
            
          }}
       >
       
        <Blockie scale={16.5} seed={address} />
        <h3 className={styles.profileName}>
          {truncateEthAddress(address)}
          {verfied ? ( <Checkmark fontSize={16} style={{background: "blue", padding: "0.2px", border: "dashed 1px", borderRadius: "100%"}} />)
          : (<></>)}
           
        </h3>
        <Data /> 
       </div>
       </Container>

      </div>
      <hr style={{margin: "4%"}} />
    <div className={styles.tabs}>
    
        <h3
          className={`${styles.tab} 
        ${tab === "nfts" ? styles.activeTab : ""}`}
          onClick={() => setTab("nfts")}
        >
          NFTs
        </h3>
        <h3
          className={`${styles.tab} 
        ${tab === "listings" ? styles.activeTab : ""}`}
          onClick={() => setTab("listings")}
        >
          Listings
        </h3>
        <h3
          className={`${styles.tab}
        ${tab === "auctions" ? styles.activeTab : ""}`}
          onClick={() => setTab("auctions")}
        >
          Auctions
        </h3>
        <h3
          className={`${styles.tab}
        ${tab === "sell" ? styles.activeTab : ""}`}
          onClick={() => setTab("sell")}
        >
         Sell
        </h3>
     
      </div>

      <div
        className={`${
          tab === "nfts" ? styles.activeTabContent : styles.tabContent
        }`}
      >
        <Container maxWidth="lg">
          {isLoading ? (
            <p> <Spinner size='md' /></p>
          ) : (
            <Container maxWidth="lg">
            <NFTGrid
            data={ownedNfts}
            isLoading={isLoading}
            emptyText="Looks like you don't have any NFTs from this collection. Head to the buy page to buy some!"
          />
             </Container>
          )}
       
        </Container>
     
      </div>
      <Container maxWidth="lg">
      <div
        className={`${
          tab === "listings" ? styles.activeTabContent : styles.tabContent
        }`}
      >
        {loadingDirects ? (
          <p> <Spinner size='md' /></p>
        ) : directListings && directListings.length === 0 ? (
          <p>Nothing for sale yet! Head to the sell tab to list an NFT.</p>
        ) : (
          directListings?.map((listing) => (
            <ListingWrapper listing={listing} key={listing.id} />
          ))
        )}
      </div>
     
      <Container maxWidth="lg">
      <div
        className={`${
          tab === "auctions" ? styles.activeTabContent : styles.tabContent
        }`}
      >
      
      {loadingAuctions ? (
          <p> <Spinner size='md' /></p>
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
          <Container maxWidth="lg">

       <Sell />
       </Container>
      </div>
      </Container>
    </section>
    </section>
      </section>
    </>
  );
        }
      
}
