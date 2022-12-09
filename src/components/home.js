import React from "react";
import Album from './Carousel/carousel.js';
import Relevamiento from './imágenes/relevamiento.jpg';
import PesasCamiones from './imágenes/pesas-camiones.jpg';
import Reparacion from './imágenes/reparacion.jpg';
import './home.css';


const Home = () => {
    return (
        <div className="contenido">
            <div className="Carousel">
                <Album/>
            </div>
            <br/>
            <div className="Medios-Equipos">
              <h2>Medios y Equipos</h2>
                <div className="primera-grid">
                    <h3>Calibraciones de Balanzas Industriales</h3>
                    <section className="seccion primera">
                        <p>Calibraciones certificadas con pesas patrón trazadas a patrones del INTI (Instituto nacional 
                            de Tacnología Industrial, sección Metrología Legal), para todas las lineas de balanzas de camiones, 
                            industriales, comerciales, laboratorio, y sistemas de pesajes.

                            Dichas calibraciones se documentan con su respectivo registro, a través del Certificado de Calibración, 
                            que incluye las pruebas de linealidad, excentricidad, movilidad y fidelidad, con su respectivo cálculo 
                            de Incertidumbre, quedando apto para cumplir con lo requerido por los sistemas de gestión de calidad 
                            como ISO 9000, GMP, GLP, etc.</p>
                        <img className="relevamiento" src={Relevamiento} alt="personal en servicio" />
                    </section>
                </div>
                <div className="segunda-grid">
                    <h3>Pesas Patrón</h3>
                    <section className="seccion segunda">
                        <p>Contamos con pesas patrones de distintas capacidades, para controlar y calibrar apropiadamente desde 
                            las balanzas más precisas de laboratorio hasta las básculas para camiones.
                            
                            El Sistema de Gestión de Mediciones, para la Confirmación Metrológica, utiliza un Equipo de Medición 
                            compuesto por un parque de pesas para cubrir todas las necesidades, contando con la Certificación 
                            correspondiente de cada una de ellas por laboratorios S.A.C. (Servicio Argentino de Calibraciones) 
                            a su vez homologados por el I.N.T.I. (Instituto Nacional de Tecnología Industrial).</p>
                        <img className="pesas camiones" src={PesasCamiones} alt="pesas para camiones" />
                    </section>
                </div>
                <div className="tercera-grid">
                    <h3>Personal Especializado</h3>
                    <section className="seccion tercera">
                        <p>El personal con que contamos, altamente comprometido con la calidad, está formado por técnicos y 
                           profesionales con extensa trayectoria en el rubro metrológico, y que por sus características satisface 
                           ampliamente los requisitos de Nuestros Clientes.
                           
                           Profesionales ingenieros, programadores y técnicos mecánicos, electrónicos e informáticos en una continua
                           capacitación con el objetivo de brindar soluciones especificas a distintas unidades de negocios.</p>
                        <img className="reparación" src={Reparacion} alt="personal en reparación" />
                    </section>
                </div>
            </div>
            
        </div>
    )
}
export default Home;