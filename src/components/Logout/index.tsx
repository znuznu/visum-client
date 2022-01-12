import React from 'react';
import { ExitIcon } from '@radix-ui/react-icons';
import { useAuth } from '../../providers/AuthProvider';
import Button from '../common/Button';
import { StyledLogout, StyledLogoutText } from './style';
import { AccessibleIcon } from '../common/AccessibleIcon';

const Logout = () => {
  const { signOut } = useAuth();

  const logOut = () => {
    signOut();
  };

  return (
    <StyledLogout>
      <Button onClick={() => logOut()} padding={'0.5rem'}>
        <StyledLogoutText>Logout</StyledLogoutText>
        <AccessibleIcon label={'Logout'}>
          <ExitIcon />
        </AccessibleIcon>
      </Button>
    </StyledLogout>
  );
};

export default Logout;
