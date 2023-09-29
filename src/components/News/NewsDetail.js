import React from 'react'
import { Link } from 'react-router-dom'

export default function NewsDetail({ newsDetailsProp }) {
  // console.log('Receving Details', newsDetailsProp);
  return (
    <div className='innerDetailBox'>
      <figure className='newsAvtar px'>        
        {/* <img className='rounded-10' src='https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80' alt='img' />         */}
        <img src={newsDetailsProp.urlToImage} alt='news img'/>
      </figure>
      <span className='graytext px'></span>
      <span className='graytext px'>{newsDetailsProp.publishedAt}</span>
      <p className='px Title'>{newsDetailsProp.title}</p>
      <p className='Title px'>{newsDetailsProp.content}</p>
      <Link to={`${newsDetailsProp.url}`} target='_blank' className='comonnBtn watchbtn dblock textcenter'>Go To Live News Page</Link>
    </div>
  )
}