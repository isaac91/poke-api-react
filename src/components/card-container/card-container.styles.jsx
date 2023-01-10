import styled from "styled-components";

export const CardContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex: wrap;
  color: white;
  background-color: ${({ backgroundColor }) => selectColor(backgroundColor)};
  border: 2px solid white;
  border-radius: 20px;
  padding: 20px;
  cursor: pointer;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;

  &:hover {
    transform: scale(1.05);
  }
`;
export const PokemonDataContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NumberContainerStyle = styled.span`
  text-align: right;
`;

export const NameContainerStyle = styled.span`
  font-weight: bold; 
`;

export const TypeContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TypeNameStyle = styled.p`
  text-align: center;
  background-color: ${({ backgroundColor }) =>
    selectColor(backgroundColor) + "6F"};
  width: 100%;
  margin: 5px 0px 5px 0px;
  padding: 5px 15px 5px 15px;
  border-radius: 20px;
`;

export const PokeImageContainer = styled.img`
  max-width: 50%;
  height: auto;
`;

const selectColor = (pokemonType) => {
  let color = "";
  switch (pokemonType) {
    case "grass":
      color = "#78C850";
      break;
    case "bug":
      color = "#A8B820";
      break;
    case "normal":
      color = "#A8A878";
      break;
    case "fire":
      color = "#F08030";
      break;
    case "water":
      color = "#6890F0";
      break;
    case "flying":
      color = "#A890F0";
      break;
    case "electric":
      color = "#F8D030";
      break;
    case "psychic":
      color = "#F85888";
      break;
    case "poison":
      color = "#A040A0";
      break;
    case "ground":
      color = "#E0C068";
      break;
    case "fairy":
      color = "#EE99AC";
      break;
    case "fighting":
      color = "#C03028";
      break;
    case "rock":
      color = "#B8A038";
      break;
    case "ghost":
      color = "#705898";
      break;
    case "dragon":
      color = "#7038F8";
      break;
    case "ice":
      color = "#98D8D8";
      break;
    case "steel":
      color = "#B8B8D0";
      break;

    default:
      color = "#68A090";
      break;
  }
  return color;
};
