import React from 'react'
import './Contact.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import contactmailImg from './../../components/Footer/contact-mail.png'
import mailImg from './../../components/Footer/email.png'

function Contact() {
    return (
        <>
            <Navbar />
            <div>
                <div className='contact-map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60539.19779115712!2d73.89821899500646!3d18.497249543267994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e9ff81f1aae9%3A0x2560343555ac8b53!2sHadapsar%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1723004893831!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div className='contactsDiv'>
                    <div >
                        <form className='linkForm'>
                            <h6 className='greeting'>Hello👋</h6>
                            <h4 className='titleContainer'>Give Suggestions</h4>
                            <input
                                type='text'
                                placeholder='Name'
                                className='LinkInput'
                            />

                            <input
                                type='text'
                                placeholder='Phone Number'
                                className='LinkInput'
                            />

                            <input
                                type='text'
                                placeholder='Email ID'
                                className='LinkInput'
                            />

                            <input
                                type='text'
                                placeholder='Organization '
                                className='LinkInput'
                            />
                            <textarea
                                type='text-area'
                                placeholder='Enter Message '
                                className='LinkInput'
                            />

                            <button
                                type='Submit'
                                className='linkBtn'
                            >Shorten</button>


                        </form>
                    </div>
                        <div className='reachUs'>
                            <h4>Shivtej Heights🏡</h4>
                            <h5>Shorten link🔗</h5>
                            <p>203,Shivtej Heights,Manjari BK, Pune - 412307</p>
                            <a href='#' className='text-secoration'><img src={contactmailImg} height={'25px'}  />9665386035</a><br/>
                            <a href='#' className='text-secoration'><img src={mailImg} height={'25px'} />saritasadgir1@gmail.com</a>
                        </div>
                </div>
            </div><br /><br /><br />

            <Footer />
        </>
    )
}

export default Contact
