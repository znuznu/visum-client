import { useAuth } from '../../providers/AuthProvider';
import Button from '../common/Button';
import { StyledExitIcon, StyledLogout, StyledLogoutText } from './style';
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
          <StyledExitIcon />
        </AccessibleIcon>
      </Button>
    </StyledLogout>
  );
};

export default Logout;
