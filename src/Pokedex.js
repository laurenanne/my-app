import React from "react";
import PokeCard from "./Pokecard";

function Pokedex({ items }) {
  return (
    <div className="Pokedex" width="200">
      {items.map((i) => (
        <PokeCard
          id={i.id}
          name={i.name}
          type={i.type}
          base_experience={i.base_experience}
        />
      ))}
    </div>
  );
}

export default Pokedex;
