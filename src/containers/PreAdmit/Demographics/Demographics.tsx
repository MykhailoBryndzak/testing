import * as React from 'react';
import { FormControl } from 'react-bootstrap';
import { inject, observer } from 'mobx-react';
import * as mobx from 'mobx';
import './Demographics.less';

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
class Demographics extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
    }

    render() {

        return (

            <div className="demographics">
                {/*-------------------------Patient Identification*-----------------------------*/}

                <h4>Patient Identification*</h4>
                <form>
                    <div className="line-0">
                        <div className="label-input">
                            <label className="is-required"> First Name </label>
                            <FormControl type="text" placeholder="Enter First Name" bsSize="sm" required={true}/>
                        </div>
                        <div className="label-input">
                            <label className="is-required"> Middle Initial </label>
                            <FormControl type="text" placeholder="Enter Middle Initial" bsSize="sm" required={true}/>
                        </div>
                    </div>
                    <div className="line-1">
                        <div className="label-input">
                            <label className="is-required"> Last Name </label>
                            <FormControl type="text" placeholder="Enter Last Name" bsSize="sm" required={true}/>
                        </div>
                        <div className="label-input">
                            <label> Suffix </label>
                            <FormControl type="text" placeholder="Enter Suffix" bsSize="sm"/>
                        </div>
                    </div>
                    <div className="line-2">
                        <div className="label-input">
                            <label> Birth Date </label>
                            <FormControl type="date" placeholder="Enter Birth Date" bsSize="sm"/>
                        </div>
                        <div className="label-input">
                            <label> Gender </label>
                            <select className="form-control input-sm">
                                <option>Male</option>
                                <option>Female</option>
                                <option selected={true}>Unspecified</option>
                            </select>
                        </div>
                    </div>
                    <div className="line-3">
                        <div className="label-input">
                            <label> Social Security Number </label>
                            <FormControl type="text" placeholder="Enter Social Security Number" bsSize="sm"/>
                        </div>
                        <div className="label-input">
                            <label> Medicare Number </label>
                            <FormControl type="text" placeholder="Enter Medicare Number" bsSize="sm"/>
                        </div>
                    </div>
                    <div className="line-4">
                        <div className="label-input">
                            <label> Medicaide Number </label>
                            <FormControl type="text" placeholder="Enter Medicaide Number" bsSize="sm"/>
                        </div>
                        <div className="label-input">
                            <label> Address </label>
                            <FormControl type="text" placeholder="Enter Address" bsSize="sm"/>
                        </div>
                    </div>
                    <div className="line-5">
                        <div className="label-input">
                            <label> City </label>
                            <FormControl type="text" placeholder="Enter City" bsSize="sm"/>
                        </div>
                        <div className="label-input">

                            <label> State </label>
                            <FormControl type="text" placeholder="Enter State" bsSize="sm"/>
                        </div>
                    </div>
                    <div className="line-6">
                        <div className="label-input">
                            <label> ZIP </label>
                            <FormControl type="text" placeholder="Enter ZIP" bsSize="sm"/>
                        </div>
                        <div className="label-input">
                            <label> Telephone # </label>
                            <FormControl type="text" placeholder="Enter Telephone" bsSize="sm"/>
                        </div>
                    </div>

                    <div className="line-7">
                        <div className="label-input">
                            <label>Race / Ethnicity</label>
                            <div>
                                <span>
                                    <input type="checkbox" name="Ethnicity" value="AmericanIndian/AlaskaNative"/> American Indian or Alaska
                                    Native
                                </span>
                                <span>
                                    <input type="checkbox" name="Ethnicity" value="Asian"/> Asian </span>
                                <span>
                                    <input type="checkbox" name="Ethnicity" value="Black/AfricanAmerican"/> Black or
                                    African American
                                </span>
                                <span>
                                    <input type="checkbox" name="Ethnicity" value="Hispanic/Latino"/> Hispanic or
                                    Latino
                                </span>
                                <span>
                                    <input type="checkbox" name="Ethnicity"
                                           value="NativeHavaiian/OtherPacificIslander"/>
                                     Native Havaiian or Other Pacific Islander
                                </span>
                                <span>
                                    <input type="checkbox" name="Ethnicity" value="White"/> White
                                </span>
                            </div>
                        </div>
                        <div className="label-input">

                            <label> Marital Status </label>
                            <select className="form-control input-sm">
                                <option selected={true}>Married</option>
                                <option>Unmarried</option>
                                <option>Abandoned</option>
                            </select>
                        </div>
                    </div>
                    {/*-------------------------Patient Identification-----------------------------*/}

                    <h4>Patient Network</h4>

                    <div className="line-8">
                        <div className="label-input">

                            <label> Next of Kin Name </label>
                            <FormControl type="text" placeholder="Enter Next of Kin Name" bsSize="sm"/>
                        </div>
                        <div className="label-input">

                            <label> Next of Kin Relationship </label>
                            <FormControl type="text" placeholder="Enter Next of Kin Relationship" bsSize="sm"/>
                        </div>
                    </div>

                    <div className="line-9">
                        <div className="label-input">

                            <label> Next of Kin Telephone # </label>
                            <FormControl type="text" placeholder="Enter Next of Kin Telephone" bsSize="sm"/>
                        </div>
                        <div className="label-input">

                            <label> Caregiver Name </label>
                            <FormControl type="text" placeholder="Enter Caregiver Name" bsSize="sm"/>
                        </div>
                    </div>

                    <div className="line-10">
                        <div className="label-input">

                            <label> Caregiver Relationship </label>
                            <FormControl type="text" placeholder="Enter Caregiver Relationship" bsSize="sm"/>
                        </div>
                        <div className="label-input">

                            <label> Caregiver Telephone # </label>
                            <FormControl type="text" placeholder="Enter Caregiver Telephone" bsSize="sm"/>
                        </div>
                    </div>

                    <div className="line-11">
                        <div className="label-input">

                            <label> Primary Care Provider </label>
                            <FormControl type="text" placeholder="Enter Primary Care Provider" bsSize="sm"/>
                        </div>
                        <div className="label-input">

                            <label> Primary Care Telephone # </label>
                            <FormControl type="text" placeholder="Enter Primary Care Telephone" bsSize="sm"/>
                        </div>
                    </div>

                    <div className="line-12">
                        <div className="label-input">

                            <label> Code Status </label>
                            <FormControl componentClass="textarea" placeholder="Enter Code Status"/>
                        </div>
                    </div>

                    <div className="line-13">
                        <div className="label-input">

                            <label> Advanced Directives </label>
                            <select className="form-control input-sm">
                                <option>Yes</option>
                                <option>No</option>
                                <option selected={true}>Unspecified</option>
                            </select>
                            <FormControl componentClass="textarea" placeholder="Describe Advanced Directives"/>
                        </div>
                    </div>

                    {/*-------------------------Patient Representation or Power Of Attorney-----------------------------*/}
                    <h4>Patient Representation or Power Of Attorney</h4>

                    <div className="line-14">
                        <div className="label-input">
                            <select className="form-control input-sm">
                                <option>Yes</option>
                                <option>No</option>
                                <option selected={true}>Unspecified</option>
                            </select>

                            <label>Name</label>
                            <FormControl type="text" placeholder="Enter Name" bsSize="sm"/>
                        </div>
                    </div>

                    <div className="line-15">
                        <div className="label-input">
                            <label>Relationship</label>
                            <FormControl type="text" placeholder="Enter Relationship" bsSize="sm"/>
                        </div>

                        <div className="label-input">
                            <label>Telephone #</label>
                            <FormControl type="text" placeholder="Enter Telephone" bsSize="sm"/>
                        </div>
                    </div>

                    <div className="line-16">
                        <div className="label-input">
                            <label>Notes</label>
                            <FormControl componentClass="textarea" placeholder="Enter Notes"/>
                        </div>

                        <div className="label-input">
                            <label>Patient Network Notes</label>
                            <FormControl componentClass="textarea" placeholder="Enter Patient Network Notes"/>
                        </div>
                    </div>
                    {/*-------------------------Pre-Hospital Residance-----------------------------*/}
                    <h4>Pre-Hospital Residance</h4>
                    <div className="line-17">
                        <div className="label-input">
                            <label>Pre-Hospital Living Setting</label>
                            <select className="form-control input-sm">
                                <option selected={true}>Home</option>
                                <option>Hospital</option>
                            </select>
                        </div>

                        <div className="label-input">
                            <label>Pre-Hospital Living With</label>
                            <select className="form-control input-sm">
                                <option selected={true}>Relative</option>
                                <option>Nurse</option>
                                <option>Doctor</option>
                            </select>
                        </div>
                    </div>

                    <label>Pre-Hospital Residance Notes</label>
                    <FormControl componentClass="textarea" placeholder="Enter Patient Network Notes"/>

                    {/*-------------------------Language / Communication Needs-----------------------------*/}
                    <h4>Language / Communication Needs</h4>
                    <div className="line-18">
                        <div className="label-input">
                            <label>English Speaking</label>
                            <select className="form-control input-sm">
                                <option>Yes</option>
                                <option>No</option>
                                <option selected={true}>Unspecified</option>
                            </select>
                        </div>

                        <div className="label-input">
                            <label>Need or want an interpreter</label>
                            <select className="form-control input-sm">
                                <option>Yes</option>
                                <option selected={true}>No</option>
                            </select>
                        </div>
                    </div>
                    <div className="line-19">
                        <div className="label-input">
                            <label>Preferred Language</label>
                            <FormControl type="text" placeholder="Enter Preferred Language" bsSize="sm"/>
                        </div>

                        <div className="label-input">
                            <label>Preferred Written Language</label>
                            <FormControl type="text" placeholder="Enter Preferred Written Language" bsSize="sm"/>
                        </div>
                    </div>
                    <div className="label-input">
                        <label>Other Communication Needs</label>
                        <FormControl componentClass="textarea" placeholder="Enter Patient Network Notes"/>
                    </div>

                    {/*-------------------------Religious / Cultural Considerations-----------------------------*/}
                    <h4>Religious / Cultural Considerations</h4>
                    <div className="line-20">
                        <div className="label-input">
                            <label>Religion</label>
                            <select className="form-control input-sm">
                                <option>Methodist</option>
                                <option>Christian</option>
                                <option selected={true}>None</option>
                            </select>
                        </div>
                        <FormControl componentClass="textarea" placeholder="Enter Patient Network Notes"/>
                    </div>

                    <button className="btn btn-primary" type="submit">Save Demographics</button>

                </form>
            </div>

        );
    }
}

export default Demographics as React.ComponentClass;