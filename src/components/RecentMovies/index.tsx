import { HTTPError } from 'ky';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import { MovieFromPage } from 'models/movies';

import { fetchPage } from 'services/api/page';

import { Grid } from 'components/common/Grid';
import PosterTooltip from 'components/PosterTooltip';
import { NoData } from 'components/NoData';
import ErrorText from 'components/ErrorText';
import HomeSectionHeading from 'components/HomeSectionHeading';
import SkeletonPosters from 'components/common/Skeleton/SkeletonPosters';

import useGenericHttpError from 'hooks/useGenericHttpError';
import useAuthentication from 'hooks/useAuthentication';

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
      <HomeSectionHeading title={'Recently added'} morePath={'/films'} />
      {isLoading && <SkeletonPosters elements={9} variant={'standard'} />}
      {!isLoading &&
        (data?.content.length ? (
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
        ))}
    </div>
  );
};

export default RecentMovies;
