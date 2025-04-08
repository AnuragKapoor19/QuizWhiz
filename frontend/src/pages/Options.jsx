import React, { useState } from 'react';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { ContextState } from '../ContextApi';
import axios from 'axios';
import { TailSpin } from 'react-loader-spinner';

const QuizOptions = () => {
    const navigate = useNavigate()
    const { setquestions } = ContextState();
    const Categories = ['Science&Nature', 'History', 'Geography', 'Sports', 'Entertainment', 'Literature', 'Mathematics', 'Technology', 'Mythology'];
    const [credentials, setcredentials] = useState({ category: 'General Knowledge', limit: 5, difficulty: 'Easy' });
    const [loading, setloading] = useState(false)

    const handleChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setloading(true)
            const { data } = await axios.get(`${import.meta.env.VITE_PRO_API_URL}/api/v1/questions?category=${credentials.category}&difficulty=${String(credentials.difficulty).toLowerCase()}&limit=${credentials.limit}`, { withCredentials: true });

            if (!data.success) {
                return console.log(data.message)
            }

            await setquestions(data.questions);
            setloading(false)
            navigate('/questions')
        } catch (error) {
            console.log(error.message)
            setloading(false)
        }
    }

    return (
        <>
            <div className="quiz-container">
                <Header />
                <div className="quiz-box">
                    <h1 className="quiz-title">QuizWhiz - Get Ready!</h1>
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
                            <select className="quiz-input" name='limit' value={credentials.limit} onChange={handleChange}>
                                <option>5</option>
                                <option>10</option>
                            </select>
                        </div>
                        <div className="quiz-group">
                            <label className="quiz-label">Difficulty:</label>
                            <select className="quiz-select" name='difficulty' value={credentials.difficulty} onChange={handleChange}>
                                <option>Easy</option>
                                <option>Medium</option>
                                <option>Hard</option>
                            </select>
                        </div>
                        <button type="submit" className="quiz-button">
                            {loading
                                ?
                                <TailSpin
                                    visible={loading}
                                    height="20"
                                    width="100"
                                    color="red"
                                    ariaLabel="tail-spin-loading"
                                    radius="1"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                />
                                :
                                'Start Quiz'
                            }
                        </button>
                    </form>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default QuizOptions;
