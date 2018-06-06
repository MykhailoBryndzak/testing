import * as React from 'react';
import { FormControl} from 'react-bootstrap';
import { inject, observer} from 'mobx-react';
import * as mobx from 'mobx';
import './Admit.less';

const KEY = 'DEMOGRAPHICS';

interface Props {
    admitStore: any;
    $stateParams: {
        id: string
    };
}

interface State {
}

@inject('admitStore')
@observer
class Admit extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        if (!this.props.admitStore.admit[this.props.$stateParams.id]) {
            this.props.admitStore.addAdmit(this.props.$stateParams.id);
        }
    }

    render(): any {
        return (
            <div className="main-admit">
                <h3>Admit</h3>
                <div className="admit">

                    <div className="pre-admission-service">
                        <h4>Pre-Admission Service Use</h4>

                        <div className="label-input">
                            <label> Pre-Hospital Living Setting </label>
                            <select className="form-control input-sm">
                                <option disabled={true} selected={true}>select one</option>
                                <option>Home</option>
                                <option>Board&amp;Care</option>
                                <option>Assisted Living Residence</option>
                                <option>Skilled Nursing Facility</option>
                                <option>Long-Term Care</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className="label-input">
                            <label> Pre-Hospital Living With </label>
                            <select className="form-control input-sm">
                                <option>Male</option>
                                <option>Female</option>
                                <option selected={true}>unspesified</option>
                            </select>
                        </div>

                        <div className="label-input">
                            <label> Admitted Form </label>
                            <i>Immediately preceding this admission, where was the patient?</i>
                            <select className="form-control input-sm">
                                <option disabled={true} selected={true}>select one</option>
                                <option>Community residential setting</option>
                                <option>Long-term care facility (LTC)</option>
                                <option>Skilled nursing facility (SNF)</option>
                                <option>Hospital emergency department</option>
                                <option>Short-stay acute hospital (IPPS)</option>
                                <option>Long-term care hospital (LTCH)</option>
                                <option>Inpatient rehabilitation facility or unit (IRF)</option>
                                <option>Psychiatric hospital or unit</option>
                                <option>Intellectually disabled/developmentally disable facility</option>
                                <option>Hospice</option>
                                <option>None of the above</option>
                            </select>
                        </div>

                        <div className="label-input">
                            <label> Referring Facility </label>
                            <FormControl type="text" placeholder="Enter Referring Facility" bsSize="sm"/>
                        </div>

                        <div className="label-input">
                            <label> Referring Facility Admission Date </label>
                            <FormControl type="date" placeholder="Enter Admission Date" bsSize="sm"/>
                        </div>

                        <div className="label-input">
                            <label> Referring Facility LOS </label>
                            <FormControl type="text" placeholder="Enter Referring Facility LOS" bsSize="sm"/>
                        </div>

                        <h5>Referring Facility ICU/CCU Stay</h5>
                        <div className="label-input">
                            <i>Was the patient admited to the ICU/CCU during their stay in the referring facility?</i>
                            <select className="form-control input-sm">
                                <option>Bypass this question</option>
                                <option>Yes</option>
                                <option>No</option>
                                <option selected={true}>Unspecified</option>
                            </select>

                            <label> Referring Facility ICU / CCU Stay Dates </label>
                            <div className="referring-facility">
                                <div className="label-input">
                                    <label> Admit Date </label>
                                    <FormControl type="date" placeholder="Enter Admit Date" bsSize="sm"/>
                                </div>

                                <div className="label-input">
                                    <label> Transfer Date </label>
                                    <FormControl type="date" placeholder="Enter Transfer Date" bsSize="sm"/>
                                </div>
                            </div>

                            <button> Add More</button>
                        </div>

                        <div className="label-input">
                            <label> Referring Facility Primary Diagnostics </label>
                            <FormControl type="text" placeholder="Enter Referring Facility Primary Diagnostics"
                                         bsSize="sm"/>
                        </div>

                        <div className="label-input">
                            <label> Referring Facility Problem List </label>
                            <FormControl componentClass="textarea" placeholder="Enter Referring Facility Problem List"/>
                        </div>
                    </div>

                    {/*-------------------------Admission information-----------------------------*/}

                    <div className="admission-information">
                        <h4>Admission information</h4>

                        <div className="label-input">
                            <label> Admission Assessment Reference Date </label>
                            <FormControl type="date" placeholder="Enter Admission Assessment Reference Date"
                                         bsSize="sm"/>
                        </div>

                        <div className="label-input">
                            <label> Admission Date </label>
                            <FormControl type="date" placeholder="Enter  Admission Date" bsSize="sm"/>
                        </div>

                        <h5>Primary Admission Type</h5>
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
                        <br/>
                        <FormControl type="text" placeholder="Enter other Primary Admission Type" bsSize="sm"/>

                        <h5>Additional Admission Types</h5>
                        <div className="additional-admission">
                            <span>
                                <input type="checkbox" name="Additional Admission" value="Cancer"/>Cancer
                            </span>
                            <span>
                                <input type="checkbox" name="Additional Admission" value="Cardiovascular"/> Cardiovascular
                            </span>
                            <span>
                                <input type="checkbox" name="Additional Admission" value="CVA"/> CVA
                            </span>
                            <span>
                                <input type="checkbox" name="Additional Admission" value="Infectious Disease"/> Infectious Disease
                            </span>
                            <span>
                                <input type="checkbox" name="Additional Admission" value="IV Therapy"/> IV Therapy
                            </span>
                            <span>
                                <input type="checkbox" name="Additional Admission" value="Pain Management"/> Pain Management
                            </span>
                            <span>
                                <input type="checkbox" name="Additional Admission" value="Rehabilitation"/> Rehabilitation
                            </span>
                            <span>
                                <input type="checkbox" name="Additional Admission" value="Respiratory Management"/> Respiratory Management
                            </span>
                            <span>
                                <input type="checkbox" name="Additional Admission" value="Transplant"/> Transplant
                            </span>
                            <span>
                                <input type="checkbox" name="Additional Admission" value="Trauma"/> Trauma
                            </span>
                            <span>
                                <input type="checkbox" name="Additional Admission" value="entilator Weaning"/> Ventilator Weaning
                            </span>
                            <span>
                                <input type="checkbox" name="Additional Admission" value="Wound Care"/> Wound Care
                            </span>
                            <span>
                                <input type="checkbox" name="Additional Admission" value="Other Complex Medical"/> Other Complex Medical
                                <FormControl type="text" placeholder="Enter  Other Complex Medical" bsSize="sm"/>
                            </span>
                        </div>
                    </div>

                </div>
            </div>

        );

    }
}

export default Admit as React.ComponentClass;