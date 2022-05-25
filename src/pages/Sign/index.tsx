import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import SignBox from 'components/SignBox';
import { useAuth } from 'providers/AuthProvider';
import StyledSignContainer from './style';

const Sign = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <StyledSignContainer>
      <SignBox />
    </StyledSignContainer>
  );
};

export default Sign;
