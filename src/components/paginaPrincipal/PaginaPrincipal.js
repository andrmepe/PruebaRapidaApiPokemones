import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Typography } from "@mui/material";
import pokemon from '../../assets/pokemon.png'


const PaginaPrincipal = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=20"
        );
        setPokemonList(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPokemonList();
  }, []);

  return (
    <Grid container   style={{position:'absolute' ,background: 'Gray' }}>
    <Grid xs={6} ml='40px'>
    <Typography variant="h2" style={{color:'Blue', marginLeft:'60px'}}>Pokédex</Typography>
    <img fontSize={'50px'} src={pokemon} alt='pokemon' style={{ width:'200px', background:'#ffffff',
        heigh:'150px', position:'back', marginLeft:'55px',borderRadius:'20px',marginTop:'60px', marginBottom:'50px'}}></img>
    </Grid>    
        <Grid xs={4}>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.name}>
            <a href={`/pokemon/${pokemon.name}`}>{pokemon.name}</a>
          </li>
        ))}    
    </Grid>
    </Grid>
  );
};

export default PaginaPrincipal;