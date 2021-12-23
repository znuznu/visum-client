import { useEffect, useState } from 'react';
import { HTTPError } from 'ky';
import useAuthentication from './useAuthentication';

const useGenericHttpError = (error?: HTTPError) => {
  const { signOut } = useAuthentication();
  const [httpError, setHttpError] = useState(error);

  useEffect(() => {
    if (httpError?.response.status === 403) {
      signOut();
    }
  }, [httpError, signOut]);

  return { httpError, setHttpError };
};

export default useGenericHttpError;
