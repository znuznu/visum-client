import { Fragment } from 'react';
import { HTTPError } from 'ky';
import { useQuery } from 'react-query';

import { fetchDirector } from 'services/api/person';

import useAuthentication from 'hooks/useAuthentication';
import useGenericHttpError from 'hooks/useGenericHttpError';

import ErrorText from 'components/common/ErrorText';
import PersonMovie from 'components/PersonMovie';
import { Separator } from 'components/primitives/Separator';
import { NoData } from 'components/common/NoData';
import EmptyPoster from 'components/common/EmptyPoster';
import SkeletonPerson from 'components/Director/SkeletonPerson';
import { StyledResponsivePoster } from 'components/Film/style';

import {
  StyledAssetContent,
  StyledContent,
  StyledMovies,
  StyledName,
  StyledTextContent
} from './style';

const Director = ({ id }: { id: number }) => {
  const { jwtToken } = useAuthentication();
  const { setHttpError } = useGenericHttpError(undefined);

  const { isLoading, isError, data } = useQuery(
    ['getDirector', id],
    () => fetchDirector({ authorization: `Bearer ${jwtToken}` }, id),
    {
      onError: (error: HTTPError) => {
        // TODO #1
        setHttpError(error);
      }
    }
  );

  if (isLoading) {
    return <SkeletonPerson />;
  }

  if (isError) {
    return <ErrorText />;
  }

  return (
    <>
      {!isLoading && data && (
        <StyledContent>
          <StyledAssetContent>
            {data.posterUrl ? (
              <StyledResponsivePoster src={data.posterUrl} />
            ) : (
              <EmptyPoster width={'250px'} height={'375px'} iconSize={'50px'} />
            )}
          </StyledAssetContent>
          <StyledTextContent>
            <StyledName>
              {data.forename} {data.name}
            </StyledName>
            <Separator decorative />
            <StyledMovies>
              {data.movies.map((movie, index) => (
                <Fragment key={`movie-${movie.id}`}>
                  <PersonMovie
                    movie={{
                      id: movie.id,
                      title: movie.title,
                      releaseDate: movie.releaseDate,
                      isToWatch: movie.shouldWatch,
                      isFavorite: movie.favorite
                    }}
                  />
                  {index !== data.movies.length - 1 ? <Separator decorative /> : null}
                </Fragment>
              ))}
            </StyledMovies>
          </StyledTextContent>
        </StyledContent>
      )}
      {!isLoading && !data && <NoData>No director with id {id} found.</NoData>}
    </>
  );
};

export default Director;
