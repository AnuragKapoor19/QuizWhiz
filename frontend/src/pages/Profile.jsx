import React from 'react';
import { MdAccountCircle } from "react-icons/md";
import Footer from '../components/Footer';
import { ContextState } from '../ContextApi';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

const MyProfilePage = () => {
    const { user } = ContextState();
    const navigate = useNavigate()

    return (
        <div className="profile-page">
            <Header />
            <div className="profile-card">
                <div className="profile-header">
                    <div className="profile-pic"><MdAccountCircle size={100} /></div>
                    <h1 className="username">{user.username}</h1>
                    <p className="email">{user.email}</p>
                    <p className="joined">Joined: {new Date(user.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' })}</p>
                </div>
                <div className="profile-stats">
                    <div className="stat">
                        <h2 className="stat-value">Pending</h2>
                        <p>Total Quizzes</p>
                    </div>
                    <div className="stat">
                        <h2 className="stat-value">Pending</h2>
                        <p>Completed</p>
                    </div>
                    <div className="stat">
                        <h2 className="stat-value">Pending</h2>
                        <p>High Score</p>
                    </div>
                </div>
                <div className="profile-actions">
                    <button className="edit-btn" onClick={() => navigate('/update/profile')}>Edit Profile</button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MyProfilePage;
