import * as React from 'react';
import { UISref, UISrefActive } from '@uirouter/react';
import { Button } from 'react-bootstrap';
import './AdmitManagement.css';
class PreAdmitManagement extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div id="AdmitManagement">
        <h3>Admit Management</h3>
        <span>{'LTRAX - PATIENT RECORD'}</span>
        <table className="table table-hover"> 
          <caption>Admits.</caption>
          <tbody> 
            <tr>
                <th scope="">{'Facility'}</th>
                <td scope="row">{'Eleks'}</td>
            </tr>
            <tr>                
                <th>{'Provider ID'}</th>
                <td>{'0100111'}</td>
            </tr>
            <tr>                
                <th>{'Assigned Submission ID'}</th>  
                <td>{'12346678'}</td>
            </tr>    
            <tr>                  
                <th>{'Assessment Type'}</th>
                <td>{'Admission'}</td>  
            </tr>    
            <tr>    
                <th>{'Pre-AdmitStatus'}</th> 
                <td>{'Locked'}</td>       
            </tr>    
            <tr>    
                <th>{'Admit Status'}</th>   
                <td>{'Incomplete'}</td>                                                              
            </tr>
          </tbody>
        </table>

        <UISref to="home"><Button bsStyle="success">Admit</Button></UISref>
        <UISref to="pre-admit" params={{ id: 'new' }}><Button bsStyle="warning">Deny</Button></UISref>
        <UISref to="home"><Button bsStyle="danger">Delete</Button></UISref>
      </div>
    );
  }
}

export default PreAdmitManagement as React.ComponentClass;