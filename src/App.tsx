import './App.css';

import * as React from 'react';
import { Provider } from 'mobx-react';

import Demographics from './containers/Demographics';
import Header from './containers/Header/Header';

export const App = ({ stores }: any) => (
  <Provider {...stores}>
    <>
      <Header />
      <Demographics />
    </>
  </Provider>
);
