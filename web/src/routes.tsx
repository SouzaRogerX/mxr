import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/landing';
import home from './pages/home';

import HomeResp from "./pages/homeResp";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomeResp} />
        <Route path="/land" component={Landing} />
        <Route path="/home" component={home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;