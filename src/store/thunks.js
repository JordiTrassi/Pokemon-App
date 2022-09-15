import { setPokemons, noApiResults } from './slices/pokemonSlice';

export const getPokemons = ({ page = 0, verifiedInputValue }) => {
    
    return async(dispatch) => {
        
        // const resp = await fetch(`https://`);
        // const data = await resp.json();
  
        // (data.resultCount === 0)
        //     ? dispatch(noApiResults())
        //     : dispatch(setPokemons({ albums: data.results, page: page + 1}));
           
    }
}