import React from 'react';
import { TabsContent } from '@radix-ui/react-tabs';

import Container from './style';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import { Tabs, TabsList, TabsTrigger } from '../common/Tabs';

const SignBox = () => {
  return (
    <Container>
      <Tabs defaultValue="signInTab">
        <TabsList aria-label="Sign in/up">
          <TabsTrigger value="signInTab">Sign in</TabsTrigger>
          <TabsTrigger value="signUpTab">Sign up</TabsTrigger>
        </TabsList>
        <TabsContent value="signInTab">
          <SignInForm />
        </TabsContent>
        <TabsContent value="signUpTab">
          <SignUpForm />
        </TabsContent>
      </Tabs>
    </Container>
  );
};

export default SignBox;
