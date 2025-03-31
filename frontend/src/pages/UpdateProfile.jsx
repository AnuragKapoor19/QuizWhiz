import React, { useState } from "react";
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import { ContextState } from '../ContextApi';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateProfile = () => {
    const { user } = ContextState();
    const [credentials, setcredentials] = useState({ name: user.username, email: user.email });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.put('http://localhost:5000/api/v1/me/update', { username: credentials.name, email: credentials.email }, { 'Content-Type': 'application/json', withCredentials: true });

            if (!data.success) {
                return console.log(data.message);
            }

            console.log(data.message);
            alert("Profile Updated Successfully!");
            navigate('/');

        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <>
            <Logo />
            <div className="update-profile-page">
                <div className="edit-profile-container">
                    <h2>Update Profile</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={credentials.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        <div className="input-group">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={credentials.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <button type="submit" className="update-btn">
                            Update Profile
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default UpdateProfile;
