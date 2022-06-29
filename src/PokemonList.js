

export default function PokemonList({ pokemon }) {
  return (
    <div className="pokemon-list">

      <h2>Pokemon List</h2>
      {
        !pokemon.length ?
          <div>{pokemon.pokemon}</div> :
          pokemon.map(({ pokemon, url_image }, i) => <div key={pokemon + i}>
            <h2>{pokemon}</h2>
            <img src={url_image} />
          </div>)
      }
    </div>
  );
}