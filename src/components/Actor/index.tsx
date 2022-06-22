import { Fragment, useState } from 'react';
import { HTTPError } from 'ky';
import { useQuery } from 'react-query';

import { Actor as ActorModel } from 'models/person';

import { fetchActor } from 'services/api/person';

import useGenericHttpError from 'hooks/useGenericHttpError';
import useAuthentication from 'hooks/useAuthentication';

import ErrorText from 'components/common/ErrorText';
import { Flex } from 'components/primitives/Flex';
import PersonMovie from 'components/PersonMovie';
import { Separator } from 'components/primitives/Separator';

import { StyledName } from './style';

const Actor = ({ id }: { id: number }) => {
  const { jwtToken } = useAuthentication();
  const { setHttpError } = useGenericHttpError(undefined);
  const [actor, setActor] = useState<ActorModel | undefined>(undefined);

  const { isLoading, isError } = useQuery(
    'getActor',
    () => fetchActor({ authorization: `Bearer ${jwtToken}` }, id),
    {
      onSuccess: (data: ActorModel) => {
        setActor(data);
      },
      onError: (error: HTTPError) => {
        // TODO #1
        setHttpError(error);
      }
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
    <Flex flexDirection={'column'}>
      <StyledName>
        {actor?.forename} {actor?.name}
      </StyledName>
      <Flex flexDirection={'column'}>
        {actor?.movies.map((movie, index) => (
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
            {index !== actor.movies.length - 1 ? <Separator decorative /> : null}
          </Fragment>
        ))}
      </Flex>
    </Flex>
  );
};

export default Actor;
