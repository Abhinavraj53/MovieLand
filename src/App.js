import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "https://imdb8.p.rapidapi.com/auto-complete";

const App = () => {
  // react hook
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '55d8e2494fmshc7d5e0beb194aa8p1ceea5jsnc00a496d4ed0',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};
    const response = await fetch(`${API_URL}?q=${title}`,options);
    const data = await response.json();
	  console.log(data.d);

    setMovies(data.d);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
