import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://blog.hubspot.com/hubfs/Shrug-Emoji.jpg";


const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <div className="movie">
      <h2>{movie.Title}</h2>
      <p>({movie.Year})</p>
      <div>
        <img
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div>
    </div>
  );
};

export default Movie;