import Container from "../components/Container/Container"
import { ConnectWallet } from "@thirdweb-dev/react"
import Link from "next/link"

export default function Login() {
    return (
        <div className="body">
        <Container maxWidth="xl">
        <Container maxWidth="lg">

<div style={{height: "250px"}}></div>
               <ConnectWallet 
   style={{background: "black", color: "white", border: "solid", textShadow: "currentColor 2px 2px 8px", borderWidth: "0.5px"}} />
   <p style={{color: "inital", margin: "5%", textShadow: "currentColor 2px 2px 8px"}}>Connect and sign your wallet</p>
   <Link className="button" href="/dex">LFG</Link> 
</Container>
        </Container>
<style jsx>
    { `
  .body{
    background: linear-gradient(
        130deg,
        rgb(0, 0, 0, 0.5),
        rgba(0, 100, 200, 0.906),
        rgba(0, 0, 0, 0.506)
      );
        }
    `
    }
</style>
        </div>
    )

    
}
