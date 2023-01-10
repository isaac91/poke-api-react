import CardContainer from "../card-container/card-container";
import { CardListContainer, StyledLink } from "./card-list.styles";

const CardList = ({ filteredPokemons }) => {
  return (
    <CardListContainer>
      {filteredPokemons.map((pokemon) => (
        <StyledLink to={`pokemon/${pokemon.id}`}>
          <CardContainer  pokemon={pokemon}  key={pokemon.id}/>
        </StyledLink>
      ))}
    </CardListContainer>
  );
};

export default CardList;
