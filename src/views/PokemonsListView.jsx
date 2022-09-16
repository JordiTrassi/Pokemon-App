import { useSelector } from 'react-redux';
import { List} from '@mui/material';
import { PokemonCard, IsLoading } from '../components';


export const PokemonsListView = () => {
    
    const { isLoading, totalPokemons = [], renderPage } = useSelector(state => state.pokemonStore);


    return (
        
        <List sx={{ width: '100%', p: 1 }}>
            
            {
              (isLoading)
                  ? <IsLoading />
                  : totalPokemons[renderPage - 1].map(pokemon => (
                      <PokemonCard                    
                          key={pokemon.name}
                          {...pokemon}
                      />
                    ))
            }
            
        </List>
    );
}
