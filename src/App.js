import React from "react";
import "./App.css";
import Card from "../src/components/Card";
import mainImg from "../src/assets/main_img.jpg";

const gatos = [
  {
    name: "Rodolfo",
    shortDesc:
      "Tiene 4 años, le gusta perseguir mariposas, se lleva bien con niños y con otros gatos.",
    longDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
    img:
      "https://animalrevista.com/wp-content/uploads/2016/07/gatas-calico-tricolor-animal-la-revista.jpg",
    colores: ["tricolor", "negro", "blanco", "naranja", "rayado"],
    sexo: "m"
  },

  {
    name: "Muzzarella",
    shortDesc:
      "Muy dulce y mimosa. Tiene seis dedos en una pata que asegura le dan superpoderes.",
    longDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
    img:
      "https://www.imagenesdegatos.net/wp-content/uploads/2015/12/gato-gris-ojos-naranja-3.jpg",
    colores: ["gris"],
    sexo: "f"
  },

  {
    name: "Artilugia",
    shortDesc:
      "Muy activa y juguetona. Se lleva bien con perros. Ideal para casa con jardin amplio",
    longDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
    img:
      "https://image.freepik.com/foto-gratis/primer-plano-hermoso-gato-negro-blanco-marcas-sueno-cara-acostado-piso-concreto_44161-220.jpg",
    colores: ["negro", "blanco"],
    sexo: "f"
  },

  {
    name: "Wosito",
    shortDesc:
      "Vivio toda su vida en la calle y todavia se asombra de cosas como estufas y escaleras.",
    longDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkqkcBuVxZdrxWFYiEhoR3SpIioYCMesijUKHfjh7pTz-ctaf5&s",
    colores: ["rayado"],
    sexo: "m"
  },

  {
    name: "Calamardo",
    shortDesc:
      "Dicen que de noche, cuando nadie lo puede escuchar, invoca a Cthulu. Muy mimoso.",
    longDesc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.",
    img:
      "https://misanimales.com/wp-content/uploads/2018/07/mito-del-gato-negro.jpg",
    colores: ["negro"],
    sexo: "m"
  }
];


const App = () => {
  return (
    <div className="App">
      <nav>
        <div>#AdoptAdas</div>
        <i className="fa fa-bars"></i>
      </nav>

      <section className="main">
        <div className="main_info">
          <h2>Adopta un gatito</h2>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          <p>
            Suspendisse auctor urna blandit ultricies maximus. Sed accumsan
            auctor lacus ac mattis. Mauris at nibh purus. Nullam vulputate, urna
            value facilisis eleifend, nisl turpis suscipit augue, eget tincidunt
            velit nunc ut lectus. Phasellus viverra nec augue at iaculis. Nullam
            scelerisque tincidunt sapien vitae sodales. Sed tristique ut nulla a
            ultricies. Aliquam sit amet sodales elit, et pellentesque lorem.
            Praesent quis nibh value arcu porta lobortis. Morbi rutrum ut risus
            sed hendrerit. Integer laoreet odio nec nisi varius, at scelerisque
            nisi rhoncus. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quisquam dolorum temporibus fuga voluptatum vero, dolore
            tempore neque saepe quo reiciendis?
          </p>
        </div>
        <div className="main_img">
          <img src={mainImg} />
        </div>
      </section>

      <section className="form">
        <form>
          <div className="checkbox">
            <label />
            <input type="checkbox" name="color" value="negro" />
            Negro
            <label />
            <input type="checkbox" name="color" value="blanco" />
            Blanco
            <label />
            <input type="checkbox" name="color" value="gris" />
            Gris
            <label />
            <input type="checkbox" name="color" value="naranja" />
            Naranja
            <label />
            <input type="checkbox" name="color" value="rayado" />
            Rayado
          </div>

          <div className="radio">
            <label />
            <input type="radio" name="sexo" value="f" />
            Femenino
            <label />
            <input type="radio" name="sexo" value="m" />
            Masculino
            <label />
            <input type="radio" name="sexo" value="i" />
            Indiferente
          </div>

          <div className="name">
            Nombre
            <input type="text" name="name" placeholder="" />
          </div>

          <div className="phone">
            Telefono
            <input type="text" name="phone" placeholder="" />
          </div>

          <input type="submit" value="Filtrar" />
        </form>
      </section>

      <section className="adopt">
        <div className="card">
         { gatos.map((gato, i) =>
          {
            
            <Card
              key={i}
              name={gato.name}
              shortDesc={gato.shortDesc}
              longDesc={gato.longDesc}
              img={gato.img}
              colores={gato.colores}
              sexo={gato.sexo}
            />
          }
          )
         }
        </div>
      </section>

      <div className="footer">
        <div className="footer_icons">
          <i className="fa fa-facebook"></i>
          <i className="fa fa-google-plus"></i>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-dribbble"></i>
        </div>
        <p>© 2020 | All Rights Reserved</p>
      </div>

      <script src="main.js"></script>
    </div>
  );
};

export default App;
