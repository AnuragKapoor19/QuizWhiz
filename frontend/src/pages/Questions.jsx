import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header';
import { ContextState } from '../ContextApi';

const Questions = () => {
    const [count, setCount] = useState(10);
    const { questions } = ContextState();

    useEffect(() => {
        if (count > 0) {
            const timer = setInterval(() => {
                setCount((prevCount) => prevCount - 1);
            }, 1000);

            return () => clearInterval(timer); // Cleanup the interval on unmount
        }
    }, [count]);

    return (
        <>
            <div className='q-page'>
                <Header />
                <div className="q-container">
                    <div className='question'>
                        Q1.{questions[0].question}
                    </div>

                    <div className='options'>
                        <div className="op">
                            <div id="option">A. {questions[0].optionA}</div>
                            <div id="option">B. {questions[0].optionB}</div>
                        </div>

                        <div className="op">
                            <div id="option">C. {questions[0].optionC}</div>
                            <div id="option">D. {questions[0].optionD}</div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="timer-container">
                <div className='timer'>
                    <h1>{count}</h1>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Questions