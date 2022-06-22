import { useAuth } from 'providers/AuthProvider';

import Button from 'components/primitives/Button';
import { AccessibleIcon } from 'components/primitives/AccessibleIcon';

import { StyledExitIcon, StyledLogout, StyledLogoutText } from './style';

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
          <StyledExitIcon />
        </AccessibleIcon>
      </Button>
    </StyledLogout>
  );
};

export default Logout;
