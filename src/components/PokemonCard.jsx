import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Card, CardContent, CardMedia, IconButton, Tooltip, Typography } from '@mui/material';
import { AddCircle } from '@mui/icons-material';
import { setSelectedPokemon } from '../store/slices/pokemonSlice';




export const PokemonCard = (pokemon) => {

  const { name, sprites } = pokemon;
  
  const dispatch = useDispatch();
  const { viewGrid } = useSelector(state => state.pokemonStore);

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
      
      {
        (!viewGrid)
          ? <Box
            container
            width='90%'
            display='flex'
            flexDirection='row'
            justifyContent='space-around'
            flexWrap='wrap'
            sx={{ml: 2}}
          >
            <CardMedia
              component="img"
              image={sprites.front_default}
              alt={name}
              sx={{ height: 200, width: 'auto'}}     
            />
            <CardMedia
              component="img"
              image={sprites.back_default}
              alt={name+"_back_default"}
              sx={{ height: 200, width: 'auto'}}     
            />
            <CardMedia
              component="img"
              image={sprites.front_shiny}
              alt={name+"_front_shiny"}
              sx={{ height: 200, width: 'auto'}}     
            />
            <CardMedia
              component="img"
              image={sprites.back_shiny}
              alt={name+"_back_shiny"}
              sx={{ height: 200, width: 'auto'}}     
            />
          </Box>
          : <CardMedia
              component="img"
              image={sprites.front_default}
              alt={name}
              sx={{ height: 200, width: 'auto'}}     
            />
          
      }
    </Card>
  )
}


