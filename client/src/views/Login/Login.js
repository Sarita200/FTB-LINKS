import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import Navbar from '../../components/Navbar/Navbar.js'

function Login() {

    const [email , setEmail ] = useState('')
    const [password , setPassword ] = useState('')
    const [user , setUser ] = useState({
        email: email,
        password : password
    })

    const loginNow = async () => {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/login` , {
            email : email,
            password : password
        })

        if(response.data.success){
            toast.success(response.data.message)

            localStorage.setItem('currentUser' , JSON.stringify(response.data.data))

            toast.loading('Redirecting to dashboard..')
            setTimeout(() =>{
                window.location.href='/'
            }, 3000)

            
        }
        else{
            toast.error(response.data.message)
            
        }
    }
    return (
        <div>
            <form className='formContainer'>
                <h1 className='form-title'> Login</h1>

                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control input-box" id="exampleInputEmail1" aria-describedby="emailHelp" 
                    placeholder="Enter email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control input-box" id="exampleInputPassword1" placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button type="button" 
                className="signUp-btn"
                onClick={loginNow}
                >Login</button>

                <Link to='/signUp' className=" alreadyAcc">Already Have an account ? <span className='login-text' > SignUp</span></Link>
            </form>
            <Toaster/>
        </div>
    )
}

export default Login
