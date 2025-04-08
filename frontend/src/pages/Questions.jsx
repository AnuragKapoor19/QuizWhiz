import React, { useEffect, useState } from 'react'
import Logo from '../components/Logo';
import { BsTrophyFill } from "react-icons/bs";
import Footer from '../components/Footer'
import { ContextState } from '../ContextApi';
import { useNavigate } from 'react-router-dom';

const Questions = () => {
    const [count, setCount] = useState(10);
    const { questions, score, setscore } = ContextState();
    const [selected, setSelected] = useState('')
    const [index, setindex] = useState(0)
    const [finished, setfinished] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        if (count > 0) {
            const timer = setInterval(() => {
                setCount((prevCount) => prevCount - 1);
            }, 1000);

            return () => clearInterval(timer); // Cleanup the interval on unmount
        }

        if (count === 0) {
            if (questions.length - 1 !== index) {
                setindex(index + 1);
                setCount(10);
                setSelected('');
            }
            else {
                setfinished(true);
            }
        }
    }, [count]);

    useEffect(() => {
        setSelected('')
    }, [index]);

    useEffect(() => {
        if (selected === questions[index].correctAnswer) {
            setscore(score + 1);
        }
    }, [selected])

    const handleOptionClick = (value) => {
        setSelected(value);

        setTimeout(() => {
            if (questions.length - 1 !== index) {
                setindex(index + 1);
                setCount(10);
            }
            else {
                setfinished(true)
            }
        }, 500);
    }

    const handleClick = () => {
        setindex(0);
        setSelected('');
        setscore(0);
        setCount(10);
        navigate('/');
    }

    return (
        <>
            {
                questions.length > 1 ?
                    <>
                        <div className='q-page'>
                            <Logo />
                            {finished
                                ?
                                <div className="q-container">
                                    <i id='trophy'><BsTrophyFill size={80} /></i>
                                    <span id='congo'>Congratulations</span>
                                    <span id='score-heading'>
                                        Your Score
                                    </span>

                                    <span id='score'>
                                        {score}/{questions.length}
                                    </span>

                                    <span id='greet'>
                                        You did a great job, Learn more by taking another quiz
                                    </span>

                                    <button id='home' onClick={handleClick}>
                                        Back to Home
                                    </button>
                                </div>
                                :
                                <div className="q-container">
                                    <div className='question'>
                                        Q{index + 1}.{questions[index].question}
                                    </div>

                                    <div className='options'>
                                        <div className="op">
                                            <div id={(selected === '' || selected !== 'A') && 'option'} className={selected !== '' && selected === 'A' && selected === questions[index].correctAnswer ? 'correct' : 'wrong'} onClick={() => handleOptionClick('A')}>A. {questions[index].optionA}</div>
                                            <div id={(selected === '' || selected !== 'B') && 'option'} className={selected !== '' && selected === 'B' && selected === questions[index].correctAnswer ? 'correct' : 'wrong'} onClick={() => handleOptionClick('B')}>B. {questions[index].optionB}</div>
                                        </div>

                                        <div className="op">
                                            <div id={(selected === '' || selected !== 'C') && 'option'} className={selected !== '' && selected === 'C' && selected === questions[index].correctAnswer ? 'correct' : 'wrong'} onClick={() => handleOptionClick('C')}>C. {questions[index].optionC}</div>
                                            <div id={(selected === '' || selected !== 'D') && 'option'} className={selected !== '' && selected === 'D' && selected === questions[index].correctAnswer ? 'correct' : 'wrong'} onClick={() => handleOptionClick('D')}>D. {questions[index].optionD}</div>
                                        </div>

                                    </div>
                                </div>
                            }

                            <Footer />

                        </div>

                        {!finished &&
                            <div className="timer-container">
                                <div className='timer'>
                                    <h1>{count}</h1>
                                </div>
                            </div>
                        }

                    </>
                    :
                    <h1>No question to show !</h1>
            }
        </>
    )
}

export default Questions