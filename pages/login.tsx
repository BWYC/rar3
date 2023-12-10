import Container from "../components/Container/Container"
import { ConnectWallet } from "@thirdweb-dev/react"

export default function Login() {
    return (
        <>
        <Container maxWidth="xl">
        <Container maxWidth="lg">

<div style={{height: "100px"}}></div>
               <ConnectWallet 
   style={{background: "black", color: "white", border: "solid", textShadow: "currentColor 5px 5px 16px", borderWidth: "0.5px"}} />
   <hr  style={{margin: "5%"}}/>
          
            

</Container>
        </Container>
<style jsx>
    { `
  body{
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
        </>
    )

    
}
