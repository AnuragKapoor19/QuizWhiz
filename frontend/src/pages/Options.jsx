import React, { useState } from 'react';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { ContextState } from '../ContextApi';
import axios from 'axios';

const QuizOptions = () => {
    const navigate = useNavigate()
    const { setquestions } = ContextState();
    const Categories = ['Science & Nature', 'History', 'Geography', 'Sports', 'Entertainment', 'Literature', 'Mathematics', 'Technology', 'Mythology'];
    const [credentials, setcredentials] = useState({ category: 'General Knowledge', limit: 10, difficulty: 'Easy' });

    const handleChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.get(`http://localhost:5000/api/v1/questions?category=${credentials.category}&difficulty=${String(credentials.difficulty).toLowerCase()}&limit=${credentials.limit}`, { withCredentials: true });

            if (!data.success) {
                return console.log(data.message)
            }

            await setquestions(data.questions);
            navigate('/questions')
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <>
            <div className="quiz-container">
                <Header />
                <h1 className="quiz-title">QuizWhiz - Get Ready!</h1>
                <div className="quiz-box">
                    <form className="quiz-form" onSubmit={handleSubmit}>
                        <div className="quiz-group">
                            <label className="quiz-label">Select Category:</label>
                            <select className="quiz-select" name='category' value={credentials.category} onChange={handleChange}>
                                <option>General Knowledge</option>
                                {Categories.map((category, index) => (
                                    <option key={index}>{category}</option>
                                ))}
                            </select>
                        </div>
                        <div className="quiz-group">
                            <label className="quiz-label">Number of Questions:</label>
                            <input type="number" min="1" max="10" placeholder="10" className="quiz-input" name='limit' value={credentials.limit} onChange={handleChange} />
                        </div>
                        <div className="quiz-group">
                            <label className="quiz-label">Difficulty:</label>
                            <select className="quiz-select" name='difficulty' value={credentials.difficulty} onChange={handleChange}>
                                <option>Easy</option>
                                <option>Medium</option>
                                <option>Hard</option>
                            </select>
                        </div>
                        <button type="submit" className="quiz-button">Start Quiz</button>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default QuizOptions;
