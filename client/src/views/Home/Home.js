import React, { useEffect, useState } from 'react'
import './Home.css'
import axios from "axios"
import toast from "react-hot-toast"
import { Toaster } from 'react-hot-toast'
import LinkCard from '../../components/LinkCards/LinkCard'

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

    const [userLinks ,setAllLinks] = useState([])

    const fetchLinks = async () =>{
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/links`)
        setAllLinks(response.data.data)
    }
    useEffect( () =>{
        fetchLinks();
    }, [] )
    

    return (
        <div >
            <h1 className='Title'> Shorten Link..🤩</h1>
            <h2 className='title-heading'>Quick Access, Smart Solutions</h2>
            <div className='link-container'>
                <div >
                    <form className='link-form'>
                        <h2 className='title-container'>Short Your Link Here</h2>
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
                    {
                        userLinks.map((links ,i) =>{
                            const { title ,target ,slug , views , createdAt } =links
                            return <LinkCard key={i} title ={title} slug={slug} target={target} views={views} createdAt={createdAt}/>
                        })
                    }
                </div>
            </div>
            <Toaster />
        </div>
    )
}

export default Home
