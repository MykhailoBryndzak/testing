import * as React from 'react';
import { Grid, Nav, NavItem } from 'react-bootstrap';
import { UIView, UISrefActive, UISref } from '@uirouter/react';
import { inject, observer } from 'mobx-react';

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
        <Nav bsStyle="tabs" activeKey={this.state.activeEventKey} onSelect={this.handleSelectChange} >
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
          <UISrefActive class="active">
            <UISref to={'status'}>
              <NavItem eventKey="2" > Status </NavItem>
            </UISref>
          </UISrefActive>
          <UISrefActive class="active">
            <UISref to={'function'}>
              <NavItem eventKey="3" > Function </NavItem>
            </UISref>
          </UISrefActive>
          <UISrefActive class="active">
            <UISref to={'ahac'}>
              <NavItem eventKey="4" > AHAC </NavItem>
            </UISref>
          </UISrefActive>
          <UISrefActive class="active">
            <UISref to={'ros'}>
              <NavItem eventKey="5" > ROS </NavItem>
            </UISref>
          </UISrefActive>
          <UISrefActive class="active">
            <UISref to={'respiratory'}>
              <NavItem eventKey="6" > Resporatory </NavItem>
            </UISref>
          </UISrefActive>
          <UISrefActive class="active">
            <UISref to={'labs'}>
              <NavItem eventKey="7" > Labs </NavItem>
            </UISref>
          </UISrefActive>
          <UISrefActive class="active">
            <UISref to={'justification'}>
              <NavItem eventKey="8" > Justification </NavItem>
            </UISref>
          </UISrefActive>
        </Nav>

        <UIView />
      </div>
    );
  }
}

export default PreAdmit as React.ComponentClass;