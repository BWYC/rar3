import React, { useState } from "react";
import {
  useContract,
  useActiveListings,
  useContractMetadata,
  ThirdwebNftMedia,
} from "@thirdweb-dev/react";
import { 
  Link, Card, CardHeader, CardBody, CardFooter, Divider, Container, Spinner, Text } from '@chakra-ui/react'
import { MARKETPLACE_ADDRESS } from "../const/contractAddresses";
import styles from "../styles/Theme.module.css";

export default function Listings() {
  const { contract: marketplace } = useContract(MARKETPLACE_ADDRESS);
  const { data: listings, isLoading } = useActiveListings(marketplace);

  // Load contract metadata
  const { data: contractMetadata, isLoading: loadingMetadata } =
    useContractMetadata(marketplace);

  const [filter, setFilter] = useState(0); // 0 = direct, auction = 1

  return (
    <Container centerContent>
      <div className={styles.collectionContainer}>
        <div className={styles.bannerContainer}>
          {!loadingMetadata ? (
            <>
          <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />
            </>
          ) : (
		  <div className={styles.loading}>
		  <Spinner size='md' />
          </div>
          )}
        </div>

        {!isLoading ? (
          <div className={styles.nftBoxGrid}>
            {listings
              ?.filter((listing) => listing.type === filter)
              ?.map((listing) => (
                <Link
                  className={styles.nftBox}
                  key={listing.id.toString()}
                  href={`/listing/${listing.id}`}
                >
			<Card maxW='sm' overflow='hidden' transition='transform .2s'
                    _hover={{
              transform: 'scale(1.1)',
              boxShadow: 'lg',
            }}>
                  <ThirdwebNftMedia
                    metadata={{ ...listing.asset }}
                    className={styles.nftMedia}
                  />
				<CardBody style={{padding: '15px'}}>
                  <Text fontWeight={700}>{listing.asset.name}</Text>
  </CardBody>
  <Divider />
  <CardFooter style={{padding: '10px'}}>
                  <Text color={'#418dff'}>
                    {listing.buyoutCurrencyValuePerToken.displayValue}{" "}
                    {listing.buyoutCurrencyValuePerToken.symbol}
                  </Text>
  </CardFooter>
</Card>
                </Link>
              ))}
          </div>
        ) : (
          <><div className={styles.loading}>
		  <Spinner
			  thickness='4px'
			  speed='0.65s'
			  emptyColor='gray.200'
			  color='blue.500'
			  size='xl' />
          </div>
		  </>
        )}
      </div>
    </Container>
  );
}
