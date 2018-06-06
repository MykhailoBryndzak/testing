import * as React from 'react';
import { UIView } from '@uirouter/react';
import { inject, observer } from 'mobx-react';
import { NavTabsCustom } from './Nav/NavTabsCustom';

interface Props {
  preAdmitStore: any;
  $stateParams: { id: string };
}

@inject('preAdmitStore')
@observer
class PreAdmit extends React.Component<Props> {
  constructor(props: any) {
    super(props);

    if (!this.props.preAdmitStore.preAdmit[this.props.$stateParams.id]) {
      this.props.preAdmitStore.addPreAdmit(this.props.$stateParams.id);
    }
  }

  render(): any {
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