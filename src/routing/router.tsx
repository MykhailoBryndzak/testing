import * as React from 'react';
import { UIRouter, UIView, hashLocationPlugin, servicesPlugin, UIRouterReact } from '@uirouter/react';

import { states } from './states';

const plugins = [hashLocationPlugin, servicesPlugin];

const config = (router: UIRouterReact) => {
  // Hook for if route is not registered.
  router.urlRouter.otherwise({ state: 'home' });
};

export const Router = () => (
  <UIRouter plugins={plugins} states={states} config={config}>
    <UIView />
  </UIRouter>
);
