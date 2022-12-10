import { useState, useEffect } from "react";
import axios from "axios";
import SearchBox from "../../components/serach-box/search-box.component";
import CardList from "../../components/card-list/card-list.component";
import { HomeContainer } from "./home.styles";

const GET_POKEMONS = "https://pokeapi.co/api/v2/pokemon?limit=151";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    async function getPokemonDetails(pokemonUrl) {
      try {
        const pokemonDetails = await axios.get(pokemonUrl);
        const { id, name, sprites, types } = pokemonDetails.data;
        return { id: id, name: name, sprites: sprites, types: types };
      } catch (error) {
        console.log(error);
      }
    }

    async function getPokemons() {
      try {
        const getNewPokemons = await axios.get(GET_POKEMONS);
        const { results } = getNewPokemons.data;
        const pokemonsWithDetails = await Promise.all(
          results.map(async (pokemon) => {
            return getPokemonDetails(pokemon.url);
          })
        );
        setPokemons(pokemonsWithDetails);
      } catch (error) {
        console.log(error);
      }
    }
    getPokemons();
  }, []);

  const onChangeSearchField = (e) => {
    const { value } = e.target;
    setSearchField(value);
  };

  const filteredPokemons = pokemons.filter((pokemon) => {
    return pokemon.name.includes(searchField.toLocaleLowerCase());
  });

  return (
    <div>
      <h1 className="title">Pokedex</h1>
      <SearchBox
        onChangeHandler={onChangeSearchField}
        placeholder="Filter pokemon"
      />
      {filteredPokemons.length > 0 && (
        <CardList filteredPokemons={filteredPokemons} />
      )}
      {searchField.length > 0 && filteredPokemons.length === 0 && (
        <h3 className="message">No pokemons found</h3>
      )}
    </div>
  );
};

export default Home;
