import { Box } from "@mui/material"
import { Route, Routes } from "react-router-dom"
//Hooks
//Components
import Navbar from "./components/Navbar"
//Pages
import ExercizeDetail from "./pages/Exercize-Detail"
import Home from "./pages/Home"
function App() {
  return (
   <>
 <Box width={"400px"} sx={{width:{xl:"1488px"}}} m="auto">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/exercize:id" element={<ExercizeDetail/>}/>
    </Routes>
 </Box>
    </>
  )
}

export default App
