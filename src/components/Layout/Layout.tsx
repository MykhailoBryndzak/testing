import './Layout.css';

import * as React from 'react';

export class Layout extends React.Component {
  render() {
    return (
      <div className="layout-container" >
        {this.props.children}
      </div>
    );
  }
}