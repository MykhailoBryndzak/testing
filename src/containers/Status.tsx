import * as React from 'react';
import { Grid, Nav, NavItem } from 'react-bootstrap';
import { inject, observer } from 'mobx-react';
import * as mobx from 'mobx';

import * as StatusSchema from '../forms/status.2018.schema';
import { SchemaForm } from '../components/form/SchemaForm/SchemaForm';
import { FormsStore } from '../stores/FormsStore';

const KEY = 'STATUS';

interface Props {
  formsStore: FormsStore;
  $stateParams: {
    id: string
  };
}

interface State {
  form: any;
}

@inject('formsStore')
@observer
class Status extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
  }

  handleSelectChange = (activeEventKey: any) => false;

 handleSubmit = (formProps: any) => {
    const {
      $stateParams,
      formsStore
    } = this.props;

    formsStore.upsertSection($stateParams.id, {
      ...formsStore.forms[$stateParams.id],
      [KEY]: {...formProps.formData},
    });
  }

  render() {
    const id: string = this.props.$stateParams.id;
    const form: any = mobx.toJS(this.props.formsStore.forms[id][KEY]) || {};

    return (
      <div className="container-fluid bordered-3">
        <div className="row">
          <div className="col-xs-12">
            <SchemaForm
              {...StatusSchema}
              // validate={(d: any, errors: any[]) => console.info('validate', d, errors) || errors}
              onChange={this.handleSubmit}
              onError={(formProps: any) => console.info('error', form)}
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

export default Status as React.ComponentClass;