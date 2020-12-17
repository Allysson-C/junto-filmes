import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import Home from '../pages/Home';
import MovieDetails from '../pages/MovieDetails';
import Favorite from '../pages/Favorite';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/home" exact component={Home} />
    <Route path="/movie-details" exact component={MovieDetails} />
    <Route path="/favorites" exact component={Favorite} />
  </Switch>
);

export default Routes;
