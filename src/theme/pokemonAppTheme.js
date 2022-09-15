import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const pokemonAppTheme = createTheme({
    palette: {
        primary: {
            main: '#d50000'
        },
        secondary: {
            main: '#543884'
        },
        error: {
            main: red.A400
        }

    }
})