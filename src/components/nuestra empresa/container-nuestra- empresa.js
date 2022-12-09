import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './container-nuestra-empresa.css';

function AutoLayoutExample() {
  return (
      <Row style={{ margin:'0rem', width:'100%' }} className="texto-col">
        <Col style={{ margin:'0rem', width:'100vh' }}><h2 className="principal">Nuestra Empresa</h2></Col>
        <Col style={{ margin:'0rem', width:'100vh' }}><h3 className="secundario">Conocé mas sobre nosotros</h3></Col>
      </Row>
  );
}

export default AutoLayoutExample;