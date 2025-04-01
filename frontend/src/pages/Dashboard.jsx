import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Menu, X, Users, ClipboardList, BarChart2 } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const data = [
        { name: "Users", value: 120 },
        { name: "Quizzes", value: 45 },
        { name: "Attempts", value: 210 },
    ];

    return (
        <div className="dashboard-container">
            {/* Main Content */}
            <main className="dashboard-main">
                <header className="dashboard-header">
                    <h1>Admin Dashboard</h1>
                </header>

                <section className="stats">
                    <div className="stat-box">
                        <h3>Total Users</h3>
                        <p>120</p>
                    </div>
                    <div className="stat-box">
                        <h3>Total Quizzes</h3>
                        <p>45</p>
                    </div>
                    <div className="stat-box">
                        <h3>Total Attempts</h3>
                        <p>210</p>
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
            <Footer />
        </div>
    );
};

export default Dashboard;