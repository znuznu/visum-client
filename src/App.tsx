import React from 'react';
import { ThemeProvider } from 'styled-components';

import SignInPage from './pages/SignInPage';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { sithTheme } from './styles/theme';
import GlobalStyle from './styles/theme/GlobalStyle';

const App = () => {
  return (
    <ThemeProvider theme={sithTheme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/sign-in">
            <SignInPage />
          </Route>
          <Route path="*">
            <Redirect to="/sign-in" />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
