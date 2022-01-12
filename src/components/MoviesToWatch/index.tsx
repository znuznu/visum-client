import { HTTPError } from 'ky';
import React from 'react';
import { useQuery } from 'react-query';
import { API_URL } from '../../config';
import useAuthentication from '../../hooks/useAuthentication';
import useGenericHttpError from '../../hooks/useGenericHttpError';
import { MovieFromPage } from '../../models/movies';
import { Page } from '../../models/page';
import HttpService from '../../services/http';
import { Grid } from '../common/Grid';
import MoviePoster from '../MoviePoster';
import { StyledTitle } from '../RecentMovies/style';
import { StyledMoviesToWatch } from './style';

type MoviesToWatchProps = {
  limit: number;
};

const MoviesToWatch = ({ limit }: MoviesToWatchProps) => {
  const { jwtToken } = useAuthentication();
  const { setHttpError } = useGenericHttpError(undefined);

  const { isLoading, isError, data } = useQuery(
    'getShouldWatchMovies',
    () =>
      HttpService.get(`${API_URL}/api/movies`, {
        headers: { Authorization: `Bearer ${jwtToken}` },
        searchParams: {
          sort: 'creationDate,DESC',
          search: 'title=%%*shouldWatch==true',
          limit: limit.toString(),
          offset: '0'
        }
      }).json<Page<MovieFromPage>>(),
    {
      onError: (error: HTTPError) => {
        setHttpError(error);
      },
      retry: false
    }
  );

  if (isLoading) {
    // TODO spinner
    return <p>Loading</p>;
  }

  if (isError) {
    // TODO style
    return <p>Something wrent wrong. Please reload.</p>;
  }

  return (
    <StyledMoviesToWatch>
      <StyledTitle>To watch</StyledTitle>
      {data?.content.length ? (
        <Grid gap={'0.5rem'} columnSize={'150px'}>
          {data?.content.map((movie) => (
            <MoviePoster key={`to-watch-movie-${movie.id}`} {...movie} />
          ))}
        </Grid>
      ) : (
        // TODO style
        <p>No movies to watch found.</p>
      )}
    </StyledMoviesToWatch>
  );
};

export default MoviesToWatch;
