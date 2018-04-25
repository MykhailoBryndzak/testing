import * as React from 'react';
import { Layout } from '../components/Layout/Layout';
import { SideNav } from '../components/side-nav/Side-Nav';
import PreAdmit from '../containers/PreAdmit/PreAdmit';
import Demographics from '../containers/Demographics_';
import Referral from '../containers/Referral';

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
    onEnter: () => console.info('ENTER PRE-ADMIT'),
    name: 'pre-admit',
    url: 'pre-admit/:id',
    redirectTo: 'demographics',
    parent: 'root',
    views: {
      'content': { component: PreAdmit },
      'sideBar': { component: SideNav }
    }
  },
  {
    onEnter: () => console.info('ENTER Demographics'),
    name: 'demographics',
    url: '/demographics',
    parent: 'pre-admit',
    component: Demographics
  },
  {
    onEnter: () => console.info('ENTER ref'),
    name: 'ref',
    url: '/referal-payer',
    parent: 'pre-admit',
    component: Referral
  },
  {
    onEnter: () => console.info('ENTER status'),
    name: 'status',
    url: '/status',
    parent: 'pre-admit',
    component: Demographics
  },
  {
    onEnter: () => console.info('ENTER function'),
    name: 'function',
    url: '/function',
    parent: 'pre-admit',
    component: Demographics
  },
  {
    onEnter: () => console.info('ENTER ahac'),
    name: 'ahac',
    url: '/ahac',
    parent: 'pre-admit',
    component: Demographics
  },
  {
    onEnter: () => console.info('ENTER ros'),
    name: 'ros',
    url: '/ros',
    parent: 'pre-admit',
    component: Demographics
  },
  {
    onEnter: () => console.info('ENTER respiratory'),
    name: 'respiratory',
    url: '/respiratory',
    parent: 'pre-admit',
    component: Demographics
  },
  {
    onEnter: () => console.info('ENTER labs'),
    name: 'labs',
    url: '/labs',
    parent: 'pre-admit',
    component: Demographics
  },
  {
    onEnter: () => console.info('ENTER justification'),
    name: 'justification',
    url: '/justification',
    parent: 'pre-admit',
    component: Demographics
  }
];
