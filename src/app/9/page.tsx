"use client";
import React, { useState } from "react";
import { Button, Card, CardBody, Col, Container, Form, FormGroup, Label, Row } from "reactstrap";
import {  ImagePath } from "@/Constant";
import { Input } from "@nextui-org/input";
import { FormValidationProp } from "@/Types/FormType";
import './form.css'
import DashboardCommonHeader from "@/Components/General/Dashboard/common/DashboardCommonHeader";
import TotalSellsDetails from "@/Components/General/Widgets/GeneralWidgets/TotalSells/TotalSellsDetails";
import ReactApexChart from "react-apexcharts";

import { CheckedSwitchCheckboxInput, CustomSwitches, DefaultSwitchCheckboxInput } from "@/Constant";
import Link from "next/link";

// import { UserForm } from "./UserForm";

const PatientDetailsForm = () => {
    const [isNew, setIsNew] = useState(true);

    const handleToggleChange = () => {
        setIsNew(!isNew);
    };

    return (
        <div className="patient-details-form">
            <h2>Add Patient Details</h2>
            <div className="toggle-container">
                <label>Select from My Contacts</label>
                <label className="switch">
                    <input type="checkbox" checked={isNew} onChange={handleToggleChange} />
                    <span className="slider round"></span>
                </label>
                <label>Add New</label>
            </div>
            <form>
                <div className="form-group">
                    <label>Patient Name</label>
                    <input type="text" placeholder="Patient Name" />
                </div>
                <div className="form-group">
                    <label>Date of Birth</label>
                    <select>
                        <option value="">Date of Birth</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div className="form-group gender-group">
                    <button type="button" className="gender-button"><img style={{  }} className="img-fluid table-avtar" src={`${ImagePath}/Gender - Male.png`} alt="user image" />
                    </button>
                    <button type="button" className="gender-button">
                    <img style={{ height: '100%', }} className="img-fluid table-avtar" src={`${ImagePath}/Gender - Female.png`} alt="user image" />

                    </button>
                    <button type="button" className="gender-button">
                    <img style={{ height: '100%', }} className="img-fluid table-avtar" src={`${ImagePath}/Gender - Other.png`} alt="user image" />

                    </button>
                </div>
                <div className="form-group">
                    <label>Mobile</label>
                    <input type="tel" placeholder="Mobile" />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="Email" />
                </div>
                <div className="form-group">
                    <label>Pincode</label>
                    <input type="text" value="686001" readOnly />
                </div>
                <div className="form-group">
                    <label>Location</label>
                    <input type="text" value="Devalokam, Kottayam, Kerala" readOnly />
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input type="text" value="Flat No.123B, Skyline Palazzo, Devalokam..." readOnly />
                </div>
            </form>
            <div style={{ marginTop: '1rem' }}>
                <Link href={'/4'}>
                    <button style={{ color: 'white', width: '100%', height: '56', padding: '12px 0px 12px 0px', backgroundColor: '#AE7FD1', border: 'none', borderRadius: '5px' }}>Summary &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  {'>'}</button>
                </Link>
                </div>
        </div>
    );
};

export default PatientDetailsForm;