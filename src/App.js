import React from 'react';
import { Switch, Route, Router, Redirect } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import TodoList from './components/TodoList';

const generateClassName = createGenerateClassName({
  productionPrefix: 'pro',
});

export default ({ history, isSignedIn = true }) => {

  console.log('Rendering product...', 'isSignedIn:', isSignedIn);

  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route path="/app">
            {!isSignedIn && <Redirect to="/" />}
            <TodoList />
          </Route>
        </Switch>
      </Router>
    </StylesProvider>
  );
};
