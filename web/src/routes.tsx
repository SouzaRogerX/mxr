import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/landing';
import teste from './pages/teste';


function Routes() {
  return (
    <BrowserRouter>
      <Route path="/land" component={Landing} />
      <Route path="/teste" component={teste} />
    </BrowserRouter>
  );
}

export default Routes;