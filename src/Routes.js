import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFound from './components/NotFound';

import Home from './pages/Home';
import Reviews from './pages/Reviews';
import Critics from './pages/Critics';
import Favorites from './pages/Favorites';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/critics" exact component={Critics} />
      <Route path="/favorites" exact component={Favorites} />
      <Route
        render={props => (
          <NotFound Code="404" Message="Page not found" {...props} />
        )}
      />
    </Switch>
  );
}
