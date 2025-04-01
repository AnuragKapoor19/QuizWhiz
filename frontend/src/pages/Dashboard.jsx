import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();

    const data = [
        { name: "Users", value: 120 },
        { name: "Quizzes", value: 45 },
    ];

    return (
        <>
            <div className="dashboard-container">
                {/* Main Content */}
                <main className="dashboard-main">
                    <header className="dashboard-header">
                        <h1>Admin Dashboard</h1>
                    </header>

                    <section className="stats">
                        <div className="stat-box" onClick={() => navigate('/admin/users')}>
                            <h3>Total Users</h3>
                            <p>120</p>
                        </div>
                        <div className="stat-box">
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
            <Footer />
        </>
    );
};

export default Dashboard;