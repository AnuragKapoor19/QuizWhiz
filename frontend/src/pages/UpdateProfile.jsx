import React, { useState } from "react";
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import { ContextState } from '../ContextApi';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from "react-hot-toast";

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
            const { data } = await axios.put(`${import.meta.env.VITE_PRO_API_URL}/api/v1/me/update`, { username: credentials.name, email: credentials.email }, { 'Content-Type': 'application/json', withCredentials: true });

            if (!data.success) {
                return toast(data.message);
            }

            console.log(data.message);
            toast.success("Profile Updated Successfully!");
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

                        <button type="submit" className="update-profile-btn">
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
