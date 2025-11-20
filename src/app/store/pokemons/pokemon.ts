import { Pokemon, SinglePokemon } from '@/app/dashboard/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface PokemonsState {
    [key:string]: SinglePokemon
}

const getInitialState = ():PokemonsState => { 
    if ( typeof localStorage === 'undefined') return {}; 
    const favourites = JSON.parse(localStorage.getItem('favourite-pokemons') ?? '{}')
    
    return favourites
}

const initialState: PokemonsState = {
    ...getInitialState(),
    // '1': {id: 1, name: 'boulbasoure'}
}

const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toogleFavourite(state, action: PayloadAction<SinglePokemon>) {
        const pokemon = action.payload;
        const { id } = pokemon; 

        if( !!state[id] ) {
            delete state[id];
            return;
        } else {
            state[id] = pokemon;
        }

        localStorage.setItem('favourite-pokemons', JSON.stringify(state));
    }
  }
});

export const { toogleFavourite } = pokemonSlice.actions

export default pokemonSlice.reducer