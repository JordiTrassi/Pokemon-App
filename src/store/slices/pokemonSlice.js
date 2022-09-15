import { createSlice } from '@reduxjs/toolkit';


export const pokemonSlice = createSlice({

    name: 'pokemonStore',
    initialState: {
        pokemons: [],
        page: 0,
        viewGrid: true,
        isLoading: false,
        verifiedInputValue: '',
        errorMessage: '',
    },
    reducers: {
        startLoadingPokemons: (state, action) => {
            state.isLoading = true;
            state.verifiedInputValue = action.payload.verifiedInputValue;
            state.errorMessage = '';
        },
        setPokemons: (state, action) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;
            state.errorMessage = '';
        },
        changingViewGrid: (state, action) => {
            state.viewGrid = action.payload;
        },
        noApiResults: (state, action) => {
            state.errorMessage = 'No hay resultados disponibles!';
        },

    },
})


export const { startLoadingPokemons, setPokemons, changingViewGrid, noApiResults} = pokemonSlice.actions;