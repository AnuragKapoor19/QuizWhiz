import React from 'react';
import Footer from '../components/Footer';

const QuizOptions = () => {
    return (
        <>
            <div className="quiz-container">
                <h1 className="quiz-title">QuizWhiz - Get Ready!</h1>
                <div className="quiz-box">
                    <form className="quiz-form">
                        <div className="quiz-group">
                            <label className="quiz-label">Select Category:</label>
                            <select className="quiz-select">
                                <option>General Knowledge</option>
                                <option>Science</option>
                                <option>History</option>
                                <option>Sports</option>
                            </select>
                        </div>
                        <div className="quiz-group">
                            <label className="quiz-label">Number of Questions:</label>
                            <input type="number" min="1" max="50" placeholder="10" className="quiz-input" />
                        </div>
                        <div className="quiz-group">
                            <label className="quiz-label">Difficulty:</label>
                            <select className="quiz-select">
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
