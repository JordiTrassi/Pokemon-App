import { Link, Outlet } from 'react-router-dom';
import { NavBar } from '../components';


export const PokemonsList = () => {
  return (
    <>
      <NavBar />
      <h1>pokemons list!</h1>
      <h2><Link to={`:pokemonId`}>DETAILS</Link></h2>
      <Outlet />
    </>
  )
}


