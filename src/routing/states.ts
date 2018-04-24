import * as React from 'react';
import { Layout } from '../components/Layout/Layout';
import { SideNav } from '../components/side-nav/Side-Nav';
import Demographics from '../containers/Demographics';

const Home = () => 'HOME  !!!!!';

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
      'content': { component: Home },
      'sideBar': { component: SideNav }
    },
    onEnter: () => console.info('ENTER HOME')
  },
  {
    onEnter: () => console.info('ENTER PRE-ADMId'),
    name: 'pre-admit',
    url: 'pre-admit',
    parent: 'root',
    views: {
      'content': {
        component: Demographics
      },
      'sideBar': {
        component: SideNav
      }
    }
  }
];
