import React from 'react';
import { Link } from 'react-router-dom';

import { AccessibleIcon } from '../common/AccessibleIcon';
import { StyledEmptyPoster, StyledNoPosterIcon, StyledPoster } from './style';

export type MoviePosterProps = {
  id: number;
  metadata: {
    posterUrl?: string;
  };
};

const MovieReviewPoster = ({ id, metadata }: MoviePosterProps) => {
  return (
    <Link to={`/movie/${id}`}>
      {metadata?.posterUrl ? (
        <StyledPoster src={metadata.posterUrl} />
      ) : (
        <StyledEmptyPoster>
          <AccessibleIcon label="No movie">
            <StyledNoPosterIcon />
          </AccessibleIcon>
        </StyledEmptyPoster>
      )}
    </Link>
  );
};

export default MovieReviewPoster;
