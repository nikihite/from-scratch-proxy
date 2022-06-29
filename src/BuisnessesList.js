export default function BuisnessesList({ yelpData }) {
  return (
    <div className="businesses-list">
      {
        yelpData &&
        yelpData.map(({ name, price, phone, image_url }, i) => <div className="yelp" key={name + i}>
          <h2>{name}</h2>
          <p>{price}</p>
          <p>{phone}</p>
          <img src={image_url} /> 
        </div>)
      }   
    </div>
  );
}