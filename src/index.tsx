import './index.css';
import './polyfills';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import DevTools from 'mobx-react-devtools';

import registerServiceWorker from './registerServiceWorker';
import { App } from './App';
import { storesPromise } from './stores';

registerServiceWorker();

storesPromise.then((stores) => {
  console.info('App starting');
  ReactDOM.render(
    <App stores={stores}><DevTools /></App>,
    document.getElementById('root') as HTMLElement
  );
});
