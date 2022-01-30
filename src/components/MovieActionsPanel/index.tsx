import React from 'react';
import { useMutation } from 'react-query';
import useAuthentication from '../../hooks/useAuthentication';
import {
  addMovieToWatchlist,
  deleteMovie,
  markMovieAsFavorite,
  removeMovieFromFavorite,
  removeMovieFromWatchlist
} from '../../services/api/movie';

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
  onRemoveFavorite: () => void;
  onAddToWatchlist: () => void;
  onRemoveFromWatchlist: () => void;
  onDelete: () => void;
}

const MovieActionsPanel = ({
  movieId,
  isFavorite,
  isToWatch,
  onFavorite,
  onRemoveFavorite,
  onAddToWatchlist,
  onRemoveFromWatchlist,
  onDelete
}: MovieActionsPanelProps) => {
  const { jwtToken } = useAuthentication();

  const addToFavoriteMutation = useMutation(
    (id: number) => markMovieAsFavorite({ authorization: `Bearer ${jwtToken}` }, id),
    {
      onError: (error) => {
        // TODO #1
        console.log(error);
      },
      onSuccess: () => {
        onFavorite();
      }
    }
  );

  const removeFromFavoriteMutation = useMutation(
    (id: number) => removeMovieFromFavorite({ authorization: `Bearer ${jwtToken}` }, id),
    {
      onError: (error) => {
        // TODO #1
        console.log(error);
      },
      onSuccess: () => {
        onRemoveFavorite();
      }
    }
  );

  const addToWatchlistMutation = useMutation(
    (id: number) => addMovieToWatchlist({ authorization: `Bearer ${jwtToken}` }, id),
    {
      onError: (error) => {
        // TODO #1
        console.log(error);
      },
      onSuccess: () => {
        onAddToWatchlist();
      }
    }
  );

  const removeFromWatchlistMutation = useMutation(
    (id: number) => removeMovieFromWatchlist({ authorization: `Bearer ${jwtToken}` }, id),
    {
      onError: (error) => {
        // TODO #1
        console.log(error);
      },
      onSuccess: () => {
        onRemoveFromWatchlist();
      }
    }
  );

  const deleteMutation = useMutation(
    (id: number) => deleteMovie({ authorization: `Bearer ${jwtToken}` }, id),
    {
      onError: (error) => {
        // TODO #1
        console.log(error);
      },
      onSuccess: () => {
        onDelete();
      }
    }
  );

  return (
    <StyledMovieActionsPanel>
      {isFavorite ? (
        <AccessibleIcon label="Set the movie as non-favorite">
          <FavoriteFilledIcon
            onClick={() => removeFromFavoriteMutation.mutate(movieId)}
          />
        </AccessibleIcon>
      ) : (
        <AccessibleIcon label="Set the movie as a favorite">
          <FavoriteIcon onClick={() => addToFavoriteMutation.mutate(movieId)} />
        </AccessibleIcon>
      )}
      {isToWatch ? (
        <AccessibleIcon label="Remove from the watchlist">
          <ToWatchFilledIcon
            onClick={() => removeFromWatchlistMutation.mutate(movieId)}
          />
        </AccessibleIcon>
      ) : (
        <AccessibleIcon label="Add to the watchlist">
          <ToWatchIcon onClick={() => addToWatchlistMutation.mutate(movieId)} />
        </AccessibleIcon>
      )}
      <AccessibleIcon label="Remove the film">
        <RemoveIcon onClick={() => deleteMutation.mutate(movieId)} />
      </AccessibleIcon>
    </StyledMovieActionsPanel>
  );
};

export default MovieActionsPanel;
