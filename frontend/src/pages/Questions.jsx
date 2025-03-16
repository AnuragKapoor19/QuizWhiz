import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'

const Questions = () => {
    const [count, setCount] = useState(10);

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
                <div className="q-container">
                    <div className='question'>
                        Q1.Which is the most beautiful country in the world?
                    </div>

                    <div className='options'>
                        <div className="op">
                            <div id="option">A. India</div>
                            <div id="option">B. Australia</div>
                        </div>

                        <div className="op">
                            <div id="option">C. Canada</div>
                            <div id="option">D. America</div>
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