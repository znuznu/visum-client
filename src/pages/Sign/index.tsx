import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { useAuth } from 'providers/AuthProvider';

import SignBox from 'components/SignBox';

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
