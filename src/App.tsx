import React from 'react';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { sithTheme } from './styles/theme';
import GlobalStyle from './styles/theme/GlobalStyle';
import SignPage from './pages/SignPage';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={sithTheme}>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route path="/sign">
              <SignPage />
            </Route>
            <Route path="*">
              <Redirect to="/sign" />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
