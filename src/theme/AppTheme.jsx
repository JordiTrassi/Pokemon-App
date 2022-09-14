import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { pokemonAppTheme } from './pokemonAppTheme';


export const AppTheme = ({ children }) => {
    return (
        <ThemeProvider theme={pokemonAppTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
};


