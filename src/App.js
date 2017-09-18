import React, { Component } from 'react';
import MovieCard from './MovieCard';
import MovieList from './MovieList';
import Search from './search';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      movies:[{
        img : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png",
        fav : false,
        title : "Marta es la mejor",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        id: 1
      },
      {
        img : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png",
        fav : false,
        title : "Star Wars",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        id: 2
      }
    ],
    search :""
    }
  }
toggleFav(id){
  const newMovies = this.state.movies.slice();
  newMovies.map(movie => {
    if (id === movie.id) {
      movie.fav = !movie.fav;
    }
  })
  this.setState({movies: newMovies});
}

updateSearch(text){
  this.setState({search: text})
}

  render() {
    return (
      <div className="App">
          <Search updateSearch = {this.updateSearch.bind(this)} />
          <MovieList
            movies = {this.state.movies}
            handleFav = {this.toggleFav.bind(this)}
          />
      </div>
    );
  }
}

export default App;
