import './App.css';

import * as React from 'react';
import { Provider } from 'mobx-react';

import { Demographic } from './components/pre-admit/Demographic/Demographic';
import Header from './containers/Header/Header';
import { Layout } from './components/Layout/Layout';
import { Router } from './routing/router';

export const App = ({ stores }: any) => (
  <Provider {...stores}>
    <Router />
  </Provider>
);
