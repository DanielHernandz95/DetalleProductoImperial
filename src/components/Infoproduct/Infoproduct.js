import React, { /* Component, */ useCallback, useEffect } from 'react';
import './Infoproduct.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import illustration from './illustration2.svg';
import { Contentful } from '../../Contentful';



const InfoClinica = () => {
    const GetInfoClinica = useCallback(async () => {
        var response = Contentful()

        await response.getEntry('73Ovxs5S1d9s8FG5wd2yrT')
            .then((entry) => formatData(entry.fields))
            .catch(console.error)

        /* console.log(response) */
    })

    useEffect(() => {
        GetInfoClinica();
    }, [GetInfoClinica])

    function formatData(response){
        console.log(response)
        var imagen = document.getElementById("idLogo")
        var producto = document.getElementById("ProductName")
        var empresa = document.getElementById("empresaa")

        producto.innerHTML = " ";
        empresa.innerHTML = " ";

        imagen.src = response.logoImperial.fields.file.url;
        producto.innerHTML += response.product1;
        empresa.innerHTML += response.developer;
    }

    return (
        <div className="fm">
            <div className='tarjeta'>
                <div className='divlogo'>
                    <img src="" id="idLogo" style={{ width: "150px" }}  />

                    <p id="ProductName"></p>
                    <a className='empresaa' id="empresaa" href='/'>Nombre Empresa</a>
                </div>
                <div className='divbutton'>
                    <button className='buttonstyle'>Obtener</button>
                </div>
            </div>
            <img src={illustration} style={{ width: "40%" }} alt="logo" />
        </div>
    );
}


export default InfoClinica;