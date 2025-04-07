import React, { useState } from 'react'
import Footer from '../components/Footer';
import { ContextState } from '../ContextApi';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function UpdateQuestion() {
    const Categories = ['Science & Nature', 'History', 'Geography', 'Sports', 'Entertainment', 'Literature', 'Mathematics', 'Technology', 'Mythology'];
    const { updateQuestion } = ContextState();
    const navigate = useNavigate();
    const { title, question, optionA, optionB, optionC, optionD, correctAnswer, difficulty, category } = updateQuestion;
    const [credentials, setcredentials] = useState({ title, question, optionA, optionB, optionC, optionD, correctAnswer, difficulty, category });

    const handleChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value });
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { title, question, optionA, optionB, optionC, optionD, correctAnswer, difficulty, category } = credentials;
            const { data } = await axios.put(`${import.meta.env.VITE_PRO_API_URL}/api/v1/question/${updateQuestion.id}`, { title, question, optionA, optionB, optionC, optionD, correctAnswer, difficulty, category }, { withCredentials: true, 'Content-Type': 'application/json' })

            if (!data.success) {
                return console.log(data.message);
            }

            toast.success(data.message);
            navigate('/admin/dashboard');
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <div className="update-question-page">
                <div className="update-form-container">
                    <form className='update-form' onSubmit={handleSubmit}>
                        <h1>Update Question</h1>

                        <label htmlFor='title'>Title</label>
                        <input id='title' type='text' name='title' value={credentials.title} onChange={handleChange} />

                        <label htmlFor='question'>Question</label>
                        <input id='question' type='text' name='question' value={credentials.question} onChange={handleChange} />

                        <label htmlFor='A'>Option A</label>
                        <input id='A' type='text' name='optionA' value={credentials.optionA} onChange={handleChange} />

                        <label htmlFor='B'>Option B</label>
                        <input id='B' type='text' name='optionB' value={credentials.optionB} onChange={handleChange} />

                        <label htmlFor='C'>Option C</label>
                        <input id='C' type='text' name='optionC' value={credentials.optionC} onChange={handleChange} />

                        <label htmlFor='D'>Option D</label>
                        <input id='D' type='text' name='optionD' value={credentials.optionD} onChange={handleChange} />

                        <label htmlFor='correct'>Correct Answer</label>
                        <select id='correct' name='correctAnswer' value={credentials.correctAnswer} onChange={handleChange}>
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                            <option>D</option>
                        </select>

                        <label htmlFor='difficulty'>Difficulty</label>
                        <select id='difficulty' name='difficulty' value={credentials.difficulty} onChange={handleChange}>
                            <option>Easy</option>
                            <option>Medium</option>
                            <option>Hard</option>
                        </select>

                        <label htmlFor='category'>Category</label>
                        <select id='category' name='category' value={credentials.category} onChange={handleChange}>
                            <option>General Knowledge</option>
                            {Categories.map((category, index) => (
                                <option key={index}>{category}</option>
                            ))}
                        </select>

                        <div className="update-question-btn">
                            <button type='submit'>Update</button>
                        </div>
                    </form>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default UpdateQuestion