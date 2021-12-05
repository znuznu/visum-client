import React from 'react';

import SignInForm from '../SignInForm';
import Container from './style';
import SignUpForm from '../SignUpForm';
import { StyledTabs, StyledTabsList, StyledTabsTrigger } from '../common/Tabs/style';
import { TabsContent } from '@radix-ui/react-tabs';

const SignBox = () => {
  return (
    <Container>
      <StyledTabs defaultValue="signInTab">
        <StyledTabsList aria-label="Sign in/up">
          <StyledTabsTrigger value="signInTab">Sign in</StyledTabsTrigger>
          <StyledTabsTrigger value="signUpTab">Sign up</StyledTabsTrigger>
        </StyledTabsList>
        <TabsContent value="signInTab">
          <SignInForm />
        </TabsContent>
        <TabsContent value="signUpTab">
          <SignUpForm />
        </TabsContent>
      </StyledTabs>
    </Container>
  );
};

export default SignBox;
