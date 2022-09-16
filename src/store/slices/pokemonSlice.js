import { createSlice } from '@reduxjs/toolkit';


export const pokemonSlice = createSlice({

    name: 'pokemonStore',
    initialState: {
        pokemons: [],
        page: 0,
        renderPage: 0,
        viewGrid: true,
        isLoading: false,
        verifiedInputValue: '',
        errorMessage: '',
        pokemonSelected: {},
    },
    reducers: {
        startLoadingAllPokemons: (state, action) => {
            state.isLoading = true;
        },
        startLoadingPokemonByName: (state, { payload }) => {
            state.isLoading = true;
            state.verifiedInputValue = payload.verifiedInputValue;
            state.pokemonSelected = payload.data;
        },
        setPokemons: (state, { payload }) => {
            state.isLoading = false;
            state.page = payload.newPage;
            state.renderPage = payload.newPage;
            state.pokemons = [...state.pokemons, payload.results];
            state.errorMessage = '';
        },
        setPokemonByName: (state, action) => {
            state.isLoading = false;
            console.log(action.payload);
            state.pokemonSelected = action.payload;
            state.errorMessage = '';
        },
        changingViewGrid: (state, action) => {
            state.viewGrid = action.payload;
        },
        noApiResults: (state, action) => {
            state.errorMessage = 'No hay resultados disponibles!';
        },
        previousPage: (state, { payload }) => {
            state.renderPage = payload;
        },
        nextPage: (state) => {
            state.renderPage = state.renderPage + 1;
        },

    },
})


export const {
    startLoadingAllPokemons,
    startLoadingPokemonByName,
    setPokemons,
    setPokemonByName,
    changingViewGrid,
    noApiResults,
    previousPage,
    nextPage,
} = pokemonSlice.actions;