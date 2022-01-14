import React from 'react';
import { AccessibleIcon } from '../common/AccessibleIcon';
import {
  FavoriteFilledIcon,
  FavoriteIcon,
  RemoveIcon,
  StyledMovieActionsPanel,
  ToWatchFilledIcon,
  ToWatchIcon
} from './style';

interface MovieActionsPanelProps {
  movieId: number;
  isFavorite: boolean;
  isToWatch: boolean;
  onFavorite: () => void;
}

// TODO Handle onClick
const MovieActionsPanel = ({
  movieId,
  isFavorite,
  isToWatch,
  onFavorite
}: MovieActionsPanelProps) => {
  return (
    <StyledMovieActionsPanel>
      {isFavorite ? (
        <AccessibleIcon label="Set the movie as non-favorite">
          <FavoriteFilledIcon />
        </AccessibleIcon>
      ) : (
        <AccessibleIcon label="Set the movie as a favorite">
          <FavoriteIcon />
        </AccessibleIcon>
      )}
      {isToWatch ? (
        <AccessibleIcon label="Remove from the watch-list">
          <ToWatchFilledIcon />
        </AccessibleIcon>
      ) : (
        <AccessibleIcon label="Add to the watch-list">
          <ToWatchIcon />
        </AccessibleIcon>
      )}
      <AccessibleIcon label="Remove the film">
        <RemoveIcon />
      </AccessibleIcon>
    </StyledMovieActionsPanel>
  );
};

export default MovieActionsPanel;
