import { CircularProgress, Typography, Box } from '@mui/material';

export const IsLoading = () => {
  
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        mt: 15,
      }}>
      <Typography sx={{fontSize: 30}}>Is Loading ...</Typography>
      <CircularProgress sx={{mt: 3}} />
    </Box>
  );
}
