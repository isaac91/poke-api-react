import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardListContainer = styled.div`
  width: 85vw;
  margin: 0 auto;
  display: grid;
  align-items: center;
  justify-content: center;

  grid-gap: 50px;

  @media (min-width: 500px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
