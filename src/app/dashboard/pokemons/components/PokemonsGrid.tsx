import { SinglePokemon } from "../interface/single-pokemon";
import { PokemonsCard } from "./PokemonsCard";

interface Props {
  pokemon: SinglePokemon[];
}
export const PokemonsGrid = ({ pokemon }: Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemon.map( pokemon => (
        <PokemonsCard key={ pokemon.id } pokemon={pokemon} />
      ))}
    </div>
  );
};
