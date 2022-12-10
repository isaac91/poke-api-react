import styled from "styled-components";

export const CardPokemonDetailContainer = styled.div`
  display: flex;
  flex-flow: column;
  padding: 1.2rem;
  border: 5px solid white;
  border-radius: 60px;
  background-color: ${({ backgroundColor }) => selectColor(backgroundColor)};

  @media min-width(1200px){
    width: 85vw;
  }
`;

export const CardGeneralInfo = styled.div`
  padding: 1.5rem;
  h1 {
    font-size: 2rem;
    text-align: center;
  }
  .number {
    text-align: right;
  }
  img {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
  }
  li {
    font-size: 1.2rem;
  }
`;

export const SpecificInfoContainer = styled.div`
  padding: 1.5rem;
  border-radius: 40px;
  color: black;
  background-color: ${({ backgroundColor }) => backgroundColor};
  img {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
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
