import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Grid, IconButton, Tooltip, Typography } from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';


export const DetailsPokemonPage = () => {
  
  const navigate = useNavigate();
  const { pokemonSelected } = useSelector(state => state.pokemonStore);  
  
  const { name } = useParams(); 
  const { sprites } = pokemonSelected;

  return (
    
    <Box
      width='100vw'
      height='100vh'
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <Grid
        className='animate__animated animate__fadeIn'
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          maxWidth: '95%',
          minHeight: '95vh',
          borderRadius: 3,   
          backgroundImage:
          'linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.4)), url("https://images.alphacoders.com/294/294453.jpg")',
          backgroundPosition: 'center',
        }}
        >
      
      <Grid
        item
        className='animate__animated animate__fadeInLeft'
        sx={{mb: 8}}
        >
          <Box
            component="img"
            sx={{
              boxShadow: 6,
              height: 'auto',
              width: 600,
              maxHeight: { xs: 'auto', md: 'auto' },
              maxWidth: { xs: 250, md: 350 },
            }}
            alt={name}
            src={sprites.front_default}
            />
        </Grid>
        <Grid item>
          <Typography color="white" variant='h2'sx={{pb: 3}}>{name.toUpperCase()}</Typography>
        </Grid>
        <Grid item>
          <IconButton
            onClick={() =>  navigate(-1)}
            sx={{
              color: 'white',
              ':hover': { opacity: 0.5 },
              mt: 20,
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
     </Grid>
    </Box>
  )
}