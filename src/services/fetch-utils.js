export async function getPokemon(searchFilter) {
    // we now hit OUR OWN ENDPOINT to get the movies. this lets us hide our key.
  const rawResponse = await fetch(`http://localhost:8888/.netlify/functions/pokemon?searchFilter=${searchFilter}`);
  const data = await rawResponse.json();
  return data;
}
 