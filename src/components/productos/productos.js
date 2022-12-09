import React, { useState } from 'react'
import Plantilla from './Plantilla/Plantilla';
import "./productos.css"

const ProductosEnVenta = () => {

    const [productos] = useState([
        {
            name: 'Mostrador',
            precio: 25000,
            id: 1,
            thumbnail: "https://i.postimg.cc/q7R8WCTD/Balanza-CAS-modelo-ED-H.jpg",
        },
        {
            name: 'Analítica',
            precio: 75500,
            id: 2,
            thumbnail: "https://i.postimg.cc/T3PzNCpz/Balanza-CAS-CBL320-H.jpg",
        },
        {
            name: 'De Piso',
            precio: 64300,
            id: 3,
            thumbnail: "https://i.postimg.cc/Bb0tfty1/Balanza-KRETZ-VET.jpg",
        },
        {
            name: 'Pilón',
            precio: 45700,
            id: 4,
            thumbnail: "https://i.postimg.cc/rmCRmS59/BENUI-OCS-K.jpg",
        },
        {
            name: 'Granataria',
            precio: 98300,
            id: 5,
            thumbnail: "https://i.postimg.cc/QtLnsrqT/Ohaus-Ranger-7000-R71-MD3.jpg",
        },
        {
            name: 'Plataforma',
            precio: 57800,
            id: 6,
            thumbnail: "https://i.postimg.cc/3RX7Q123/PREC-series-Y-WT-10.png",
        },

    ]);
    return (
        <main>
            <h2>Nuestros Productos</h2>
            <section id="balanzas">
                {productos.map((producto) => {
                    return (
                        <Plantilla key={producto.id} name={producto.name} thumbnail={producto.thumbnail} precio={producto.precio} id={producto.id} />
                    );
                })}
            </section>
        </main>
    )
}

export default ProductosEnVenta