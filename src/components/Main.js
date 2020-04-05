import React from 'react';
import mainImg from "../assets/main_img.jpg";
import "../style/Main.scss"

const Main = () => {
    return(
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
          <img alt="imagen de un gatito" src={mainImg} />
        </div>
        </section>
    )
}

export default Main;