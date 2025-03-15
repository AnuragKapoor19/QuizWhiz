import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <div className='home'>
                <div className="navbar">
                    <div className='logo-container'>
                        <span className='logo'>𝕼𝖚𝖎𝖟𝖂𝖍𝖎𝖟</span>
                        <span className='line'>𝐅𝐨𝐫 𝐭𝐡𝐞 𝐮𝐥𝐭𝐢𝐦𝐚𝐭𝐞 𝐪𝐮𝐢𝐳 𝐰𝐢𝐳𝐚𝐫𝐝 </span>
                    </div>

                    <div className='buttons'>
                        <Link to={'/login'} id='login'>Login</Link>
                        <Link to={'/signup'} id='signup'>SignUp</Link>
                    </div>
                </div>

                <div className='start'>
                    <button><span id='one'>Start</span><span id='two'>Now</span></button>
                </div>

                <div className='welcome'>
                    <span>Welcome to QuizWhiz – The Ultimate Trivia Challenge! Ready to put your knowledge to the test?</span>
                </div>

                <div className='footer'>
                    <h3>© 2025 QuizWhiz. All rights reserved. Challenge your mind, one quiz at a time!</h3>
                </div>

            </div>
        </>
    )
}

export default Home