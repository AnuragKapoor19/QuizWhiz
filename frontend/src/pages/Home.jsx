import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdAccountCircle } from "react-icons/md";

function Home() {
    const [authenticated, setauthenticated] = useState(true);
    const [toggle, settoggle] = useState(false);

    return (
        <>
            <div className='home'>
                <div className="navbar">
                    <div className='logo-container'>
                        <span className='logo'>𝕼𝖚𝖎𝖟𝖂𝖍𝖎𝖟</span>
                        <span className='line'>𝐅𝐨𝐫 𝐭𝐡𝐞 𝐮𝐥𝐭𝐢𝐦𝐚𝐭𝐞 𝐪𝐮𝐢𝐳 𝐰𝐢𝐳𝐚𝐫𝐝 </span>
                    </div>

                    {authenticated
                        ?
                        <div className='user'>
                            <div className='name' onClick={() => settoggle(!toggle)}>
                                <MdAccountCircle size={40} />
                                Hi,Anurag
                            </div>

                            <div className={`toggle-menu ${!toggle && 'd-none'}`}>
                                <div className='menu-container'>
                                    <span>Billa</span>
                                    <span>Billa</span>
                                    <span>Billa</span>
                                    <span>Billa</span>
                                    <span>Billa</span>
                                </div>
                            </div>
                        </div>
                        :
                        <div className='buttons'>
                            <Link to={'/login'} id='login'>Login</Link>
                            <Link to={'/signup'} id='signup'>SignUp</Link>
                        </div>
                    }
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