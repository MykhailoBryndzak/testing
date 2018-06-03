import * as React from 'react';
import { FormControl } from 'react-bootstrap';
import { inject, observer } from 'mobx-react';
import * as mobx from 'mobx';
import './Demographics.less';
import * as MenuItem from 'react-bootstrap/lib/MenuItem';

const KEY: string = 'DEMOGRAPHICS';

interface Props {
    formsStore: any;
    $stateParams: {
        id: string
    };
}

interface State {
}

@inject('formsStore')
@observer
class Demographics1 extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
    }

    render() {

        return (

            <div className="demographics">
                <div className="create-pre-admit">
                    <h4>Create Pre-Admit</h4>
                    <form>
                        <div className="line-0">
                            <label className="is-required"> First Name </label>
                            <FormControl type="text" placeholder="Enter First Name" bsSize="sm" required={true}/>

                            <label className="is-required"> Middle Initial </label>
                            <FormControl type="text" placeholder="Enter Middle Initial" bsSize="sm" required={true}/>

                        </div>
                        <div className="line-1">
                            <label className="is-required"> Last Name </label>
                            <FormControl type="text" placeholder="Enter Last Name" bsSize="sm" required={true}/>

                            <label> Suffix </label>
                            <FormControl type="text" placeholder="Enter Suffix" bsSize="sm"/>

                        </div>
                        <div className="line-2">
                            <label> Birth Date </label>
                            <FormControl type="date" placeholder="Enter Birth Date" bsSize="sm"/>

                            <label> Gender </label>
                            <select className="form-control">
                                <option>Male</option>
                                <option>Female</option>
                                <option selected={true}>unspesified</option>
                            </select>
                        </div>
                        <div className="line-3">
                            <label> Social Security Number </label>
                            <FormControl type="text" placeholder="Enter Social Security Number" bsSize="sm"/>

                            <label> Medicare Number </label>
                            <FormControl type="text" placeholder="Enter Medicare Number" bsSize="sm"/>

                        </div>
                        <div className="line-4">
                            <label> Medicaide Number </label>
                            <FormControl type="text" placeholder="Enter Medicaide Number" bsSize="sm"/>

                            <label> Address </label>
                            <FormControl type="text" placeholder="Enter Address" bsSize="sm"/>

                        </div>
                        <div className="line-5">
                            <label> City </label>
                            <FormControl type="text" placeholder="Enter City" bsSize="sm"/>

                            <label> State </label>
                            <FormControl type="text" placeholder="Enter State" bsSize="sm"/>

                        </div>
                        <div className="line-6">
                            <label> ZIP </label>
                            <FormControl type="text" placeholder="Enter ZIP" bsSize="sm"/>

                            <label> Telephone # </label>
                            <FormControl type="text" placeholder="Enter Telephone" bsSize="sm"/>

                        </div>

                        <button className="btn btn-primary" type="submit">Save Pre-Admit</button>
                    </form>
                </div>
            </div>

        );
    }
}

export default Demographics1 as React.ComponentClass;