import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map( (movie) =>
          <div> 
            <h1>Title: {movie.title}</h1>
            <p>Time: {movie.time}</p>
            <p><ul>
              {movie.genres.map( (genre) =>
                <li>
                  {genre}
                </li>
              )}
            </ul></p>
            <p>Metascore: {movie.metascore} </p>
          </div>
        )}
    </div>
  );
};

export default Movies;
