// FamilyMemberCard.js
import { ImagePath } from '@/Constant';
import React from 'react';
import './family-member.css'

const FamilyMemberCard = () => {
    return (
        <div className="family-member-card">
            <h1>My Contacts</h1>

            <div className="card-content">
                <div className="profile-image">
                <img style={{ height: '100%' }} className="img-fluid table-avtar" src={`${ImagePath}/old-man.webp`} alt="user image" />
                </div>
                <div className="details">
                    <h4>Vasudevan Ramachandran</h4>
                    <p className="relationship">Father</p>
                    <p className="tests-done">2 tests done so far</p>
                
                    <p className="no-upcoming-tests">No upcoming tests</p>
                    
                </div>
                <div className="arrow-icon">➔</div>
            </div>
            <div className="card-content">
                <div className="profile-image">
                <img style={{ height: '100%' }} className="img-fluid table-avtar" src={`${ImagePath}/old-man.webp`} alt="user image" />
                </div>
                <div className="details">
                    <h4>Vasudevan Ramachandran</h4>
                    <p className="relationship">Father</p>
                    <p className="tests-done">2 tests done so far</p>
                
                    <p className="no-upcoming-tests">No upcoming tests</p>
                    
                </div>
                <div className="arrow-icon">➔</div>
            </div>
        </div>
        
        
    );
};

export default FamilyMemberCard;
