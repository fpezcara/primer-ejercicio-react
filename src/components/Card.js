import React from "react";

const Card = props => {
  return (
    <div class="card">
      <div class="card_img">
        <img src="${props.img}" />
      </div>
      <div class="card_info">
        <h3>${props.name}</h3>
        <p>${props.shortDesc}</p>
        <button>Ver mas</button>
      </div>
    </div>
  );
};

export default Card;
