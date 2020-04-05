import React from "react";
import "../style/Filtros.scss"

const Filtros = () => {
    return(
        <section className="form">
      <form>
        <div className="checkbox">
          <label/>
          <input type="checkbox" name="color" value="negro"/>
          Negro
        
        <label/>
          <input type="checkbox" name="color" value="blanco"/>
          Blanco
        
        <label/>
          <input type="checkbox" name="color" value="gris"/>
          Gris
        
        <label/>
          <input type="checkbox" name="color" value="naranja"/>
          Naranja
        
        <label/>
          <input type="checkbox" name="color" value="rayado"/>
          Rayado
        
        </div>

        <div className="radio">
          <label/>
          <input type="radio" name="sexo" value="f"/>
          Femenino
        
        <label/>
          <input type="radio" name="sexo" value="m"/>
          Masculino
        
        <label/>
        <input type="radio" name="sexo" value="i"/>
          Indiferente

        </div>

        <div className="name">Nombre
          <input type="text" name="name" placeholder=""/>
        </div>

        <div className="phone">Telefono
          <input type="text" name="phone" placeholder=""/>
        </div>

        <input type="submit" className="boton-filtrar" value="Filtrar"/>

      </form>
    </section>

   
    )
}

export default Filtros;