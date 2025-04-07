import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ContextState } from '../ContextApi';
import Logo from '../components/Logo';
import toast from 'react-hot-toast';

function Login() {
  const [credentials, setcredentials] = useState({ email: '', password: '' });
  const { setuser, setauthenticated } = ContextState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_PRO_API_URL}/api/v1/login`, { email: credentials.email, password: credentials.password }, { withCredentials: true });

      if (!data.success) {
        return console.log(data.message);
      }

      await setauthenticated(true);
      await setuser(data.user);
      toast.success(data.message);
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <div className='login-page'>
        <Logo />
        <div className='container'>
          <h1>Login</h1>
          <div className='form-container'>
            <form onSubmit={handleSubmit}>
              <div className='margin'>
                <label htmlFor='email'>Email:</label>
                <input id='email' type='email' name='email' value={credentials.email} required onChange={handleChange} />
              </div>

              <div className="margin">
                <label htmlFor='password'>Password:</label>
                <input id='password' type='password' name='password' value={credentials.password} required onChange={handleChange} />
              </div>

              <div className="btn-container">
                <button type='submit'>Login</button>
              </div>

              <span>Not a User? <Link to={'/signup'}> SignUp</Link></span>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login