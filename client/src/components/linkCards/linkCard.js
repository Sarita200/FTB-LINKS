import React from 'react'
import './LinkCard.css'

function LinkCard({ title ,target ,slug , views , createdAt }) {

 
  return (
    <div  className='link-cards'>
      <h3 className='link-card-title'>{title}</h3>

      <p>Short URL:<a className='link-card-Url'></a>{slug} </p>

      <p>Target URL: <a href={target} className='link-card-Url'>{target}</a></p>

      <p className='link-card-views'>views : {views}</p>
      
      <p className='link-card-createdAt'>{new Date(createdAt).toLocaleString()}</p>
    </div>
  )
}

export default LinkCard
