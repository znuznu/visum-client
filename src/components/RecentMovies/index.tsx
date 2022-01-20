import React from 'react';
import { HTTPError } from 'ky';
import { useQuery } from 'react-query';
import useAuthentication from '../../hooks/useAuthentication';
import useGenericHttpError from '../../hooks/useGenericHttpError';
import { StyledLink, StyledRecentMovies, StyledTitle } from './style';
import PosterWithTooltip from '../PosterWithTooltip';
import { MovieFromPage } from '../../models/movies';
import { Grid } from '../common/Grid';
import { fetchPage } from '../../services/api/page';
import { Flex } from '../common/Flex';

export type RecentMoviesProps = {
  limit: number;
};

const colSize = '100px';

const RecentMovies = ({ limit }: RecentMoviesProps) => {
  const { jwtToken } = useAuthentication();
  const { setHttpError } = useGenericHttpError(undefined);

  const { isLoading, isError, data } = useQuery(
    'getRecentlyAddedMovies',
    () =>
      fetchPage<MovieFromPage>(
        'movies',
        { Authorization: `Bearer ${jwtToken}` },
        {
          sort: 'creationDate,DESC',
          search: 'title=%%',
          limit: limit,
          offset: 0
        }
      ),
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
      <Flex justifyContent={'space-between'}>
        <StyledTitle>Recently added</StyledTitle>
        <StyledLink to={'/films'}>More</StyledLink>
      </Flex>
      {data?.content.length ? (
        <Grid gap={'0.5rem'} columnSize={colSize}>
          {data?.content.map((movie) => (
            <PosterWithTooltip
              key={`recent-movie-${movie.id}`}
              {...movie}
              width={colSize}
            />
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
