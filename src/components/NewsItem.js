import React, { Component } from 'react';

export class NewsItem extends Component {
  
  render() {

  let {title, describtion, imageUrl, newsUrl} = this.props;

    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
        <img src={!imageUrl? "https://c.ndtvimg.com/2022-08/3603u078_noida-twin-towers-supertech-ani_625x300_28_August_22.jpg" : imageUrl} class="card-img-top" alt="..." />
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{describtion}...</p>
        <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary" rel="noreferrer">Read more</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
