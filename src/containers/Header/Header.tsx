import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

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
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">LTRAX</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">
            <div style={{ background: online ? 'green' : 'red', borderRadius: '100%', width: 10, height: 10, display: 'inline-block', marginRight: 5 }} />
            {online ? 'online' : 'offline'}
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Header as React.ComponentClass;