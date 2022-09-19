import { useDispatch, useSelector } from 'react-redux';

import { Box, Button, Tooltip} from '@mui/material';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridViewIcon from '@mui/icons-material/GridView';

import { IsLoading, NavBar, FooterButtonsListPage } from '../components';
import { PokemonsListView, PokemonsGridView } from '../views';
import { changingViewGrid } from '../store';
import { ErrorModal } from '../components/ErrorModal';


export const PokemonsList = () => {

  const dispatch = useDispatch();
  const { isLoading, viewGrid } = useSelector(state => state.pokemonStore);
  

  return (
    <>
      <NavBar />
      <ErrorModal />
      <Box
      container
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        p: 2,
        height: '100%',
        width: '100vw',
        backgroundImage:
        'linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("https://images.alphacoders.com/481/481199.jpg")',
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
                      sx={{ p: 2, mr: 3, backgroundColor: 'primary', borderRadius: 50 }}
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
                      sx={{ p: 2, ml: 3, backgroundColor: 'primary', borderRadius: 50 }}
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
                        
                  <FooterButtonsListPage />
              </>
        } 

      </Box>
    </>
     
  )
}
