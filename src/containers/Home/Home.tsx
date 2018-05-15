import * as React from 'react';
import { UISref } from '@uirouter/react';
import { inject, observer } from 'mobx-react';

interface Props {
  formsStore: any;
}

const getTableRow = (id: string, form: any) => (
  <UISref to="pre-admit" params={{id}} key={id}>
    <tr>
      <th scope="row">{id}</th>
      <td>label</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </UISref>
);

@inject('formsStore')
@observer
export class HomePage extends React.Component<Props> {
  render() {
    console.info('home props', this.props.formsStore);
    return (
      <div>
        {/* <span>{'HOME -< !!!' + this.props.formsStore.forms.length}</span> */}
        <table className="table table-hover"> 
          <caption>Pre-Admit forms in local storage.</caption> 
          <thead> 
            <tr> 
              <th>#</th> 
              <th>Form ID</th> 
              <th>Last Name</th> 
              <th>Username</th> 
            </tr> 
          </thead>
          <tbody> 
            {Object.keys(this.props.formsStore.forms).map((key: any) => getTableRow(key, this.props.formsStore.forms[key]))}
          </tbody>
        </table>
      </div>
    );
  }
}