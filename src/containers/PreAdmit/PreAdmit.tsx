import * as React from 'react';
import { UIView } from '@uirouter/react';
import { NavTabsCustom } from '../../components/Nav/NavTabsCustom';

class PreAdmit extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavTabsCustom />

        <UIView />

        <NavTabsCustom upsidedown={true} />
      </div>
    );
  }
}

export default PreAdmit as React.ComponentClass;