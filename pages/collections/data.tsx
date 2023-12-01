import { useContract, useContractEvents, useContractRead, useTotalCirculatingSupply, useAddress } from "@thirdweb-dev/react";
import {Link, Twitter, Discord, UserTeam, ArrowDown, Dapps, Checkmark } from '@web3uikit/icons'
import CollectionPurchaseSection from "../../components/collectionPurchaseSection"

export default function Data() {
    const address = useAddress();
    const { contract } = useContract("0x9ba655328197b3ff54b9554294ef8017cdc09ac3");
    const { data: NFTs, isLoading, error } = useTotalCirculatingSupply(contract);
    const { data: Royalty } = useContractRead(contract, "getDefaultRoyaltyInfo")

    return(
        <>
        <div style={{display: "flex", outline: "solid 0.5px gray", padding: "2%", borderRadius: "8px", backdropFilter: "blur(100px)", filter: "opacity(1)", background: "rgba(0, 0, 0, 0.281)", fontSize: "12px", gap: "10px", color: "", width: "100%", height: "60px", justifyItems: "center" }}>
<ArrowDown fontSize='20px'/>  ITEMS: <p style={{color: "orange"}}>{NFTs?.toNumber()}</p><hr style={{margin: "5px"}} />
<Dapps fontSize='20px'/>  VOLUME: {}<hr style={{margin: "5px"}} /> 
  <UserTeam fontSize='20px'/> OWNERS: 0%
</div>

        </>
    )
}