import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Reviews from './pages/Reviews';
import Critics from './pages/Critics';
import Critic from './pages/Critic';
import NotFound from './pages/NotFound';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Reviews" component={Reviews} />
      <Route path="/Critics" exact component={Critics} />
      <Route path="/Critics/:name" component={Critic} />
      <Route component={NotFound} />
    </Switch>
  );
}
