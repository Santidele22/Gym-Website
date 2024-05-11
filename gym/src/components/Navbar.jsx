import { Stack } from "@mui/material"
import { Link } from "react-router-dom"
import logo from "../assets/images/Logo.png"
export default function Navbar(){
    return (
        <nav>
            <Stack 
            direction="row"
            justifyContent="space-around"
            sx={{
            gap:{sm:"122px", xs:"40px"}, 
            mt:{sm:"32px", xs:"20px"}, 
            justifyContent:"none"
            }} 
            px="20px"
            >
                <Link to="/">
                <img src={logo} alt="Logo" style={{width: "40px", height:"40px", margin:"0 20px"}}/>
                </Link>
                <Stack 
                    direction="row"
                    gap="40px"
                    fontSize="2rem"
                    alingitems= "flex-end"
                >
                    <Link to="/" style={{textDecoration:"none", color:"#3A1212", borderBottom:"3px solid #FF2625"}}>Home</Link>
                    <a href="#exercizes" style={{textDecoration:"none", color:"#3A1212"}}>Exercizes</a>
                </Stack>
            </Stack>
        </nav>
    )
}