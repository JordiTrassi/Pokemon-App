import { useRouteError } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <Grid
      container
      id="error-page"
      alignItems="center"
      justifyContent="center"
      sx={{
        height: '100vh',
        width: '100vw',
      }}
    >
      <Grid
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        spacing={5}
      >
        <Typography variant='h2' padding={5}>Oops!</Typography>
        <Typography variant='h4' padding={2}>Sorry, an unexpected error has occurred.</Typography>
        <Typography variant='h5'><i>{error.statusText || error.message}</i></Typography>
      </Grid>
    </Grid>
  );
}