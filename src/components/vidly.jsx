import React, { Component } from 'react';
import { getMovies, deleteMovie } from '../services/fakeMovieService';
import Like from './shared/like';

class Vidly extends React.Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (id) => {
    const movies = this.state.movies.filter((m) => m._id !== id);
    this.setState({
      movies,
    });
  };

  handleFavorite = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movie };
    movies[index].isFavorite = !movies[index].isFavorite;
    this.setState({
      movies,
    });
  };

  displayMovies() {
    return this.state.movies.map((movie) => (
      <tr key={movie._id}>
        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td className="text-center">
          <Like movie={movie} handleFavorite={this.handleFavorite} />
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => this.handleDelete(movie._id)}
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  }

  render() {
    const { movies } = this.state;

    return (
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h3 className="text-center m-4">Movies List</h3>
          <p className="text-center m2">
            There are {movies.length === 0 ? 'no' : movies.length} movies in the
            database.
          </p>
          <table className="table table-sm">
            <thead>
              <tr className="bg-dark text-white">
                <td>Name</td>
                <td>Genre</td>
                <td>Stock</td>
                <td>Rate</td>
                <td>Favorite</td>
              </tr>
            </thead>
            <tbody>{this.displayMovies()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Vidly;
