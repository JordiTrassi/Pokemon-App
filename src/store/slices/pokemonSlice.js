import { createSlice } from '@reduxjs/toolkit';


export const pokemonSlice = createSlice({

    name: 'pokemonStore',
    initialState: {
        totalPokemons: [],
        pokemons: [],
        pokemonId: 1,
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
            state.pokemonId = payload.pokemonId;
            state.pokemons = [...state.pokemons, payload ];
            state.errorMessage = '';
            state.renderPage = payload.newPage;
            state.page = payload.newPage;
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
        addInTotalPokemons: (state) => {
            state.totalPokemons = [...state.totalPokemons, state.pokemons];
            state.pokemons = [];
            state.isLoading = false;
        },
        setSelectedPokemon: (state, { payload }) => {
            console.log(payload);
            state.pokemonSelected = payload;
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
    addInTotalPokemons,
    setSelectedPokemon,
} = pokemonSlice.actions;