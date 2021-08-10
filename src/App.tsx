import React from 'react';

import SignIn from './pages/sign-in';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="*">
          <Redirect to="/sign-in" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
