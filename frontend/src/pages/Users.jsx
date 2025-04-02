import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ContextState } from "../ContextApi";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Users = () => {
    const { users } = ContextState();
    const navigate = useNavigate('/');

    const handleDelete = async (id) => {
        try {
            const { data } = await axios.delete(`http://localhost:5000/api/v1/admin/delete/${id}`, { withCredentials: true });

            if (!data.success) {
                return console.log(data.message);
            }

            alert(data.message);
            navigate('/admin/dashboard');
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <>
            <Header />
            <div className="admin-users-page">
                <div className="admin-users">
                    <h2>Manage Users</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        <button className="delete-btn" onClick={() => handleDelete(user.id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Users;
