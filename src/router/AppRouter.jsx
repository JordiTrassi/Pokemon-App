import { createBrowserRouter } from 'react-router-dom';

import { PokemonApp } from '../PokemonApp';
import { ErrorPage, PokemonsList } from '../pages';



export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <PokemonApp />,
        errorElement: <ErrorPage />,
    },
    {
        path: "pokemons",
        element: <PokemonsList />,
    },
]);


