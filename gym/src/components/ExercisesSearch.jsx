import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import exerciseApiConfig from "../utils/exercizesApiOptions";
import { fetchData } from "../utils/fetchData";
import { filterCategories, filterData } from "../utils/filterData";
const ExercisesSearch = () => {
    const [search,setSearch] = useState("")
    const [exercises,setExercises] = useState([])
    const [categories,setCategories] = useState([])
    useEffect(() => {
        async function fetchExercisesData(){
            const fetch = await fetchData(exerciseApiConfig.url,exerciseApiConfig.options) 
            const bodyPartsData = filterCategories(fetch,"bodyPart")
            setCategories(bodyPartsData)
        }   
        fetchExercisesData()
    },[])

    function handleChange (e){
        const value = e.target.value.toLowerCase()
        setSearch(value)
    }
    async function handleSearch(){
        if(search){
        const exercisesData = await fetchData(exerciseApiConfig.url,exerciseApiConfig.options)
        const filteredSearch = filterData(exercisesData,"bodyPart" || "name" || "equipement",search)
        setSearch("")
        setExercises(filteredSearch)
        
        }
        
    }
    return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        fontSize={{ lg: "44px", xs: "30px" }}
        mb="50px"
        textAlign="center" 
      >
        Awesome Exercises you <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: 700,
              border: "none",
              borderRadius: "4px" 
            },
            width: { lg: "800px", xs: "350px" },
            backgroudnColor:"#fff",
            borderRadius:"40px"

          }}
          height="76px" 
          value={search}
          onChange={(e) => handleChange(e)}
          placeholder="Search Exercises"
          type="text"
        />
        <Button className="search-btn"  sx={{
            bgcolor:"#ff2625",
            color:"#fff",
            textTransform:"none",
            width:{lg:"175px",xs:"80px"},
            fontSize:{lg:"20px", xs:"14px"},
            height:"56px",
            position:"absolute",
            right:0
        }
    }
        onClick={handleSearch}
        >
            Search
        </Button>
      </Box>
    </Stack>
  );
};

export default ExercisesSearch;
