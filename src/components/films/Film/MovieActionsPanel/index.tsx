import { useMutation } from 'react-query';

import {
  addMovieToWatchlist,
  deleteMovie,
  markMovieAsFavorite,
  removeMovieFromFavorite,
  removeMovieFromWatchlist
} from 'services/api/movie';

import useAuthentication from 'hooks/useAuthentication';

import { AccessibleIcon } from 'components/primitives/AccessibleIcon';
import Button from 'components/primitives/Button';

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
        <Button
          onClick={() => removeFromFavoriteMutation.mutate(movieId)}
          variant={'ghost'}
        >
          <AccessibleIcon label="Set the movie as non-favorite">
            <FavoriteFilledIcon />
          </AccessibleIcon>
        </Button>
      ) : (
        <Button onClick={() => addToFavoriteMutation.mutate(movieId)} variant={'ghost'}>
          <AccessibleIcon label="Set the movie as a favorite">
            <FavoriteIcon />
          </AccessibleIcon>
        </Button>
      )}
      {isToWatch ? (
        <Button
          onClick={() => removeFromWatchlistMutation.mutate(movieId)}
          variant={'ghost'}
        >
          <AccessibleIcon label="Remove from the watchlist">
            <ToWatchFilledIcon />
          </AccessibleIcon>
        </Button>
      ) : (
        <Button onClick={() => addToWatchlistMutation.mutate(movieId)} variant={'ghost'}>
          <AccessibleIcon label="Add to the watchlist">
            <ToWatchIcon />
          </AccessibleIcon>
        </Button>
      )}
      <Button onClick={() => deleteMutation.mutate(movieId)} variant={'ghost'}>
        <AccessibleIcon label="Remove the film">
          <RemoveIcon />
        </AccessibleIcon>
      </Button>
    </StyledMovieActionsPanel>
  );
};

export default MovieActionsPanel;
