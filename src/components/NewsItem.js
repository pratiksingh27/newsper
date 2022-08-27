import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
  let {title, describtion} = this.props;

    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
        <img src="..." class="card-img-top" alt="..." />
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{describtion}</p>
        <a href="/" className="btn btn-primary">Read more</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
