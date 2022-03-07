import React, { useState } from 'react';
import { Flex } from '../common/Flex';
import { Tooltip, TooltipTrigger } from '../common/Tooltip';
import { TooltipArrow, TooltipContent } from '../common/Tooltip';
import EmptyPoster from '../EmptyPoster';
import Poster from '../Poster';
import { StyledPosterProps } from '../Poster/style';
import {
  GradeIcon,
  FavoriteIcon,
  StyledPosterContent,
  StyledUserMetadata,
  NotFavoriteIcon,
  ToWatchIcon,
  NotToWatchIcon
} from './style';

export type PosterTooltipProps = {
  movie: {
    title: string;
    releaseDate: string;
    posterUrl?: string;
    grade?: number;
    isFavorite?: boolean;
    isToWatch?: boolean;
  };
  showMetadata?: boolean;
} & StyledPosterProps;

const PosterTooltip = ({
  movie: { posterUrl, title, releaseDate, grade, isFavorite, isToWatch },
  showMetadata,
  width,
  height
}: PosterTooltipProps) => {
  const [isHovered, setHovered] = useState(false);

  const handleOver = () => {
    setHovered(true);
  };

  const handleOut = () => {
    setHovered(false);
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <StyledPosterContent
          onMouseEnter={handleOver}
          onMouseLeave={handleOut}
          width={width ?? '150px'}
          height={height ?? 'auto'}
        >
          {posterUrl ? (
            <Poster posterUrl={posterUrl} width={width} height={height} />
          ) : (
            <EmptyPoster
              width={width ?? '150px'}
              height={height ?? '225px'}
              iconSize={'50px'}
            />
          )}
          {showMetadata && isHovered && (
            <StyledUserMetadata>
              {isFavorite ? <FavoriteIcon /> : <NotFavoriteIcon />}
              {isToWatch ? <ToWatchIcon /> : <NotToWatchIcon />}
            </StyledUserMetadata>
          )}
        </StyledPosterContent>
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

export default PosterTooltip;
