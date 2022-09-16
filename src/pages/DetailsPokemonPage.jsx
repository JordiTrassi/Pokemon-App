import { useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Box, Grid, IconButton, Tooltip, Typography } from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';




export const DetailsPokemonPage = () => {

  const navigate = useNavigate();
  const { pokemonSelected } = useSelector(state => state.pokemonStore);  
  const { name } = useParams();  
  // const album = albums.find(album => album.collectionId === parseInt(collectionId));

  if (!pokemonSelected) {
    return <Navigate to="/home" />
  }

  const { back_default  } = pokemonSelected.sprites;


  return (
  
    <Grid
        className='animate__animated animate__fadeIn'
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ maxWidth: '90%', minHeight: '90vh', backgroundColor: 'primary.main', borderRadius: 3, ml: 'auto', mr: 'auto', mt: '30px'}}
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
                width: 500,
                maxHeight: { xs: 'auto', md: 'auto' },
                maxWidth: { xs: 250, md: 350 },
              }}
            alt={name}
            src={back_default}
          />
        </Grid>
        <Grid
          item
          sx={{ml: 6}} 
        >
          <Typography color="white" variant='h2'sx={{ p: 3 }}>{name}</Typography>
        </Grid>
        <Grid
          item
          sx={{ml: 6}} 
        >
          <Tooltip
            title="back"
            arrow
          >
          <IconButton
              onClick={() => navigate(-1)}
              sx={{
                color: 'white',
                ':hover': { opacity: 0.5 },
              }}
            >
              <ArrowCircleLeftIcon sx={{ fontSize: 45 }} />
            </IconButton>
          </Tooltip>
        </Grid>
     </Grid>
  )
}