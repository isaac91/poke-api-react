import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardListContainer = styled.div`
  
  display: grid;
  padding: 1rem;
  gap: 3rem;
  grid-auto-rows: auto;
  grid-template-columns: repeat(auto-fill,minmax(min(100%,25rem), 1fr));
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
