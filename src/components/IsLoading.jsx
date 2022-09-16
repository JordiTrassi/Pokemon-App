import { CircularProgress, Typography, Box } from '@mui/material';

export const IsLoading = () => {
  
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Typography sx={{fontSize: 30}}>Is Loading ...</Typography>
      <CircularProgress sx={{mt: 3}} />
    </Box>
  );
}
