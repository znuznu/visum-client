import { useState } from 'react';
import { JWT_TOKEN_KEY } from '../config';
import jwt from 'jsonwebtoken';
import useLocalStorage from './useLocalStorage';

const useAuthentication = () => {
  const [username, setUsername] = useState<string | null>(null);
  const [jwtToken, setJwtToken, deleteItem] = useLocalStorage(JWT_TOKEN_KEY, undefined);

  const isAuthenticated = () => {
    if (jwtToken) {
      const decodedToken = jwt.decode(jwtToken, {
        complete: true,
        json: true
      });

      return decodedToken?.payload.exp
        ? decodedToken.payload.exp * 1000 > Date.now()
        : false;
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
