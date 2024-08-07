import React, { useEffect, useState } from 'react'
import './Home.css'
import axios from "axios"
import toast from "react-hot-toast"
import { Toaster } from 'react-hot-toast'
import LinkCard from '../../components/LinkCards/LinkCard'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'


function Home() {
    const [title, setTitle] = useState('')
    const [ target , setTarget ] =useState('')
    const [ slug , setSlug ] = useState('')

    const [user, setUser] = useState('')
    const [userLink, setUserLink] = useState([])

    const createLink = async () => {
        if (!title || !slug || !target) {
            toast.error("Please enter all details")
            return
        }
        const response  = await axios.post(`${process.env.REACT_APP_API_URL}/link` ,{
            title ,
            target,
            slug,
            user: user._id
        } )

        if(response.data.success){
            toast.success("Link generated successfully....!");
            setTitle('')
            setTarget('')
            setSlug('')
    }
        else{
                toast.error(response.data.message)
            }
            
        }
    
        useEffect(() => {
            const currentUser = JSON.parse(localStorage.getItem('currentUser'))
        
            if (currentUser) {
              setUser(currentUser)
            }
        
            if (!currentUser) {
              window.location.href = '/login'
            }
          }, [])
          console.log(user._id) ;   

    const fetchLinks = async () => {
        if(!user || !user._id){
            return
        }
        toast.loading("Loading all links...");
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/links?userId=${user._id}`);
        toast.dismiss();
        toast.success("All link fetched");
        setUserLink(response.data.data)
        
    }
    useEffect(() => {
        fetchLinks();
    }, [user])


    return (

        <>
        <div >
            <Navbar />
            <div className='linkContainer'>
                <div >
                    <form className='linkForm'>
                        <h2 className='titleContainer'>Short Your Link Here</h2>
                        <input
                            type='text'
                            placeholder='Title'
                            value={title}
                            onChange={(e) => {
                               setTitle(e.target.value)
                            }}
                            className='LinkInput'
                        />

                        <input
                            type='text'
                            placeholder='Target'
                            value={target}
                            onChange={(e) => {
                                setTarget(e.target.value)
                            }}
                            className='LinkInput'
                        />

                        <input
                            type='text'
                            placeholder='slug'
                            value={slug}
                            onChange={(e) => {
                                setSlug(e.target.value)
                            }}
                            className='LinkInput'
                        />

                        <button
                            type='button'
                            onClick={createLink}
                            className='linkBtn'
                        >Shorten</button>


                    </form>
                </div>

                <div className='allLinkContainer'>
                    <h2 className='titleContainer'>My Link</h2>
                    {
                        userLink.map((links,i) => {
                            const { title, target, slug, views, createdAt} = links;
                            return <LinkCard key={i}  title={title} slug={slug} target={target} views={views} createdAt={createdAt} />
                        })
                    }
                </div>
            </div>
            <Toaster />
        </div><br/><br/><br/>

        <Footer/>
        </>
    )
}

export default Home
