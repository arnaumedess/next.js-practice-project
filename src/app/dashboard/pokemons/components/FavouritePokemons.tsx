'use client'

import { useAppSelector } from "@/app/store";
import { PokemonsGrid } from "./PokemonsGrid";
import { useState } from "react";
import { IoHeartOutline } from "react-icons/io5";

export const FavouritePokemons = () => {
  const favouritePokemons = useAppSelector((state) => state.pokemons);
  const list = Object.values(favouritePokemons); // convierte el mapa en array
  
  const [pokemons, setPokemons] = useState(list)

  console.log(list);

  return (
    <>
    { 
        pokemons.length === 0
        ? <NotFavorites/>
        : <PokemonsGrid pokemon={pokemons}/>
    }
    </>
  );
};

export const NotFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={70} className="text-red-500"/>
      <span className="text-3xl">No hay favoritos</span>
    </div>
  )
}


