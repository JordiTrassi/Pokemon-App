import { Link } from 'react-router-dom';
import { Box, Card, CardContent, CardMedia, IconButton, Tooltip, Typography } from '@mui/material';
import { AddCircle } from '@mui/icons-material';




export const PokemonCard = ({name, url}) => {

  
  return (

    <Card
      className='animate__animated animate__fadeIn'
      sx={{
        display: 'flex',
        mb: '20px',
        justifyContent: 'space-between',
        boxShadow: 6,
        borderRadius: 5,
      }}
      >
      <Box sx={{ display: 'flex', flexDirection: 'column' }} >
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h4">
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
              <IconButton>
                <AddCircle fontSize='large'/> 
              </IconButton>              
            </Tooltip>
          </Link>
               
        </Box>
      </Box>
      <CardMedia
        component="img"
        image={url}
        alt={name}
        sx={{ height: 200, width: 'auto' }}     
      />
    </Card>
  )
}


