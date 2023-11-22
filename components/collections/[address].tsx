import Image from "next/image";
import { Eth } from "@web3uikit/icons";
import styles from "../../styles/Home.module.css";

import {Link, Twitter, Discord, UserTeam, ArrowDown, Dapps, Checkmark } from '@web3uikit/icons'
import Data from "./data";

import RR from "../../public/gfdgfhyu1-200h.png";   
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import CollectionPurchaseSection from "../collectionPurchaseSection"
import R from "../../public/gfdgfhyu.png"
import B from "../../public/gfdgfhyu.png"
import { useContract, useContractEvents, useContractRead, useAddress } from "@thirdweb-dev/react";
import randomColor from "../../util/randomColor";
import NFTGrid from "../NFT/NFTGrid";  
import {
  useOwnedNFTs,
  useValidDirectListings,
  useValidEnglishAuctions,
} from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  MARKETPLACE_ADDRESS,
  NFT_COLLECTION_ADDRESS,
} from "../../const/contractAddresses";
import Skeleton from "../Skeleton/Skeleton";
import ListingWrapper from "../ListingWrapper/ListingWrapper";

const [randomColor1, randomColor2, randomColor3, randomColor4] = [
  randomColor(),
  randomColor(),
  randomColor(),
  randomColor(),
];


export default function CollectionHeroSection() {
  const address = useAddress()

  const router = useRouter();
  const [tab, setTab] = useState<"nfts" | "listings" | "auctions" | "sell">("nfts");

  const { contract: nftCollection } = useContract(NFT_COLLECTION_ADDRESS);

  const { contract: marketplace } = useContract(
    MARKETPLACE_ADDRESS,
    "marketplace-v3",
  );

  const { data: ownedNfts, isLoading: isLoading } = useOwnedNFTs(
    nftCollection,
    router.query.address as string,
  );

  const { data: directListings, isLoading: loadingDirects } =
    useValidDirectListings(marketplace, {
      seller: router.query.address as string,
    });

  const { data: auctionListings, isLoading: loadingAuctions } =
    useValidEnglishAuctions(marketplace, {
      seller: router.query.address as string,
    });

  
  var pfpCover = (R)

  if (!address) {
return(
  <>
   <section className={styles.container}>
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
  
        <h1 className={styles.profileName}>
         UNDEFINED
        </h1>
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
        <Image
          className={styles.coverImage}
          src={pfpCover}
          alt=""
          width={1800}
          height={600}
          style={{
            backgroundPosition: "cover",
            backgroundSize: "",
            display: "flex"
          }}
        />
           <Data />
         <Image
         alt=""
         width={300}
         height={300}
         src={B}
          className={styles.profilePicture}
          style={{
            backgroundImage: "url(1.png)",
            backgroundPosition: "center",
            backgroundSize: "100%",
            zIndex: "1"
            
          }}
       / >
  
        <h1 className={styles.profileName}>

 RAR310NES<Checkmark style={{background: "darkgreen", borderRadius: "100%", borderWidth: "1px", padding: "2px", border: "dashed", borderColor: "initial", textShadow: "black 0px 10px 10px, white 20px 20px 20px, black 10px 15px 0px", color: "initial"}} />
        </h1>
      </div>
    <section className={styles.CollectionHeroSection}>
     
      <section>
        <Image
          src={RR}
          alt=""
          className={styles.collectionProfile}
        />
        <section className={styles.collection_marketplace_title_icons}>
          <section>
         
          </section>
        </section>
      </section>
      <section>
        <table className={styles.collection_header_dataTable}>
          <thead>
            <tr className={styles.collection_header_dataTable_head_row}>
              <th>COLLECTION</th>
              <th>FLOOR PRICE</th>
              <th>1D CHANGE</th>
              <th>7D CHANGE</th>
              <th>1D VOLUME</th>
              <th>7D VOLUME</th>
              <th>OWNERS</th>
              <th>SUPPLY</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.collection_header_dataTable_body_row}>
              <td style={{color: "gray"}}>By RareLabs</td>
              <td>
                0.00
                ⚡
              </td>
              <td className={styles.collection_header_dataTable_body_td_red}>
              0.00
                ⚡
              </td>
              <td className={styles.collection_header_dataTable_body_td_red}>
              0.00
                ⚡
              </td>
              <td>
              0.00
                ⚡
              </td>
              <td>
              0.00
                ⚡
              </td>
              <td>0%</td>
              <td>3100</td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
    <CollectionPurchaseSection />
    </section>
      </section>
    </section>
    </>
  );
        }
      
}
