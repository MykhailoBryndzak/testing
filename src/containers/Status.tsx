import * as React from 'react';
import { Grid, Nav, NavItem } from 'react-bootstrap';
import { inject, observer } from 'mobx-react';

import * as StatusSchema from '../forms/status.2018.schema';
import { SchemaForm } from '../components/form/SchemaForm/SchemaForm';
import { FormsStore } from '../stores/FormsStore';

const tabsSchemas = {
  '2015': StatusSchema
};

const KEY = 'STATUS';

interface Props {
  formsStore: FormsStore;
  $stateParams: {
    id: string
  };
}

interface State {
  formData: any;
}

@inject('formsStore')
@observer
class Status extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      formData: {},
    };
  }

  handleSelectChange = (activeEventKey: any) => false;

 handleSubmit = (formProps: any) => {
    const {
      $stateParams,
      formsStore
    } = this.props;

    formsStore.upsertSection($stateParams.id, {
      ...formsStore.forms[$stateParams.id],
      [KEY]: formProps.formData,
    });
  }

  render() {

    return (
      <div className="container-fluid bordered-3">
        <div className="row">
          <div className="col-xs-12">
            <SchemaForm
              {...StatusSchema}
              // validate={(d: any, errors: any[]) => console.info('validate', d, errors) || errors}
              onChange={(form: any) => console.info('changed', form.formData, form) || this.setState({ formData: form.formData })}
              onError={(form: any) => console.info('error', form)}
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

export default Status as React.ComponentClass;