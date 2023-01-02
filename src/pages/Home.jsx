import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import axios from 'axios'
import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import PokemonCard from '../components/PokemonCard'

export const Home = () => {   useEffect(()=>{getPokemons()}   )
const getPokemons=() =>{ } 
    axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=50")
    .then((res) => console.log(res))
    .catch((error)  => console.log(error));
  return (
<div><Navbar/>
<Container maxWidth="xg">
<Grid container>
  <PokemonCard/>     
<PokemonCard></PokemonCard>
  <PokemonCard></PokemonCard>
    </Grid></Container>
    <Container><Grid container><PokemonCard></PokemonCard></Grid></Container>
  </div>
  )
}
