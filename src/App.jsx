import { useState, useEffect } from "react";
import { FastAverageColor } from "fast-average-color";
import DisplayInfo from "./DisplayInfo";

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [index, setIndex] = useState(1);
  const [color, setColor] = useState("#91DCED");

  async function fetchPokemon() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}/`);
    setPokemon(await response.json());
  }

  // let pokemonName = pokemon.name
  // pokemonName = pokemonName[0].toUpperCase() + pokemonName.substring(1);

  useEffect(() => {
    fetchPokemon();
  }, [index]);

  if (!pokemon) {
    return "loading...";
  }
  console.log(pokemon);

  const fac = new FastAverageColor();
  fac
    .getColorAsync(pokemon.sprites.other["official-artwork"].front_default)
    .then((color) => {
      setColor(color.hex);
    })
    .catch((e) => {
      console.log(e);
    });

  return (
    <div
      className="flex justify-center items-center h-screen transition-colors"
      style={{ backgroundColor: color }}
    >
      <div className={"inline-block w-3/4 h-3/4 bg-slate-50 p-4 rounded-2xl"}>
        <div className="flex justify-around items-center h-auto">
          <button
            className="text-gray-600 cursor-pointer"
            onClick={() => setIndex((index) => (index < 2 ? index : index - 1))}
          >{`#00${index == 1 ? "" : index - 1}`}</button>

          <div className="flex flex-col text-center " key={pokemon.id}>
            <div>
              <h4 style={{ color: color, textTransform: "capitalize" }} className="text-5xl m-2">{pokemon.name}</h4>
              <h4>{`#00${pokemon.id}`}</h4>
            </div>
            <img
              className="size-64"
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={pokemon.name + "_img"}
            />
          </div>
          <div>
            <DisplayInfo pokemon={pokemon} color={color}/>
          </div>
          <button
            className="text-gray-600 cursor-pointer"
            onClick={() => setIndex((index) => index + 1)}
          >{`#00${index + 1}`}</button>
        </div>
      </div>
    </div>
  );
}

export default App;
