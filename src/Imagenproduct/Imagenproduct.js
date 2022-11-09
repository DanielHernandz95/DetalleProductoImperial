import React, { Component } from 'react';
import './Imagenproduct.css';

document.addEventListener('DOMContentLoaded', () =>{
    const elementosCarousel = document.querySelectorAll('.carousel');
    Map.Carousel.init(elementosCarousel, {
        duration: 150
    });
});

class Imagenproduct extends Component {
    state = {}
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='carousel center-align'>

                        <div className='carousel-item'>
                            <h2>Imagen 1</h2>
                            <div className='linea-division'></div>
                            <p>descripcion 1</p>
                            <img alt='prueba' className='imagen' src='https://c8.alamy.com/compes/kggdgw/taza-azul-con-cafe-fondo-blanco-foto-horizontal-con-espacio-para-escribir-kggdgw.jpg'/>
                        </div>

                        <div className='carousel-item'>
                            <h2>Imagen 2</h2>
                            <div className='linea-division'></div>
                            <p>descripcion 2</p>
                            <img alt='prueba' className='imagen' src='https://c8.alamy.com/compes/kggdgw/taza-azul-con-cafe-fondo-blanco-foto-horizontal-con-espacio-para-escribir-kggdgw.jpg'/>
                        </div>

                        <div className='carousel-item'>
                            <h2>Imagen 3</h2>
                            <div className='linea-division'></div>
                            <p>descripcion 3</p>
                            <img alt='prueba' className='imagen' src='https://c8.alamy.com/compes/kggdgw/taza-azul-con-cafe-fondo-blanco-foto-horizontal-con-espacio-para-escribir-kggdgw.jpg'/>
                        </div>

                    </div>
                </div>
            </div>
               
            


        );
    }
}

export default Imagenproduct;