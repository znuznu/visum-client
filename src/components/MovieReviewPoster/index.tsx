import React from 'react';

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
    <div>
      {metadata?.posterUrl ? (
        <Poster posterUrl={metadata.posterUrl} width={'100px'} height={'auto'} />
      ) : (
        <EmptyPoster width={'100px'} height={'150px'} iconSize={'50px'} />
      )}
    </div>
  );
};

export default MovieReviewPoster;
