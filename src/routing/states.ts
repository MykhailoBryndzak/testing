import * as React from 'react';
import { Layout } from '../components/Layout/Layout';
import { SideNav } from '../components/side-nav/Side-Nav';
import PreAdmit from '../containers/PreAdmit/PreAdmit';
import { AdmitPage } from '../containers/Admit/Admit';
import { HomePage } from '../containers/Home/Home';
import { preAdmitSubStates } from './pre-admit.sub.states';

export const states: any = [
  {
    name: 'root',
    url: '/',
    component: Layout,
    onEnter: () => console.info('ENTER ROOT')
  },
  {
    name: 'home',
    url: 'home',
    parent: 'root',
    views: {
      'content': { component: HomePage },
      'sideBar': { component: SideNav }
    },
    onEnter: () => console.info('ENTER HOME')
  },
  {
    onEnter: (transition: any, state: any, params: any) => {
      console.info('ENTER PRE-ADMIT', params);
    },
    name: 'pre-admit',
    url: 'pre-admit/:id',
    redirectTo: 'demographics',
    parent: 'root',
    params: {
      id: () => Date.now().toString()
    },
    views: {
      'content': { component: PreAdmit },
      'sideBar': { component: SideNav }
    }
  },
  ...preAdmitSubStates,
  {
    onEnter: (transition: any, state: any, params: any) => {
      console.info('ENTER PRE-ADMIT', params);
    },
    name: 'admit',
    url: 'admit/:id',
    parent: 'root',
    views: {
      'content': { component: AdmitPage },
      'sideBar': { component: SideNav }
    }
  }
];
