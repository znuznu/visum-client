import React, { Fragment, useState } from 'react';
import { HTTPError } from 'ky';
import { useQuery } from 'react-query';

import useAuthentication from '../../hooks/useAuthentication';
import useGenericHttpError from '../../hooks/useGenericHttpError';
import { Director as DirectorModel } from '../../models/person';
import { fetchDirector } from '../../services/api/person';
import ErrorText from '../ErrorText';
import { Flex } from '../common/Flex';
import { StyledName } from './style';
import PersonMovie from '../PersonMovie';
import { Separator } from '../common/Separator';

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
