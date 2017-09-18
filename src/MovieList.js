import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render () {
    return (
        <ul>
        {this.props.movies.map( movie => {
          return (<li>
          <MovieCard
             img = {movie.img}
             fav = {movie.fav}
             title = {movie.title}
             description = {movie.description}
             id = {movie.id}
             handleFav = {this.props.handleFav}
           />
           </li>
         )
         }
       )};
        </ul>
    );
  }
}

export default MovieList;
