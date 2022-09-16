import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Grid, Button, Tooltip, IconButton } from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

import { getAllPokemons, startLoadingAllPokemons } from '../store';


export const FooterButtonsListPage = () => {
  
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const { isLoading, page } = useSelector(state => state.pokemonStore);

    const getMorePokemons = () => {
        dispatch(startLoadingAllPokemons());
        dispatch(getAllPokemons(page));
    }

    return (
        <Grid
            container
            justifyContent='center'
        >
            <Grid item>
                <IconButton
                    disabled={isLoading || page === 1}
                    onClick={() => navigate(-1)}
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
                    onClick={getMorePokemons}
                    sx={{ p: 2, mb: '30px', borderRadius: 50 }}
                    >
                    Next Page
                </Button>           
            </Tooltip>
        </Grid>
        
    )
};

