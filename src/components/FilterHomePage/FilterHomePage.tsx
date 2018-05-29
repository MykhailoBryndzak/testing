import * as React from 'react';

import './FilterHomePage.css';
import { DropdownButton, MenuItem, Label, Button, FormControl, Checkbox } from 'react-bootstrap';

export const FilterHomePage = (props: any) => (
    <div>
              <Checkbox>{<b>Discharge Assesments:</b>}{` (46 hidded - checkbox to display)`}</Checkbox>

        <div className="main-filter">
            <div className="line-first">
                <div className="sub-line-first">
                    <label>Show: </label>
                    <DropdownButton title="In-Progress" id="default" bsSize="sm">
                        <MenuItem eventKey="1">In-Progress</MenuItem>
                        <MenuItem eventKey="2">Admit-Incoplete</MenuItem>
                        <MenuItem eventKey="3">Admit-Complete</MenuItem>
                    </DropdownButton>

                    <DropdownButton title="Only assessments I have created" id="default" bsSize="sm">
                        <MenuItem eventKey="1">Only assessments I have created</MenuItem>
                        <MenuItem eventKey="2">All assessments for my site</MenuItem>
                        <MenuItem eventKey="3">All assessments for my facility</MenuItem>
                    </DropdownButton>
                </div>
                <div className="sub-line-second">
                    <label>Sort by: </label>
                    <DropdownButton title="Date Admitted" id="default" bsSize="sm">
                        <MenuItem eventKey="1">Date Admitted</MenuItem>
                        <MenuItem eventKey="2">Date Created</MenuItem>
                        <MenuItem eventKey="3">Date Denied</MenuItem>
                    </DropdownButton>

                    <DropdownButton title="Ascending" id="default" bsSize="sm">
                        <MenuItem eventKey="1">Ascending</MenuItem>
                        <MenuItem eventKey="1">Descending</MenuItem>
                    </DropdownButton>
                </div>
            </div>

            <div className="line-second">
                <div className="sub-line-first">

                    <label>Restrict to : </label>

                    <DropdownButton title="Admitted" id="default" bsSize="sm">
                        <MenuItem eventKey="1">Admitted</MenuItem>
                        <MenuItem eventKey="2">Didcharged</MenuItem>
                        <MenuItem eventKey="3">Created</MenuItem>
                        <MenuItem eventKey="4">Denied</MenuItem>
                    </DropdownButton>

                    <label>During: </label>

                    <DropdownButton title="Custom" id="default" bsSize="sm">
                        <MenuItem eventKey="1">Last 90 days</MenuItem>
                        <MenuItem eventKey="1">Last 365 days</MenuItem>
                        <MenuItem eventKey="1">Cal Yr 2018</MenuItem>
                    </DropdownButton>

                </div>

                <div className="sub-line-second">

                    <DropdownButton title="Last Name" id="default" bsSize="sm">
                        <MenuItem eventKey="1">Last Name</MenuItem>
                        <MenuItem eventKey="1">Patiend ID</MenuItem>
                        <MenuItem eventKey="1">SSN</MenuItem>
                    </DropdownButton>

                    <label>Starting with: </label>

                    <FormControl type="text" placeholder="Enter text" bsSize="sm" />

                    <Button bsSize="sm">Enter</Button>
                    <Button bsSize="sm">Clear</Button>

                </div>
            </div>

            <div className="line-third">
                <label>Display: </label>
                <FormControl type="text" placeholder="50" bsSize="sm" />
                <label>assesments per table. </label>
                <Button bsSize="sm">Enter</Button>
            </div>

            <div className="line-fourth">
                <div className="sub-line-first">
                    <label>Load ID: </label>
                    <FormControl type="text" placeholder="Enter text" bsSize="sm" />
                    <label>(Patient Satisfaction Suurvey ID)</label>
                    <Button bsSize="sm">Load</Button>
                </div>

                <div className="sub-line-second">
                    <label>Provider ID: </label>

                    <DropdownButton title="Eleks" id="default" bsSize="sm">
                        <MenuItem eventKey="1">Eleks</MenuItem>
                        <MenuItem eventKey="2">Facility 1033</MenuItem>
                        <MenuItem eventKey="3">Facility 1034</MenuItem>
                    </DropdownButton>

                    <label>(Superuser only)</label>
                </div>
            </div>
        </div>
    </div>
);