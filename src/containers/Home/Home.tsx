import { UISref } from '@uirouter/react';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { FilterHomePage } from '../../components/FilterHomePage/FilterHomePage';
interface Props {
  formsStore: any;
}

const getTableRow = (id: string, form: any) => (
  <UISref to="pre-admit" params={{ id }} key={id}>
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
    let self = this;
    let res: any[] = [];

    Object.keys(self.props.formsStore.forms).forEach((key, index) => {
      let info = self.props.formsStore.forms[key].DEMOGRAPHICS;

      if (info && info.patientInfo) {
        res.push(info.patientInfo);
      }
    });
    let filterItems = (rows: any, value: any, keys: object) => {

      return true;
    };

    console.info('home props', res);
    return (
      <div>
        <ReactTable
          data={res}
          columns={[
            {
              Header: 'Pre-Admit forms in local storage',
              columns: [
                {
                  Header: 'Key',
                  accessor: 'key',
                },
                {
                  Header: 'First Name',
                  accessor: 'firstName',
                },
                {
                  Header: 'Last Name',
                  accessor: 'lastName'
                },
                {
                  Header: 'Medicare #',
                  accessor: 'mediacareNumber',
                }
              ]
            }
          ]}
          defaultPageSize={5}
          className="-striped -highlight"
        />

         <FilterHomePage /> 

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