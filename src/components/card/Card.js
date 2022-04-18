import React from 'react';

const Card = (props) => {
  const movie = {props};
  return (
    <div>
      <h2>
        {`#${movie.ranking}. ${movie.title}`}
      </h2>
      <img src={movie.img.src} alt={movie.img.alt}/>
      <p>Distributor: {movie.distributor}</p>
      <p>Amount: {movie.amount}</p>
      <p>Year: {movie.year}</p>
    </div>
  );
};

export default Card;
