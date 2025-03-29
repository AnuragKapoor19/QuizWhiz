import React, { useEffect, useState } from 'react'
import Logo from '../components/Logo'
import Footer from '../components/Footer'
import { ContextState } from '../ContextApi';

const Questions = () => {
    const [count, setCount] = useState(10);
    const { questions } = ContextState();
    const [selected, setSelected] = useState('')
    const [index, setindex] = useState(0)

    useEffect(() => {
        if (count > 0) {
            const timer = setInterval(() => {
                setCount((prevCount) => prevCount - 1);
            }, 1000);

            return () => clearInterval(timer); // Cleanup the interval on unmount
        }

        if (count === 0) {
            setindex(index + 1);
            setCount(10);
            setSelected('');
        }
    }, [count]);


    return (
        <>
            {
                questions.length > 1 ?
                    <>
                        <div className='q-page'>
                            <Logo />
                            <div className="q-container">
                                <div className='question'>
                                    Q1.{questions[index].question}
                                </div>

                                <div className='options'>
                                    <div className="op">
                                        <div id={(selected === '' || selected !== 'A') && 'option'} className={selected !== '' && selected === 'A' && selected === questions[index].correctAnswer ? 'correct' : 'wrong'} onClick={() => setSelected('A')}>A. {questions[index].optionA}</div>
                                        <div id={(selected === '' || selected !== 'B') && 'option'} className={selected !== '' && selected === 'B' && selected === questions[index].correctAnswer ? 'correct' : 'wrong'} onClick={() => setSelected('B')}>B. {questions[index].optionB}</div>
                                    </div>

                                    <div className="op">
                                        <div id={(selected === '' || selected !== 'C') && 'option'} className={selected !== '' && selected === 'C' && selected === questions[index].correctAnswer ? 'correct' : 'wrong'} onClick={() => setSelected('C')}>C. {questions[index].optionC}</div>
                                        <div id={(selected === '' || selected !== 'D') && 'option'} className={selected !== '' && selected === 'D' && selected === questions[index].correctAnswer ? 'correct' : 'wrong'} onClick={() => setSelected('D')}>D. {questions[index].optionD}</div>
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
                    :
                    <h1>No question to show !</h1>
            }
        </>
    )
}

export default Questions