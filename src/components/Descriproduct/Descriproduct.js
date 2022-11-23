import React, { /* Component, */ useCallback, useEffect } from 'react';
import { Contentful } from '../../Contentful';
import './Descriproduct.css';

const DescriClinica = () => {

    const GetDescriClinica = useCallback(async () => {
        var response = Contentful()

        await response.getEntry('73Ovxs5S1d9s8FG5wd2yrT')
            .then((entry) => formatData(entry.fields))
            .catch(console.error)

        /* console.log(response) */
    })

    useEffect(() => {
        GetDescriClinica();
    }, [GetDescriClinica])

    function formatData(response) {
        console.log(response)
        var Descrip = document.getElementById("Descrip")

        Descrip.innerHTML = " ";
       

        Descrip.innerHTML = response.productDescription;
    }


    return (
        <div className='divdescrip'>
            <p className='titledesc'>Descripción</p>
            <hr />
            <p id="Descrip"></p>
        </div>

    );
}


export default DescriClinica;