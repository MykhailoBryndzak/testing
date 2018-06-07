import * as React from 'react';
import {inject, observer} from 'mobx-react';
import './Demographics.less';
import {object, string} from 'prop-types';

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
        let self = this;
        let currentPreAdmitId = self.props.$stateParams.id;

        let currentPreAdmit = self.props.preAdmitStore.preAdmit[currentPreAdmitId];

        function selectElement(id: string, valueToSelect: string): void {
            let element = document.getElementById(id);
            if (!!element && !!valueToSelect) {
                element.nodeValue = valueToSelect;
            }
        }

        selectElement('select-gender', currentPreAdmit.gender);
        return (

            <div className="demographics">
                <div>
                    {/*-------------------------Patient Identification*-----------------------------*/}

                    <h4>Patient Identification*</h4>
                    <div className="line-0">
                        <div className="label-input">
                            <label className="is-required"> First Name </label>
                            <input
                                name="firstName"
                                value={currentPreAdmit.firstName}
                                onChange={(e) => {
                                    self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
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
                                name="middleInitial"
                                value={currentPreAdmit.middleInitial}
                                onChange={(e) => {
                                    self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
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
                                name="lastName"
                                value={currentPreAdmit.lastName}
                                onChange={(e) => {
                                    self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
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
                                name="nameSuffix"
                                onChange={(e) => {
                                    self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
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
                                name="birthDate"
                                value={currentPreAdmit.birthDate}
                                onChange={(e) => {
                                    self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                                }}
                                type="date"
                                placeholder="Enter Birth Date"
                                className="form-control input-sm"
                            />
                        </div>
                        <div className="label-input">
                            <label> Gender </label>
                            <select
                                name="name"
                                id="select-gender"
                                className="form-control input-sm"
                                onChange={(e) => {
                                    self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                                }}
                            >
                                <option value="MALE">Male</option>
                                <option value="FEMALE">Female</option>
                                <option value="UNSPECIFIED">Unspecified</option>
                            </select>
                        </div>
                    </div>
                    <div className="line-3">
                        <div className="label-input">
                            <label> Social Security Number </label>
                            <input
                                name="socialSecurityNumber"
                                onChange={(e) => {
                                    self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                                }}
                                type="text"
                                placeholder="Enter Social Security Number"
                                className="form-control input-sm"
                            />
                        </div>
                        <div className="label-input">
                            <label> Medicare Number </label>
                            <input
                                name="medicareNumber"
                                onChange={(e) => {
                                    self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
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
                                name="medicaidNumber"
                                onChange={(e) => {
                                    self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                                }}
                                type="text"
                                placeholder="Enter Medicaid Number"
                                className="form-control input-sm"
                            />
                        </div>
                        <div className="label-input">
                            <label> Address </label>
                            <input
                                name="address"
                                value={currentPreAdmit.address}
                                onChange={(e) => {
                                    self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
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
                                name="city"
                                value={currentPreAdmit.city}
                                onChange={(e) => {
                                    self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                                }}
                                type="text"
                                placeholder="Enter City"
                                className="form-control input-sm"
                            />
                        </div>
                        <div className="label-input">

                            <label> State </label>
                            <input
                                name="state"
                                value={currentPreAdmit.state}
                                onChange={(e) => {
                                    self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
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
                                name="zip"
                                onChange={(e) => {
                                    self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                                }}
                                type="text"
                                placeholder="Enter ZIP"
                                className="form-control input-sm"
                            />
                        </div>
                        <div className="label-input">
                            <label> Telephone # </label>
                            <input
                                name="phone"
                                onChange={(e) => {
                                    self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
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
                                        name="race_AfricanAmerican"
                                        onChange={(e) => {
                                            self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                                        }}
                                        type="checkbox"
                                        value="race_AfricanAmerican"
                                    /> AfricanAmerican
                                </span>
                                <span>
                                    <input
                                        name="race_AmericanIndian"
                                        onChange={(e) => {
                                            self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                                        }}
                                        type="checkbox"
                                        value="race_AmericanIndian"
                                    /> American Indian
                                </span>
                                <span>
                                    <input
                                        name="race_Asian"
                                        onChange={(e) => {
                                            self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                                        }}
                                        type="checkbox"
                                        value="race_Asian"
                                    /> Asian
                                </span>
                                <span>
                                    <input
                                        name="race_HispanicLatino"
                                        onChange={(e) => {
                                            self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                                        }}
                                        type="checkbox"
                                        value="race_HispanicLatino"
                                    /> Hispanic or Latino
                                </span>
                                <span>
                                    <input
                                        name="race_HawaiianPacificIsland"
                                        onChange={(e) => {
                                            self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                                        }}
                                        type="checkbox"
                                        value="race_HawaiianPacificIsland"
                                    />
                                     Native Hawaiian or Other Pacific Islander
                                </span>
                                <span>
                                    <input
                                        name="race_White"
                                        onChange={(e) => {
                                            self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                                        }}
                                        type="checkbox"
                                        value="race_White"
                                    /> White
                                </span>
                            </div>
                        </div>
                        <div className="label-input">
                            <label> Marital Status </label>
                            <select
                                name="marital"
                                id="select-marital-status"
                                className="form-control input-sm"
                                onChange={(e) => {
                                    self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                                }}
                            >
                                <option value="MARRIED" selected={true}>Married</option>
                                <option value="UNMARRIED">Unmarried</option>
                                <option value="ABANDONED">Abandoned</option>
                            </select>
                        </div>
                    </div>
                    {/*-------------------------Patient Identification-----------------------------*/}

                    <h4>Patient Network</h4>

                    <div className="line-8">
                        <div className="label-input">
                            <label> Next of Kin Name </label>
                            <input
                                name="nextOfKinName"
                                onChange={(e) => {
                                    self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                                }}
                                type="text"
                                placeholder="Enter Next of Kin Name"
                                className="form-control input-sm"
                            />
                        </div>
                        <div className="label-input">

                            <label> Next of Kin Relationship </label>
                            <input
                                name="nextOfKinNameRelationship"
                                onChange={(e) => {
                                    self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
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
                                name="nextOfKinNameTelephone"
                                onChange={(e) => {
                                    self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                                }}
                                type="text"
                                placeholder="Enter Next of Kin Telephone"
                                className="form-control input-sm"
                            />
                        </div>
                        <div className="label-input">
                            <label> Caregiver Name </label>
                            <input
                                name="caregiverName"
                                onChange={(e) => {
                                    self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
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
                                name="caregiverNameRelationship"
                                onChange={(e) => {
                                    self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                                }}
                                type="text"
                                placeholder="Enter Caregiver Relationship"
                                className="form-control input-sm"
                            />
                        </div>
                        <div className="label-input">
                            <label> Caregiver Telephone # </label>
                            <input
                                name="caregiverNameTelephone"
                                onChange={(e) => {
                                    self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
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
                                name="primaryCareProvider"
                                onChange={(e) => {
                                    self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                                }}
                                type="text"
                                placeholder="Enter Primary Care Provider"
                                className="form-control input-sm"
                            />
                        </div>
                        <div className="label-input">

                            <label> Primary Care Telephone # </label>
                            <input
                                name="primaryCareProviderTelephone"
                                onChange={(e) => {
                                    self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
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
                            <textarea
                                name="codeStatus"
                                className="form-control input-sm"
                                placeholder="Enter Code Status"
                                onChange={(e) => {
                                    self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                                }}
                            />
                        </div>
                    </div>
                    <div className="line-13">
                        <div className="label-input">

                            <label> Advanced Directives </label>
                            <select
                                name="codeStatusAdvDirectives"
                                id="select-advanced-directives"
                                className="form-control input-sm"
                                onChange={(e) => {
                                    self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                                }}
                            >
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                                <option value="unspecified" selected={true}>Unspecified</option>
                            </select>
                            <textarea
                                name="codeStatusAdvDirectivesNotes"
                                className="form-control input-sm"
                                placeholder="Describe Advanced Directives"
                                onChange={(e) => {
                                    self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                                }}
                            />
                        </div>
                    </div>

                    {/*-------------------------Patient Representation or Power Of Attorney-----------------------------*/}

                    <h4>Patient Representation or Power Of Attorney</h4>

                    <div className="line-14">
                        <div className="label-input">
                            <select
                                name="codeStatusPowerOfAttorney"
                                className="form-control input-sm"
                                onChange={(e) => {
                                    self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                                }}
                            >
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                                <option value="unspecified" selected={true}>Unspecified</option>
                            </select>

                            <label>Name</label>
                            <input
                                name="codeStatusPowerOfAttorneyName"
                                onChange={(e) => {
                                    self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
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
                                name="codeStatusPowerOfAttorneyRelationship"
                                onChange={(e) => {
                                    self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                                }}
                                type="text"
                                placeholder="Enter Relationship"
                                className="form-control input-sm"
                            />
                        </div>

                        <div className="label-input">
                            <label>Telephone #</label>
                            <input
                                name="codeStatusPowerOfAttorneyTelephone"
                                onChange={(e) => {
                                    self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
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
                            <textarea
                                name="codeStatusPowerOfAttorneyNotes"
                                onChange={(e) => {
                                    self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                                }}
                                className="form-control input-sm"
                                placeholder="Enter Notes"
                            />
                        </div>

                        <div className="label-input">
                            <label>Patient Network Notes</label>
                            <textarea
                                name="patientNetworkNotes"
                                onChange={(e) => {
                                    self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                                }}
                                className="form-control input-sm"
                                placeholder="Enter Patient Network Notes"
                            />
                        </div>
                    </div>
                    {/*-------------------------Pre-Hospital Residance-----------------------------*/}
                    <h4>Pre-Hospital Residance</h4>
                    <div className="line-17">
                        <div className="label-input">
                            <label>Pre-Hospital Living Setting</label>
                            <select
                                name="preHospitalLivingSetting"
                                className="form-control input-sm"
                                onChange={(e) => {
                                    self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                                }}
                            >
                                <option selected={true}>Home</option>
                                <option>Hospital</option>
                            </select>
                        </div>

                        <div className="label-input">
                            <label>Pre-Hospital Living With</label>
                            <select
                                name="preHospitalLivingWith"
                                className="form-control input-sm"
                                onChange={(e) => {
                                    self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                                }}
                            >
                                <option value="0" selected={true}>Relative</option>
                                <option value="1">Nurse</option>
                                <option value="2">Doctor</option>
                            </select>
                        </div>
                    </div>

                    <label>Pre-Hospital Residance Notes</label>
                    <textarea
                        name="preHospitalResidenceNotes"
                        className="form-control input-sm"
                        placeholder="Enter Patient Network Notes"
                        onChange={(e) => {
                            self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                        }}
                    />

                    {/*-------------------------Language / Communication Needs-----------------------------*/}
                    <h4>Language / Communication Needs</h4>
                    <div className="line-18">
                        <div className="label-input">
                            <label>English Speaking</label>
                            <select
                                name="englishSpeaking"
                                className="form-control input-sm"
                                onChange={(e) => {
                                    self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                                }}
                            >
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                                <option value="unspecified" selected={true}>Unspecified</option>
                            </select>
                        </div>
                        <div className="label-input">
                            <label>Need or want an interpreter</label>
                            <select
                                name="wantTranslatorAdmit"
                                className="form-control input-sm"
                                onChange={(e) => {
                                    self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                                }}
                            >
                                <option value={0}>Yes</option>
                                <option value={1}>No</option>
                            </select>
                        </div>
                    </div>
                    <div className="line-19">
                        <div className="label-input">
                            <label>Preferred Language</label>
                            <input
                                name="translatorLanguage"
                                onChange={(e) => {
                                    self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                                }}
                                type="text"
                                placeholder="Enter Preferred Language"
                                className="form-control input-sm"
                            />
                        </div>
                        <div className="label-input">
                            <label>Preferred Written Language</label>
                            <input
                                name="writtenLanguage"
                                onChange={(e) => {
                                    self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                                }}
                                type="text"
                                placeholder="Enter Preferred Written Language"
                                className="form-control input-sm"
                            />
                        </div>
                    </div>
                    <div className="label-input">
                        <label>Other Communication Needs</label>
                        <textarea
                            name="otherCommunicationNeeds"
                            className="form-control input-sm"
                            placeholder="Enter Patient Network Notes"
                            onChange={(e) => {
                                self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                            }}
                        />
                    </div>

                    {/*-------------------------Religious / Cultural Considerations-----------------------------*/}

                    <h4>Religious / Cultural Considerations</h4>
                    <div className="line-20">
                        <div className="label-input">
                            <label>Religion</label>
                            <select
                                name="religion"
                                className="form-control input-sm"
                                onChange={(e) => {
                                    self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                                }}
                            >
                                <option value={0}>Methodist</option>
                                <option value={1}>Christian</option>
                                <option value={2}>None</option>
                            </select>
                        </div>
                        <textarea
                            name="religionNotes"
                            className="form-control input-sm"
                            placeholder="Enter Patient Network Notes"
                            onChange={(e) => {
                                self.props.preAdmitStore.updateInputField(e.target.name, e.target.value, currentPreAdmitId);
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Demographics as React.ComponentClass;