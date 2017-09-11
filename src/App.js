import React, { Component } from 'react';
import MovieCard from './MovieCard';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      movies:[{
        img : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png",
        fav : false,
        title : "Marta es la mejor",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        img : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png",
        fav : false,
        title : "Star Wars",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

      }
    ]
    }
  }

  render() {
    return (
      <div className="App">
        <MovieCard
          img = {this.state.movies[0].img}
          fav = {this.state.movies[0].fav}
          title = {this.state.movies[0].title}
          description = {this.state.movies[0].description}
          />
          <MovieCard
            img = {this.state.movies[1].img}
            fav = {this.state.movies[1].fav}
            title = {this.state.movies[1].title}
            description = {this.state.movies[1].description}
            />
      </div>
    );
  }
}

export default App;
