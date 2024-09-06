import React, { useState, useEffect } from "react";
import InfoCard from "./InfoCard";
import StatsBar from "./statsBar";

function DisplayInfo({ pokemon, color, characteristic }) {
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (characteristic) {
      const data = characteristic.flavor_text_entries.find(
        (entry) => entry.language.name === "en"
      );

      const cleanedDescription = data
        ? data.flavor_text.replace(/\f/g, " ") // Replace form feed characters with space
        : "No description available";

      setDescription(cleanedDescription);
    }
  }, [characteristic]);

  return (
    <div>
      <h3 className="font-semibold">About:</h3>
      <h5 className="w-72 h-20 my-6">{description}</h5>
      <div className="grid grid-cols-3 gap-2">
        <InfoCard
          label="Weight"
          value={`${pokemon.weight / 10} kg`}
          color={color}
        />
        <InfoCard
          label="Height"
          value={`${pokemon.height / 10} m`}
          color={color}
        />
        <InfoCard
          label="Type"
          value={pokemon.types[0].type.name}
          color={color}
        />
      </div>
      <div>
        <h4 className="font-semibold mt-6 mb-3">Stats:</h4>
        <div>
            <StatsBar pokemon={pokemon} color={color}/>
        </div>
      </div>
    </div>
  );
}

export default DisplayInfo;
