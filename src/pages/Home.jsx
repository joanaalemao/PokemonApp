import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import Navbar from '../components/Navbar'
import PokemonCard from '../components/PokemonCard'

export const Home = () => {
  return (
<div><Navbar/>
<Container maxWidth="xg">
<Grid container>
  <PokemonCard/>
   
    </Grid></Container>
  </div>
  )
}
