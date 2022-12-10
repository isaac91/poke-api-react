import { StyledLink } from "../card-list/card-list.styles";
import {
  CardGeneralInfo,
  CardPokemonDetailContainer,
  SpecificInfoContainer,
} from "./card-pokemon-detail.styles";

const CardPokemonDetail = ({ pokemon }) => {
  return (
    <CardPokemonDetailContainer
      key={pokemon.id}
      backgroundColor={pokemon.types[0].type.name}
    >
      <StyledLink to="/">Regresar</StyledLink>

      <CardGeneralInfo>
        <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
        <p className="number">#{pokemon.id}</p>
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
      </CardGeneralInfo>

      <SpecificInfoContainer backgroundColor={"white"}>
        <h3>Abilities</h3>
        <ul>
          {pokemon.abilities.map((ability) => (
            <li key={ability.ability.name}>{ability.ability.name}</li>
          ))}
        </ul>
        <h3>Types</h3>
        <ul>
          {pokemon.types.map((types) => (
            <li key={types.type.name}>{types.type.name}</li>
          ))}
        </ul>
        <h3>Base Stats</h3>
        <ul>
          {pokemon.stats.map((stat) => (
            <li key={stat.stat.name}>
              {stat.stat.name} - {stat.base_stat}
            </li>
          ))}
        </ul>
        <h3>Evolutions</h3>
        <ul>
          {pokemon.evolutions.map((evolution) => (
            <>
              <li key={evolution.species_name}>{evolution.species_name}</li>
              <img
                src={evolution.sprite}
                alt={pokemon.species_name}
                height="50%"
              />
            </>
          ))}
        </ul>
      </SpecificInfoContainer>
    </CardPokemonDetailContainer>
  );
};

export default CardPokemonDetail;
