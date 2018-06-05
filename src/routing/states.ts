import { Layout } from '../components/Layout/Layout';
import { SideNav } from '../components/side-nav/Side-Nav';
import PreAdmit from '../containers/PreAdmit/PreAdmit';
import PreAdmitManagement from '../containers/PreAdmit/PreAdmitManagement';
import AdmitPage  from '../containers/Admit/Admit1';
import AdmitManagement from '../containers/Admit/AdmitManagement';
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
  {
    onEnter: (transition: any, state: any, params: any) => {
      console.info('ENTER PRE-ADMIT Management', params);
    },
    name: 'pre-admit-management',
    url: 'pre-admit-management',
    parent: 'root',
    views: {
      'content': { component: PreAdmitManagement },
      'sideBar': { component: SideNav }
    }
  },
  ...preAdmitSubStates,
  {
    onEnter: (transition: any, state: any, params: any) => {
      console.info('ENTER ADMIT', params);
    },
    name: 'admit',
    url: 'admit/:id',
    parent: 'root',
    views: {
      'content': { component: AdmitPage },
      'sideBar': { component: SideNav }
    }
  },
  {
    onEnter: (transition: any, state: any, params: any) => {
      console.info('ENTER ADMIT', params);
    },
    name: 'admit-management',
    url: 'admit-management',
    parent: 'root',
    views: {
      'content': { component: AdmitManagement },
      'sideBar': { component: SideNav }
    }
  }
];
