import './App.css';

import * as React from 'react';
import { Provider } from 'mobx-react';

import Demographics from './containers/Demographics';

export const App = ({ stores }: any) => (
  <Provider {...stores}>
    <Demographics />
  </Provider>
);
