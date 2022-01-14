import React from 'react';
import { Link } from 'react-router-dom';
import { Tooltip, TooltipTrigger } from '../common/Tooltip';
import { TooltipArrow, TooltipContent } from '../common/Tooltip';

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
  width?: string;
};

const MoviePoster = ({ id, metadata, title, releaseDate, width }: MoviePosterProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link to={`/film/${id}`}>
          {metadata?.posterUrl ? (
            <StyledPoster src={metadata.posterUrl} width={width} />
          ) : (
            <StyledEmptyPoster>
              <AccessibleIcon label="No film">
                <StyledNoPosterIcon />
              </AccessibleIcon>
            </StyledEmptyPoster>
          )}
        </Link>
      </TooltipTrigger>
      <TooltipContent>
        {title} ({releaseDate})
        <TooltipArrow />
      </TooltipContent>
    </Tooltip>
  );
};

export default MoviePoster;
