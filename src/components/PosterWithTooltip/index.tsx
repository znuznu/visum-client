import React from 'react';
import { Link } from 'react-router-dom';
import { Flex } from '../common/Flex';
import { Tooltip, TooltipTrigger } from '../common/Tooltip';
import { TooltipArrow, TooltipContent } from '../common/Tooltip';
import { StyledPosterProps } from '../Poster/style';
import {
  GradeIcon,
  StyledEmptyPosterWithTooltip,
  StyledPosterWithTooltip
} from './style';

export type PosterWithTooltipProps = {
  id: number;
  title: string;
  releaseDate: string;
  posterUrl?: string;
  grade?: number;
} & StyledPosterProps;

const PosterWithTooltip = ({
  id,
  posterUrl,
  title,
  releaseDate,
  width,
  height,
  grade
}: PosterWithTooltipProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link to={`/film/${id}`}>
          {posterUrl ? (
            <StyledPosterWithTooltip src={posterUrl} width={width} />
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
        {title} ({releaseDate}){' '}
        {grade && (
          <Flex margin={'0 0 0 0.5rem'}>
            {grade} <GradeIcon />
          </Flex>
        )}
        <TooltipArrow />
      </TooltipContent>
    </Tooltip>
  );
};

export default PosterWithTooltip;
