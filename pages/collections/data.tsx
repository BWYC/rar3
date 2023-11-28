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
        <div style={{display: "flex", marginLeft: "30%", marginBottom: "7%", position: "absolute", zIndex: "1", marginTop: "1%", outline: "solid 1px lightgray", padding: "1%", borderRadius: "8px", backdropFilter: "blur(100px)", filter: "opacity(1)", background: "rgba(0, 0, 0, 0.281)", fontSize: "13px", gap: "10px", color: "" }}>
<ArrowDown fontSize='20px'/>  ITEMS: {NFTs?.toNumber()} ⚡<hr style={{margin: "5px"}} />
<Dapps fontSize='20px'/>  TOTAL VOLUME: {} ⚡<hr style={{margin: "5px"}} /> 
  <UserTeam fontSize='20px'/> OWNERS: 0%
</div>

        </>
    )
}