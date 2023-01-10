import axios from "axios";
import { useEffect, useState } from "react";
import CardList from "../../components/card-list/card-list.component";
import SearchBox from "../../components/serach-box/search-box.component";
import InfiniteScroll from "react-infinite-scroll-component";

const LIMIT = 20;
const GET_POKEMONS = `https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=`;
const GET_ALL_POKEMONS = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154`;

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  async function getPokemonDetails(pokemonUrl) {
    try {
      const pokemonDetails = await axios.get(pokemonUrl);
      const { id, name, sprites, types } = pokemonDetails.data;
      return { id: id, name: name, sprites: sprites, types: types };
    } catch (error) {
      console.log(error);
    }
  }

  async function getPokemons(url = `${GET_POKEMONS}${offset}`, searchQuery) {
    try {
      const getNewPokemons = await axios.get(`${GET_POKEMONS}${offset}`);
      const { results } = getNewPokemons.data;

      if (results.length === 0) {
        setHasMore(false);
        return;
      }

      const pokemonsWithDetails = await Promise.all(
        results.map(async (pokemon) => {
          return getPokemonDetails(pokemon.url);
        })
      );

      setPokemons((pokemons) => [...pokemons, ...pokemonsWithDetails]);
      setOffset(offset + LIMIT);
    } catch (error) {
      console.log(error);
    }
  }

  async function getFilteredPokemons() {
    if (searchField.length < 3) {
      return;
    }
    try {
      const getNewPokemon = await axios.get(GET_ALL_POKEMONS);
      const { results } = getNewPokemon.data;

      const newPokemonsFiltered = results.filter((pokemon) => {
        return pokemon.name.includes(searchField);
      });

      const pokemonsWithDetails = await Promise.all(
        newPokemonsFiltered.map(async (pokemon) => {
          return getPokemonDetails(pokemon.url);
        })
      );

      setFilteredPokemons(pokemonsWithDetails);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPokemons();
  }, []);

  useEffect(() => {
    getFilteredPokemons();
  }, [searchField]);

  const onChangeSearchField = (e) => {
    const { value } = e.target;
    setSearchField(value);
  };

  console.log(filteredPokemons);

  return (
    <div>
      <h1 className="title">Pokedex</h1>
      <SearchBox
        onChangeHandler={onChangeSearchField}
        placeholder="Filter pokemon"
      />
      {searchField.length < 3 && (
        <h3 className="message">Type at least 3 characters to filter.</h3>
      )}

      {pokemons.length > 0 && searchField.length < 3 && (
        <InfiniteScroll
          dataLength={pokemons.length} //This is important field to render the next data
          next={getPokemons}
          hasMore={hasMore}
          loader={<h4>Cargando ...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Se acabaron los pokes!!</b>
            </p>
          }
        >
          {<CardList filteredPokemons={pokemons} />}
        </InfiniteScroll>
      )}

      {filteredPokemons.length > 0 && searchField.length >= 3 && (
        <CardList filteredPokemons={filteredPokemons} />
      )}

      {searchField.length >= 3 && filteredPokemons.length === 0 && (
        <h3 className="message">No pokemons found.</h3>
      )}
    </div>
  );
};

export default Home;
