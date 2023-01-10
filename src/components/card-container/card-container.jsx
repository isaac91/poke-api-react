import "./card-container.styles.jsx";
import {
  CardContainerStyle,
  NameContainerStyle,
  NumberContainerStyle,
  PokeImageContainer,
  PokemonDataContainer,
  TypeContainerStyle,
  TypeNameStyle,
} from "./card-container.styles.jsx";

const CardContainer = ({ pokemon }) => {
  const { name: type } = pokemon.types[0].type;

  return (
    <CardContainerStyle backgroundColor={type}  key={pokemon.id}>
      <NumberContainerStyle>#{pokemon.id}</NumberContainerStyle>

      <NameContainerStyle>
        <p>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
      </NameContainerStyle>

      <PokemonDataContainer backgroundColor={type}>
        <TypeContainerStyle>
          {pokemon.types.map((type) => (
            <TypeNameStyle key={type.type.name}>{type.type.name}</TypeNameStyle>
          ))}
        </TypeContainerStyle>

        <PokeImageContainer
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
        />
      </PokemonDataContainer>
    </CardContainerStyle>
  );
};

export default CardContainer;
