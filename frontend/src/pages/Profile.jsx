import React from 'react';
import { MdAccountCircle } from "react-icons/md";
import Footer from '../components/Footer';

const MyProfilePage = () => {
    return (
        <div className="profile-page">
            <div className="profile-card">
                <div className="profile-header">
                    <div className="profile-pic"><MdAccountCircle size={100} /></div>
                    <h1 className="username">Username</h1>
                    <p className="email">user@example.com</p>
                    <p className="joined">Joined: January 1, 2025</p>
                </div>
                <div className="profile-stats">
                    <div className="stat">
                        <h2 className="stat-value">10</h2>
                        <p>Total Quizzes</p>
                    </div>
                    <div className="stat">
                        <h2 className="stat-value">8</h2>
                        <p>Completed</p>
                    </div>
                    <div className="stat">
                        <h2 className="stat-value">95</h2>
                        <p>High Score</p>
                    </div>
                </div>
                <div className="profile-actions">
                    <button className="edit-btn">Edit Profile</button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MyProfilePage;
