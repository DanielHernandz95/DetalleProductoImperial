import React/*, { Component }*/ from 'react';
import './App.css';
import Infoproduct from './Infoproduct/Infoproduct';
import Imagenproduct from './Imagenproduct/Imagenproduct';
import Descriproduct from './Descriproduct/Descriproduct';

function App() {
  return (
    <div className='container' >
      <div className="App">
        <div className='col1'><Infoproduct /></div>
        <div className='col2'>
          <div className='row1'><Imagenproduct /></div>
          <div className='row2'><Descriproduct /></div>
        </div>
      </div>
    </div>
  );
}

export default App;
