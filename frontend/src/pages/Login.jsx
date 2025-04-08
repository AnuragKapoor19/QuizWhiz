import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ContextState } from '../ContextApi';
import Logo from '../components/Logo';
import toast from 'react-hot-toast';
import { TailSpin } from 'react-loader-spinner';
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const [credentials, setcredentials] = useState({ email: '', password: '' });
  const { setuser, setauthenticated } = ContextState();
  const [loading, setloading] = useState(false);
  const [show, setshow] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setloading(true)
      const { data } = await axios.post(`${import.meta.env.VITE_PRO_API_URL}/api/v1/login`, { email: credentials.email, password: credentials.password }, { withCredentials: true });

      if (!data.success) {
        return console.log(data.message);
      }

      await setauthenticated(true);
      await setuser(data.user);
      setloading(false)
      toast.success(data.message);
      navigate('/');
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
          <h1>Login</h1>
          <div className='form-container'>
            <form onSubmit={handleSubmit}>
              <div className='margin'>
                <label htmlFor='email'>Email:</label>
                <input id='email' type='email' name='email' value={credentials.email} required onChange={handleChange} />
              </div>

              <div className="margin">
                <label htmlFor='password'>Password:</label>
                <div className='password-container'>
                  <input id='password' maxlength="25" type={`${show ? 'text' : 'password'}`} name='password' value={credentials.password} required onChange={handleChange} />
                  <div className='eye' onClick={() => setshow(!show)}>
                    {show
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
                    <TailSpin
                      visible={loading}
                      height="20"
                      width="100"
                      color="white"
                      ariaLabel="tail-spin-loading"
                      radius="1"
                      wrapperStyle={{}}
                      wrapperClass=""
                    />
                    :
                    'Login'
                  }
                </button>
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