import { Fragment } from 'react';
import { HTTPError } from 'ky';
import { useQuery } from 'react-query';

import { fetchActor } from 'services/api/person';

import useGenericHttpError from 'hooks/useGenericHttpError';
import useAuthentication from 'hooks/useAuthentication';

import ErrorText from 'components/common/ErrorText';
import PersonMovie from 'components/credits/PersonMovie';
import { Separator } from 'components/primitives/Separator';
import { NoData } from 'components/common/NoData';
import { StyledResponsivePoster } from 'components/films/Film/style';
import EmptyPoster from 'components/common/Poster/EmptyPoster';

import {
  StyledAssetContent,
  StyledContent,
  StyledMovies,
  StyledTextContent
} from '../Director/style';
import SkeletonPerson from '../SkeletonPerson';

import { StyledName } from './style';

const Actor = ({ id }: { id: number }) => {
  const { jwtToken } = useAuthentication();
  const { setHttpError } = useGenericHttpError(undefined);

  const { isLoading, isError, data } = useQuery(
    ['getActor', id],
    () => fetchActor({ authorization: `Bearer ${jwtToken}` }, id),
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
      {!isLoading && !data && <NoData>No actor with id {id} found.</NoData>}
    </>
  );
};

export default Actor;
