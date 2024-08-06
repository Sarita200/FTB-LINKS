import React from 'react'
import './LinkCard.css'
import CopyImg from './../LinkCards/link.png'

function LinkCard({ title, target, slug, views, createdAt }) {
  const shortUrl = `${process.env.REACT_APP_API_URL}/${slug}`
 
  return (
    <div className='link-cards'>
     <span> <img src={CopyImg} className='copyImg' /><span></span></span>
      <h3 className='link-card-title'>{title || 'No title'}</h3>
      
     <p className='link-card-target'> ShortUrl :<a href={shortUrl} target='_blank' >{shortUrl}</a></p>

     <p className='link-card-target'> TargetUrl :<a></a></p>

      <p className='link-card-view'>
        <span className='link-card-view-text'>views : 
          {views > 0 ? `${views} people visited` : `Share to view count`}
        </span>
      </p>

      <span className='link-card-createdAt'> {new Date(createdAt).toLocaleString()}</span>
    </div>
  )
}

export default LinkCard
