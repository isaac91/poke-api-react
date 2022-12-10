import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CardPokemonDetail from "../../components/card-pokemon-details/card-pokemon-detail.component";
import { PokemonContainer } from "./pokemon.styles";

const GET_POKEMON_BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

const Pokemon = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function fetchData(url) {
      try {
        const newData = await axios.get(url);
        return newData.data;
      } catch (error) {
        console.log(error);
      }
    }

    async function getSpriteEvolution(name) {
      try {
        const getPokemonDetail = await axios.get(
          `${GET_POKEMON_BASE_URL}${name}`
        );
        const sprite =
          getPokemonDetail.data.sprites.other["official-artwork"].front_default;
        return sprite;
      } catch (error) {
        console.log(error);
      }
    }

    async function getPokemonDetails() {
      const getPokemonGeneralData = await fetchData(
        `${GET_POKEMON_BASE_URL}${id}`
      );
      const getEvolutionChainUrl = await fetchData(
        getPokemonGeneralData.species.url
      );
      const getEvolutionChain = await fetchData(
        getEvolutionChainUrl.evolution_chain.url
      );

      //

      const evolutions = async () => {
        let evoChain = [];
        let evoData = getEvolutionChain.chain;

        while (!!evoData && evoData.hasOwnProperty("evolves_to")) {
          const evoDetails = evoData["evolution_details"][0];
          const sprite = await getSpriteEvolution(evoData.species.name);
          evoChain.push({
            species_name: evoData.species.name,
            min_level: !evoDetails ? 1 : evoDetails.min_level,
            trigger_name: !evoDetails ? null : evoDetails.trigger.name,
            item: !evoDetails ? null : evoDetails.item,
            sprite: sprite,
          });

          evoData = evoData["evolves_to"][0];
        }
        return evoChain;
      };

      setPokemon({ ...getPokemonGeneralData, evolutions: await evolutions() });
    }

    getPokemonDetails();
  }, [id]);

  console.log(pokemon);

  return (
    <PokemonContainer>
      {pokemon !== null && (
        <CardPokemonDetail pokemon={pokemon} key={pokemon.id} />
      )}
    </PokemonContainer>
  );
};

export default Pokemon;
