import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import Multimarca from '../imágenes/multimarca.jpg';
import { Button } from "react-bootstrap";

function GridSegundo() {
  return (
    <Card style={{ width: '80%', display: 'block-flex', flexDirection: 'column', marginTop: '10vh', marginBottom: '10vh', marginLeft: '20vh'}}>
      
      <Card.Body>
        <Card.Title>Reparación Multimarca</Card.Title>
        <Card.Text>
        Reparación de balanzas y básculas de diferentes marcas y modelos, desde balanzas de laboratorio hasta balanzas de pesar 
        camiones, tanto electrónicas, mecánicas e híbridas. Abonos periódicos y de mantenimiento preventivo a la medida de las 
        necesidades de cada usuario. Transformación de equipos mecánicos a electrónicos. Contamos con técnicos capacitados para 
        la reparación, ecualización y calibración de todas las marcas.
        </Card.Text>
      </Card.Body>
      <Card.Img variant="top" src={Multimarca} />
    </Card>
  );
}

export default GridSegundo;