import React from 'react';
import { Link } from 'react-router-dom';
import { Tooltip, TooltipTrigger } from '../common/Tooltip';
import { TooltipArrow, TooltipContent } from '../common/Tooltip';
import { StyledPosterProps } from '../Poster/style';
import { StyledEmptyPosterWithTooltip, StyledPosterWithTooltip } from './style';

export type PosterWithTooltipProps = {
  id: number;
  title: string;
  releaseDate: string;
  creationDate: string;
  metadata: {
    posterUrl?: string;
  };
} & StyledPosterProps;

const PosterWithTooltip = ({
  id,
  metadata,
  title,
  releaseDate,
  width,
  height
}: PosterWithTooltipProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link to={`/film/${id}`}>
          {metadata?.posterUrl ? (
            <StyledPosterWithTooltip src={metadata.posterUrl} width={width} />
          ) : (
            <StyledEmptyPosterWithTooltip
              width={width ?? '150px'}
              height={height ?? '225px'}
              iconSize={'50px'}
            />
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

export default PosterWithTooltip;
