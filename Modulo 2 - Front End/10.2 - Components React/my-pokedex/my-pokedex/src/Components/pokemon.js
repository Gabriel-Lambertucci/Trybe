import React from 'react';
import PropTypes from 'prop-types';

class PokemonCard extends React.Component {
    render() {
       const pokemonName = this.props.pokemonName;
       const pokemonType = this.props.pokemonType;
       const pokemonWeight = this.props.pokemonWeight;
       const pokemonImgSrc = this.props.pokemonImg;
        return (
            <>
                <div>
                    <p>{pokemonName}</p>
                    <p>{pokemonType}</p>
                    <p>AverageWeight: {pokemonWeight}kg</p>
                </div>
                <div>
                    <img src={pokemonImgSrc} alt={pokemonName}></img>
                </div>
            </>
        );
    }
}

PokemonCard.propTypes = {
    pokemonName: PropTypes.string.isRequired,
    pokemonType: PropTypes.string.isRequired,
    pokemonWeight: PropTypes.number.isRequired,
    pokemonImgSrc: PropTypes.string.isRequired,
}


export default PokemonCard;