import React from 'react';
import { HTTPError } from 'ky';
import { useQuery } from 'react-query';
import { API_URL } from '../../config';
import useAuthentication from '../../hooks/useAuthentication';
import useGenericHttpError from '../../hooks/useGenericHttpError';
import { Page } from '../../models/page';
import HttpService from '../../services/http';
import { StyledRecentMovies, StyledTitle } from './style';
import MoviePoster from '../MoviePoster';
import { MovieFromPage } from '../../models/movies';
import { Grid } from '../common/Grid';

export type RecentMoviesProps = {
  limit: number;
};

const RecentMovies = ({ limit }: RecentMoviesProps) => {
  const { jwtToken } = useAuthentication();
  const { setHttpError } = useGenericHttpError(undefined);

  const { isLoading, isError, data } = useQuery(
    'getRecentlyAddedMovies',
    () =>
      HttpService.get(`${API_URL}/api/movies`, {
        headers: { Authorization: `Bearer ${jwtToken}` },
        searchParams: {
          sort: 'creationDate,DESC',
          search: 'title=%%',
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
    <StyledRecentMovies>
      <StyledTitle>Recently added</StyledTitle>
      {data?.content.length ? (
        <Grid gap={'0.5rem'} columnSize={'150px'}>
          {data?.content.map((movie) => (
            <MoviePoster key={`recent-movie-${movie.id}`} {...movie} />
          ))}
        </Grid>
      ) : (
        // TODO style
        <p>No recently added movies found.</p>
      )}
    </StyledRecentMovies>
  );
};

export default RecentMovies;
