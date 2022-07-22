import * as Tabs from 'components/primitives/Tabs';

import Container from './style';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

const SignBox = () => {
  return (
    <Container>
      <Tabs.Root defaultValue="signInTab">
        <Tabs.List aria-label="Sign in/up">
          <Tabs.Trigger value="signInTab">Sign in</Tabs.Trigger>
          <Tabs.Trigger value="signUpTab">Sign up</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="signInTab">
          <SignInForm />
        </Tabs.Content>
        <Tabs.Content value="signUpTab">
          <SignUpForm />
        </Tabs.Content>
      </Tabs.Root>
    </Container>
  );
};

export default SignBox;
