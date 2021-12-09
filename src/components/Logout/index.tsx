import React, { PropsWithChildren } from 'react';
import { useAuth } from '../../providers/AuthProvider';
import Button from '../common/Button';
import { StyledLogout } from './style';

const Logout = () => {
  const { signOut } = useAuth();

  const logOut = () => {
    signOut();
  };

  return (
    <StyledLogout>
      <Button onClick={() => logOut()}>Logout</Button>
    </StyledLogout>
  );
};

export default Logout;
