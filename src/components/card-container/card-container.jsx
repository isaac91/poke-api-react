import "./card-container.styles.jsx";
import {
  CardContainerStyle,
  PokeImageContainer,
  PokemonDataContainer,
} from "./card-container.styles.jsx";

const CardContainer = ({ pokemon }) => {
  const { name: type } = pokemon.types[0].type;

  return (
    <CardContainerStyle backgroundColor={type}>

      <PokemonDataContainer backgroundColor={type}>
        <p>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>

        <ul>
          {pokemon.types.map((type) => (
            <li key={type.slot}>{type.type.name}</li>
          ))}
        </ul>
      </PokemonDataContainer>

      <PokeImageContainer
        src={pokemon.sprites.other["official-artwork"].front_default}
        height="100%"
        alt={pokemon.name}
      />

      <div>
        <p>#{pokemon.id}</p>
      </div>
    </CardContainerStyle>
  );
};

export default CardContainer;
