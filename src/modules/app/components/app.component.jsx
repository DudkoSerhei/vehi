import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router';
import Home from '../../home/components/home/home.component';
import './app.component.scss';

const App = () => (
  <Fragment>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </Fragment>
);

export default App;