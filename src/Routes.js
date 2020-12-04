import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import SignUp from './sign-up-page';
import SignIn from './sign-in-page';
import Home from './home';
import NewArticlePage from "./new-article-page";

function Routes() {

  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/create-article" exact component={NewArticlePage} />
      <Route path="/sign-in" exact component={SignIn} />
      <Route path="/sign-up" exact component={SignUp} />
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
