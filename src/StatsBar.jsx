import React from "react";

function StatsBar({ pokemon, color }) {
  const stats = pokemon.stats;

  //  console.log(hp)
  return (
    <>
      {stats.map((stat) => (
        <div className="flex items-center justify-between mb-2" key={stat.stat.name}>
          <h5 className="mr-2 capitalize">{`${stat.stat.name}:`}</h5>
          <div className=" w-60 h-2 bg-slate-200 rounded-2xl">
            <div
              className="rounded-2xl transition-all"
              style={{
                backgroundColor: `${color}`,
                width: `${stat.base_stat}%`,
                height: "100%", // Set a fixed height for the bar
              }}
            ></div>
          </div>
        </div>
      ))}
    </>
  );
}

export default StatsBar;
