import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

const Newsboard = ({ category }) => {
  
  const [articles, setArticls] = useState([]);
  
  //fetch data using api url
  useEffect( () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url).then(response => response.json()).then(data =>setArticls(data.articles))
  },[category]);

  return (
    <div>
        <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
        {articles.map( (news,index) => {
          return <>
            <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}></NewsItem>
          </>
        } )}
    </div>
  )
}

export default Newsboard;
