import * as React from 'react';

import './FilterHomePage.css';
import { Button, FormControl } from 'react-bootstrap';

export const FilterHomePage = (props: any) => (
    <div>
        <div className="main-filter">
            <div className="line-first">
                <div className="sub-line-first">
                    <label>Show: </label>
                    <select className="form-control">
                        <option selected={true}>In-Progress</option>
                        <option>Admit-Incomplete</option>
                        <option>Admit-Complete</option>
                    </select>
                </div>
            </div>

            <div className="line-second">
                <div className="sub-line-first">

                    <label>Restrict to : </label>
                    <select className="form-control">
                        <option selected={true}>Admitted</option>
                        <option>Discharged</option>
                        <option>Created</option>
                        <option>Denied</option>
                    </select>

                    <label>During: </label>
                    <select className="form-control">
                        <option selected={true}>Last 90 days</option>
                        <option>Last 365 days</option>
                        <option>Cal Yr 2018</option>
                    </select>
                </div>

                <div className="sub-line-second">
                    <select className="form-control">
                        <option selected={true}>Last Name</option>
                        <option>Patient ID</option>
                        <option>SSN</option>
                    </select>

                    <label>Starting with: </label>

                    <FormControl type="text" placeholder="Enter text" bsSize="sm"/>

                    <Button bsSize="sm">Enter</Button>
                    <Button bsSize="sm">Clear</Button>

                </div>
            </div>
        </div>
    </div>
);