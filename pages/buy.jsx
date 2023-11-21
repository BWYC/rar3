import { useContract, useNFTs } from "@thirdweb-dev/react";
import React from "react";
import Container from "../components/Container/Container";
import NFTGrid from "../components/NFT/NFTGrid";
import { NFT_COLLECTION_ADDRESS } from "../const/contractAddresses";
import ProfilePage from "./profile/[address]";
import styles from "../styles/Profile.module.css";
import Link from "next/link";

export default function Buy() {
  // Load all of the NFTs from the NFT Collection
  const { contract } = useContract(NFT_COLLECTION_ADDRESS);
  const { data: data, isLoading: isLoading } = useNFTs(contract, {
    start: 0,
    count: 50,
  });

  if (isLoading) {
    return (
      <div
        style={{
          width: "100%",
          diplay: "flex",
          alignItems: "center",
          textAlign: "center",
          marginBottom: "10%"
        }}
      >
        <h3>LOADING ITEMS...</h3>
      </div>
    );
  }

  return (
    <Container maxWidth="md">
      <div
        className={styles.coverImage}
        style={{
          backgroundImage:
            "url('https://bafybeicogcrq4qh24igi4z64y6ddnfpasr2yibey3jsoefvkor3577u6mu.ipfs.nftstorage.link/ipfs/bafybeicogcrq4qh24igi4z64y6ddnfpasr2yibey3jsoefvkor3577u6mu/whales.png')",
          backgroundPosition: "center",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          WebkitBackgroundSize: "cover",
        }}
      />
      <div
        className={styles.profilePicture}
        style={{
          backgroundImage:
            "url('https://bafybeifugm2das3zddsxkgz2h6xuztdmvsqsv4bisvplnmqu57ehwponcy.ipfs.nftstorage.link/favicon.png')",
          backgroundPosition: "center",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      />
      <p>
       
      </p>

      <hr></hr>
      <NFTGrid
        data={data}
        isLoading={isLoading}
        emptyText={"Looks like There are no Cards here."}
      />
      <div style={{ height: "50px" }}></div>

      <hr></hr>
      <div style={{ height: "50px" }}></div>
    </Container>
  );
}