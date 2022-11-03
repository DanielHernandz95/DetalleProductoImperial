import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';

function App() {

  const [equipo, setEquipo, ]= useState ([]);

  useEffect(() =>{
    axios.get('')
    .then((Response)=>{
      setEquipo(Response.data.teams);
    })
  })
  return (
    <h1>Bienvenido { equipo.strTeam }</h1>
  );
}

export default App;
