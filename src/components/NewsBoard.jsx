import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'

const NewsBoard = ({category}) => {

    const [articles,setArticles] = useState([])

    useEffect(() => {

        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=f2b6143d937d47fb84cc557426c0d1cb`

        fetch(url).then(response => response.json()).then(data => setArticles(data.articles));
    }, [category])



  return (
    <div>
        <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>

        {
            articles.map((news,index) => {
                return <NewsItem key={index} title={news.title}  description={news.description} src={news.urlToImage} url={news.url}/>
            })
        }
    </div>
  )
}

export default NewsBoard