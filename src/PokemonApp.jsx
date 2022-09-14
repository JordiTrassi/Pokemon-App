import { Grid, Button, Typography, Tooltip } from '@mui/material';


export const PokemonApp = () => {
  
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
          spacing={5}
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
          <Button
            variant='outlined'
            sx={{
              fontSize: 30,
            }}
          >
            START
          </Button>
        </Tooltip>
      </Grid>

    </Grid>

  )
};


