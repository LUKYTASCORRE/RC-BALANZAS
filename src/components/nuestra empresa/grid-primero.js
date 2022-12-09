import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import Técnico from '../imágenes/quienes-somos.jpg';

function GridPrimero() {
  return (
    <Card style={{  width: '80%', display: 'block-flex', flexDirection: 'column', marginTop: '10vh', marginBottom: '10vh', marginLeft: '20vh'}}>
     
      <Card.Body>
        <Card.Title style={{ textAlign: 'center'}}>Nuestra Trayectoria</Card.Title>
        <Card.Text>
        Somos una empresa con 20 años de antigüedad en el mercado, en el amplio rubro de Balanzas Electrónicas, y con la firme experiencia que otorga la constancia y perseverancia en la atención personalizada de nuestros clientes.

En estos años de intensa actividad, varias son las empresas que han podido conocernos, trabajar con nosotros y confirmar nuestro compromiso con la calidad en el servicio que brindamos. 

Nuestro principal objetivo es garantizar al cliente la seguridad de un Servicio Técnico eficiente, rápido y confiable, a la vez que un costo real, reduciendo así, en la facturación, los gastos de movilidad y viáticos que, la mayoria de las veces suelen abultar considerablemente las cifras a abonar.
        </Card.Text>
      </Card.Body>
      <Card.Img variant="top" src={Técnico} />
    </Card>
  );
}

export default GridPrimero;