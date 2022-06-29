const fetch = require('node-fetch');
require('dotenv').config();

exports.handler = async (event, context) => {
  try {
    // if you expose a AWS key, somebody woth GURARANTEED USE IT TO MINE BITCOIN
    const response = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=c`);
    const data = await response.json();
    const json = JSON.stringify({ data });
    
    return { 
      statusCode: 200, 
      body: json
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};