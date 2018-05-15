import * as React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { UISref, UISrefActive } from '@uirouter/react';

const navItems = [
  {
    key: 1,
    url: 'home',
    name: 'HOME'
  },
  {
    key: 2,
    url: 'pre-admit',
    // params: { id: Date.now() },
    name: 'PRE-ADMIT',
    options: {reload: true}
  },
  {
    key: 3,
    url: 'admit',
    params: { id: 'new' },
    name: 'ADMIT'
  }
];

export const SideNav = (props: any) => (
  <ul className="nav nav-pills nav-stacked">
    {navItems.map((item: any) => (
      <UISrefActive class="active" key={item.key}>
        <li>
          <UISref to={item.url} params={item.params} options={item.options}>
            <a>{item.name}</a>
          </UISref>
        </li>
      </UISrefActive>
    ))}    
  </ul>
);