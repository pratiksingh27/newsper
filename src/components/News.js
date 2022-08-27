import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>Newsper - Top Headlines</h2>
        <div className="row">
        <div className="col-md-4">
        <NewsItem title="hello" describtion="hii guys"/>
        </div>
        <div className="col-md-4">
        <NewsItem title="hello" describtion="hii guys"/>
        </div>
        <div className="col-md-4">
        <NewsItem title="hello" describtion="hii guys"/>
        </div>
        
        </div>
        
      </div>
    )
  }
}

export default News
