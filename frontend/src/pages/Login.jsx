import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
      <div className='login-page'>
        <div className='container'>
          <h1>Login</h1>
          <div className='form-container'>
            <form>
              <div className='margin'>
                <label for='email'>Email:</label>
                <input id='email' type='email' required />
              </div>

              <div className="margin">
                <label for='password'>Password:</label>
                <input id='password' type='password' required />
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