import { Link, Outlet } from 'react-router-dom';


export const PokemonsList = () => {
  return (
    <>
      <h1>pokemons list!</h1>
      <h2><Link to={`:pokemonId`}>DETAILS</Link></h2>
      <Outlet />
    </>
  )
}


