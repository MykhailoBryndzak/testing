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
    params: { id: 'new' },
    name: 'PRE-ADMIT',
    subMenu: [
      {
        key: 2,
        url: 'pre-admit',
        params: { id: 'new' },
        name: 'Pre-Admition'
      },
      {
        key: 1,
        url: 'pre-admit-managenet',
        name: 'Management'
      }
    ]
  },
  {
    key: 3,
    url: 'admit',
    params: { id: 'new' },
    name: 'ADMIT',
    subMenu: [
      {
        key: 2,
        url: 'admit',
        params: { id: 'new' },
        name: 'Admition'
      },
      {
        key: 1,
        url: 'admit-managenet',
        name: 'Management'
      }
    ]
  }
];

export const SideNav = (props: any) => (
  <ul className="nav nav-pills nav-stacked">
    {navItems.map((item: any) => (
      <UISrefActive class="active1" key={item.key}>
        <li>
          <UISref to={item.url} params={item.params}>
            <a>{item.name}</a>
          </UISref>
          <ul>
            {item.subMenu && item.subMenu.map((itemSub: any) => (
              <UISrefActive  class="active" key={itemSub.key}>
                  <li>
                    <UISref to={itemSub.url} params={itemSub.params}>
                      <a>{itemSub.name}</a>
                    </UISref>
                  </li>
              </UISrefActive>
            ))}
           </ul>
        </li>
      </UISrefActive>
    ))}    
  </ul>
);