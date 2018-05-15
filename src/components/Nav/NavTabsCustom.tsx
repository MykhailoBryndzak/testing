import * as React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { UISrefActive, UISref } from '@uirouter/react';

export const NavTabsCustom = ({ activeEventKey, handleSelectChange, upsidedown = false }: any) => (
  <Nav bsStyle="tabs" className={upsidedown ? 'upsidedown' : ''} activeKey={activeEventKey} onSelect={handleSelectChange} >
    <UISrefActive class="active">
      <UISref to={'demographics'}>
        <NavItem eventKey="0" > Demographics </NavItem>
      </UISref>
    </UISrefActive>
    <UISrefActive class="active">
      <UISref to={'ref'}>
        <NavItem eventKey="1" > Referral / Payer </NavItem>
      </UISref>
    </UISrefActive>
    {/*
      *----maybe later this forms will be in use but not for POC

     <UISrefActive class="active">
      <UISref to={'status'}>
        <NavItem eventKey="2" > Status </NavItem>
      </UISref>
    </UISrefActive>
    <UISrefActive class="active">
      <UISref to={'function'}>
        <NavItem eventKey="3" disabled={true}> Function </NavItem>
      </UISref>
    </UISrefActive>
    <UISrefActive class="active">
      <UISref to={'ahac'}>
        <NavItem eventKey="4" disabled={true}> AHAC </NavItem>
      </UISref>
    </UISrefActive>
    <UISrefActive class="active">
      <UISref to={'ros'}>
        <NavItem eventKey="5" disabled={true}> ROS </NavItem>
      </UISref>
    </UISrefActive>
    <UISrefActive class="active">
      <UISref to={'respiratory'}>
        <NavItem eventKey="6" disabled={true}> Respiratory </NavItem>
      </UISref>
    </UISrefActive>
    <UISrefActive class="active">
      <UISref to={'labs'}>
        <NavItem eventKey="7" disabled={true}> Labs </NavItem>
      </UISref>
    </UISrefActive>
    <UISrefActive class="active">
      <UISref to={'justification'}>
        <NavItem eventKey="8" disabled={true}> Justification </NavItem>
      </UISref>
    </UISrefActive> 
    */}
  </Nav>
);