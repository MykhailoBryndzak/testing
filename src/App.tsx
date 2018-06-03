import './App.css';

import * as React from 'react';
import { Provider } from 'mobx-react';

import { Router } from './routing/router';

export const App = ({ stores }: any) => (
  <Provider {...stores}>
    <Router />
  </Provider>
);
