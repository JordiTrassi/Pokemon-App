import { useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Box, Grid, IconButton, Tooltip, Typography } from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';




export const DetailsPokemonPage = () => {

  const navigate = useNavigate();
  const { pokemonSelected } = useSelector(state => state.pokemonStore);  
  const { name } = useParams(); 
  

  if (!pokemonSelected) {
    return <Navigate to="/home" />
  }

  const { front_default  } = pokemonSelected.sprites;


  return (
  
    <Grid
      className='animate__animated animate__fadeIn'
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        maxWidth: '90%',
        minHeight: '90vh',
        borderRadius: 3,
        ml: 'auto',
        mr: 'auto',
        mt: '30px',
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
            src={front_default}
          />
        </Grid>
        <Grid item>
          <Typography color="white" variant='h2'sx={{pb: 3}}>{name.toUpperCase()}</Typography>
        </Grid>
        <Grid item>
          <IconButton
              onClick={() => navigate(-1)}
              sx={{
                color: 'white',
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
     </Grid>
  )
}