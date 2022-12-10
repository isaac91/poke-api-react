import styled from "styled-components";

export const CardContainerStyle = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  background-color: ${({ backgroundColor }) => selectColor(backgroundColor)};
  border: 2px solid white;
  border-radius: 20px;
  padding: 25px;
  cursor: pointer;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const PokemonDataContainer = styled.div`
  p {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

export const PokeImageContainer = styled.img`
  align-items: center;
  text-align: center;
  max-height: 200px;
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
