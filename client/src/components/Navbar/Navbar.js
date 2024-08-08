import React, { useEffect, useState } from 'react'
import './Navbar.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import toast from 'react-hot-toast'
import logoImg from './../Footer/link3.png'

function Navbar() {
/* const [user , setUser ] = useState('')

    const logout = async () =>{
        localStorage.clear()
        toast.success("Logout Successfull")
        setTimeout(() =>{
            window.location.href = '/login'
        },3000)
    }

    useEffect(() =>{
        const currentUser = JSON.parse(localStorage.getItem('currenUser'))
        setUser(currentUser)
    
    },[])
    console.log(user);
    
*/
const [user ,setUser] = useState('')
const [isOpen, setIsOpen ] =useState(false)

const logout = async () =>{
    localStorage.clear()
    toast.success("Logout Successful")
    setTimeout(() =>{
        window.location.href = '/login'
    }, 3000)
}

const toogleMenu = () =>{
    setIsOpen(!isOpen)
}

useEffect( ()=>{
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    setUser(currentUser)
}, [])
console.log(user)


    return (
        <div className='bodyContainer'>
            <nav className="navbar navbar-expand-lg shadow p-3 mb-5  rounded NavContainer">
                <p className="navbar-brand space-aroound setMargin" href="#" >
                    <span><img src={logoImg} className='LogoImg' /></span>
                    <span className='Title '> Shorten Link</span>   
                </p> 
                

                <button className="navbar-toggler" type="button" data-toggle="collapse" onClick={toogleMenu} data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ham-Menu setMargin ${isOpen ? 'show' : '' }`} id="navbarNav" >

                    <ul className="navbar-nav nav-sec ">
                        <li className="nav-item setMargin fontSize">
                            <a className="nav-link " href="/">Home</a>
                        </li>

                        <li className="nav-item fontSize">
                            <a className="nav-link " href="/contact">Contact</a>
                        </li>
                        
                        {
                            user ? 
                            <li className='nav-item setMargin fontSize'>
                            <span
                                className=' nav-link logOutButton'
                                onClick={logout} >
                                    Logout
                            </span>
                        </li>
                        :
                        <li className='setMargin fontSize'>
                            <a
                                className='nav-item nav-link logOutButton'
                                href='/login' >
                                Login
                            </a>
                            
                        </li>
                        }
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
