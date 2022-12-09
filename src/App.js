import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logo from './logo.jpg';
import BarraNavegadora from './components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasicExample2 from './components/contacto/contacto2';
import Navbar from "./components/navbar/Navbar.js";
import Home from './components/home.js';
import Footer from './components/footer/footer';
import Empresa from './components/nuestra empresa/nuestra-empresa';
import NuestrosProductos from './components/productos/nuestros-productos';







function App() {

  
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes><Route path='/' element={<BarraNavegadora />} /></Routes>
            <Routes><Route index element={<Home />} /></Routes>
            <Routes><Route path='/' element={<Footer />} /></Routes>
            <Routes><Route path='/Nuestra Empresa' element={<BarraNavegadora />} /></Routes>
            <Routes><Route path='/Nuestra Empresa' element={<Empresa />} /></Routes>
            <Routes><Route path='/Nuestra Empresa' element={<Footer />} /></Routes>
            <Routes><Route path='/Nuestros Productos' element={<BarraNavegadora />} /></Routes>
            <Routes><Route path='/Nuestros Productos' element={<NuestrosProductos />} /></Routes>
            <Routes><Route path='/Nuestros Productos' element={<Footer />} /></Routes>
            <Routes><Route path='/Contáctanos' element={<BarraNavegadora />} /></Routes>
            <Routes><Route path='/Contáctanos' element={<BasicExample2 />} /></Routes>
            <Routes><Route path='/Contáctanos' element={<Footer />} /></Routes>
      </BrowserRouter>
    </div>
  );
  }


export default App;
 