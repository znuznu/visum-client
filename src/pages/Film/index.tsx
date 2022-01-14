import { HTTPError } from 'ky';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../config';
import useAuthentication from '../../hooks/useAuthentication';
import useGenericHttpError from '../../hooks/useGenericHttpError';
import { Movie } from '../../models/movies';
import HttpService from '../../services/http';

const fetchMovie = async (headers: Record<string, string>, id: string) => {
  return HttpService.get(`${API_URL}/api/movies/${id}`, {
    headers
  }).json<Movie>();
};

const Film = () => {
  let { movieId } = useParams();
  const { jwtToken } = useAuthentication();

  const { setHttpError } = useGenericHttpError(undefined);

  const { isLoading, isError, data } = useQuery(
    ['getMovie', movieId],
    () => fetchMovie({ authorization: `Bearer ${jwtToken}` }, movieId!),
    {
      onError: (error: HTTPError) => {
        setHttpError(error);
      }
    }
  );

  if (isLoading) {
    // TODO spinner
    return <p>Loading</p>;
  }

  if (isError) {
    // TODO style
    return <p>Something wrent wrong. Please reload.</p>;
  }

  return (
    <p>
      Movie id {data?.id} {data?.title}
    </p>
  );
};

export default Film;
