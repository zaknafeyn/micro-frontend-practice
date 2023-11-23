import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import AuthApp from './components/AuthApp';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co-'
});

export default () => (
  <StylesProvider generateClassName={generateClassName}>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/auth" component={AuthApp} />
          <Route path="/" component={MarketingApp} />
        </Switch>
      </div>
      </BrowserRouter>
  </StylesProvider>
);
