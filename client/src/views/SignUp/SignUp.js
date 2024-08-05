import React, { useState } from 'react'
import './SignUp.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import axios from "axios"
import toast from 'react-hot-toast'
import { Toaster } from 'react-hot-toast'

function SignUp() {

    const [ user, setUser]  = useState({
        fullName: '',
        email: '',
        password: '',
        proffession: ''
    })

    const signUp = async () => {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/signUp`, {
            fullName: user.fullName,
            email: user.email,
            password: user.password,
            proffession: user.proffession
        })

        if (response.data.success) {
            toast.success(response.data.message)

            setUser({
                fullName: '',
                email: '',
                password: '',
                proffession: ''
            })
        }
        else {
            toast.error(response.data.message)
        }
        console.log(response)
    }
    return (
        <div>
            <form className='formContainer'>
                <h1 className='form-title'> SignUp</h1>

                <div className="form-group">
                    <label for="exampleInputEmail1">Full Name</label>
                    <input type="text" className="form-control input-box" id="Full Name" aria-describedby="Full Name" placeholder="Full Name"
                        value={user.fullName}
                        onChange={(e) => { setUser({ ...user, fullName: e.target.value }) }} />
                </div>

                <div class="form-group">
                    <label for="exampleInputEmail1">Profession</label >
                    <select className="form-control input-box" id="exampleFormControlSelect1"
                    value={user.proffession}
                    onChange={(e) => { setUser({ ...user, proffession: e.target.value }) }}
                        >
                        <option>Profession</option>
                        <option>Business</option>
                        <option>Learning</option>
                        <option>Other</option>
                    </select>
                </div>

                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control input-box" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                        value={user.email}
                        onChange={(e) => { setUser({ ...user, email: e.target.value }) }} />
                    
                </div>


                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control input-box" id="exampleInputPassword1" placeholder="Password"
                        value={user.password}
                        onChange={(e) => { setUser({ ...user, password: e.target.value }) }} />
                </div>

                <button type="button"
                    onClick={signUp}
                    className="signUp-btn">SignUp</button>

                <Link to='/login' className=" alreadyAcc">Already Have an account ? <span className='login-text' > Login</span></Link>
                <Toaster />
            </form>
            
        </div>
    )
}

export default SignUp
