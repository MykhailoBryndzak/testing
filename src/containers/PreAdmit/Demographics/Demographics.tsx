import * as React from 'react';
import {inject, observer} from 'mobx-react';
import './Demographics.less';

const KEY = 'DEMOGRAPHICS';

interface Props {
    preAdmitStore: any;
    $stateParams: {
        id: string
    };
}

interface State {
}

@inject('preAdmitStore')
@observer
class Demographics extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
    }

    render(): any {
        console.info(333, this);

        return (

            <div className="demographics">
                <div>
                    {/*-------------------------Patient Identification*-----------------------------*/}

                    <h4>Patient Identification*</h4>
                    <div className="line-0">
                        <div className="label-input">
                            <label className="is-required"> First Name </label>
                            <input
                                onChange={function () {
                                    console.info('First Name');
                                }}
                                type="text"
                                placeholder="Enter First Name"
                                className="form-control input-sm"
                                required={true}
                            />
                        </div>
                        <div className="label-input">
                            <label className="is-required"> Middle Initial </label>
                            <input
                                onChange={function () {
                                    console.info('Middle Initial');
                                }}
                                type="text"
                                placeholder="Enter Middle Initial"
                                className="form-control input-sm"
                                required={true}
                            />
                        </div>
                    </div>
                    <div className="line-1">
                        <div className="label-input">
                            <label className="is-required"> Last Name </label>
                            <input
                                onChange={function () {
                                    console.info('Last Name');
                                }}
                                type="text"
                                placeholder="Enter Last Name"
                                className="form-control input-sm"
                                required={true}
                            />
                        </div>
                        <div className="label-input">
                            <label> Suffix </label>
                            <input
                                onChange={function () {
                                    console.info('Suffix');
                                }}
                                type="text"
                                placeholder="Enter Suffix"
                                className="form-control input-sm"
                            />
                        </div>
                    </div>
                    <div className="line-2">
                        <div className="label-input">
                            <label> Birth Date </label>
                            <input
                                onChange={function () {
                                    console.info(' Birth Date');
                                }}
                                type="date"
                                placeholder="Enter Birth Date"
                                className="form-control input-sm"
                            />
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
                            <input
                                onChange={function () {
                                    console.info(' Social Security Number');
                                }}
                                type="text"
                                placeholder="Enter Social Security Number"
                                className="form-control input-sm"
                            />
                        </div>
                        <div className="label-input">
                            <label> Medicare Number </label>
                            <input
                                onChange={function () {
                                    console.info(' Medicare Number ');
                                }}
                                type="text"
                                placeholder="Enter Medicare Number"
                                className="form-control input-sm"
                            />
                        </div>
                    </div>
                    <div className="line-4">
                        <div className="label-input">
                            <label> Medicaid Number </label>
                            <input
                                onChange={function () {
                                    console.info('Medicaid Number');
                                }}
                                type="text"
                                placeholder="Enter Medicaid Number"
                                className="form-control input-sm"
                            />
                        </div>
                        <div className="label-input">
                            <label> Address </label>
                            <input
                                onChange={function () {
                                    console.info('Address');
                                }}
                                type="text"
                                placeholder="Enter Address"
                                className="form-control input-sm"
                            />
                        </div>
                    </div>
                    <div className="line-5">
                        <div className="label-input">
                            <label> City </label>
                            <input
                                onChange={function () {
                                    console.info('City');
                                }}
                                type="text"
                                placeholder="Enter City"
                                className="form-control input-sm"
                            />
                        </div>
                        <div className="label-input">

                            <label> State </label>
                            <input
                                onChange={function () {
                                    console.info('State');
                                }}
                                type="text"
                                placeholder="Enter State"
                                className="form-control input-sm"
                            />
                        </div>
                    </div>
                    <div className="line-6">
                        <div className="label-input">
                            <label> ZIP </label>
                            <input
                                onChange={function () {
                                    console.info('ZIP');
                                }}
                                type="text"
                                placeholder="Enter ZIP"
                                className="form-control input-sm"
                            />
                        </div>
                        <div className="label-input">
                            <label> Telephone # </label>
                            <input
                                onChange={function () {
                                    console.info('Telephone');
                                }}
                                type="text"
                                placeholder="Enter Telephone"
                                className="form-control input-sm"
                            />
                        </div>
                    </div>

                    <div className="line-7">
                        <div className="label-input">
                            <label>Race / Ethnicity</label>
                            <div>
                                <span>
                                    <input
                                        onChange={function () {
                                            console.info('AmericanIndian');
                                        }}
                                        type="checkbox"
                                        name="Ethnicity"
                                        value="AmericanIndian/AlaskaNative"
                                    /> American Indian or Alaska
                                    Native
                                </span>
                                <span>
                                    <input
                                        onChange={function () {
                                            console.info('Asian');
                                        }}
                                        type="checkbox"
                                        name="Ethnicity"
                                        value="Asian"
                                    /> Asian </span>
                                <span>
                                    <input
                                        onChange={function () {
                                            console.info('AfricanAmerican');
                                        }}
                                        type="checkbox"
                                        name="Ethnicity"
                                        value="Black/AfricanAmerican"
                                    /> Black or
                                    African American
                                </span>
                                <span>
                                    <input
                                        onChange={function () {
                                            console.info('Hispanic');
                                        }}
                                        type="checkbox"
                                        name="Ethnicity"
                                        value="Hispanic/Latino"
                                    /> Hispanic or
                                    Latino
                                </span>
                                <span>
                                    <input

                                        onChange={function () {
                                            console.info('NativeHawaiian');
                                        }}
                                        type="checkbox"
                                        name="Ethnicity"
                                        value="NativeHawaiian/OtherPacificIslander"
                                    />
                                     Native Havaiian or Other Pacific Islander
                                </span>
                                <span>
                                    <input

                                        onChange={function () {
                                            console.info('White');
                                        }}
                                        type="checkbox"
                                        name="Ethnicity"
                                        value="White"
                                    /> White
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
                            <input

                                onChange={function () {
                                    console.info('');
                                }}
                                type="text"
                                placeholder="Enter Next of Kin Name"

                                className="form-control input-sm"

                            />
                        </div>
                        <div className="label-input">

                            <label> Next of Kin Relationship </label>
                            <input
                                onChange={function () {
                                    console.info('');
                                }}
                                type="text"
                                placeholder="Enter Next of Kin Relationship"
                                className="form-control input-sm"
                            />
                        </div>
                    </div>

                    <div className="line-9">
                        <div className="label-input">

                            <label> Next of Kin Telephone # </label>
                            <input
                                onChange={function () {
                                    console.info('');
                                }}
                                type="text"
                                placeholder="Enter Next of Kin Telephone"
                                className="form-control input-sm"
                            />
                        </div>
                        <div className="label-input">

                            <label> Caregiver Name </label>
                            <input
                                onChange={function () {
                                    console.info('');
                                }}
                                type="text"
                                placeholder="Enter Caregiver Name"
                                className="form-control input-sm"
                            />
                        </div>
                    </div>

                    <div className="line-10">
                        <div className="label-input">

                            <label> Caregiver Relationship </label>
                            <input
                                onChange={function () {
                                    console.info('');
                                }}
                                type="text"
                                placeholder="Enter Caregiver Relationship"
                                className="form-control input-sm"
                            />
                        </div>
                        <div className="label-input">

                            <label> Caregiver Telephone # </label>
                            <input
                                onChange={function () {
                                    console.info('');
                                }}
                                type="text"
                                placeholder="Enter Caregiver Telephone"
                                className="form-control input-sm"
                            />
                        </div>
                    </div>

                    <div className="line-11">
                        <div className="label-input">

                            <label> Primary Care Provider </label>
                            <input
                                onChange={function () {
                                    console.info('');
                                }}
                                type="text"
                                placeholder="Enter Primary Care Provider"
                                className="form-control input-sm"
                            />
                        </div>
                        <div className="label-input">

                            <label> Primary Care Telephone # </label>
                            <input
                                onChange={function () {
                                    console.info('');
                                }}
                                type="text"
                                placeholder="Enter Primary Care Telephone"
                                className="form-control input-sm"
                            />
                        </div>
                    </div>

                    <div className="line-12">
                        <div className="label-input">

                            <label> Code Status </label>
                            <textarea className="form-control input-sm" placeholder="Enter Code Status"/>
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
                            <textarea className="form-control input-sm" placeholder="Describe Advanced Directives"/>
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
                            <input
                                onChange={function () {
                                    console.info('');
                                }}
                                type="text"
                                placeholder="Enter Name"
                                className="form-control input-sm"
                            />
                        </div>
                    </div>

                    <div className="line-15">
                        <div className="label-input">
                            <label>Relationship</label>
                            <input
                                onChange={function () {
                                    console.info('');
                                }}
                                type="text"
                                placeholder="Enter Relationship"
                                className="form-control input-sm"
                            />
                        </div>

                        <div className="label-input">
                            <label>Telephone #</label>
                            <input
                                onChange={function () {
                                    console.info('');
                                }}
                                type="text"
                                placeholder="Enter Telephone"
                                className="form-control input-sm"
                            />
                        </div>
                    </div>

                    <div className="line-16">
                        <div className="label-input">
                            <label>Notes</label>
                            <textarea className="form-control input-sm" placeholder="Enter Notes"/>
                        </div>

                        <div className="label-input">
                            <label>Patient Network Notes</label>
                            <textarea className="form-control input-sm" placeholder="Enter Patient Network Notes"/>
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
                    <textarea className="form-control input-sm" placeholder="Enter Patient Network Notes"/>

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
                            <input
                                onChange={function () {
                                    console.info('');
                                }}
                                type="text"
                                placeholder="Enter Preferred Language"
                                className="form-control input-sm"
                            />
                        </div>

                        <div className="label-input">
                            <label>Preferred Written Language</label>
                            <input
                                onChange={function () {
                                    console.info('');
                                }}
                                type="text"
                                placeholder="Enter Preferred Written Language"
                                className="form-control input-sm"
                            />
                        </div>
                    </div>
                    <div className="label-input">
                        <label>Other Communication Needs</label>
                        <textarea className="form-control input-sm" placeholder="Enter Patient Network Notes"/>
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
                        <textarea className="form-control input-sm" placeholder="Enter Patient Network Notes"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Demographics as React.ComponentClass;