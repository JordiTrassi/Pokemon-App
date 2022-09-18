import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { AppBar, Box, Toolbar, Typography, InputBase, Link, Tooltip, FormControl } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

import { verifyInputValue } from '../helpers/verifyInputValue';
import { getPokemonByName, startLoadingPokemonByName } from '../store';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '50%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}));


export const NavBar = () => {

  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  
  const onInputChange = ({target}) => {
    setInputValue(target.value);
  }

  const onSubmit = async () => {
    const verifiedInputValue = await verifyInputValue(inputValue);

    dispatch(startLoadingPokemonByName({ verifiedInputValue }));
    dispatch(getPokemonByName({ verifiedInputValue }));
  }

  useEffect(() => {
    const listener = event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        onSubmit();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [inputValue]);

  return (
    
    <Box sx={{ flexGrow: 1 }}>    
      <AppBar
        position="static"
        sx={{backgroundColor: 'primary'}}
      >
        <Toolbar>          
          <Typography
                variant="h5"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: '2', sm: 'block' } }}
          >
            <Tooltip
              title="home"
              arrow
              placement="bottom"  
            >
              <Link
                color="inherit"
                underline="none" 
                href="/"
              >
                <img
                  src={`https://seeklogo.com/images/P/pokeball-logo-DC23868CA1-seeklogo.com.png`}
                  alt="homeBtn"
                  style={{
                    height: 50,
                    width: 'auto',
                    padding: 2,
                    marginTop: 5
                  }}
                />
                  
              </Link>
            </Tooltip>
          </Typography>
          <Search>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <FormControl
              onSubmit={onSubmit}
            >
              <StyledInputBase
                type="text"
                placeholder="Search Pokemon"
                value={inputValue}
                onChange={onInputChange}
              />
            </FormControl>
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}