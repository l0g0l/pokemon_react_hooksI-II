
import React, { useState } from 'react'

import axios from 'axios'
import ListPokemon from './Components/ListPokemon/ListPokemon';


import './App.css';

export default function App(e) {
  const [nameInput, setNameInput] = useState('');
  const [pokemon, setPokemon] = useState([]);


  // recogemos lo que el ususario inttroduce en el input y lo seteamos , para que guarde el valor en nameInput cada vez que cambie
  const handleChange = (e) => {
    let value = e.target.value.toLowerCase();
    console.log(value)
    setNameInput(value)

  }


  // Le pasamos el estado almacenado, nameInput a la url
  const getPokemon = (e) => {

    let url = `https://pokeapi.co/api/v2/pokemon/${nameInput}`
    axios.get(url)
      .then(response => {
        console.log(response.data)
       
        setPokemon([...pokemon, response.data])
        console.log(pokemon) // no sale el valor que se acaba de setear en el estado
       
        //setea el input a vacío
        setNameInput('')
      })
      .catch(error => {
        console.log(error);
      })
    

  }


// ponemos como value el valor del state nameInput
// Renderizamos listPokemon y le pasamos por props lo necesario apra que pinte las cards
  return (
    <div className="App">
      <input className="input" type="text" name="buscador" onChange={(e) => handleChange(e)} value={nameInput}/>
      <button onClick={getPokemon}>Buscar</button>
      <div>
        <ListPokemon data={pokemon}/>
      </div>
    </div>
  );
}


