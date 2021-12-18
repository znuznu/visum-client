import React from 'react';
import { Link } from 'react-router-dom';
import { Tooltip, TooltipTrigger } from '../common/Tooltip';
import { StyledTooltipArrow, StyledTooltipContent } from '../common/Tooltip/style';

import { StyledEmptyPoster, StyledNoPosterIcon, StyledPoster } from './style';
import { AccessibleIcon } from '../common/AccessibleIcon';

export type MoviePosterProps = {
  id: number;
  title: string;
  releaseDate: string;
  creationDate: string;
  metadata: {
    posterUrl?: string;
  };
};

const MoviePoster = ({ id, metadata, title, releaseDate }: MoviePosterProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
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
      </TooltipTrigger>
      <StyledTooltipContent>
        {title} ({releaseDate})
        <StyledTooltipArrow />
      </StyledTooltipContent>
    </Tooltip>
  );
};

export default MoviePoster;
