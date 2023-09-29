import React, { useEffect, useState } from 'react'
import SearchFields from './Common/SearchField'

export default function SearchTest() {
    const [searchString, setSearchString] = useState('')
    const [data, setData] = useState([])

    function searchStringFunc(e) {
        setSearchString(e.target.value)
    }
    async function fetcData() {
        try {
            await fetch(`https://jsonplaceholder.typicode.com/posts/${searchString}`)
                .then((res) => {
                    return res.json();
                }).then((data) => {
                    setData(data)
                })
        } catch { return new Error(console.log('unsuitable')); }
    }

    console.log(`https://jsonplaceholder.typicode.com/posts/${searchString}`);
    // console.log(data);

    useEffect(() => {
        fetcData()
    }, [])

    return (
        <>
            <SearchFields
                searchPlaceholder="Search User"
                searchStringFunc={searchStringFunc}
            />
            <div className='moviesListingDiv'>
                <div className='gridDiv'>

                    {data.filter((user) => {
                        if (searchString === '') {
                            return user;
                        } else if (user.title.toLowerCase().includes(searchString.toLowerCase())) {
                            return user;
                        }
                    }).map((data, i) => (
                        <div className='gridBox' key={i}>
                            <span className='cardtext ellipsisText'>{data.title}</span>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}
