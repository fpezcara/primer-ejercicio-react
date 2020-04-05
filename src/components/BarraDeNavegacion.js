import React from "react";
import styled from "styled-components";

// const Button = styled.button`
// cursor: pointer;
// background-color: transparent;
// font-size: 16px;
// border-radius: 3px;
// color: red;
// border: 2px solid pink;
// margin: 0 5px;
// padding: 2px;
// `;

// puedo también crear uno de los mini-componentes de estilo y anidar el resto adentro del mismo

const Nav = styled.nav`
  background-color: ${prop => prop.hayEmergenciaAdopterial ? 'red' : '#1a75bc'};
  height: 80px;
  padding: 20px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    cursor: pointer;
    background-color: transparent;
    font-size: 16px;
    border-radius: 3px;
    color: red;
    border: 2px solid pink;
    margin: 0 5px;
    padding: 2px;
  }
`;

const BarraDeNavegacion = () => {
  return (
    <Nav hayEmergenciaAdopterial={false}>
      <div>#AdoptAdas</div>
      <i className="fa fa-bars"></i>
      {/* <Button>Botón</Button> */}
      {/* <button>Hola</button> */}
    </Nav>
  );
};

export default BarraDeNavegacion;

// CSS-in-JS
// importar styled-components
// convertir etiquetas HTML en mini-componentes de React
// creo una función con el mismo nombre de mi etiqueta, preferentemente
// luego le paso styled.(el elemento de html que quiero modificar)
// comillas bacsticks y entre ellas todo el css
