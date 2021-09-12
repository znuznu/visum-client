import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import Button from './common/Button';
import Input from './common/Input';

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
  font-family: 'Oswald';
  text-transform: uppercase;
  margin: 0 auto 2rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const SignUpBox = () => {
  const history = useHistory();

  const goToHome = () => {
    history.push(`home`);
  };

  return (
    <Container>
      <Title>Sign up</Title>
      <Content>
        <Input label={'Username'} type={'text'} />
        <Input label={'Password'} type={'password'} />
        <Input label={'Password confirmation'} type={'password'} />
        <Input label={'Registration key'} type={'text'} />
        <Button onClick={goToHome}>{'Sign up'}</Button>
      </Content>
    </Container>
  );
};

export default SignUpBox;
