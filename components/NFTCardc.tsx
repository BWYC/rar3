import {
    ThirdwebNftMedia,
    useContract,
    useNFT,
    Web3Button,
  } from "@thirdweb-dev/react";
  import type { FC } from "react";
  import { NFT_COLLECTION_ADDRESS1, stakingContractAddress3 } from "../const/contractAddresses";
  import styles from "../styles/Home.module.css";
  
  interface NFTCardProps {
    tokenId: number;
  }
  
  const NFTCard: FC<NFTCardProps> = ({ tokenId }) => {
    const { contract } = useContract(NFT_COLLECTION_ADDRESS1, "nft-drop");
    const { data: nft } = useNFT(contract, tokenId);
  
    return (
      <>
        {nft && (
          <div style={{alignItems: "center"}}>
            {nft.metadata && (
              <ThirdwebNftMedia
                style={{ borderRadius: "32px", width: "100%", height: "200px"  }}
                metadata={nft.metadata}
                className={styles.nftMedia}
              />
            )}
      
  
            <h5 style={{ textAlign: "center" }}>{nft.metadata.name}</h5>
      
            <Web3Button
              style={{
                backgroundColor: "black",
                borderStyle: "solid",
                borderColor: "Orange",
                color: "Orange",
                display: "flex",
                alignItems: "center"
              }}
              action={(contract) =>
                contract?.call("withdraw", [[nft.metadata.id]])
              }
              contractAddress={stakingContractAddress3}
            >
              UNLOCK🔒
            </Web3Button>
          </div>
        )}
      </>
    );
  };
  export default NFTCard;