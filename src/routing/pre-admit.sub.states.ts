import Demographics from '../containers/Demographics';
import Demographics1 from '../containers/PreAdmit/Demographics/Demographics1';
import Referral from '../containers/Referral';
import Status from '../containers/Status';

export const preAdmitSubStates = [
  {
    onEnter: () => console.info('ENTER Demographics'),
    name: 'demographics',
    url: '/demographics',
    parent: 'pre-admit',
    component: Demographics
  },
    {
    onEnter: () => console.info('ENTER Demographics1'),
    name: 'demographics1',
    url: '/demographics1',
    parent: 'pre-admit',
    component: Demographics1
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
    component: Status
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