import { Box } from "@mui/material"
import Exercises from "../components/Exercises"
import ExercisesSearch from "../components/ExercisesSearch"
import HeroBanner from "../components/HeroBanner"
export default function Home(){
    return (
        <Box>
            <HeroBanner/>
            <ExercisesSearch/>
            <Exercises/>
        </Box>
    )
}