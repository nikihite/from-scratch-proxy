import { useState, useEffect } from 'react';
import PokemonList from './PokemonList';
import { getPokemon } from './services/fetch-utils';
<<<<<<< HEAD
 
export default function PokemonSearch() {
  const [pokemon, setPokemon] = useState('');
  const [pokemonQuery, setPokemonQuery] = useState('');
 
  useEffect(() => {
    load();
 // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
 
=======

export default function PokemonSearch() {
  const [pokemon, setPokemon] = useState('');
  const [pokemonQuery, setPokemonQuery] = useState('');

  useEffect(() => {
    load();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

>>>>>>> 78fb558ea6bbc3a866a6d2502ccc180a7acd4e17
  async function load() {
    const { results } = await getPokemon(pokemonQuery);
    setPokemon(results);
  }
<<<<<<< HEAD
 
=======

>>>>>>> 78fb558ea6bbc3a866a6d2502ccc180a7acd4e17
  async function loadPokemonSearch() {
    const pokemon = await getPokemon(pokemonQuery);
    setPokemon(pokemon);
  }
<<<<<<< HEAD
 
=======

>>>>>>> 78fb558ea6bbc3a866a6d2502ccc180a7acd4e17
  async function handlePokemonSearch(e) {
    e.preventDefault();
    loadPokemonSearch();
  }
<<<<<<< HEAD
 
=======

>>>>>>> 78fb558ea6bbc3a866a6d2502ccc180a7acd4e17
  return (
    <div>
      <form onSubmit={handlePokemonSearch}>
        <h2>Pokemon</h2>
        <input value={pokemonQuery} onChange={e => setPokemonQuery(e.target.value)} />
      </form>
      <PokemonList pokemon={pokemon}/>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 78fb558ea6bbc3a866a6d2502ccc180a7acd4e17
