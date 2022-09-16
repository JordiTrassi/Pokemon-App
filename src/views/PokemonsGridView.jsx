import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import { PokemonCard, IsLoading } from '../components';


export const PokemonsGridView = () => {

    const { isLoading, totalPokemons = [], renderPage } = useSelector(state => state.pokemonStore);

    return (
        <Grid
            container
            spacing={3}
            sx={{
                width: '100%',
                p: 1
            }}
        >
            {
                (isLoading)
                    ? <IsLoading />
                    : totalPokemons[renderPage - 1].map(pokemon => (
                        <Grid
                            item
                            key={pokemon.name}
                            xs={12} sm={6} md={4} lg={3}
                        >
                            <PokemonCard
                                {...pokemon}
                            />
                        </Grid>
                    ))
                      
            }
        
        </Grid>
    )
};


