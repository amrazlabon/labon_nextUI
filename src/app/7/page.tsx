"use client";
import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { UserForm } from "../auth/login/UserForm";
import BorderBottom from "@/Components/BonusUi/CreativCard/BorderBottom";
import UpcomingDatePicker from "@/Components/General/Dashboard/DefaultDashboard/UpcomingAppointments/UpcomingDatePicker";
import ReactDatePicker from "react-datepicker";
import { ImagePath } from "@/Constant";
import Link from "next/link";
// import { UserForm } from "./UserForm";

const UserFlow = () => {
    // const [startDate, setStartDate] = useState<Date | null>(new Date());
    // const [endDate, setEndDate] = useState<Date | null>(null);
  
    // const onChange = (date: [Date | null, Date | null]) => {
    //     const [start, end] = date;
    //     setStartDate(start);
    //     setEndDate(end);
    //   };
    return (
        <Container fluid className="p-3">

            <Col xs="12" className="p-3">
                <div className=" login-dark">
                    <div className="text-center">


                    <img style={{height:'35px'}} className="img-fluid table-avtar" src={`${ImagePath}/Thumbs-up.png`} alt="user image" />
                    <h1 style={{fontWeight:'700'}}>Booking Confirmed!</h1>
                    {/* <div style={{display:'flex',padding:'1rem',backgroundColor:'#E5E5E5',borderRadius:'20px',marginTop:'1rem'}}> */}

                        <p>Booking ID: LBNHVB-MRL-20241201-1-A</p>
                        <h2>Hello Sudha!</h2>
                        <p>You just booked a home test for<span className="text-bold">Sreedevi Ramachandran</span> . <br />The invoice has been emailed to you. Our phlebotomist assigned <br /> to collect blood samples will arrive at <br /> your location tentatively by <span className="font-bold">7:00 AM on 01/01/2024.</span> </p>
                    {/* </div> */}
                    <br />
                    <p>In case you have any clarifications, <br /> please call us on the support number <br /> +91 9446061000. See you soon!</p>
                    <hr />
                    <h2>Save this Data</h2>
                    <p>We don’t see the patient details saved. Would <br /> you like to save it for future use?</p>
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

      <div style={{marginTop:'1rem',textAlign:'center'}}>

<Link href='/6'>
                    <button style={{width : '15rem' , padding:'1rem',backgroundColor:'#426770',borderColor:'#426770',borderRadius:'25px' , color : 'white'}}>Yes</button>
</Link>
    </div>

    <div style={{marginTop:'1rem',textAlign:'center'}}>

<Link href='/6'>
                    <p
                    //  style={{padding:'1rem',backgroundColor:'#AE7FD1',borderColor:'#AE7FD1',borderRadius:'15px'}}a
                     >Dashboard</p>
</Link>
    </div>
    </Col>
                

                </div>

            </Col>

        </Container>
    );
};

export default UserFlow;