import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const questions = [
    {
        id: 1,
        title: "Sample Question 1",
        question: "What is the capital of France?",
        optionA: "Berlin",
        optionB: "Madrid",
        optionC: "Paris",
        optionD: "Rome",
        correctAnswer: "Paris",
        difficulty: "Easy",
        category: "Geography",
        createdAt: "2025-04-01",
        createdBy: "Admin",
    },
    {
        id: 1,
        title: "Sample Question 1",
        question: "What is the capital of France?",
        optionA: "Berlin",
        optionB: "Madrid",
        optionC: "Paris",
        optionD: "Rome",
        correctAnswer: "Paris",
        difficulty: "Easy",
        category: "Geography",
        createdAt: "2025-04-01",
        createdBy: "Admin",
    },    {
        id: 1,
        title: "Sample Question 1",
        question: "What is the capital of France?",
        optionA: "Berlin",
        optionB: "Madrid",
        optionC: "Paris",
        optionD: "Rome",
        correctAnswer: "Paris",
        difficulty: "Easy",
        category: "Geography",
        createdAt: "2025-04-01",
        createdBy: "Admin",
    },    {
        id: 1,
        title: "Sample Question 1",
        question: "What is the capital of France?",
        optionA: "Berlin",
        optionB: "Madrid",
        optionC: "Paris",
        optionD: "Rome",
        correctAnswer: "Paris",
        difficulty: "Easy",
        category: "Geography",
        createdAt: "2025-04-01",
        createdBy: "Admin",
    },    {
        id: 1,
        title: "Sample Question 1",
        question: "What is the capital of France?",
        optionA: "Berlin",
        optionB: "Madrid",
        optionC: "Paris",
        optionD: "Rome",
        correctAnswer: "Paris",
        difficulty: "Easy",
        category: "Geography",
        createdAt: "2025-04-01",
        createdBy: "Admin",
    },
];

const AdminQuestions = () => {
    const handleDelete = (id) => {
        console.log("Deleting question with ID:", id);
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
                            {questions.map((q) => (
                                <tr key={q.id}>
                                    <td>{q.id}</td>
                                    <td>{q.title}</td>
                                    <td>{q.question}</td>
                                    <td>{`${q.optionA}, ${q.optionB}, ${q.optionC}, ${q.optionD}`}</td>
                                    <td>{q.correctAnswer}</td>
                                    <td>{q.difficulty}</td>
                                    <td>{q.category}</td>
                                    <td>{q.createdAt}</td>
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
