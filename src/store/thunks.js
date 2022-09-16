import { pokemonApi } from '../api/pokemonApi';
import { setPokemons, setPokemonByName, noApiResults, addInTotalPokemons } from './slices/pokemonSlice';

export const getAllPokemons = (pokemonId, page = 0) => {
   
    return async (dispatch) => {

        const limit = 20;
        let newPage = 0;

        for (let i = 0; i < limit; i++){
            try {
                const { data } = await pokemonApi.get(`/pokemon/${pokemonId}/`);
                
                const { name, sprites } = data;

                if (i === 19) {
                    newPage = page + 1;
                }

                dispatch(setPokemons({ name, sprites, pokemonId, newPage, page }));
                pokemonId = pokemonId + 1;

            }
            catch (error) {
                console.log(error);
                dispatch(noApiResults());
            }

        }
        dispatch(addInTotalPokemons());
           
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