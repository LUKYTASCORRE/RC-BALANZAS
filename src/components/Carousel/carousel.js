import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-bootstrap/Carousel';
import "./carousel.css";
import clarck from "../imágenes/clarck.jpg";
import puente from "../imágenes/puente.jpg";
import grúa from "../imágenes/grúa.jpg";

function Album() {
  return (
<div className="Carousel">
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={clarck} 
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Calibraciones y reparaciones de balanzas</h3>
          <p>Procedimientos bajo normas ISO 9001:2015</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={puente}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Mantenimientos Periódicos</h3>
          <p>Frecuencias ajustadas a vuestras demandas</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={grúa}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Instalaciones</h3>
          <p>
            Soporte técnico capacitado y auditado por el INTI
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</div>
  );
}

export default Album;