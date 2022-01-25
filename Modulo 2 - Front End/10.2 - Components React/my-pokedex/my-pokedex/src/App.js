import './App.css';
import Pokedex from './Components/Pokedex';
import pokemons from './data';
import Header from './Components/Header'

function App() {
  return (  
    <>
      <Header></Header>
      <Pokedex pokemonsList={pokemons}></Pokedex>
    </>
  );
}

export default App;
