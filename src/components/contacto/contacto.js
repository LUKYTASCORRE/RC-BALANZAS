import React from 'react';
import './contacto.css';
import "bootstrap/dist/css/bootstrap.min.css"; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from '../footer/footer';

function BasicExample() {
  return (
  <div className='formularioContacto'>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre y apellido</Form.Label>
        <Form.Control type="name"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="ejemplo@ejemplo.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Empresa</Form.Label>
        <Form.Control type="empresa"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Enviar
      </Button>
      <br/>
      <Button href='/' variant="secundary">
        Home
      </Button>
    </Form>
    <div className='Footer1'>
      
    </div>
  </div>
  );
}

export default BasicExample;