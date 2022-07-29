import { HTTPError } from 'ky';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import { PageMovie } from 'models/movies';

import { fetchPage } from 'services/api/page';

import useGenericHttpError from 'hooks/useGenericHttpError';
import useAuthentication from 'hooks/useAuthentication';

import { Grid } from 'components/primitives/Grid';
import ErrorText from 'components/common/ErrorText';
import { NoData } from 'components/common/NoData';
import PosterTooltip from 'components/common/Poster/PosterTooltip';
import SectionHeading from 'components/common/SectionHeading';
import SkeletonPosters from 'components/primitives/Skeleton/SkeletonPosters';
import { StyledLink } from 'components/common/SectionHeading/style';

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
      fetchPage<PageMovie>(
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
      <SectionHeading title={'To watch'}>
        <StyledLink to={'/films?isToWatch=true'}>More</StyledLink>
      </SectionHeading>
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
                    posterUrl: movie.posterUrl,
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
