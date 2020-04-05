import React from "react";
import Card from "./Card";
import styled from "styled-components";

const CardCont = styled.div`
  display: flex;
  margin: 50px 0;
  flex-wrap: wrap;
  justify-content: center;
`;

const ContenedorDeTarjetas = ({ gatos }) => {
  return (
    <CardCont>
      {gatos.map((gato, i) => (
        <Card
          key={i}
          name={gato.name}
          shortDesc={gato.shortDesc}
          img={gato.img}
          isAvailable={gato.isAvailable}
        />
      ))}
    </CardCont>
  );
};

export default ContenedorDeTarjetas;
