import React from 'react'

function Home() {
    return (
        <>
            <div className='home'>
                <div className="navbar">
                    <div className='logo-container'>
                        <span className='logo'>QuizWhiz</span>
                        <span className='line'>For the ultimate quiz wizard</span>
                    </div>

                    <div className='buttons'>
                        <div id='login'>Login</div>
                        <div id='signup'>SignUp</div>
                    </div>
                </div>

                <div className='start'>
                    <button><span id='one'>Start</span><span id='two'>Now</span></button>
                </div>

                <div className='footer'>
                    <h3>© 2025 QuizWhiz. All rights reserved. Challenge your mind, one quiz at a time!</h3>
                </div>

            </div>
        </>
    )
}

export default Home