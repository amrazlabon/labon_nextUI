"use client";
import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { UserForm } from "../auth/login/UserForm";
import BorderBottom from "@/Components/BonusUi/CreativCard/BorderBottom";
import UpcomingDatePicker from "@/Components/General/Dashboard/DefaultDashboard/UpcomingAppointments/UpcomingDatePicker";
import ReactDatePicker from "react-datepicker";
import './summary.css';
import { ImagePath } from "@/Constant";
import Link from "next/link";
// import { UserForm } from "./UserForm";

const summary = () => {

    return (
        <Container fluid className="p-3">

            <Col xs="12" className="p-3">
                <h1>Summary</h1>
                <div style={{ display: 'flex', padding: '1rem', backgroundColor: '#E5E5E5', borderRadius: '20px', marginTop: '1rem' }}>
                    <img style={{ height: '15px' }} className="img-fluid table-avtar" src={`${ImagePath}/caution.png`} alt="user image" />

                    <p>Click on the  icon if there are any changes or you may confirm by clicking the Add to Cart button.</p>
                </div>

                <div className={"patientDetails"}>
                    <h1>Patient Details</h1>
                    <img style={{ height: '25px', marginLeft: '8rem' }} className="img-fluid table-avtar" src={`${ImagePath}/Icon - Edit.png`} alt="user image" />

                </div>
                <div className="row">

                    <img style={{ height: '4rem' }} className="img-fluid table-avtar" src={`${ImagePath}/Thumbnail.png`} alt="user image" />

                    <div style={{ placeSelf: 'baseline', marginTop: '1rem' }}>
                        <h3>Sudha Radhakrishnan</h3>
                        <p>Female, 63 years</p>
                    </div>
                </div>
                <div className={"patientDetails"}>
                    <h1>Location</h1>
                    <img style={{ height: '25px', marginLeft: '12rem' }} className="img-fluid table-avtar" src={`${ImagePath}/Icon - Edit.png`} alt="user image" />
                </div>
                <div style={{ padding: '1rem', backgroundColor: 'white', borderRadius: '15px' }}>

                    <img style={{ height: '100%', }} className="img-fluid table-avtar" src={`${ImagePath}/Google-Maps.jpg`} alt="user image" />


                    <div>

                        <h3>Home Address</h3>
                        <p>Suite No.123, Famous Building, Sample Street, Athirampuzha P.O, Kottayam - 686001, Kerala India.</p>
                    </div>


                </div>
                <div style={{ backgroundColor: '#E5E5E5', marginTop: '1rem', padding: '1rem' }}>
                    <div className={"patientDetails"}>
                        <h3 style={{ fontWeight: '600' }}>Scheduled Date & Time</h3>
                        <img style={{ height: '25px', marginLeft: '5rem' }} className="img-fluid table-avtar" src={`${ImagePath}/Icon - Edit.png`} alt="user image" />

                    </div>
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                        <div style={{ display: 'inline-flex' }} >
                            <img style={{ height: '15px' }} className="img-fluid table-avtar" src={`${ImagePath}/Icon - Calendar.png`} alt="user image" />
                            <p style={{}}>01/01/2024</p>

                        </div>
                        <div style={{ display: 'inline-flex' }} >
                            <img style={{ height: '15px' }} className="img-fluid table-avtar" src={`${ImagePath}/Vector (4).png`} alt="user image" />
                            <p style={{}}>9:00 AM</p>

                        </div>
                    </div>
                </div>

                <div>
                    <div className={"patientDetails"}>
                        <h1>Selected Tests</h1>
                        <img style={{ height: '25px', marginLeft: '8rem' }} className="img-fluid table-avtar" src={`${ImagePath}/Icon - Edit.png`} alt="user image" />
                    </div>
                    <div className="item-list">
                        <div className="item">
                            <div style={{ display: 'flex' }}>
                                <div className="item-number">1</div>
                                <img style={{ height: '25px' }} className="img-fluid table-avtar" src={`${ImagePath}/Thumbnail (1).png`} alt="user image" />
                                <h3 className="item-title">LDL Cholesterol</h3>
                            </div>
                            <div className="item-content">

                                <p className="item-description">Test short description here. It must be truncated after 70 characters max</p>
                                <div className="item-price">₹275.00</div>
                            </div>
                        </div>
                        <div className="item">
                        <div style={{ display: 'flex' }}>
                                <div className="item-number">1</div>
                                <img style={{ height: '25px' }} className="img-fluid table-avtar" src={`${ImagePath}/Thumbnail (1).png`} alt="user image" />
                                <h3 className="item-title">HDL Cholesterol</h3>
                            </div>
                            <div className="item-content">
                                <p className="item-description">Test short description here. It must be truncated after 70 characters max</p>
                                <div className="item-price">₹200.00</div>
                            </div>
                        </div>
                    </div>

                </div>
                <div style={{ marginTop: '1rem' }}>
                    <Link href='/5'>
                    <button style={{ color: 'white', width: '100%', height: '56', padding: '12px 0px 12px 0px', backgroundColor: '#AE7FD1', border: 'none', borderRadius: '5px' }}>Continue &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  {'>'}</button>
                    </Link>
                </div>






            </Col>

        </Container>
    );
};

export default summary;