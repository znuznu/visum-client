import React from 'react';
import { Link } from 'react-router-dom';

import EmptyPoster from '../EmptyPoster';
import Poster from '../Poster';

export type MoviePosterProps = {
  id: number;
  metadata: {
    posterUrl?: string;
  };
};

const MovieReviewPoster = ({ id, metadata }: MoviePosterProps) => {
  return (
    <Link to={`/film/${id}`}>
      {metadata?.posterUrl ? (
        <Poster posterUrl={metadata.posterUrl} width={'100px'} height={'150px'} />
      ) : (
        <EmptyPoster width={'100px'} height={'150px'} iconSize={'50px'} />
      )}
    </Link>
  );
};

export default MovieReviewPoster;
