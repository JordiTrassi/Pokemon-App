import { createBrowserRouter, Navigate } from 'react-router-dom';

import { PokemonApp } from '../PokemonApp';
import { DetailsPokemonPage, ErrorPage, PokemonsList } from '../pages';



export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <PokemonApp />,
        errorElement: <ErrorPage />,
    },
    {
        path: "pokemons",
        element: <PokemonsList />,
        children: [
            {
                path: ":pokemonName",
                element: <DetailsPokemonPage />,
            },
        ]
    },
    {
        path: "/*",
        element: <Navigate to="/" />,
    },
]);


