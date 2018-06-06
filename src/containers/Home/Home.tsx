import { inject, observer } from 'mobx-react';
import * as React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { FilterHomePage } from '../../components/FilterHomePage/FilterHomePage';
import * as PropTypes from 'prop-types';
interface Props {
    preAdmitStore: any;
    admitStore: any;
}

@inject('preAdmitStore', 'admitStore')
@observer
export class HomePage extends React.Component<Props> {
  static contextTypes: React.ValidationMap<any> = {
    router: PropTypes.object.isRequired
  };

  constructor(props: any, context: any) {
    super(props, context);
  }

  componentWillMount(): void {
    this.props.preAdmitStore.initHomePage();
    this.props.admitStore.initHomePage();
  }

  render(): any {
    let self = this;
    let res: any = [];

    Object.keys(self.props.preAdmitStore.preAdmit).forEach((key, index) => {
      let info = self.props.preAdmitStore.preAdmit[key];

      if (info) {
        res.push(info);
      }
    });

    return (
      <div>
        <ReactTable
          getTdProps={(state: any, rowInfo: any, column: any, instance: any) => {
            return {
              onClick: (e: any, handleOriginal: any) => {
                self.context.router.stateService.go('pre-admit', { id: rowInfo.row.preAdmitId });
              },
            };
          }}
          multiSort={true}
          data={res}
          columns={[
            {
              Header: 'Pre-Admits',
              columns: [
                {
                  Header: 'Key',
                  accessor: 'preAdmitId',
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
                  Header: 'Gender',
                  accessor: 'gender'
                },
                {
                  Header: 'Pre-Admit State',
                  accessor: 'preAdmitState',
                }
              ]
            }
          ]}
          defaultPageSize={5}
          className="-striped -highlight"
        />

        <FilterHomePage />
      </div>
    );
  }
}