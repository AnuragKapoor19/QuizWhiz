import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import { ContextState } from '../ContextApi';
import axios from 'axios'
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

function Home() {
    const { authenticated, setauthenticated, setuser } = ContextState();
    const navigate = useNavigate();

    const getUser = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_PRO_API_URL}/api/v1/me`, { withCredentials: true });
            if (data.success) {
                setuser(data.user)
                setauthenticated(true);
            }
            else {
                setauthenticated(false);
                setuser(null)
            }
        } catch (error) {
            console.log(error.message);
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
        </>
    )
}

export default Home