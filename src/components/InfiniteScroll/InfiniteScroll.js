import React, { useEffect, useState } from 'react'
import NoData from '../Common/NoData';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function HndlInfiniteScroll() {
    const [card, setCard] = useState([])
    const [pages, setPages] = useState(400)
    const [isLoading, setIsLoading] = useState(false);

    const getCards = async () => {
        setIsLoading(true);
        try {
            fetch(`https://jsonplaceholder.typicode.com/photos?_Limit10&_page=${pages}`).then(res => {
                return res.json();
            }).then((data) => {
                setCard((perv) => [...perv, ...data])
                setIsLoading(false)
            })
        } catch {
            return new Error(`${<NoData NoItemFound=' No Data Found' />}`);
        } finally {
            // setIsLoading(false);
        }
    }

    const HndlInScroll = async () => {
        try {
            if (window.innerHeight + document.documentElement.scrollHeight + 1 > document.documentElement.scrollTop) {
                setPages((prev) => prev + 1)
            }
        } catch (error) { console.log(error); }
    }

    useEffect(() => {
        getCards()
    }, [pages])

    useEffect(() => {
        window.addEventListener('scroll', HndlInScroll);
        return () => window.removeEventListener('scroll', HndlInScroll);
    }, [])


    return (
        <>
            <div className='infiniteScrollDiv gridDiv container'>
                {card.map((data, i) => {
                    return (
                        <div className='gridBox' key={i}>
                            <img src={data.thumbnailUrl} className='w-100 rounded-10' height={'250px'} loading='lazy' />
                            {/* <span className='title blactext px dblock font16 textcapitalize'>{data.title.substr(0, 10)}</span> */}
                            {/* <span className='body blactext'>{data.body.substr(0, 100)}</span> */}
                        </div>
                    )
                })}
                {isLoading && <p className='border textcenter Title' style={{ padding: '10px', border: '1' }}>Loading...</p>}
            </div>
            <InfiniteScroll
                className='container mx'
                dataLength={card.length}
                next={getCards}
                endMessage={<p className='border textcenter Title' style={{ padding: '10px', border: '1' }}>No more data to load.</p>}
            ></InfiniteScroll>
        </>
    )
}
