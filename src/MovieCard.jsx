import React from 'react';

const MovieCard = ({ movie: { id, y, i, l, q } }) => {
  
  return (
    <div className="movie" key={id}>
      <div>
        <p>{y}</p>
      </div>

      <div>
        <img src={i.imageUrl ? i.imageUrl : "https://via.placeholder.com/400"} alt={l} />
      </div>

      <div>
        <span>{q}</span>
        <h3>{l}</h3>
      </div>
    </div>
  );
}

export default MovieCard;
