import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import MovieInfo from "./MovieInfo";

const NetflixHeader = () => {
  const apiTrending = "https://api.themoviedb.org/3/trending/all/day?api_key=";

  const [movieData, setMovieData] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [movie, setMovie] = useState([]);
  const [movieInfo, setMovieInfo] = useState({});
  const [open, setOpen] = useState(false);

  const fetchImage = useCallback(async () => {
    try {
      const response = await axios.get(
        `${apiTrending}${process.env.REACT_APP_API_KEY}`
      );
      const data = await response.data.results;
      setMovieInfo(data);
      setMovieData(data[Math.floor(Math.random() * data?.length)]);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchImage();
  }, []);

  useEffect(() => {
    let isLive = true;
    const interval = setInterval(() => {
      if (open && isLive) {
        return () => clearInterval(interval);
      } else {
        fetchImage();
      }
    }, 9000);
    return () => {
      clearInterval(interval);
      isLive = false;
    };
  }, [fetchImage]);

  const addStars = (n, str) => {
    let string = "";
    for (let i = 0; i < n; i++) {
      string += str;
    }
    return string;
  };
  const url = "https://image.tmdb.org/t/p/original/";
  const searchMovies = async () => {
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchMovie}`;

    try {
      const response = await axios.get(searchUrl);
      const data = await response.data.results[0];
      setMovie(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (searchMovie.length > 0) {
      searchMovies();
    }
  }, [searchMovie]);

  const handleMovieInfo = async (movieId) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US `
      );
      const data = await response.data;
      if (data) {
        setOpen(!open);
        setMovieInfo(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <div className="absolute top-16 right-0">
          <input
            className="outline-none border h-8 w-56 border-white rounded-none mr-4 bg-black font-sans text-md text-white pl-2"
            name="searchMovie"
            placeholder="Movie Title"
            value={searchMovie}
            onChange={(e) => setSearchMovie(e.target.value)}
          ></input>
        </div>
        {searchMovie ? (
          <div className="flex flex-col center justify-center items-center h-full bg-gray-900 py-8">
            <div className="pb-16">
              <img
                className="h-96"
                src={`${url}${movie?.poster_path || movie?.backdrop_path} `}
                alt={movie?.title || movie?.original_title}
              ></img>
            </div>
            <div className="pb-24 text-center">
              <h3 className="font-sans text-2xl text-white font-bold tracking-normal no-underline">
                {movie?.title || movie?.original_title}
              </h3>
              <span className="font-sans text-lg text-white font-bold tracking-normal no-underline">
                Popularity: {movie?.popularity}
              </span>
            </div>
          </div>
        ) : (
          <div className="">
            <img
              className="bg-center bg-no-repeat bg-cover w-full h-[900px]"
              src={`${url}${
                movieData?.backdrop_path || movieData?.poster_path
              }`}
              alt={movieData?.title}
            ></img>
            <div className="flex flex-col absolute text-white top-1/4 pl-8 max-w-xl">
              <h3 className="text-neutral-white font-sans text-4xl font-bold tracking-normal no-underline pb-4">
                {movieData?.title || movieData?.original_title}
              </h3>
              <p className="text-white font-sans text-3xl font-normal tracking-normal no-underline pb-4 ">
                {movieData?.overview?.length > 120
                  ? movieData?.overview?.slice(0, 100) + "..."
                  : movieData?.overview}
              </p>
              <p className="text-white font-sans text-3xl font-normal tracking-normal no-underline pb-4">
                Rating: {addStars(Math.floor(movieData?.vote_average), "★")}
              </p>
              <div className="flex items-center ">
                <button className="bg-white text-black shadow-2xl shadow-black text-neutral-800 font-sans font-bold text-lg px-12 py-3 rounded-lg mr-4 hover:opacity-80">
                  Play
                </button>
                <button
                  className="bg-gray-400 box-sha text-white font-sans font-bold text-lg px-12 py-3 rounded-lg hover:opacity-80"
                  onClick={() => handleMovieInfo(movieData.id)}
                >
                  More Info
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {open && <MovieInfo open={open} movieInfo={movieInfo}></MovieInfo>}
    </>
  );
};

export default NetflixHeader;
