import React from 'react';

class MovieCard extends React.Component {
  render () {
    return (
      <div className="card">
        <img className="img-card" width="200px" src={this.props.img}/>
        <img className="favStar" width="50px" src={this.props.fav?"http://pngimg.com/uploads/star/star_PNG1589.png":"http://pngimg.com/uploads/star/star_PNG1595.png"} />
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default MovieCard;
