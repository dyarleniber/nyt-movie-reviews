import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Reviews from './pages/Reviews';
import Critics from './pages/Critics';
import NotFound from './pages/NotFound';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/critics" exact component={Critics} />
      <Route component={NotFound} />
    </Switch>
  );
}
