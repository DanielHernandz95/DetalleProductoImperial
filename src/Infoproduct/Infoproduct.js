import React, { Component } from 'react';
import './Infoproduct.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Imagenproduct/Images/logo512.png';
import illustration from './illustration2.svg';

const items = [
    {
        src: require('./../Imagenproduct/Images/logo512.png'),
        altText: 'Slide 1',
        caption: 'Slide 1'
    }];

class Infoproduct extends Component {
    render() {
        return (
            <div class="fm">
                <div className='tarjeta'>
                    <div className='divlogo'>
                        <img src={logo} style={{ width: "150px" }} alt={items.altText} />

                        <p>Nombre Product</p>
                        <a className='empresaa' href='https://www.reactjs.org'>Nombre Empresa</a>
                    </div>
                    <div className='divbutton'>
                        <button className='buttonstyle'>Obtener</button>
                    </div>
                </div>
                <img src={illustration} style={{width:"40%"}} alt="logo" />
            </div>
        );
    }
}

export default Infoproduct;