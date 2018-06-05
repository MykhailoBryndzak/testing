import Demographics from '../containers/PreAdmit/Demographics/Demographics';
import Referral from '../containers/PreAdmit/Referral/Referral';
import Status from '../containers/Status';

export const preAdmitSubStates = [
    {
    onEnter: () => console.info('ENTER Demographics1'),
    name: 'demographics',
    url: '/demographics',
    parent: 'pre-admit',
    component: Demographics
  },
  {
    onEnter: () => console.info('ENTER ref1'),
    name: 'ref',
    url: '/referral-payer',
    parent: 'pre-admit',
    component: Referral
  }
];