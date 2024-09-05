import React from "react";

function DisplayInfo({ pokemon, color }) {
  return (
    <div>
      <div>
        <h3>About</h3>
      </div>
      <div>
        <div
          className="bg-white p-2 rounded-md m-4 transition-colors"
          style={{
            boxShadow: `5px 5px 12px -3px  ${color}`,
          }}
        >
          <h5>Height:</h5>
          <p>{`${pokemon.height / 10} m`}</p>
        </div>
        <div
          className="bg-white p-2 rounded-md m-4 transition-colors"
          style={{
            boxShadow: `5px 5px 12px -3px  ${color}`,
          }}
        >
          <h5>Type:</h5>
          <p>{pokemon.types[0].type.name}</p>
        </div>
        <div
          className="bg-white p-2 rounded-md m-4 transition-colors"
          style={{
            boxShadow: `5px 5px 12px -3px  ${color}`,
          }}
        >
          <h5>Weight:</h5>
          <p>{`${pokemon.weight /10 } kg`}</p>
        </div>
      </div>
    </div>
  );
}

export default DisplayInfo;
