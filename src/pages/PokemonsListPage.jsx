import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { Box, Button, Grid, Tooltip} from '@mui/material';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridViewIcon from '@mui/icons-material/GridView';
// import Swal from 'sweetalert2';
// import 'sweetalert2/dist/sweetalert2.css';
import { IsLoading, NavBar } from '../components';
import { PokemonsListView, PokemonsGridView } from '../views';



import { changingViewGrid, getAllPokemons } from '../store';





export const PokemonsList = () => {

  const dispatch = useDispatch();
  const { isLoading, page, viewGrid, verifiedInputValue } = useSelector(state => state.pokemonStore);


  return (
    <>
      <NavBar />

      <Box
      container
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        p: 2,
        height: '100vh',
        // width: '100vw',
        backgroundImage:
        'linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("https://images.alphacoders.com/481/481199.jpg")',
        // backgroundRepeat: 'norepeat repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center', 
        }}
      >
        {
          (isLoading)
            ? <IsLoading />
            : <>
                <Box
                    item
                    display="flex"
                    flexDirection="row"
                    justifyContent="center"
                    sx={{ mb: '20px', mt: '10px' }}
                  >
                    <Button
                      variant="contained"
                      disabled={!viewGrid}
                      onClick={() => dispatch(changingViewGrid(false))}
                      sx={{ p: 2, mr: 3, backgroundColor: 'primary' }}
                    >
                      <Tooltip
                        title="List View"
                        arrow
                        placement="left"
                      >
                        <FormatListBulletedIcon sx={{ fontSize: 32 }} />
                      </Tooltip>
                    </Button>
                            
                    <Button
                      variant="contained"
                      disabled={viewGrid}
                      onClick={() => dispatch(changingViewGrid(true))}
                      sx={{ p: 2, ml: 3, backgroundColor: 'primary' }}
                    >
                      <Tooltip
                        title="Grid View"
                        arrow
                        placement="right"
                      >
                        <GridViewIcon sx={{ fontSize: 32 }} />
                      </Tooltip>
                    </Button>
                                
                  </Box>

                    {
                      (viewGrid)
                        ? <PokemonsGridView />
                        : <PokemonsListView />
                    }
                        
                  <Tooltip
                    title="more results"
                    arrow
                  >
                    <Button
                      variant="contained"
                      disabled={isLoading}
                      onClick={() => dispatch(getAllPokemons({ page, verifiedInputValue }))}
                      sx={{ p: 2, mb: '30px' }}
                    >
                      Next Page
                    </Button>           
                </Tooltip>
              </>
        } 

      </Box>
      <Outlet />
    </>
  )
}




{/* <h2><Link to={`:pokemonId`}>DETAILS</Link></h2> */}