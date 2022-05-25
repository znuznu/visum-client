import { Fragment, useState } from 'react';
import { HTTPError } from 'ky';
import { useQuery } from 'react-query';

import { Director as DirectorModel } from 'models/person';

import { fetchDirector } from 'services/api/person';

import ErrorText from 'components/ErrorText';
import { Flex } from 'components/common/Flex';
import PersonMovie from 'components/PersonMovie';
import { Separator } from 'components/common/Separator';

import useGenericHttpError from 'hooks/useGenericHttpError';
import useAuthentication from 'hooks/useAuthentication';

import { StyledName } from './style';

const Director = ({ id }: { id: number }) => {
  const { jwtToken } = useAuthentication();
  const { setHttpError } = useGenericHttpError(undefined);
  const [director, setDirector] = useState<DirectorModel | undefined>(undefined);

  const { isLoading, isError } = useQuery(
    'getDirector',
    () => fetchDirector({ authorization: `Bearer ${jwtToken}` }, id),
    {
      onSuccess: (data: DirectorModel) => {
        setDirector(data);
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
        {director?.forename} {director?.name}
      </StyledName>
      <Flex flexDirection={'column'}>
        {director?.movies.map((movie, index) => (
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
            {index !== director.movies.length - 1 ? <Separator decorative /> : null}
          </Fragment>
        ))}
      </Flex>
    </Flex>
  );
};

export default Director;
