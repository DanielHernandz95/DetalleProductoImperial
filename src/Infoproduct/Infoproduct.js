import React, { Component } from 'react';
import './Infoproduct.css'

class Infoproduct extends Component {
    render() {
        return (
            <div class="fm">
                <img alt='logo' src='https://1000marcas.net/wp-content/uploads/2019/11/WhatsApp-logo.png' width={'150 px'}/>
                <p>Nombre Product</p>
                <a>Nombre Empresa</a>
            </div>
        );
    }
}

export default Infoproduct;