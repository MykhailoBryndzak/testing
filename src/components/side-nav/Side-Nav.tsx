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
    options: {reload: true},

      subMenu: [
      {
        key: 2,
        url: 'pre-admit',
        params: { id: 'new' },
        name: 'Pre-Admission'
      },
      {
        key: 1,
        url: 'pre-admit-management',
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
        name: 'Admission'
      },
      {
        key: 1,
        url: 'admit-management',
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
          <UISref to={item.url} params={item.params} options={item.options}>
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