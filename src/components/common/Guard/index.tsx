import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'providers/AuthProvider';

const Guard = ({ children }: { children: ReactElement }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated() ? children : <Navigate to="/sign" replace />;
};

export default Guard;
