import { useState, useEffect } from 'react';
import BuisnessesList from './BuisnessesList';
import { getYelpData } from './services/fetch-utils';

export default function YelpSearch() {
  const [yelpData, setYelpData] = useState([]);
  const [yelpQuery, setYelpQuery] = useState('');
  useEffect(() => {
    load();
  }, []);
  
  async function load() {
    const results = await getYelpData(yelpQuery);
    setYelpData(results.data.buisnesses);
  }

  async function handleYelpSearch(e) {
    e.preventDefault();
    await load();
  }
  return (
    <div className='yelp-search'>
      <form onSubmit={handleYelpSearch}>
        <h2>Yelp Search</h2>
        <input onChange={e => setYelpQuery(e.target.value)}/>
        <button>Search</button>
      </form>
      <BuisnessesList yelpData={yelpData} />
    </div>
  );
}