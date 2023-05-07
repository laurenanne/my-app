import React from "react";

function PokeCard(props) {
  return (
    <div className="PokeCard">
      <h4 className="PokeCard-name">{props.name}</h4>
      <img
        className="PokeCard-img"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}
        alt={props.name}
      />
      <ul>
        <li>Type: {props.type}</li>
        <li>EXP: {props.base_experience}</li>
      </ul>
    </div>
  );
}

export default PokeCard;
