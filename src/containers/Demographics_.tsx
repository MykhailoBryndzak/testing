import * as React from 'react';
import { Grid, Nav, NavItem } from 'react-bootstrap';
import { inject, observer } from 'mobx-react';

import * as schemas2015 from './DemographicForms/schemas2015';
import * as schemas2017 from './DemographicForms/schemas2017';
import { SchemaForm } from '../components/form/SchemaForm/SchemaForm';
import { FormsStore } from '../stores/FormsStore';

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
class Demographics extends React.Component<DemographicsProps, DemographicsState> {
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
      <div className="container-fluid bordered-3">
        <div className="row">
          <div className="col-xs-12">
            <SchemaForm
              {...schemas}
              // validate={(d: any, errors: any[]) => console.info('validate', d, errors) || errors}
              onChange={(form: any) => console.info('changed', form.formData, form) || this.setState({ formData: form.formData })}
              onError={(form: any) => {console.info('error', form); window.scrollBy(0, -10000); }}
              onSubmit={this.handleSubmit}
              formData={this.state.formData}
            // formData={(formsStore.forms[0] || {}).model || undefined}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Demographics as React.ComponentClass;