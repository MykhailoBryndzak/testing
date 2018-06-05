import * as React from 'react';
import {inject, observer} from 'mobx-react';
import {FormControl} from "react-bootstrap";
import './Referral.less';

const KEY = 'REFERRAL';

interface Props {
    $stateParams: {
        id: string
    };
}

interface State {
    form: any;
}

@inject('formsStore')
@observer
class Referral extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="referral">
                {/*-------------------------Referral / Payer-----------------------------*/}

                <h4>Referral / Payer</h4>
                <form>

                    <div className="label-input">
                        <label>Date of Referral</label>
                        <FormControl type="date" placeholder="Enter Date of Referral" bsSize="sm"/>
                    </div>

                    <h4>Additional Admission Types</h4>

                    <select className="form-control input-sm">
                        <option value="" disabled={true} selected={true}>Select Admission Type</option>
                        <option>Cancer</option>
                        <option>Cardiovascular</option>
                        <option>CVA</option>
                        <option>Infectious Disease</option>
                        <option>IV Therapy</option>
                        <option>Pain Management</option>
                        <option>Rehabilitation</option>
                        <option>Respiratory Management</option>
                        <option>Transplant</option>
                        <option>Trauma</option>
                        <option>Ventilator Weaning</option>
                        <option>Wound Care</option>
                        <option>Other Complex Medical</option>
                    </select>

                    {/*-------------------------Referring Source Information-----------------------------*/}

                    <h4>Referring Source Information</h4>

                    <div>
                        <div className="line-0">
                            <div className="label-input">
                                <label> Referring Facility </label>
                                <FormControl type="text" placeholder="Enter Referring Facility" bsSize="sm"/>
                            </div>

                            <div className="label-input">
                                <label> (Admitted Form) Referring Facility Type: </label>
                                <select className="form-control input-sm">
                                    <option value="" disabled={true} selected={true}>Select Referring Facility Type</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </div>

                        <div className="line-1">
                            <div className="label-input">
                                <label> Referring Facility Admission Date </label>
                                <FormControl type="date" placeholder="Enter Date" bsSize="sm"/>
                            </div>

                            <div className="label-input">
                                <label> Contact Name </label>
                                <FormControl type="text" placeholder="Enter Contact Name" bsSize="sm"/>
                            </div>
                        </div>

                        <div className="line-2">
                            <div className="label-input">
                                <label> Telephone # </label>
                                <FormControl type="text" placeholder="Enter Telephone" bsSize="sm"/>
                            </div>

                            <div className="label-input">
                                <label> Referring Physician </label>
                                <FormControl type="text" placeholder="Enter Referring Physician" bsSize="sm"/>
                            </div>
                        </div>

                        <div className="line-3">
                            <div className="label-input">
                                <label> Telephone / Pager # </label>
                                <FormControl type="text" placeholder="Enter Telephone / Pager" bsSize="sm"/>
                            </div>

                            <div className="label-input">
                                <label> Telephone </label>
                                <FormControl type="text" placeholder="Enter Telephone" bsSize="sm"/>
                            </div>
                        </div>
                    </div>
                    {/*-------------------------Patient Medicare / Medicaid Number-----------------------------*/}

                    <h4>Patient Medicare / Medicaid Number</h4>
                    <div>
                        <div className="line-4">
                            <div className="label-input">
                                <label> Medicare Number </label>
                                <FormControl type="text" placeholder="Enter Medicare Number" bsSize="sm"/>
                            </div>

                            <div className="label-input">
                                <label> Medicaid Number </label>
                                <FormControl type="text" placeholder="Enter Medicaid Number" bsSize="sm"/>
                            </div>
                        </div>
                    </div>

                    {/*-------------------------Primary Insurance-----------------------------*/}

                    <h4>Primary Insurance</h4>
                    <div>
                        <div className="line-5">
                            <div className="label-input">
                                <label>Payer Information </label>
                                <label> (Admitted Form) Referring Facility Type: </label>
                                <select className="form-control input-sm">
                                    <option value="" disabled selected>Select One</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>

                            <div className="label-input">
                                <label> Insurer Name </label>
                                <FormControl type="text" placeholder="Insurer Name" bsSize="sm"/>
                            </div>
                        </div>

                        <div className="line-6">
                            <div className="label-input">
                                <label> Contact Name </label>
                                <FormControl type="text" placeholder="Enter Contact Name" bsSize="sm"/>
                            </div>

                            <div className="label-input">
                                <label> Telephone # </label>
                                <FormControl type="text" placeholder="Enter Telephone " bsSize="sm"/>
                            </div>
                        </div>

                        <div className="line-7">
                            <div className="label-input">
                                <label> Case Manager Name </label>
                                <FormControl type="text" placeholder="Enter Case Manager Name" bsSize="sm"/>
                            </div>

                            <div className="label-input">
                                <label> Telephone # </label>
                                <FormControl type="text" placeholder="Enter Telephone" bsSize="sm"/>
                            </div>
                        </div>

                        <div className="line-8">
                            <div className="label-input">
                                <label> Insured's Name </label>
                                <FormControl type="text" placeholder="Enter Insured's Name" bsSize="sm"/>
                            </div>

                            <div className="label-input">
                                <label> Insured's Employer </label>
                                <FormControl type="text" placeholder="Enter Insured's Employer" bsSize="sm"/>
                            </div>
                        </div>

                        <div className="line-9">
                            <div className="label-input">
                                <label> Policy # </label>
                                <FormControl type="text" placeholder="Enter Policy" bsSize="sm"/>
                            </div>

                            <div className="label-input">
                                <label> Group # </label>
                                <FormControl type="text" placeholder="Enter Group" bsSize="sm"/>
                            </div>
                        </div>
                        <div className="label-input">
                            <label>Authorization #</label>
                            <FormControl type="text" placeholder="Enter Authorization" bsSize="sm"/>
                        </div>
                    </div>
                    {/*-------------------------Secondary Insurance-----------------------------*/}

                    <h4>Secondary Insurance</h4>
                    <div>
                        <div className="line-10">
                            <div className="label-input">
                                <label>Payer Information </label>
                                <label> (Admitted Form) Referring Facility Type: </label>
                                <select className="form-control input-sm">
                                    <option value="" disabled selected>Select One</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>

                            <div className="label-input">
                                <label> Insurer Name </label>
                                <FormControl type="text" placeholder="Insurer Name" bsSize="sm"/>
                            </div>
                        </div>

                        <div className="line-11">
                            <div className="label-input">
                                <label> Contact Name </label>
                                <FormControl type="text" placeholder="Enter Contact Name" bsSize="sm"/>
                            </div>

                            <div className="label-input">
                                <label> Telephone # </label>
                                <FormControl type="text" placeholder="Enter Telephone " bsSize="sm"/>
                            </div>
                        </div>

                        <div className="line-12">
                            <div className="label-input">
                                <label> Case Manager Name </label>
                                <FormControl type="text" placeholder="Enter Case Manager Name" bsSize="sm"/>
                            </div>

                            <div className="label-input">
                                <label> Telephone # </label>
                                <FormControl type="text" placeholder="Enter Telephone" bsSize="sm"/>
                            </div>
                        </div>

                        <div className="line-13">
                            <div className="label-input">
                                <label> Insured's Name </label>
                                <FormControl type="text" placeholder="Enter Insured's Name" bsSize="sm"/>
                            </div>

                            <div className="label-input">
                                <label> Insured's Employer </label>
                                <FormControl type="text" placeholder="Enter Insured's Employer" bsSize="sm"/>
                            </div>
                        </div>

                        <div className="line-14">
                            <div className="label-input">
                                <label> Policy # </label>
                                <FormControl type="text" placeholder="Enter Policy" bsSize="sm"/>
                            </div>

                            <div className="label-input">
                                <label> Group # </label>
                                <FormControl type="text" placeholder="Enter Group" bsSize="sm"/>
                            </div>
                        </div>
                        <div className="label-input">
                            <label>Authorization #</label>
                            <FormControl type="text" placeholder="Enter Authorization" bsSize="sm"/>
                        </div>
                    </div>
                    <div className="label-input">
                        <label>Insurance Notes</label>
                        <FormControl componentClass="textarea" placeholder="Enter Insurance Notes"/>
                    </div>

                    <button className="btn btn-primary" type="submit">Save Referral</button>

                </form>

            </div>
        );
    }
}

export default Referral as React.ComponentClass;