import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/landing';
import home from './pages/home';


function Routes() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/land" component={Landing} />
      <Route path="/" component={home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;