import * as React from 'react';
import { Grid, Nav, NavItem } from 'react-bootstrap';
import { inject, observer } from 'mobx-react';
import * as mobx from 'mobx';

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
interface State {}

@inject('formsStore')
@observer
class Demographics extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
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
    const id: string = this.props.$stateParams.id;
    const form: object = mobx.toJS(this.props.formsStore.forms[id][KEY]) || {};

    return (
      <div className="container-fluid bordered-3">
        <div className="row">
          <div className="col-xs-12">
            <SchemaForm
              {...schemas}
              validate={(d: any, errors: any[]) => console.info('validate', d, errors) || errors}
              onChange={this.handleSubmit}
              onError={(formProps: any) => {console.info('error', formProps); window.scrollBy(0, -10000); }}
                // onSubmit={this.handleSubmit}
              formData={form}
              // formData={(formsStore.forms[0] || {}).model || undefined}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Demographics as React.ComponentClass;