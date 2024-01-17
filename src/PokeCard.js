import React from 'react';
import './PokeCard.css';

const SPRITE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const PokeCard = (props) => {
    let sprite = `${SPRITE_API}${props.id}.png`;
    let typeIcon = `types/${props.type}.svg`
    let typeClass = `type-icon ${props.type}`

    return (
        <div className="Pokecard">
          <h3 class="card-title">{ props.name }</h3>
          <img className={typeClass} src={typeIcon} alt ={props.type}/>
          <div className='typeLabel'>{props.type}</div>
          <img className="card-image" src={sprite} />
          <div className="card-value">Base exp: {props.value}</div>
        </div>
    );
  }

export default PokeCard;