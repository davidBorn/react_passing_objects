import React, { Component } from 'react';

class FavoriteMovies extends Component {

  render() {
    return (
      <ul className='favorite-movies-list'>
      {this.props.profiles.map(({id, userID, favoriteMovieID})=> {
            const userName = this.props.users[userID].name;
      		const movieName = this.props.movies[favoriteMovieID].name;
            return (
              <li key={id}>
              <p>{`${userName}'s favorite movies is ${movieName}`}</p>
			  </li>
            );
      })
      };
    
      </ul>
    )
  }
}

export default FavoriteMovies;