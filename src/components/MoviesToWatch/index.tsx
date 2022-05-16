import React from 'react';

import { HTTPError } from 'ky';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import { API_URL } from '../../config';
import useAuthentication from '../../hooks/useAuthentication';
import useGenericHttpError from '../../hooks/useGenericHttpError';
import { MovieFromPage } from '../../models/movies';
import { Page } from '../../models/page';
import HttpService from '../../services/http';
import { Grid } from '../common/Grid';
import ErrorText from '../ErrorText';
import { NoData } from '../NoData';
import PosterTooltip from '../PosterTooltip';
import HomeSectionHeading from '../HomeSectionHeading';

type MoviesToWatchProps = {
  limit: number;
};

const colSize = '100px';

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
    return <ErrorText />;
  }

  return (
    <div>
      <HomeSectionHeading title={'To watch'} morePath={'/fims?isToWatch=true'} />
      {data?.content.length ? (
        <Grid gap={'0.5rem'} columnSize={colSize}>
          {data?.content.map((movie) => (
            <Link to={`/film/${movie.id}`} key={`to-watch-movie-${movie.id}`}>
              <PosterTooltip
                width={colSize}
                height={'150px'}
                movie={{
                  title: movie.title,
                  posterUrl: movie.metadata.posterUrl,
                  releaseDate: movie.releaseDate,
                  isFavorite: movie.isFavorite,
                  isToWatch: movie.isToWatch
                }}
                showMetadata
              />
            </Link>
          ))}
        </Grid>
      ) : (
        <NoData>No movies to watch found.</NoData>
      )}
    </div>
  );
};

export default MoviesToWatch;
