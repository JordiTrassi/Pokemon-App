import { pokemonApi } from '../api/pokemonApi';
import { setPokemons, setPokemonByName, noApiResults } from './slices/pokemonSlice';

export const getAllPokemons = (page = 0) => {
    
    return async (dispatch) => {
        
        const {data} = await pokemonApi.get(`/pokemon?limit=20&offset=${page * 20}`);

        console.log(data);
  
        (data.count === 0)
            ? dispatch(noApiResults())
            : dispatch(setPokemons({ pokemons: data.results, page: page + 1}));
           
    }
}

export const getPokemonByName = ({ verifiedInputValue }) => {

    return async (dispatch) => {
        
        const { data } = await pokemonApi.get(`/pokemon/${verifiedInputValue}`);
        console.log(data.id);

        (!data.id)
            ? dispatch(noApiResults())
            : dispatch(setPokemonByName({ pokemonSelected: data}));

    }
}