import * as React from 'react';
import {inject, observer} from 'mobx-react';
import './Referral.less';

const KEY = 'REFERRAL';

interface Props {
    preAdmitStore: any;
    $stateParams: {
        id: string
    };
}

interface State {
    form: any;
}

@inject('preAdmitStore')
@observer
class Referral extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
    }

    render(): any {
        let self = this;
        let currentPreAdmitId = self.props.$stateParams.id;

        let currentPreAdmit = self.props.preAdmitStore.preAdmit[currentPreAdmitId];

        return <div className="referral">
            {/*-------------------------Referral / Payer-----------------------------*/}

            <h4>Referral / Payer</h4>

            <div className="label-input">
                <label>Date of Referral</label>
                <input
                    name="referralDate"
                    type="date"
                    placeholder="Enter Date of Referral"
                    className="form-control input-sm"
                    onChange={(e) => {
                        self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                    }}
                />
            </div>

            <h4>Additional Admission Types</h4>

            <select
                name="admissionType"
                className="form-control input-sm"
                onChange={(e) => {
                    self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                }}
            >
                <option value={0} disabled={true} selected={true}>Select Admission Type</option>
                <option value={1}>Cancer</option>
                <option value={2}>Cardiovascular</option>
                <option value={3}>CVA</option>
                <option value={4}>Infectious Disease</option>
                <option value={5}>IV Therapy</option>
                <option value={6}>Pain Management</option>
                <option value={7}>Rehabilitation</option>
                <option value={8}>Respiratory Management</option>
                <option value={9}>Transplant</option>
                <option value={10}>Trauma</option>
                <option value={11}>Ventilator Weaning</option>
                <option value={12}>Wound Care</option>
                <option value={13}>Other Complex Medical</option>
                <input
                    name="additionalAdmissionTypes_OtherNote"
                    type="text"
                    placeholder="Enter Other Complex Medical"
                    className="form-control input-sm"
                />
            </select>

            {/*-------------------------Referring Source Information-----------------------------*/}

            <h4>Referring Source Information</h4>

            <div>
                <div className="line-0">
                    <div className="label-input">
                        <label> Referring Facility </label>
                        <input
                            name="referringFacility"
                            type="text"
                            placeholder="Enter Referring Facility"
                            className="form-control input-sm"
                            onChange={(e) => {
                                self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                            }}
                        />
                    </div>

                    <div className="label-input">
                        <label> (Admitted Form) Referring Facility Type: </label>
                        <select
                            name="referringFacilityType"
                            className="form-control input-sm"
                            onChange={(e) => {
                                self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                            }}
                        >
                            <option value="" disabled={true} selected={true}>
                                Select Referring Facility Type
                            </option>
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
                        <input
                            name="referringFacilityAdmissionDate"
                            type="date"
                            placeholder="Enter Date"
                            className="form-control input-sm"
                            onChange={(e) => {
                                self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                            }}
                        />
                    </div>

                    <div className="label-input">
                        <label> Contact Name </label>
                        <input
                            name="facilityContactName"
                            type="text"
                            placeholder="Enter Contact Name"
                            className="form-control input-sm"
                            onChange={(e) => {
                                self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                            }}
                        />
                    </div>
                </div>

                <div className="line-2">
                    <div className="label-input">
                        <label> Telephone # </label>
                        <input
                            name="facilityTelephone"
                            type="text"
                            placeholder="Enter Telephone"
                            className="form-control input-sm"
                            onChange={(e) => {
                                self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                            }}
                        />
                    </div>

                    <div className="label-input">
                        <label> Referring Physician </label>
                        { /*??????????????*/ }

                        <input
                            name="facilityRoomNumber"
                            type="text"
                            placeholder="Enter Referring Physician"
                            className="form-control input-sm"
                            onChange={(e) => {
                                self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                            }}
                        />
                    </div>
                </div>

                <div className="line-3">
                    <div className="label-input">
                        <label> Telephone / Pager # </label>
                        {/*????????   "facilityUnit": "string"  ??????*/}
                        <input
                            type="text"
                            placeholder="Enter Telephone / Pager"
                            className="form-control input-sm"

                        />
                    </div>
                </div>
            </div>
            {/*-------------------------Patient Medicare / Medicaid Number-----------------------------*/}

            <h4>Patient Medicare / Medicaid Number</h4>
            <div>
                <div className="line-4">
                    <div className="label-input">
                        <label> Medicare Number </label>
                        <input
                            name="medicareNumber"
                            type="text"
                            placeholder="Enter Medicare Number"
                            className="form-control input-sm"
                            onChange={(e) => {
                                self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                            }}
                        />
                    </div>

                    <div className="label-input">
                        <label> Medicaid Number </label>
                        <input
                            name="medicaidNumber"
                            type="text"
                            placeholder="Enter Medicaid Number"
                            className="form-control input-sm"
                            onChange={(e) => {
                                self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                            }}
                        />
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
                        <select
                            name="primaryInsurer_PayerInformation"
                            className="form-control input-sm"
                            onChange={(e) => {
                                self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                            }}
                        >
                            <option value="" disabled={true} selected={true}>Select One</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>

                    <div className="label-input">
                        <label> Insurer Name </label>
                        <input
                            name="primaryInsurer_InsurerName"
                            type="text"
                            placeholder="Insurer Name"
                            className="form-control input-sm"
                            onChange={(e) => {
                                self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                            }}
                        />
                    </div>
                </div>

                <div className="line-6">
                    <div className="label-input">
                        <label> Contact Name </label>
                        <input
                            name="primaryInsurer_InsurerContactName"
                            type="text"
                            placeholder="Enter Contact Name"
                            className="form-control input-sm"
                            onChange={(e) => {
                                self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                            }}
                        />
                    </div>

                    <div className="label-input">
                        <label> Telephone # </label>
                        <input
                            name="primaryInsurer_InsurerTelephone"
                            type="text"
                            placeholder="Enter Telephone"
                            className="form-control input-sm"
                            onChange={(e) => {
                                self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                            }}
                        />
                    </div>
                </div>

                <div className="line-7">
                    <div className="label-input">
                        <label> Case Manager Name </label>
                        <input
                            name="primaryInsurer_CaseManagerName"
                            type="text"
                            placeholder="Enter Case Manager Name"
                            className="form-control input-sm"
                            onChange={(e) => {
                                self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                            }}
                        />
                    </div>

                    <div className="label-input">
                        <label> Telephone # </label>
                        <input
                            name="primaryInsurer_CaseManagerTelephone"
                            type="text"
                            placeholder="Enter Telephone"
                            className="form-control input-sm"
                            onChange={(e) => {
                                self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                            }}
                        />
                    </div>
                </div>

                <div className="line-8">
                    <div className="label-input">
                        <label> Insured's Name </label>
                        <input
                            name="primaryInsurer_InsuredsName"
                            type="text"
                            placeholder="Enter Insured's Name"
                            className="form-control input-sm"
                            onChange={(e) => {
                                self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                            }}
                        />
                    </div>

                    <div className="label-input">
                        <label> Insured's Employer </label>
                        <input
                            name="primaryInsurer_InsuredsEmployer"
                            type="text"
                            placeholder="Enter Insured's Employer"
                            className="form-control input-sm"
                        />
                    </div>
                </div>

                <div className="line-9">
                    <div className="label-input">
                        <label> Policy # </label>
                        <input
                            name="primaryInsurer_Policy"
                            type="text"
                            placeholder="Enter Policy"
                            className="form-control input-sm"
                            onChange={(e) => {
                                self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                            }}
                        />
                    </div>

                    <div className="label-input">
                        <label> Group # </label>
                        <input
                            name="primaryInsurer_Group"
                            type="text"
                            placeholder="Enter Group"
                            className="form-control input-sm"
                            onChange={(e) => {
                                self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                            }}
                        />
                    </div>
                </div>
                <div className="label-input">
                    <label>Authorization #</label>
                    <input
                        name="primaryInsurer_Authorization"
                        type="text"
                        placeholder="Enter Authorization"
                        className="form-control input-sm"
                        onChange={(e) => {
                            self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                        }}
                    />
                </div>
            </div>
            {/*-------------------------Secondary Insurance-----------------------------*/}

            <h4>Secondary Insurance</h4>
            <div>
                <div className="line-10">
                    <div className="label-input">
                        <label>Payer Information </label>
                        <label> (Admitted Form) Referring Facility Type: </label>
                        <select
                            name="secondaryInsurer_PayerInformation"
                            className="form-control input-sm"
                            onChange={(e) => {
                                self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                            }}
                        >
                            <option disabled={true} selected={true}>Select One</option>
                            <option value={0}>0</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                        </select>
                    </div>

                    <div className="label-input">
                        <label> Insurer Name </label>
                        <input
                            name="secondaryInsurer_InsurerName"
                            type="text"
                            placeholder="Insurer Name"
                            className="form-control input-sm"
                            onChange={(e) => {
                                self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                            }}
                        />
                    </div>
                </div>

                <div className="line-11">
                    <div className="label-input">
                        <label> Contact Name </label>
                        <input
                            name="secondaryInsurer_InsurerContactName"
                            type="text"
                            placeholder="Enter Contact Name"
                            className="form-control input-sm"
                            onChange={(e) => {
                                self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                            }}
                        />
                    </div>

                    <div className="label-input">
                        <label> Telephone # </label>
                        <input
                            name="secondaryInsurer_InsurerTelephone"
                            type="text"
                            placeholder="Enter Telephone "
                            className="form-control input-sm"
                            onChange={(e) => {
                                self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                            }}
                        />
                    </div>
                </div>

                <div className="line-12">
                    <div className="label-input">
                        <label> Case Manager Name </label>
                        <input
                            name="secondaryInsurer_CaseManagerName"
                            type="text"
                            placeholder="Enter Case Manager Name"
                            className="form-control input-sm"
                            onChange={(e) => {
                                self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                            }}
                        />
                    </div>

                    <div className="label-input">
                        <label> Telephone # </label>
                        <input
                            name="secondaryInsurer_CaseManagerTelephone"
                            type="text"
                            placeholder="Enter Telephone"
                            className="form-control input-sm"
                            onChange={(e) => {
                                self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                            }}
                        />
                    </div>
                </div>

                <div className="line-13">
                    <div className="label-input">
                        <label> Insured's Name </label>
                        <input
                            name="secondaryInsurer_InsuredsName"
                            type="text"
                            placeholder="Enter Insured's Name"
                            className="form-control input-sm"
                            onChange={(e) => {
                                self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                            }}
                        />
                    </div>

                    <div className="label-input">
                        <label> Insured's Employer </label>
                        <input
                            name="secondaryInsurer_InsuredsEmployer"
                            type="text"
                            placeholder="Enter Insured's Employer"
                            className="form-control input-sm"
                            onChange={(e) => {
                                self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                            }}
                        />
                    </div>
                </div>

                <div className="line-14">
                    <div className="label-input">
                        <label> Policy # </label>
                        <input
                            name="secondaryInsurer_Policy"
                            type="text"
                            placeholder="Enter Policy"
                            className="form-control input-sm"
                            onChange={(e) => {
                                self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                            }}
                        />
                    </div>

                    <div className="label-input">
                        <label> Group # </label>
                        <input
                            name="secondaryInsurer_Group"
                            type="text"
                            placeholder="Enter Group"
                            className="form-control input-sm"
                            onChange={(e) => {
                                self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                            }}
                        />
                    </div>
                </div>
                <div className="label-input">
                    <label>Authorization #</label>
                    <input
                        name="secondaryInsurer_Authorization"
                        type="text"
                        placeholder="Enter Authorization"
                        className="form-control input-sm"
                        onChange={(e) => {
                            self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                        }}
                    />
                </div>
            </div>

            {/*-------------------------Tertiary Insurer-----------------------------*/}


            <h4>Tertiary Insurer</h4>
            <div>
                <div className="line-10">
                    <div className="label-input">
                        <label>Payer Information </label>
                        <label> (Admitted Form) Referring Facility Type: </label>
                        <select
                            name="tertiaryInsurer_PayerInformation"
                            className="form-control input-sm"
                            onChange={(e) => {
                                self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                            }}
                        >
                            <option disabled={true} selected={true}>Select One</option>
                            <option value={0}>0</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                        </select>
                    </div>

                    <div className="label-input">
                        <label> Insurer Name </label>
                        <input
                            name="tertiaryInsurer_InsurerName"
                            type="text"
                            placeholder="Insurer Name"
                            className="form-control input-sm"
                            onChange={(e) => {
                                self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                            }}
                        />
                    </div>
                </div>

                <div className="line-11">
                    <div className="label-input">
                        <label> Contact Name </label>
                        <input
                            name="tertiaryInsurer_InsurerContactName"
                            type="text"
                            placeholder="Enter Contact Name"
                            className="form-control input-sm"
                            onChange={(e) => {
                                self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                            }}
                        />
                    </div>

                    <div className="label-input">
                        <label> Telephone # </label>
                        <input
                            name="tertiaryInsurer_InsurerTelephone"
                            type="text"
                            placeholder="Enter Telephone "
                            className="form-control input-sm"
                            onChange={(e) => {
                                self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                            }}
                        />
                    </div>
                </div>

                <div className="line-12">
                    <div className="label-input">
                        <label> Case Manager Name </label>
                        <input
                            name="tertiaryInsurer_CaseManagerName"
                            type="text"
                            placeholder="Enter Case Manager Name"
                            className="form-control input-sm"
                            onChange={(e) => {
                                self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                            }}
                        />
                    </div>

                    <div className="label-input">
                        <label> Telephone # </label>
                        <input
                            name="tertiaryInsurer_CaseManagerTelephone"
                            type="text"
                            placeholder="Enter Telephone"
                            className="form-control input-sm"
                            onChange={(e) => {
                                self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                            }}
                        />
                    </div>
                </div>

                <div className="line-13">
                    <div className="label-input">
                        <label> Insured's Name </label>
                        <input
                            name="tertiaryInsurer_InsuredsName"
                            type="text"
                            placeholder="Enter Insured's Name"
                            className="form-control input-sm"
                            onChange={(e) => {
                                self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                            }}
                        />
                    </div>

                    <div className="label-input">
                        <label> Insured's Employer </label>
                        <input
                            name="tertiaryInsurer_InsuredsEmployer"
                            type="text"
                            placeholder="Enter Insured's Employer"
                            className="form-control input-sm"
                            onChange={(e) => {
                                self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                            }}
                        />
                    </div>
                </div>

                <div className="line-14">
                    <div className="label-input">
                        <label> Policy # </label>
                        <input
                            name="tertiaryInsurer_Policy"
                            type="text"
                            placeholder="Enter Policy"
                            className="form-control input-sm"
                            onChange={(e) => {
                                self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                            }}
                        />
                    </div>

                    <div className="label-input">
                        <label> Group # </label>
                        <input
                            name="tertiaryInsurer_Group"
                            type="text"
                            placeholder="Enter Group"
                            className="form-control input-sm"
                            onChange={(e) => {
                                self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                            }}
                        />
                    </div>
                </div>
                <div className="label-input">
                    <label>Authorization #</label>
                    <input
                        name="tertiaryInsurer_Authorization"
                        type="text"
                        placeholder="Enter Authorization"
                        className="form-control input-sm"
                        onChange={(e) => {
                            self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                        }}
                    />
                </div>
            </div>
        </div>;
    }
}

export default Referral as React.ComponentClass;