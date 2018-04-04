import './index.css';
import './polyfills';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import { App } from './App';
import { storesPromise } from './stores';

storesPromise.then((stores) => {
  console.info('App starting');
  ReactDOM.render(
    <App stores={stores} />,
    document.getElementById('root') as HTMLElement
  );
});

registerServiceWorker();
