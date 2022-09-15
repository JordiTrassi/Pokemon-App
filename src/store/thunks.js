import { pokemonApi } from '../api/pokemonApi';
import { setPokemons, noApiResults } from './slices/pokemonSlice';

export const getAllPokemons = (page = 0) => {
    
    return async (dispatch) => {
        
        const {data} = await pokemonApi.get(`/pokemon?limit=20&offset=${page * 20}`);

        console.log(data);
  
        (data.count === 0)
            ? dispatch(noApiResults())
            : dispatch(setPokemons({ pokemons: data.results, page: page + 1}));
           
    }
}