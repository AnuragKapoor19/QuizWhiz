import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import axios from 'axios';
import { ContextState } from '../ContextApi';

function SignUp() {
    const [credentials, setcredentials] = useState({ name: '', email: '', password: '', confirm_password: '' });
    const { setuser, setauthenticated } = ContextState();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (credentials.password === credentials.confirm_password) {
            const { data } = await axios.post('http://localhost:5000/api/v1/signup', { username: credentials.name, email: credentials.email, password: credentials.password }, { withCredentials: true });

            if (!data.success) {
                return console.log(data.message);
            }

            await setuser(data.user)
            await setauthenticated(true)
            navigate('/')
        }
        else {
            alert('Password does not match');
        }

    }

    return (
        <>
            <div className='login-page'>
                <Logo />
                <div className='container'>
                    <h1>SignUp</h1>
                    <div className='form-container'>
                        <form onSubmit={handleSubmit}>
                            <div className='margin'>
                                <label htmlFor='name'>Name:</label>
                                <input id='name' type='text' name='name' value={credentials.name} onChange={handleChange} required />
                            </div>

                            <div className='margin'>
                                <label htmlFor='email'>Email:</label>
                                <input id='email' type='email' name='email' value={credentials.email} onChange={handleChange} required />
                            </div>

                            <div className="margin">
                                <label htmlFor='password'>Password:</label>
                                <input id='password' type='password' name='password' value={credentials.password} onChange={handleChange} required />
                            </div>

                            <div className='margin'>
                                <label htmlFor='confirm-password'>Confirm Password:</label>
                                <input id='confirm-password' type='password' name='confirm_password' value={credentials.confirm_password} onChange={handleChange} required />
                            </div>

                            <div className="btn-container">
                                <button type='submit'>Create Account</button>
                            </div>

                            <span>Already a User? <Link to={'/login'}>Login</Link></span>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp