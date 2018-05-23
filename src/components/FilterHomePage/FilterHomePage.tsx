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
                    <DropdownButton title="Default button" id="default" bsSize="sm">
                        <MenuItem eventKey="1">Action</MenuItem>
                    </DropdownButton>

                    <DropdownButton title="Default button" id="default" bsSize="sm">
                        <MenuItem eventKey="1">Action</MenuItem>
                        <MenuItem eventKey="2">Another action</MenuItem>
                    </DropdownButton>
                </div>
                <div className="sub-line-second">
                    <label>Sort by: </label>
                    <DropdownButton title="Default button" id="default" bsSize="sm">
                        <MenuItem eventKey="1">Action</MenuItem>
                    </DropdownButton>

                    <DropdownButton title="Default button" id="default" bsSize="sm">
                        <MenuItem eventKey="1">Action</MenuItem>
                    </DropdownButton>
                </div>
            </div>

            <div className="line-second">
                <div className="sub-line-first">

                    <label>Restrict to : </label>

                    <DropdownButton title="Default button" id="default" bsSize="sm">
                        <MenuItem eventKey="1">Action</MenuItem>
                    </DropdownButton>

                    <label>During: </label>

                    <DropdownButton title="Default button" id="default" bsSize="sm">
                        <MenuItem eventKey="1">Action</MenuItem>
                    </DropdownButton>

                </div>

                <div className="sub-line-second">

                    <DropdownButton title="Default button" id="default" bsSize="sm">
                        <MenuItem eventKey="1">Action</MenuItem>
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

                    <DropdownButton title="Default button" id="default" bsSize="sm">
                        <MenuItem eventKey="1">Action</MenuItem>
                    </DropdownButton>

                    <label>(Superuser only)</label>
                </div>
            </div>
        </div>
    </div>
);