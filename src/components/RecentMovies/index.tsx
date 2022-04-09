import React from 'react';
import { HTTPError } from 'ky';
import { useQuery } from 'react-query';
import useAuthentication from '../../hooks/useAuthentication';
import useGenericHttpError from '../../hooks/useGenericHttpError';
import { StyledLink, StyledRecentMovies, StyledTitle } from './style';
import PosterTooltip from '../PosterTooltip';
import { MovieFromPage } from '../../models/movies';
import { Grid } from '../common/Grid';
import { fetchPage } from '../../services/api/page';
import { Flex } from '../common/Flex';
import { NoData } from '../NoData';
import ErrorText from '../ErrorText';
import { Link } from 'react-router-dom';

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
    return <ErrorText />;
  }

  return (
    <StyledRecentMovies>
      <Flex justifyContent={'space-between'} margin={'1rem 0'}>
        <StyledTitle>Recently added</StyledTitle>
        <StyledLink to={'/films'}>More</StyledLink>
      </Flex>
      {data?.content.length ? (
        <Grid gap={'0.5rem'} columnSize={colSize}>
          {data?.content.map((movie) => (
            <Link to={`film/${movie.id}`} key={`recent-movie-${movie.id}`}>
              <PosterTooltip
                movie={{
                  title: movie.title,
                  posterUrl: movie.metadata.posterUrl,
                  releaseDate: movie.releaseDate,
                  isFavorite: movie.isFavorite,
                  isToWatch: movie.isToWatch
                }}
                width={colSize}
                height={'150px'}
                showMetadata
              />
            </Link>
          ))}
        </Grid>
      ) : (
        <NoData>No recently added movies found.</NoData>
      )}
    </StyledRecentMovies>
  );
};

export default RecentMovies;
