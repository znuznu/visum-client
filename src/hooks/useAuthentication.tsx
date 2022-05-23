import { useState } from 'react';
import * as jwt from 'jose';

import { JWT_TOKEN_KEY } from '../config';
import useLocalStorage from './useLocalStorage';

const useAuthentication = () => {
  const [username, setUsername] = useState<string | null>(null);
  const [jwtToken, setJwtToken, deleteItem] = useLocalStorage(JWT_TOKEN_KEY, undefined);

  const isAuthenticated = () => {
    if (jwtToken) {
      const decodedToken = jwt.decodeJwt(jwtToken);

      return decodedToken.exp ? decodedToken.exp * 1000 > Date.now() : false;
    }

    return false;
  };

  const signIn = (name: string, token: string) => {
    setJwtToken(token);
    setUsername(name);
  };

  const signOut = () => {
    deleteItem();
    setUsername(null);
  };

  return { isAuthenticated, signIn, signOut, username, jwtToken };
};

export default useAuthentication;
