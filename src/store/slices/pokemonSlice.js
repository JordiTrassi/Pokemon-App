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
        pokemonSelected: {},
    },
    reducers: {
        startLoadingAllPokemons: (state, action) => {
            state.isLoading = true;
        },
        startLoadingPokemonByName: (state, action) => {
            state.isLoading = true;
            state.verifiedInputValue = action.payload.verifiedInputValue;
            state.pokemonSelected = action.payload.data;
        },
        setPokemons: (state, action) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;
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

    },
})


export const {
    startLoadingAllPokemons,
    startLoadingPokemonByName,
    setPokemons,
    setPokemonByName,
    changingViewGrid,
    noApiResults,
} = pokemonSlice.actions;