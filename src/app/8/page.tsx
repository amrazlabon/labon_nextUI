"use client";
import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { UserForm } from "../auth/login/UserForm";
import BorderBottom from "@/Components/BonusUi/CreativCard/BorderBottom";
import UpcomingDatePicker from "@/Components/General/Dashboard/DefaultDashboard/UpcomingAppointments/UpcomingDatePicker";
import ReactDatePicker from "react-datepicker";
import { ImagePath } from "@/Constant";
import './style.css'
import Link from "next/link";
// import { UserForm } from "./UserForm";

const UserFlow = () => {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(null);
  
    const onChange = (date: [Date | null, Date | null]) => {
        const [start, end] = date;
        setStartDate(start);
        setEndDate(end);
      };

      const [isNew, setIsNew] = useState(true);

    const handleToggleChange = () => {
        setIsNew(!isNew);
    };
    return (
        <Container fluid className="p-3">

            <Col xs="12" className="p-3">
                <div className=" login-dark">
                    <div className="text-center">


                    <h1 style={{fontWeight:'700'}}>Send Details to Patient</h1>
                    {/* <div style={{display:'flex',padding:'1rem',backgroundColor:'#E5E5E5',borderRadius:'20px',marginTop:'1rem'}}>
                    <img style={{height:'15px'}} className="img-fluid table-avtar" src={`${ImagePath}/caution.png`} alt="user image" /> */}

                        <p>Would you like to send the booking details to the patient’s <br />email sudha.radhakrishnan@gmail.com, so they <br />also have the information with them?</p>
                    {/* </div> */}

                    <div className="toggle-container">
                <label>Do Not Send</label>
                <label className="switch">
                    <input type="checkbox" checked={isNew} onChange={handleToggleChange} />
                    <span className="slider round"></span>
                </label>
                <label>Send</label>
            </div>
                    </div>

                    <Col xs="12">
      {/* <div className="datepicker-here mod" id="datepicker" style={{marginTop:"1rem"}}>
        <ReactDatePicker selected={startDate} onChange={onChange} startDate={startDate} endDate={endDate} selectsRange inline />
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',marginTop:'1rem',padding:'1rem'}}>
            <p>  <img style={{height:'15px'}} className="img-fluid table-avtar" src={`${ImagePath}/Rectangle3.png`} alt="user image" />Selected Date</p>
            <p><img style={{height:'15px'}} className="img-fluid table-avtar" src={`${ImagePath}/Rectangle2.png`} alt="user image" />Available Date</p>
            <p><img style={{height:'15px'}} className="img-fluid table-avtar" src={`${ImagePath}/Rectangle1.png`} alt="user image" />Holidays</p>
        </div>
      </div> */}

      <div style={{marginTop:'10rem',textAlign:'center'}}>

<Link href='/7'>
                    <button style={{padding:'1rem',backgroundColor:'#AE7FD1',borderColor:'#AE7FD1',borderRadius:'15px'}}>Continue</button>
</Link>
    </div>
    </Col>
                

                </div>

            </Col>

        </Container>
    );
};

export default UserFlow;