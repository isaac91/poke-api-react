import { StyledLink } from "../card-list/card-list.styles";
import { CardPokemonDetailContainer } from "./card-pokemon-detail.styles";

const CardPokemonDetail = ({ pokemon }) => {
  return (
    <CardPokemonDetailContainer
      key={pokemon.id}
      backgroundColor={pokemon.types[0].type.name}
    >
      <StyledLink to="/">
        Regresar
      </StyledLink>

      <h1>{pokemon.name}</h1>
      <p>#{pokemon.id}</p>
      <ul>
        {pokemon.types.map((type) => (
          <li key={type.slot}>{type.type.name}</li>
        ))}
      </ul>
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
        height="50%"
      />
      
      <h3>Abilities</h3>
      <ul>
        {pokemon.abilities.map((ability) => (
          <li>{ability.ability.name}</li>
        ))}
      </ul>
      <h3>Types</h3>
      <ul>
        {pokemon.types.map((types) => (
          <li>{types.type.name}</li>
        ))}
      </ul>
      <h3>Base Stats</h3>
      <ul>
        {pokemon.stats.map((stat) => (
          <li>
            {stat.stat.name} {stat.base_stat}
          </li>
        ))}
      </ul>
      <h3>Evolutions</h3>
      <ul>
        {pokemon.evolutions.map((evolution) => (
          <>
            <img
              src={evolution.sprite}
              alt={pokemon.species_name}
              height="100%"
            />
            <li>{evolution.species_name}</li>
          </>
        ))}
      </ul>
    </CardPokemonDetailContainer>
  );
};

export default CardPokemonDetail;
