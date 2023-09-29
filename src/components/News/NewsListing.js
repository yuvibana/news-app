import '../News/News.css'
import React, { useEffect, useState } from 'react'
import SearchFields from '../Common/SearchField'
import { BaseURL, APIKEY } from '../../ip';
import NoData from '../Common/NoData';
import NewsDetail from './NewsDetail';
import CommonSlider from '../Common/CommonSlider';
import ReactPaginate from 'react-paginate';
import NewsCard from './NewsCard';


export default function NewsListing() {
  const [newsData, SetNewsData] = useState([])
  const [IsData, setISData] = useState(true)
  const [searchString, setSearchString] = useState('')
  const [isDetailShided, setIsDetailShowed] = useState(false)
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(3);
  const [pageCount, setPageCount] = useState(0)

  const [dataProp, setDataProp] = useState({
    author: '', title: '', content: '', urlToImage: '', publishedAt: '', url: ''
  });


  function searchStringFunc(e) {
    setSearchString(e.target.value)
  }

  async function fetcNews() {
    try {
      await fetch(`${BaseURL}=${APIKEY}`)
        .then((res) => {
          if (res.status === 200) { return res.json(); }
          else { console.log('Status Error'); }
        }).then((data) => {
          const newsPages = data.articles.slice(offset, offset + perPage)
          SetNewsData(newsPages)
          setPageCount(Math.ceil(data.articles.length / perPage))
          setISData(false)
        })
    } catch { return new Error(`${<NoData NoItemFound=' Opps unsuitable' />}`); }
  }

  const hndlReadClick = (data) => {
    setDataProp({
      author: data.author,
      title: data.title,
      content: data.content,
      urlToImage: data.urlToImage,
      publishedAt: data.publishedAt,
      url: data.url
    });
    setIsDetailShowed(true)

  }


  useEffect(() => {
    fetcNews()
    // if (dataProp.title !== '') {
    //   // setIsDetailShowed(true)
    // }
  }, [dataProp, offset])

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1)
  };

  return (
    <>
      {IsData ? (
        <NoData NoItemFound="Loading News..." />
      ) : (
        <div className='NewsListingDiv'>
          <SearchFields
            searchPlaceholder="Search News"
            searchStringFunc={searchStringFunc}
          />
          {isDetailShided &&
            <div className='detailModel positionFixed'>
              <span className='closebtn HeadingXl cursotPointer' onClick={() => setIsDetailShowed(false)}>x</span>
              <div className='modelCenterd dflex alignItems justifyCenter'>
                <NewsDetail newsDetailsProp={dataProp} />
              </div>
            </div>
          }

          <CommonSlider sliderImages={newsData} />

          <div className='gridDiv'>
            {newsData.filter(news => {
              if (searchString === '') {
                return news;
              } else if (news.title.toLowerCase().includes(searchString.toLowerCase())) {
                return news;
              }
            }).map((data, i) => {
              return (
                <NewsCard
                  key={i}
                  nesDataProp={data}
                  hndlReadClick={hndlReadClick}
                />
              )
            })}
          </div>

          <ReactPaginate
            className='pagination dflex justifyCenter'
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"} />
        </div>
      )}
    </>
  )
}