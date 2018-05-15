import * as React from 'react';
import { UIView } from '@uirouter/react';
import { inject, observer } from 'mobx-react';
import { NavTabsCustom } from '../../components/Nav/NavTabsCustom';

interface Props {
  formsStore: any;
  $stateParams: { id: string };
}

@inject('formsStore')
@observer
class PreAdmit extends React.Component<Props> {
  constructor(props: any) {
    super(props);

    if (!this.props.formsStore.forms[this.props.$stateParams.id]) {
      this.props.formsStore.addForm(this.props.$stateParams.id);
    }
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