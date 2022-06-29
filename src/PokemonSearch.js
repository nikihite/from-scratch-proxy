import { useState, useEffect } from 'react';
import PokemonList from './PokemonList';
import { getPokemon } from './services/fetch-utils';

export default function PokemonSearch() {
  const [pokemon, setPokemon] = useState('');
  const [pokemonQuery, setPokemonQuery] = useState('');

  useEffect(() => {
    load();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function load() {
    const { results } = await getPokemon(pokemonQuery);
    setPokemon(results);
  }

  async function loadPokemonSearch() {
    const pokemon = await getPokemon(pokemonQuery);
    setPokemon(pokemon);
  }

  async function handlePokemonSearch(e) {
    e.preventDefault();
    loadPokemonSearch();
  }

  return (
    <div>
      <form onSubmit={handlePokemonSearch}>
        <h2>Pokemon</h2>
        <input value={pokemonQuery} onChange={e => setPokemonQuery(e.target.value)} />
      </form>
      <PokemonList pokemon={pokemon}/>
    </div>
  );
}