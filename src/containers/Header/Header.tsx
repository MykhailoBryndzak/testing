import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { UISref } from '@uirouter/react';

import { StatusStore } from '../../stores/StatusStore';

interface HeaderProps {
  statusStore: StatusStore;
}

@inject('statusStore')
@observer
class Header extends React.Component<HeaderProps> {
  render() {
    const { online } = this.props.statusStore;

    return (
      <Navbar fixedTop={true} fluid={true} >
        <Navbar.Header>
          <Navbar.Brand>
            <UISref to="home">
              <span>LTRAX</span>
            </UISref>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">
            <div style={{ background: online ? 'green' : 'red', borderRadius: '50%', width: 10, height: 10, display: 'inline-block', marginRight: 5 }} />
            {online ? 'online' : 'offline'}
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Header as React.ComponentClass;