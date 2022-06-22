import { useState } from 'react';

import { Flex } from 'components/primitives/Flex';
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger
} from 'components/primitives/Tooltip';
import EmptyPoster from 'components/common/EmptyPoster';
import Poster from 'components/common/Poster';
import { StyledPosterProps } from 'components/common/Poster/style';

import {
  FavoriteIcon,
  GradeIcon,
  NotFavoriteIcon,
  NotToWatchIcon,
  StyledPosterContent,
  StyledUserMetadata,
  ToWatchIcon
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
