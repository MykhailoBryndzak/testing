import * as React from 'react';
import { Grid, Nav, NavItem } from 'react-bootstrap';
import { inject, observer } from 'mobx-react';

import * as schemas2015 from './DemographicForms/schemas2015';
import * as schemas2017 from './DemographicForms/schemas2017';
import { SchemaForm } from '../components/form/SchemaForm/SchemaForm';
import { FormsStore } from '../stores/FormsStore';

const KEY: string = 'DEMOGRAPHICS';

interface Props {
  formsStore: any;
  $stateParams: {
    id: string
  };
}
interface State {
  form: any;
}
@inject('formsStore')
@observer
class Demographics extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      form: this.props.formsStore.forms[this.props.$stateParams.id][KEY] || {}
    };
  }

  handleSubmit = (formProps: any) => {
    console.info(formProps.formData);
    const {
      formsStore,
      $stateParams
    } = this.props;
    formsStore.upsertSection($stateParams.id, {
      ...formsStore.forms[$stateParams.id],
      [KEY]: formProps.formData
    });
  }

  render() {
    const schemas: any = schemas2015;

    return (
      <div className="container-fluid bordered-3">
        <div className="row">
          <div className="col-xs-12">
            <SchemaForm
              {...schemas}
              validate={(d: any, errors: any[]) => console.info('validate', d, errors) || errors}
              onChange={(form: any) => console.info('changed', form.formData, form) || this.setState({ form: form.formData })}
              onError={(form: any) => console.info('error', form)}
              onSubmit={this.handleSubmit}
              formData={this.state.form}
              // formData={(formsStore.forms[0] || {}).model || undefined}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Demographics as React.ComponentClass;