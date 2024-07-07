"use client";
import React, { useState } from "react";
import { Button, Card, CardBody, Col, Container, Form, FormGroup, Label, Row, Tooltip } from "reactstrap";
import { ImagePath } from "@/Constant";
import { Input } from "@nextui-org/input";
import { FormValidationProp } from "@/Types/FormType";
import './dashboard.css'
import DashboardCommonHeader from "@/Components/General/Dashboard/common/DashboardCommonHeader";
import TotalSellsDetails from "@/Components/General/Widgets/GeneralWidgets/TotalSells/TotalSellsDetails";
import ReactApexChart from "react-apexcharts";
import SolidBorderStyle from "@/Components/Form&Table/Form/FormControls/MegaOption/SolidBorderStyle";
import { ArcElement, BarController, BarElement, CategoryScale, Filler, Legend, LineElement, LinearScale, PointElement, RadialLinearScale, Title, Chart as ChartJS } from "chart.js";
import BarChart from "@/Components/Charts/ChartJs/BarChart";
import { options } from "@fullcalendar/core/preact.js";
import Link from "next/link";
// import { UserForm } from "./UserForm";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Legend, Filler, BarController, BarElement, ArcElement, RadialLinearScale);

const primary = "#7A70BA";
const secondary = "#48A3D7";

const ChartJsBarChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            backgroundColor: "rgba(115, 102 ,255, 0.4)",
            borderColor: primary,
            highlightFill: "rgba(115, 102 ,255, 0.6)",
            highlightStroke: primary,
            borderWidth: 2,
            data: [35, 59, 80, 81, 56, 55, 40],
        },
        {
            label: "My Second dataset",
            backgroundColor: "rgba(247, 49, 100, 0.4)",
            borderColor: secondary,
            highlightFill: "rgba(247, 49, 100, 0.6)",
            highlightStroke: secondary,
            data: [28, 48, 40, 19, 86, 27, 90],
            borderWidth: 2,
        },
    ],
};

const dashboard = () => {




    return (
        <Container fluid className="p-3">

            <Col xs="12" className="p-3">
                <h1 style={{ fontWeight: '600' }}>My Dashboard</h1>

                <h3>Upcoming Schedule</h3>


                <div className="appointment-card" style={{ marginTop: '1rem' }}>

                    <div className="map-container">
                        <img style={{ height: '100%', }} className="img-fluid table-avtar" src={`${ImagePath}/Google-Maps.jpg`} alt="user image" />
                        <div className="pin"></div>
                        <div className="car"></div>
                        <div className="date-time">
                            <div className="date">
                                <span className="day">01</span>
                                <span className="month-year">
                                    <span>JANUARY 2024</span>
                                </span>
                            </div>
                            <div className="time">
                                <span>09:00 AM</span>
                            </div>
                        </div>
                    </div>
                    <div className="message">
                        <p>Phlebotomist will start journey to your place in <strong>30 minutes</strong> as per the schedule.</p>
                    </div>
                    <div className="actions">
                        <button className="reschedule">Reschedule</button>
                        <button className="cancel">Cancel</button>
                    </div>
                </div>
                <div style={{ marginTop: '1rem' }}>
                    <h3>My Recent Tests</h3>
                    <button style={{ color: 'white', width: '100%', height: '56', padding: '15px 0px 15px 0px', backgroundColor: '#426770', border: 'none', borderRadius: '25px', marginTop: '1rem' }}>Book a Home Visit </button>
                </div>


                <div style={{ marginTop: '2rem' }}>
                    <BarChart />
                </div>

                <div style={{ marginTop: '2rem' ,backgroundColor:'white'}}>
                    <div className="row">

                        <img style={{ height: '4rem' }} className="img-fluid table-avtar" src={`${ImagePath}/old-man.webp`} alt="user image" />

                        <div style={{ placeSelf: 'baseline', marginTop: '1rem' }}>
                            <h3>Sudha Radhakrishnan</h3>
                            <p>Female, 63 years</p>
                        </div>
                    </div>
                    <BarChart />

                </div>

                <div style={{marginTop:'1rem',textAlign:'center'}}>

<Link href='/12'>
                    <button style={{padding:'1rem',backgroundColor:'#AE7FD1',borderColor:'#AE7FD1',borderRadius:'15px'}}>Patient Information</button>
</Link>
    </div>

    <div style={{marginTop:'1rem',textAlign:'center'}}>

<Link href='/13'>
                    <button style={{padding:'1rem',backgroundColor:'#AE7FD1',borderColor:'#AE7FD1',borderRadius:'15px'}}>Booking Information</button>
</Link>
    </div>

    <div style={{marginTop:'1rem',textAlign:'center'}}>

<Link href='/11'>
                    <button style={{padding:'1rem',backgroundColor:'#AE7FD1',borderColor:'#AE7FD1',borderRadius:'15px'}}>Add Tests</button>
</Link>
    </div>



            </Col>


        </Container>
    );
};

export default dashboard;
