import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import { ContextState } from '../ContextApi';
import axios from 'axios'
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { Triangle } from 'react-loader-spinner'

function Home() {
    const { authenticated, setauthenticated, setuser } = ContextState();
    const [loading, setloading] = useState(true);
    const navigate = useNavigate();

    const getUser = async () => {
        try {
            setloading(true)
            const { data } = await axios.get(`${import.meta.env.VITE_PRO_API_URL}/api/v1/me`, { withCredentials: true });
            if (data.success) {
                setuser(data.user)
                setauthenticated(true);
                setTimeout(() => {
                    setloading(false);
                }, 5000);
            }
            else {
                setauthenticated(false);
                setuser(null)
                setTimeout(() => {
                    setloading(false);
                }, 5000);
            }
        } catch (error) {
            console.log(error.message);
            setTimeout(() => {
                setloading(false);
            }, 4000);
        }
    }

    useEffect(() => {
        getUser();
    }, [])

    const handleClick = () => {
        if (authenticated) {
            navigate('/quiz')
        }
        else {
            navigate('/login')
        }
    }

    return (
        <>
            {loading
                ?
                <div className="loading-page">
                    <div className='l-logo'>
                        𝕼𝖚𝖎𝖟𝖂𝖍𝖎𝖟
                    </div>
                    <div className="welcome-container">
                        <h1>Welcome to QuizWhiz 🧠</h1>
                        <span>Test your knowledge across fun and challenging categories.
                            Pick your level, start the quiz, and climb the leaderboard!</span>

                        <h1 className='welcome-name'>👨‍💻 Built with ❤️ by Anurag Kapoor</h1>
                        <span>For curious minds and trivia lovers.</span>

                        <h3>🌟 Good things take time — your quiz is on the way!</h3>
                        <Triangle
                            visible={true}
                            height="100"
                            width="100"
                            color="red"
                            ariaLabel="triangle-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                        />
                    </div>
                    <div className='welcome-footer'>
                        <span id='copyright'>© 2025 QuizWhiz | Developed by Anurag Kapoor</span>
                    </div>
                </div>
                :
                <div className='home'>
                    <Header />
                    <div className='start'>
                        <button onClick={handleClick}><span id='one'>Start</span><span id='two'>Now</span></button>
                    </div>

                    <div className='welcome'>
                        <span>Welcome to QuizWhiz – The Ultimate Trivia Challenge! Ready to put your knowledge to the test?</span>
                    </div>
                    <Footer />
                </div>
            }
        </>
    )
}

export default Home