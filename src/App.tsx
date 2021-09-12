import React from 'react';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';

import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { sithTheme } from './styles/theme';
import GlobalStyle from './styles/theme/GlobalStyle';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={sithTheme}>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route path="/sign-in">
              <SignInPage />
            </Route>
            <Route path="/sign-up">
              <SignUpPage />
            </Route>
            <Route path="*">
              <Redirect to="/sign-in" />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
