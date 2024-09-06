import { useState, useEffect } from "react";
import { FastAverageColor } from "fast-average-color";
import DisplayInfo from "./DisplayInfo";
import Search from "./Search";

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [pokemonCharacteristic, setPokemonCharacteristic] = useState(null);
  const [index, setIndex] = useState(1);
  const [color, setColor] = useState("#91DCED");

  async function fetchPokemon() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}/`);
    setPokemon(await response.json());

    const characteristic = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${index}/`
    );
    setPokemonCharacteristic(await characteristic.json());
  }

  // let pokemonName = pokemon.name
  // pokemonName = pokemonName[0].toUpperCase() + pokemonName.substring(1);

  useEffect(() => {
    fetchPokemon();
  }, [index]);

  if (!pokemon) {
    return "loading...";
  }
  // console.log(pokemon);
  // console.log(pokemonCharacteristic);

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
      className="flex items-center justify-center h-screen transition-colors"
      style={{ backgroundColor: color }}
    >
      <div className="w-3/4 h-3/4 bg-slate-100 rounded-2xl flex flex-col justify-center items-center">
        {/* <Search/> */}
        <div className="flex justify-around items-center w-full h-auto">
          <button
            className="text-gray-300 cursor-pointer text-xl font-semibold font-mono"
            onClick={() => setIndex((index) => (index < 2 ? index : index - 1))}
          >
            <span style={{ color: color }}>&lt;</span>{" "}
            {`#0${index === 1 ? "0" : index - 1}`}
          </button>

          <div className="flex flex-col text-center font-mono" key={pokemon.id}>
            <div>
              <h4
                className="font-semibold"
                style={{ color: color }}
              >{`#0${pokemon.id}`}</h4>
              <h4
                style={{ color: color, textTransform: "capitalize" }}
                className="text-5xl m-2 p-1"
              >
                {pokemon.name}
              </h4>
            </div>
            <img
              className="size-64 my-6"
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={pokemon.name + "_img"}
            />
          </div>
          <div>
            <DisplayInfo
              pokemon={pokemon}
              color={color}
              characteristic={pokemonCharacteristic}
            />
          </div>
          <button
            className="text-gray-300 cursor-pointer text-xl font-semibold font-mono"
            onClick={() => setIndex((index) => index + 1)}
          >
            {`#0${index + 1}`} <span style={{ color: color }}>&gt;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
