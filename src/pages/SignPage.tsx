import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import SignBox from '../components/SignBox';
import { useAuth } from '../providers/AuthProvider';

const SignPage = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      navigate('/');
    }
  }, [isAuthenticated]);

  return (
    <>
      {/* TODO add logo */}
      <SignBox />
    </>
  );
};

export default SignPage;
