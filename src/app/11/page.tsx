"use client";
import React, { useState } from "react";
import { Button, Card, CardBody, Col, Container, Form, FormGroup, Label, Row } from "reactstrap";
import { ImagePath } from "@/Constant";
import { Input } from "@nextui-org/input";
import { FormValidationProp } from "@/Types/FormType";
import './patient-details.css'
import DashboardCommonHeader from "@/Components/General/Dashboard/common/DashboardCommonHeader";
import TotalSellsDetails from "@/Components/General/Widgets/GeneralWidgets/TotalSells/TotalSellsDetails";
import ReactApexChart from "react-apexcharts";
import Link from "next/link";
// import { UserForm } from "./UserForm";

const PatientDetails = () => {




    return (
        <Container fluid className="p-3">

            <Col xs="12" className="p-3">
            <h1>Tests</h1>
            {/* <div style={{display:'flex',padding:'1rem',backgroundColor:'#E5E5E5',borderRadius:'20px',marginTop:'1rem'}}>
                    <img style={{height:'15px'}} className="img-fluid table-avtar" src={`${ImagePath}/caution.png`} alt="user image" />

                        <p>Select a test from the list below or search for a test. If you would like to select a package, click on the packages tab.</p>
                    </div> */}
                    <div className="btn-group">
  <button className={"test-btn"}>Tests</button>
  {/* <button className={"package-btn"}>Packages</button> */}
</div>

     
          {/* <Input style={{padding:'10px',width:'100%',borderRadius:'15px',marginTop:'1rem'}} name="twitterUrl" value={''} type="url" placeholder={'search'} /> */}


          <div className={"card-container"}>
        <div className={"card"}>
        <img style={{width:'30px',alignSelf:'center'}} className="img-fluid table-avtar" src={`${ImagePath}/Icon - Lab.png`} alt="user image" />
            <h3>Glucose</h3>
            <p>₹1,100.00</p>
            <p  style={{borderBottomStyle:'outset'}}>5.3k bookings</p>
            {/* <button>Add to Cart</button> */}
        </div>
        <div className={"card"}>
        <img style={{width:'30px',alignSelf:'center'}} className="img-fluid table-avtar" src={`${ImagePath}/Icon - Lab.png`} alt="user image" />
            <h3>Anti HDV</h3>
            <p>₹900.00</p>
            <p  style={{borderBottomStyle:'outset'}}>2.4k bookings</p>
            {/* <button>Add to Cart</button> */}
        </div>
        <div className={"card"}>
        <img style={{width:'30px',alignSelf:'center'}} className="img-fluid table-avtar" src={`${ImagePath}/Icon - Lab.png`} alt="user image" />            <h3>Anti HEV</h3>
            <p>₹450.00</p>
            <p  style={{borderBottomStyle:'outset'}}>3.2k bookings</p>

            {/* <button>Add to Cart</button> */}
        </div>
        <div className={"card"}>
        <img style={{width:'30px',alignSelf:'center'}} className="img-fluid table-avtar" src={`${ImagePath}/Icon - Lab.png`} alt="user image" />            <h3>LE Cells</h3>
            <p>₹220.00</p>
            <p style={{borderBottomStyle:'outset'}}>1.9k bookings</p>
            {/* <button>Add to Cart</button> */}
        </div>
    </div>

    <div style={{marginTop:'1rem'}}>
        {/* <Link href='/6'> */}
                        <button style={{color:'white',width:'100%',height:'56',padding:'12px 0px 12px 0px',backgroundColor:'#AE7FD1',border:'none',borderRadius:'5px'}}>Add Tests &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  {'>'}</button>
        {/* </Link> */}
                    </div>
    {/* <div style={{marginTop:'1rem'}}>
        <Link href='/6'>
                        <button style={{color:'white',width:'100%',height:'56',padding:'12px 0px 12px 0px',backgroundColor:'#AE7FD1',border:'none',borderRadius:'5px'}}>Continue &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  {'>'}</button>
        </Link>
                    </div> */}




               


            </Col>
         

        </Container>
    );
};

export default PatientDetails;
