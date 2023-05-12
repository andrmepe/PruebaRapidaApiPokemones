import React, { useEffect, useState } from "react";
import axios from "axios";

const DetallePokemon = ({ match }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${match.params.pokemonName}`
        );
        setPokemon(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPokemon();
  }, [match.params.pokemonName]);

  return (
    <div>
      {pokemon ? (
        <div>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <h2>{pokemon.name}</h2>
          <p>Number: {pokemon.id}</p>
          <p>Type: {pokemon.types.map((type) => type.type.name).join(", ")}</p>
          <p>Stats:</p>
          <ul>
            {pokemon.stats.map((stat) => (
              <li key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
          <p>Abilities: {pokemon.abilities.map((ability) => ability.ability.name).join(", ")}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DetallePokemon;