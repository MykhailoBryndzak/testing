import * as React from 'react';
import { SchemaForm } from '../../components/form/SchemaForm/SchemaForm';
import * as PAServiceUseSchema  from '../../forms/pre-admission.service.use.2018.schema';
import * as AdmissionInfoSchema from '../../forms/admission.information.2018.schema'; 

export class AdmitPage extends React.Component<any, any> {
  render() {
    const schema1: any = PAServiceUseSchema;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            <h3>ADMIT</h3> 
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-xs-12">
            <SchemaForm 
              {...schema1}
            />
          </div>
          <div className="col-sm-6 col-xs-12">
            <SchemaForm {...AdmissionInfoSchema}/>
          </div>
        </div>
      </div>
    );
  }
}