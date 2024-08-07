import React from 'react'
import './Footer.css'
import mailImg from './../Footer/email.png'
import contactmailImg from './../Footer/contact-mail.png'
import linkImg from './../Footer/link3.png'

function Footer() {
    return (
        <div className="card text-center ">
            <div class="card-header">
                <span className='titleheader'><img src={linkImg} height={'30px'}/>Shorten Link</span>
            </div>

            <div className="card-body">
                <h5 className="card-title">Link Smarter, Not Longer</h5>
                <p className="card-text">Short Links, Fast Clicks</p>
                <a href="/" className="text-decoration">Home</a><br />
                <a href="" className="text-decoration">Logout</a><br />
                <a href="" className="text-decoration">contacts</a>
                

                <div className='card-footer contacts'>
                    
                    <span> <img src={mailImg} height={'25px'} />saritasadgir1@gmail.com</span>
                    
                    <span> <img src={contactmailImg} height={'25px'}  />9665386035</span>
                </div>
            </div>

        </div>
    )
}

export default Footer
