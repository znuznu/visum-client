import { HTTPError } from 'ky';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import { MovieFromPage } from 'models/movies';

import { fetchPage } from 'services/api/page';

import { Grid } from 'components/common/Grid';
import ErrorText from 'components/ErrorText';
import { NoData } from 'components/NoData';
import PosterTooltip from 'components/PosterTooltip';
import HomeSectionHeading from 'components/HomeSectionHeading';
import SkeletonPosters from 'components/common/Skeleton/SkeletonPosters';

import useGenericHttpError from 'hooks/useGenericHttpError';
import useAuthentication from 'hooks/useAuthentication';

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
      fetchPage<MovieFromPage>(
        'movies',
        { Authorization: `Bearer ${jwtToken}` },
        {
          sort: 'creationDate,DESC',
          search: 'title=%%*shouldWatch==true',
          limit,
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

  if (isError) {
    return <ErrorText />;
  }

  return (
    <div>
      <HomeSectionHeading title={'To watch'} morePath={'/films?isToWatch=true'} />
      {isLoading && <SkeletonPosters elements={9} variant={'standard'} />}
      {!isLoading &&
        (data?.content.length ? (
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
        ))}
    </div>
  );
};

export default MoviesToWatch;
