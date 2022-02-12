import React from 'react';
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
  title: string;
  releaseDate: string;
  posterUrl?: string;
  grade?: number;
} & StyledPosterProps;

const PosterWithTooltip = ({
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
        {posterUrl ? (
          <StyledPosterWithTooltip src={posterUrl} width={width} />
        ) : (
          <StyledEmptyPosterWithTooltip
            width={width ?? '150px'}
            height={height ?? '225px'}
            iconSize={'50px'}
          />
        )}
      </TooltipTrigger>
      <TooltipContent side={'top'}>
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
