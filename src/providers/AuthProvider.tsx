import { createContext, ReactElement, useContext } from 'react';
import useAuthentication from '../hooks/useAuthentication';

interface AuthContext {
  isAuthenticated: () => boolean;
  username: string | null;
  signIn: (username: string, token: string) => void;
  signOut: () => void;
}

const authContext = createContext<AuthContext>({
  isAuthenticated: () => false,
  username: null,
  signIn: () => {},
  signOut: () => {}
});

export const AuthProvider = ({ children }: { children: ReactElement[] }) => {
  const auth = useAuthentication();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
  return useContext(authContext);
};
