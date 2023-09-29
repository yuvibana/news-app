import React from 'react'
import DefaultImg from '../../assets/images/news.img'

export default function NewsCard({ nesDataProp, hndlReadClick }) {
    return (
        <div className='gridBox'>
            <div className='innerbox'>
                <div className='newsAvtar'>
                    <img src={nesDataProp.urlToImage === null ? `${DefaultImg}` : `${nesDataProp.urlToImage}`} alt={nesDataProp.urlToImage} />
                </div>
                <span className='cardtext ellipsisText'>{nesDataProp.title}</span>
                <button className='comonnBtn' onClick={() => hndlReadClick(nesDataProp)}>Read Now</button>
            </div>
        </div>
    )
}
