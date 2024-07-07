// FamilyMemberCard.js
import { ImagePath } from '@/Constant';
import React from 'react';
import './family-member.css'

const FamilyMemberCard = () => {
    return (
        <div className="family-member-card">

            <h1>My Bookings</h1>

            <div style={{ display: 'flex', padding: '1rem', backgroundColor: '#E5E5E5', borderRadius: '20px', marginTop: '1rem' }}>
                                <img style={{ height: '15px' }} className="img-fluid table-avtar" src={`${ImagePath}/caution.png`} alt="user image" />
                                <p>Click on a booking to view the details. You can reschedule an upcoming booking by going to the booking details.</p>
                            </div>
            <div className="card-content">
                <div className="profile-image">
                <img style={{ height: '100%' }} className="img-fluid table-avtar" src={`${ImagePath}/old-man.webp`} alt="user image" />
                </div>
                <div className="details">
                    <h4>07/07/2024</h4>
                    <p className="relationship">07:30 am</p>
                    <p className="tests-done">2 tests</p>
                
                    <p className="no-upcoming-tests">LBNHVB100420241</p>
                    
                </div>
                <div className="arrow-icon">➔</div>
            </div>
            <div className="card-content">
                <div className="profile-image">
                <img style={{ height: '100%' }} className="img-fluid table-avtar" src={`${ImagePath}/old-man.webp`} alt="user image" />
                </div>
                <div className="details">
                    <h4>07/07/2024</h4>
                    <p className="relationship">07:30 am</p>
                    <p className="tests-done">2 tests</p>
                
                    <p className="no-upcoming-tests">LBNHVB100420241</p>
                    
                </div>
                <div className="arrow-icon">➔</div>
            </div>
        </div>
        
        
    );
};

export default FamilyMemberCard;
