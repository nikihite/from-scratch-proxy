const fetch = require('node-fetch');
require('dotenv').config();

exports.handler = async (event, context) => {
  try {
    const response = await fetch(`https://api.yelp.com/v3/businesses/search?location=${event.queryStringParameters.searchFilter}`, {
      headers: {
        'Authorization': `Bearer ${process.env.YELP_KEY}`,
      },
    });
    
    const data = await response.json();
    const json = JSON.stringify({ data });

    console.log(json, 'FROM OUR NETLIFY FUNCTION!!!!!');

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