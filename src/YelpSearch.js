import { useState, useEffect } from 'react';
import BuisnessesList from './BuisnessesList';
import { getYelpData } from './services/fetch-utils';

export default function YelpSearch() {
  const [yelpData, setYelpData] = useState([]);
  const [yelpQuery, setYelpQuery] = useState('portland');
  console.log(yelpData);
  useEffect(() => {
    load();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  async function load() {
    const data = await getYelpData(yelpQuery);
    setYelpData(data.data.businesses);
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