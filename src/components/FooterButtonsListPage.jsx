import { useDispatch, useSelector } from 'react-redux';
import { Grid, Button, Tooltip, IconButton } from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

import { getAllPokemons, startLoadingAllPokemons, previousPage, nextPage } from '../store';


export const FooterButtonsListPage = () => {
  
    const dispatch = useDispatch();
  
    const { isLoading, renderPage, page, pokemonId } = useSelector(state => state.pokemonStore);

    const getMorePokemons = () => {
        const nextPokemonId = pokemonId + 1;
        dispatch(startLoadingAllPokemons());
        dispatch(getAllPokemons(nextPokemonId, page));
    }

    const goPreviousPage = () => {
        const previuosRenderedPage = renderPage - 1;
        dispatch(previousPage(previuosRenderedPage))
    }

    const goNextPage = () => {
        (renderPage === page)
            ? getMorePokemons()
            : dispatch(nextPage());
    }

    return (
        <Grid
            container
            justifyContent='center'
        >
            <Grid item>
                <IconButton
                    disabled={isLoading || renderPage === 1}
                    onClick={goPreviousPage}
                    sx={{
                        color: '#d50000',
                        ':hover': { opacity: 0.5 },
                    }}
                >
                    <Tooltip
                        title="back"
                        arrow
                    >
                    <ArrowCircleLeftIcon sx={{ fontSize: 45 }} />
                    </Tooltip>
                </IconButton>
            </Grid>

            <Tooltip
                title="more results"
                arrow
            >
                <Button
                    variant="contained"
                    disabled={isLoading}
                    onClick={goNextPage}
                    sx={{ p: 2, mb: '30px', borderRadius: 50 }}
                    >
                    Next Page
                </Button>           
            </Tooltip>
        </Grid>
        
    )
};

