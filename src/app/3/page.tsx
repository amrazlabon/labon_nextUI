"use client";
import React from "react";
import { Col, Container } from "reactstrap";
import { ImagePath } from "@/Constant";
import Link from "next/link";
import './time-slot.css';

const UserFlow = () => {
    return (
        <Container fluid className="p-3">
            <div className="wrapper">
                <div className="empty-space"></div>
                <div className="content">
                    <Col xs="12" className="p-3">
                        <h1>Select a suitable Time</h1>
                        <p>Please select the time on <span style={{fontWeight:'600'}}>01/01/2024</span> for our phlebotomist to come and collect samples. accurate results.</p>
                        <div style={{display:'flex',padding:'1rem',backgroundColor:'#E5E5E5',borderRadius:'20px',marginTop:'1rem'}}>
                            <img style={{height:'15px'}} className="img-fluid table-avtar" src={`${ImagePath}/caution.png`} alt="user image" />
                            <p>If this test requires fasting, ensure you are on fasting for atleast 12-14 hours for accurate results.</p>
                        </div>
                        <div style={{marginTop:'1rem'}}>
                            <div style={{display:'flex'}}>
                                <p style={{fontWeight:'600',fontSize:'16px'}}>Morning </p><span style={{color:'#65C466'}}> (Recommended)</span>
                            </div>
                            <div className="row">
                                <button className="slot-button">7:00 AM</button>
                                <button className="slot-button">8:00 AM</button>
                                <button className="slot-button">8:30 AM</button>
                                <button className="slot-button">9:30 AM</button>
                                <button className="slot-button">10:00 AM</button>
                                <button className="slot-button">10:30 AM</button>
                            </div>
                        </div>
                        <div style={{marginTop:'1rem'}}>
                            <div style={{display:'flex'}}>
                                <p style={{fontWeight:'600',fontSize:'16px'}}>After Noon </p><span style={{color:'#C46B65'}}> (Not Preferred)</span>
                            </div>
                            <div className="row">
                                <button className="slot-button">2:00 PM</button>
                                <button className="slot-button">2:30 PM</button>
                                <button className="slot-button">3:30 PM</button>
                                <button className="slot-button">4:00 PM</button>
                            </div>
                        </div>
                        <div style={{marginTop:'1rem'}}>
                            <div style={{display:'flex'}}>
                                <p style={{fontWeight:'600',fontSize:'16px'}}>Evening </p><span style={{color:'#C46B65'}}> (Not Preferred)</span>
                            </div>
                            <div className="row">
                                <button className="slot-button">6:00 AM</button>
                                <button className="slot-button">7:00 AM</button>
                                <button className="slot-button">7:30 AM</button>
                                <button className="slot-button">8:00 AM</button>
                            </div>
                        </div>
                        <div style={{marginTop:'1rem'}}>
                        <Link href='/9'>
                        <button style={{color:'white',width:'100%',height:'56px',padding:'12px 0px',backgroundColor:'#AE7FD1',border:'none',borderRadius:'5px'}}>Add Patients Details &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {'>'}</button>
                        </Link>
                        </div>
                        {/* <div style={{marginTop:'1rem',textAlign:'center'}}>
                            <Link href='/9'>
                                <button style={{padding:'1rem',backgroundColor:'#AE7FD1',borderColor:'#AE7FD1',borderRadius:'15px'}}>Next</button>
                            </Link>
                        </div> */}
                    </Col>
                </div>
                <div className="empty-space"></div>
            </div>
        </Container>
    );
};

export default UserFlow;
