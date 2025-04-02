import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ContextState } from "../ContextApi";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminQuestions = () => {
    const { allQuestions } = ContextState();
    const navigate = useNavigate();

    const handleDelete = async (id) => {
        try {
            const { data } = await axios.delete(`http://localhost:5000/api/v1/question/${id}`, { withCredentials: true });

            if (!data.success) {
                return console.log(data.message);
            }

            alert(data.message)
            navigate('/admin/dashboard');

        } catch (error) {
            console.log(error.message);
        }
    };

    const handleUpdate = (id) => {
        console.log("Updating question with ID:", id);
    };

    return (
        <>
            <Header />
            <div className="admin-users-page">
                <div className="admin-questions">
                    <h2>Manage Questions</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Question</th>
                                <th>Options</th>
                                <th>Correct Answer</th>
                                <th>Difficulty</th>
                                <th>Category</th>
                                <th>Created At</th>
                                <th>Created By</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allQuestions.map((q) => (
                                <tr key={q.id}>
                                    <td>{q.id}</td>
                                    <td>{q.title}</td>
                                    <td>{q.question}</td>
                                    <td>{`${q.optionA}, ${q.optionB}, ${q.optionC}, ${q.optionD}`}</td>
                                    <td>{q.correctAnswer}</td>
                                    <td>{q.difficulty}</td>
                                    <td>{q.category}</td>
                                    <td>{new Date(q.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' })}</td>
                                    <td>{q.createdBy}</td>
                                    <td>
                                        <button className="update-btn" onClick={() => handleUpdate(q.id)}>Update</button>
                                        <button className="delete-btn" onClick={() => handleDelete(q.id)}>Delete</button>
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

export default AdminQuestions;
