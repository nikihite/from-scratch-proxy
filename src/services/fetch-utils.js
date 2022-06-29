export async function getPokemon(searchFilter) {
    // we now hit OUR OWN ENDPOINT to get the movies. this lets us hide our key.
  const rawResponse = await fetch(`/.netlify/functions/pokemon?pokeQuery=${searchFilter}`);
  const data = await rawResponse.json();
  return data;
}

export async function getYelpData(searchFilter) {
  const rawResponse = await fetch(`/.netlify/functions/yelp?searchFilter=${searchFilter}`);
  const data = await rawResponse.json();

  return data;
}