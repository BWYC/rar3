import { useContract, useContractEvents, useContractRead, useTotalCirculatingSupply, useAddress } from "@thirdweb-dev/react";
import {Link, Twitter, Discord, UserTeam, ArrowDown, Dapps, Checkmark } from '@web3uikit/icons'


export default function Data() {
    const address = useAddress();
    const { contract } = useContract("0xF6C2584850Fd1F50fc979F72888Fb67CFa39a2C2");
    const { data: NFTs, isLoading, error } = useTotalCirculatingSupply(contract);
    const { data: Royalty } = useContractRead(contract, "getDefaultRoyaltyInfo")

    return(
        <>
        <div style={{display: "flex", marginLeft: "0%", marginBottom: "7%", position: "absolute", zIndex: "1", outline: "solid 1px lightgray", padding: "1%", borderRadius: "8px", backdropFilter: "blur(100px)", filter: "opacity(1)", background: "rgba(0, 0, 0, 0.281)", fontSize: "13px", gap: "10px", color: "", marginTop: "1%" }}>
<ArrowDown fontSize='20px'/>  ITEMS: 0.0 ⚡<hr style={{margin: "5px"}} />
  <UserTeam fontSize='20px'/> OWNED: 0%
</div>
        </>
    )
}