import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid, Button, Typography, Tooltip } from '@mui/material';
import { getAllPokemons, startLoadingAllPokemons } from './store';

export const PokemonApp = () => {

  const dispatch = useDispatch();

  const getStartAllPokemons = () => {
    dispatch(startLoadingAllPokemons());
    dispatch(getAllPokemons());
  };
  
  return (
    
    <Grid
      container
      display="flex"
      flexDirection="row"
      justifyContent="right"
      sx={{
          width: '100vw',
          height: '100vh',
          backgroundImage: 'url("https://images6.alphacoders.com/305/305896.jpg")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
    >
      <Grid
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="50%"
      >
        <Typography
          variant='h1'
          padding={5}
          sx={{
            color: 'white',
          }}
        >
          The Pokemon App!
        </Typography>
        <Tooltip
          title="Press START to download the Pokemons"
          arrow
          placement="bottom"
        >
          <Link
            to="pokemons"
            style={{textDecoration: 'none'}}           
            >
            <Button
              onClick={getStartAllPokemons}
              variant='outlined'
              sx={{
                fontSize: 30,
                color: 'black',
                borderColor: 'black',
                borderRadius: 5,
                border: 2,
              }}
            >
              START
            </Button>        
          </Link>
        </Tooltip>
      </Grid>

    </Grid>

  )
};


