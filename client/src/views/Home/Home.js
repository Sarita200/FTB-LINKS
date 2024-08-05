import React, { useState } from 'react'
import './Home.css'
import axios from "axios"
import toast from "react-hot-toast"
import { Toaster } from 'react-hot-toast'

function Home() {
    const [linkData, setLink] = useState({
        title: "",
        target: "",
        slug: ""
    })
    const createLink = async (req, res) => {
        if (!linkData.title || !linkData.slug || !linkData.target) {
            toast.error("Please enter all details")
            return
        }
        else {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/link`, linkData)
            if (response.data.success) {
                toast.success("Shorten Link Successfully...")

                setLink({
                    title: "",
                    target: "",
                    slug: ""
                })
            }
            else {
                toast.error(response.data.message)
            }
            console.log(response)
        }
    }
    return (
        <div >
            <h1 className='Title'> Shorten Link..🤩</h1>
            <h2 className='title-heading'></h2>
            <div className='link-container'>
                <div >
                    <form className='link-form'>
                        <input
                            type='text'
                            placeholder='Title'
                            value={linkData.title}
                            onChange={(e) => {
                                setLink({
                                    ...linkData,
                                    title: e.target.value
                                })
                            }}
                            className='Link-Input'
                        />

                        <input
                            type='text'
                            placeholder='Target'
                            value={linkData.target}
                            onChange={(e) => {
                                setLink({
                                    ...linkData,
                                    target: e.target.value
                                })
                            }}
                            className='Link-Input'
                        />

                        <input
                            type='text'
                            placeholder='slug'
                            value={linkData.slug}
                            onChange={(e) => {
                                setLink({
                                    ...linkData,
                                    slug: e.target.value
                                })
                            }}
                            className='Link-Input'
                        />

                        <button
                            type='button'
                            onClick={createLink}
                            className='link-btn'
                        >Shorten</button>


                    </form>
                </div>

                <div className='allLink-container'>
                    <h2 className='title-container'>My Link</h2>
                </div>
            </div>
            <Toaster />
        </div>
    )
}

export default Home
