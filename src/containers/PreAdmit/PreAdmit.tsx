import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { UIView } from '@uirouter/react';
import { NavTabsCustom } from '../../components/Nav/NavTabsCustom';

import * as schemas2015 from '../DemographicForms/schemas2015';
import * as schemas2017 from '../DemographicForms/schemas2017';
import { SchemaForm } from '../../components/form/SchemaForm/SchemaForm';
import { FormsStore } from '../../stores/FormsStore';

const tabsSchemas = {
  '2015': schemas2015,
  '2017': schemas2017,
};

interface DemographicsProps {
  formsStore: FormsStore;
}

interface DemographicsState {
  activeEventKey: string;
  formData: any;
}

@inject('formsStore')
@observer
class PreAdmit extends React.Component<DemographicsProps, DemographicsState> {
  constructor(props: any) {
    super(props);

    this.state = {
      activeEventKey: '2015',
      formData: {},
    };
  }

  handleSelectChange = (activeEventKey: any) => {
    console.info(activeEventKey);
    this.setState({ activeEventKey, formData: {} });
  }

  handleSubmit = (formProps: any) => {
    console.info(formProps.formData);
    this.props.formsStore.addForm({
      formId: this.state.activeEventKey,
      model: formProps.formData,
    });
  }

  render() {
    const { formsStore } = this.props;
    const schemas = tabsSchemas[this.state.activeEventKey];

    return (
      <div>
        <NavTabsCustom activeEventKey={this.state.activeEventKey} handleSelectChange={this.handleSelectChange} />

        <UIView />

        <NavTabsCustom upsidedown={true} activeEventKey={this.state.activeEventKey} handleSelectChange={this.handleSelectChange} />
      </div>
    );
  }
}

export default PreAdmit as React.ComponentClass;