import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import axios from 'axios';
import { ContextState } from '../ContextApi';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { ClipLoader } from 'react-spinners';

function SignUp() {
    const [credentials, setcredentials] = useState({ name: '', email: '', password: '', confirm_password: '' });
    const { setuser, setauthenticated } = ContextState();
    const navigate = useNavigate();
    const [loading, setloading] = useState(false)
    const [show, setshow] = useState(false)
    const [showC, setshowC] = useState(false)

    const handleChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setloading(true);

            if (credentials.password === credentials.confirm_password) {
                const { data } = await axios.post(`${import.meta.env.VITE_PRO_API_URL}/api/v1/signup`, { username: credentials.name, email: credentials.email, password: credentials.password }, { withCredentials: true });

                if (!data.success) {
                    return toast.error(data.message);
                }

                await setuser(data.user)
                await setauthenticated(true)
                setloading(false)
                toast.success(data.message)
                navigate('/')
            }
            else {
                toast.error('Password does not match');
                setloading(false)
            }
        } catch (error) {
            console.log(error.message);
            setloading(false)
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
                                <div className='password-container'>
                                    <input maxLength='25' id='password' maxlength="25" type={`${show ? 'text' : 'password'}`} name='password' value={credentials.password} required onChange={handleChange} />
                                    <div className='eye' onClick={() => setshow(!show)}>
                                        {show
                                            ? <FaEyeSlash size={20} />
                                            : <FaEye size={20} />
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className='margin'>
                                <label htmlFor='confirm-password'>Confirm Password:</label>
                                <div className='password-container'>
                                    <input maxLength='25' id='confirm-password' type={`${showC ? 'text' : 'password'}`} name='confirm_password' value={credentials.confirm_password} onChange={handleChange} required />
                                    <div className='eye' onClick={() => setshowC(!showC)}>
                                        {showC
                                            ? <FaEyeSlash size={20} />
                                            : <FaEye size={20} />
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className="btn-container">
                                <button type='submit'>
                                    {loading
                                        ?
                                        <ClipLoader color='black' size={20}/>
                                        :
                                        'Create Account'
                                    }
                                </button>
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