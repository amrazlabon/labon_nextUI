"use client";
import React, { useState } from "react";
import { Col, Container } from "reactstrap";
import ReactDatePicker from "react-datepicker";
import { ImagePath } from "@/Constant";
import Link from "next/link";
import './calendar.css';

const UserFlow = () => {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(null);

    const onChange = (date: [Date | null, Date | null]) => {
        const [start, end] = date;
        setStartDate(start);
        setEndDate(end);
    };

    return (
        <Container fluid className="p-3">
            <div className="wrapper">
                <div className="empty-space"></div>
                <div className="content">
                    <Col xs="12" className="p-3">
                        <div className="login-dark">
                            <h2 style={{ fontWeight: '700' }}>Pick a Date</h2>
                            <div style={{ display: 'flex', padding: '1rem', backgroundColor: '#E5E5E5', borderRadius: '20px', marginTop: '1rem' }}>
                                <img style={{ height: '15px' }} className="img-fluid table-avtar" src={`${ImagePath}/caution.png`} alt="user image" />
                                <p>Pick a date on which you want our phlebotomist to visit your place.</p>
                            </div>

                            <Col xs="12">
                                <div className="datepicker-here mod" id="datepicker" style={{ marginTop: "1rem" }}>
                                    <ReactDatePicker selected={startDate} onChange={onChange} startDate={startDate} endDate={endDate} selectsRange inline />
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', marginTop: '1rem', padding: '1rem' }}>
                                        <p>
                                            <img style={{ height: '15px' }} className="img-fluid table-avtar" src={`${ImagePath}/Rectangle3.png`} alt="user image" />Selected Date
                                        </p>
                                        <p>
                                            <img style={{ height: '15px' }} className="img-fluid table-avtar" src={`${ImagePath}/Rectangle2.png`} alt="user image" />Available Date
                                        </p>
                                        <p>
                                            <img style={{ height: '15px' }} className="img-fluid table-avtar" src={`${ImagePath}/Rectangle1.png`} alt="user image" />Holidays
                                        </p>
                                    </div>
                                </div>

                                <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                                    <Link href='/3'>
                                        <button style={{ padding: '1rem', backgroundColor: '#AE7FD1', borderColor: '#AE7FD1', borderRadius: '15px' }}>Next</button>
                                    </Link>
                                </div>
                            </Col>
                        </div>
                    </Col>
                </div>
                <div className="empty-space"></div>
            </div>
        </Container>
    );
};

export default UserFlow;
