import { pokemonApi } from '../api/pokemonApi';
import { setPokemons, setPokemonByName, noApiResults } from './slices/pokemonSlice';

export const getAllPokemons = (page = 0) => {
    
    return async (dispatch) => {
        
        const { data } = await pokemonApi.get(`/pokemon?limit=20&offset=${page * 20}`);

        let newPage = page + 1;
        const results = data.results;

        (data.count === 0)
            ? dispatch(noApiResults())
            : dispatch(setPokemons({ results, newPage }));
           
    }
}

export const getPokemonByName = ({ verifiedInputValue }) => {

    return async (dispatch) => {
        
        const { data } = await pokemonApi.get(`/pokemon/${verifiedInputValue}`);

        (!data.id)
            ? dispatch(noApiResults())
            : dispatch(setPokemonByName(data));

    }
}