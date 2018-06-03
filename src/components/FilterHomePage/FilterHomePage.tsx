import * as React from 'react';

import './FilterHomePage.css';
import { Button, FormControl, Checkbox } from 'react-bootstrap';

export const FilterHomePage = (props: any) => (
    <div>
        <Checkbox>{<b>Discharge Assesments:</b>}{` (46 hidded - checkbox to display)`}</Checkbox>

        <div className="main-filter">
            <div className="line-first">
                <div className="sub-line-first">
                    <label>Show: </label>
                    <select className="form-control">
                        <option selected={true}>In-Progress</option>
                        <option>Admit-Incoplete</option>
                        <option>Admit-Complete</option>
                    </select>
                    <select className="form-control">
                        <option selected={true}>Only assessments I have created</option>
                        <option>All assessments for my site</option>
                        <option>All assessments for my facility</option>
                    </select>
                </div>
                <div className="sub-line-second">
                    <label>Sort by: </label>
                    <select className="form-control">
                        <option selected={true}>Date Admitted</option>
                        <option>Date Created</option>
                        <option>Date Denied</option>
                    </select>
                    <select className="form-control">
                        <option selected={true}>Ascending</option>
                        <option>Descending</option>
                    </select>
                </div>
            </div>

            <div className="line-second">
                <div className="sub-line-first">

                    <label>Restrict to : </label>
                    <select className="form-control">
                        <option selected={true}>Admitted</option>
                        <option>Didcharged</option>
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
                        <option>Patiend ID</option>
                        <option>SSN</option>
                    </select>

                    <label>Starting with: </label>

                    <FormControl type="text" placeholder="Enter text" bsSize="sm"/>

                    <Button bsSize="sm">Enter</Button>
                    <Button bsSize="sm">Clear</Button>

                </div>
            </div>

            <div className="line-third">
                <label>Display: </label>
                <FormControl type="text" placeholder="50" bsSize="sm"/>
                <label>assesments per table. </label>
                <Button bsSize="sm">Enter</Button>
            </div>

            <div className="line-fourth">
                <div className="sub-line-first">
                    <label>Load ID: </label>
                    <FormControl type="text" placeholder="Enter text" bsSize="sm"/>
                    <label>(Patient Satisfaction Suurvey ID)</label>
                    <Button bsSize="sm">Load</Button>
                </div>

                <div className="sub-line-second">
                    <label>Provider ID: </label>
                    <select className="form-control">
                        <option selected={true}>Eleks</option>
                        <option>Facility 1033</option>
                        <option>Facility 1034</option>
                    </select>
                    <label>(Superuser only)</label>
                </div>
            </div>
        </div>
    </div>
);