import React from 'react';
import { useParams } from 'react-router-dom';

const Movie = () => {
  let { movieId } = useParams();

  return <p>Movie id {movieId}</p>;
};

export default Movie;
