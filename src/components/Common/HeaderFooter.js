import React from 'react'
import { Link } from 'react-router-dom'
import ScrollImg from '../../assets/images/star.png'

export default function HeaderFooter() {
    return (
        <header className='appHeader'>
            <div className='boxesWrapper'>
                <div className='Linkboxes'>
                    <Link className='postsPage' to={'/InfiniteScroll'}></Link>
                    {/* <img src={ScrollImg} alt='img' /> */}
                    <span>Go To Posts</span>
                </div>
                <div className='Linkboxes'>
                    <Link className='newsLinker' to={'/NewsListing'}></Link>
                    <span>Go To News Page</span>
                </div>
            </div>
        </header>
    )
}