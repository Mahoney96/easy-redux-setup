import React from 'react';
import {connect} from 'react-redux'
import {getPokemon} from './redux/reducer'
import axios from 'axios'
import './App.css';

function App(props) {
  console.log("APP PROPS", props)
  const getMeSomePokemon = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon').then(res => {
      console.log("HIT")
      props.getPokemon(res.data.results)
    })
  }
  return (
    <div className="App">
      <button onClick={() => getMeSomePokemon() }>Get Me Some PokePeople</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return{
    pokemon: state.pokemon
  }
}
export default connect(mapStateToProps, {getPokemon})(App);
