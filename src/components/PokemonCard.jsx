import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Box, Card, CardContent, CardMedia, IconButton, Tooltip, Typography } from '@mui/material';
import { AddCircle } from '@mui/icons-material';
import { setSelectedPokemon } from '../store/slices/pokemonSlice';




export const PokemonCard = (pokemon) => {

  const { name, sprites } = pokemon;
  
  const dispatch = useDispatch();

  const onSelectedPokemon = () => {

    dispatch(setSelectedPokemon(pokemon));
  }
    

  return (

    <Card
      className='animate__animated animate__fadeIn'
      sx={{
        display: 'flex',
        mb: '20px',
        justifyContent: 'flex-start',
        boxShadow: 6,
        borderRadius: 5,
      }}
      >
      <Box sx={{ display: 'flex', flexDirection: 'column' }} >
        <CardContent sx={{ flex: '1 0 auto', mr: -1 }}>
          <Typography component="div" variant="h6">
            {
              name.toUpperCase()
            }
          </Typography>
        </CardContent>
              
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <Link to={`${name}`} >
            <Tooltip
              title="Pokemon Info"
              placement="right"
              arrow
            >
              <IconButton
                onClick={onSelectedPokemon}
              >
                <AddCircle fontSize='large'/> 
              </IconButton>              
            </Tooltip>
          </Link>
               
        </Box>
      </Box>
      <CardMedia
        component="img"
        image={sprites.front_default}
        alt={name}
        sx={{ height: 200, width: 'auto'}}     
      />
    </Card>
  )
}


