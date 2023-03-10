
import React from "react";
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = {
    movies: [],

    searchQuery: "",
  };

  async componentDidMount() {
    const baseURL = "http://localhost:3002/movies";
    const response = await fetch(baseURL);
    const data = await response.json();
    this.setState({ movies: data });
  }

  deleteMovie = (movie) => {
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);

    this.setState((state) => ({
      movies: newMovieList,
    }));
  };

  searchMovie = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  render() {
    let filteredMovies = this.state.movies.filter((movie) => {
      return (
        movie.name
          .toLowerCase()
          .indexOf(this.state.searchQuery.toLowerCase()) !== -1
      );
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12"></div>
          <SearchBar searchMovieProp={this.searchMovie} />
        </div>
        <MovieList movies={filteredMovies} deleteMovieProp={this.deleteMovie} />
      </div>
    );
  }
}

export default App;
