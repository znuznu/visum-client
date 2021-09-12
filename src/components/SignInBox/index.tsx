import React from 'react';
import styled from 'styled-components';

import { useHistory } from 'react-router-dom';
import SignInForm from './Form';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.secondary};
  margin: auto;
  width: 500px;
  padding: 2rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
    width: auto;
  }
`;

const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.main};
  text-transform: uppercase;
  margin: 0 auto 2rem;
`;

const SignInBox = () => {
  const history = useHistory();

  const goToHome = () => {
    history.push(`home`);
  };

  return (
    <Container>
      <Title>Sign in</Title>
      <SignInForm />
    </Container>
  );
};

export default SignInBox;
