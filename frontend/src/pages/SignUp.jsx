import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
    return (
        <>
            <div className='login-page'>
                <div className='container'>
                    <h1>SignUp</h1>
                    <div className='form-container'>
                        <form>
                            <div className='margin'>
                                <label for='name'>Name:</label>
                                <input id='name' type='text' required />
                            </div>

                            <div className='margin'>
                                <label for='email'>Email:</label>
                                <input id='email' type='email' required />
                            </div>

                            <div className="margin">
                                <label for='password'>Password:</label>
                                <input id='password' type='password' required />
                            </div>

                            <div className='margin'>
                                <label for='confirm-password'>Confirm Password:</label>
                                <input id='confirm-password' type='password' required />
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