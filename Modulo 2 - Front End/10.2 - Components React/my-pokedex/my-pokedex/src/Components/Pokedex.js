import React from 'react';
import PropTypes from 'prop-types';
import PokemonCard from './pokemon'
import './Pokedex.css';

class Pokedex extends React.Component {
    render() {
        const pokemonsList = this.props.pokemonsList;
        return (
            
            pokemonsList.map((item) =>{
            return (
            <div key = {item.id} className = 'pokemonDiv'>
                <PokemonCard  pokemonName = {item.name} pokemonType={item.type} pokemonWeight={item.averageWeight.value} pokemonImgSrc={item.image}></PokemonCard>
            </div>)})
        );
    }
}

Pokedex.propTypes = {
    pokemonsList: PropTypes.array.isRequired,
}

export default Pokedex;