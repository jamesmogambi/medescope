import React from 'react';
import { BrowserRouter,Router, Route, Switch ,Link, NavLink  } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';

export const history = createHistory();
const AppRouter = () => (
  <Router history={history}> 
    <div>
      <Switch>
      <Route path="/" component={HomePage} exact={true} />
      <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
