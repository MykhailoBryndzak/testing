import * as React from 'react';
import { inject, observer } from 'mobx-react';

interface Props {
  formsStore: any;
}

const getTableRow = ({model, formId}: any, index: number) => (
  <tr key={index}>
    <th scope="row">{index}</th>
    <td>{formId}</td>
    <td>{model.patientInfo.firstName}</td>
    <td>{model.patientInfo.lastName}</td>
  </tr>
);

@inject('formsStore')
@observer
export class HomePage extends React.Component<Props> {
  render() {
    console.info('home props', this.props.formsStore);
    return (
      <div>
        <span>{'HOME -< !!!' + this.props.formsStore.forms.length}</span>
        <table className="table table-hover"> 
          <caption>Pre-Admit forms in local storage.</caption> 
          <thead> 
            <tr> 
              <th>#</th> 
              <th>Form ID</th> 
              <th>First Name</th>
              <th>Last Name</th>
            </tr> 
          </thead>
          <tbody> 
            {this.props.formsStore.forms.map((form: any, index: number) => getTableRow(form, ++index))}
          </tbody>
        </table>
      </div>
    );
  }
}