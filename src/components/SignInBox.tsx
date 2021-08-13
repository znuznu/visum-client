import React from 'react';
import styled from 'styled-components';

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

const Label = styled.label`
  font-family: 'Oswald';
  font-size: 22px;
  text-transform: uppercase;
`;

const Input = styled.input`
  margin-bottom: 2rem;
  font-size: 22px;
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
  font-family: 'Oswald';
  color: ${(props) => props.theme.colors.secondary};
  width: auto;
`;

const Button = styled.button`
  font-size: 22px;
  font-family: 'Oswald';
  text-transform: uppercase;
  width: 120px;
  margin: auto;
  border: none;
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.secondary};

  &:hover {
    cursor: pointer;
  }
`;

const SignInBox = () => {
  return (
    <Container>
      <Title>Sign in</Title>
      <Content>
        <Label> Username </Label>
        <Input />
        <Label> Password </Label>
        <Input type={'password'} />
        <Button>Log In</Button>
      </Content>
    </Container>
  );
};

export default SignInBox;
