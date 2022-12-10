import styled from "styled-components";

export const CardPokemonDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  border: 2px solid red;
  border-radius: 50px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor }) => selectColor(backgroundColor)};

  
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
