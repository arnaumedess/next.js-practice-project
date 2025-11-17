import { PokemonResponse, SinglePokemon, PokemonsGrid } from "@/app/dashboard/pokemons";
import Image from "next/image";

const getPokemons = async (
  limit = 15,
  offset = 0
): Promise<SinglePokemon[]> => {
  try {
    const data: PokemonResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    ).then((res) => res.json());

    const pokemon = data.results.map((pokemon) => ({
      id: Number(pokemon.url.split("/").at(-2)),
      name: pokemon.name,
    }));

    return pokemon;
  } catch (er) {
    throw new Error("Database Not Found");
  }
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons();

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-3"> Lista de Pokemons </span>
      <PokemonsGrid pokemon={pokemons} />
    </div>
  );
}
