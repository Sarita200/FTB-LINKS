import React from 'react'
import './SignUp.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function SignUp() {
    return (
        <div>
            <form className='formContainer'>
                <h1 className='form-title'> SignUp</h1>
                <div className="form-group">
                    <label for="exampleInputEmail1">Full Name</label>
                    <input type="text" className="form-control input-box" id="Full Name" aria-describedby="Full Name" placeholder="Full Name" />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Profession</label >
                    <select className="form-control input-box" id="exampleFormControlSelect1">
                        <option>Profession</option>
                        <option>Business</option>
                        <option>Learning</option>
                        <option>Other</option>
                    </select>
                </div>

                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control input-box" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>


                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control input-box" id="exampleInputPassword1" placeholder="Password" />
                </div>

                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input input-box" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="button" className="signUp-btn">SignUp</button>
            </form>
        </div>
    )
}

export default SignUp
