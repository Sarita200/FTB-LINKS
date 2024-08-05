import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div>
            <form className='formContainer'>
                <h1 className='form-title'> Login</h1>

                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control input-box" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control input-box" id="exampleInputPassword1" placeholder="Password" />
                </div>

                <button type="button" className="signUp-btn">Login</button>

                <Link to='/signUp' className=" alreadyAcc">Already Have an account ? <span className='login-text' > SignUp</span></Link>
            </form>
        </div>
    )
}

export default Login
