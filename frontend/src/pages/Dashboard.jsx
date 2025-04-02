import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import axios from 'axios';
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    const [users, setusers] = useState([]);

    const getAllUsers = async () => {
        try {
            const { data } = await axios.get('http://localhost:5000/api/v1/admin/users', { withCredentials: true });

            if (!data.success) {
                return console.log(data.message);
            }

            setusers(data.users)

        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getAllUsers();
    }, [])

    const data = [
        { name: "Users", value: users.length },
        { name: "Quizzes", value: 45 },
    ];

    return (
        <>
            {users.length > 0 &&
                <div className="dashboard-container">
                    {/* Main Content */}
                    <main className="dashboard-main">
                        <header className="dashboard-header">
                            <h1>Admin Dashboard</h1>
                        </header>

                        <section className="stats">
                            <div className="stat-box" onClick={() => navigate('/admin/users')}>
                                <h3>Total Users</h3>
                                <p>{users.length}</p>
                            </div>
                            <div className="stat-box" onClick={() => navigate('/admin/questions')}>
                                <h3>Total Questions</h3>
                                <p>45</p>
                            </div>
                        </section>

                        <section className="chart-section">
                            <h3>Statistics</h3>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={data}>
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="value" fill="#D32F2F" />
                                </BarChart>
                            </ResponsiveContainer>
                        </section>
                    </main>
                </div>
            }
            <Footer />
        </>
    );
};

export default Dashboard;