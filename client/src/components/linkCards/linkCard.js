import React, { useEffect } from 'react'
import './LinkCard.css'
import CopyImg from './../LinkCards/link.png'
import targetImg from './../LinkCards/link2.png'
import slugImg from './../LinkCards/link3.png'
import viewImg from './../LinkCards/eye.png'

function LinkCard({ title, target, slug, views, createdAt, fetchLinks }) {
  const shortUrl = `${process.env.REACT_APP_API_URL}/${slug}`
  useEffect(()=>{
    fetchLinks();
  },[])

  return (
    <div className='link-cards'>
      <span> <img src={CopyImg} className='copyImg' /><span></span></span>
      <h3 className='link-card-title'>{title || 'No title'}</h3>

      <p >
        <img src={slugImg} className='shortImg' />
        <a href={shortUrl} target='_blank' className='link-card-slug'>{shortUrl}</a></p>

      <p > 
        <img src={targetImg} className='targetImg'/>
        <a href={target} target='_blank' className='link-card-target'>
          {target?.substring(0, 40)}{target?.length > 50 ? "..." : null}
        </a>
      </p>

      <p className='link-card-view'>
        <span className='link-card-view-text'>
          <img src={viewImg} className='eye-view'/>
          {views > 0 ? `${views} people visited` : `Share to view count`}
        </span>
      </p>

      <span className='link-card-createdAt'> {new Date(createdAt).toLocaleString()}</span>
    </div>
  )
}

export default LinkCard
