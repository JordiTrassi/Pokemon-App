import { pokemonApi } from '../api/pokemonApi';
import { setPokemons, setPokemonByName, noApiResults } from './slices/pokemonSlice';

export const getAllPokemons = (pokemonId, page = 0) => {
   
    return async (dispatch) => {

        const limit = 20;

        for (let i = 0; i < limit; i++){
            try {
                const { data } = await pokemonApi.get(`/pokemon/${pokemonId}/`);
                
                const { name, sprites } = data;
            
                console.log(name, sprites);

                dispatch(setPokemons({ name, sprites, pokemonId }));
                pokemonId = pokemonId + 1;

            }
            catch (error) {
                console.log(error);
                dispatch(noApiResults());
            }

        }
        
        let newPage = page + 1;
        
        
        // const { data } = await pokemonApi.get(`/pokemon?limit=20&offset=${page * 20}`);
        // const results = data.results;

        // (data.count === 0)
        //     ? dispatch(noApiResults())
        //     : dispatch(setPokemons({ results, newPage }));
           
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