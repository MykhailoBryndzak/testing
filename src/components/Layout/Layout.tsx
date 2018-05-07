import './Layout.css';

import * as React from 'react';
import Header from '../../containers/Header/Header';
import { UIView } from '@uirouter/react';

export class Layout extends React.Component {
  render() {
    return (
      <div className="layout-container" >
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <UIView name={'sideBar'} />
            </div>

            <div className="col-md-10">
              <UIView name={'content'} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}