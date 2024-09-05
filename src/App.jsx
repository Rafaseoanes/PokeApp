import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [index, setIndex] = useState(1);

  async function fetchPokemon() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}/`);
    setPokemon(await response.json());
  }

  console.log(pokemon);

  useEffect(() => {
    fetchPokemon();
  }, [index]);

  if (!pokemon) {
    return "loading...";
  }

  return (
    <div>
        <div key={pokemon.id}>
        {" "}
        {/* Add a key prop to each item */}
        <img src={pokemon.sprites.other['official-artwork'].front_default} alt="" />
        <h4>{pokemon.name}</h4>
      </div>
      <button onClick={() => setIndex((index) => index + 1)}>Next</button>
    
    </div>
  );
}

export default App;







