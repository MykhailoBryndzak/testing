import * as React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { UISrefActive, UISref } from '@uirouter/react';

export const NavTabsCustom = ({ activeEventKey, handleSelectChange, upsidedown = false }: any) => (
  <Nav bsStyle="tabs" className={upsidedown ? 'upsidedown' : ''} activeKey={activeEventKey} onSelect={handleSelectChange} >

    <UISrefActive class="active">
      <UISref to={'demographics'}>
        <NavItem eventKey="1" > Demographics </NavItem>
      </UISref>
    </UISrefActive>

    <UISrefActive class="active">
      <UISref to={'ref'}>
        <NavItem eventKey="2" > Referral / Payer</NavItem>
      </UISref>
    </UISrefActive>
  </Nav>
);