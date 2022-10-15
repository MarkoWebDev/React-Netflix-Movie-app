import React, { Fragment, useState, useEffect, useReducer } from "react";
import axios from "axios";
import { actionTypes, initialState, MoviesReducer } from "../../MoviesReducer";
import ClipLoader from "react-spinners/ClipLoader";
import YouTube from "react-youtube";
import { Dialog, DialogBody} from "@material-tailwind/react";

const MovieRow = ({ title, movieAPI, cardSize }) => {
  const [state, dispatch] = useReducer(MoviesReducer, initialState);
  const [movieId, setMovieId] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const url = "https://image.tmdb.org/t/p/original/";

  const getMovies = async () => {
    dispatch({ type: actionTypes.FETCH_START });
    try {
      const response = await axios.get(movieAPI);
      const data = await response.data.results;
      dispatch({ type: actionTypes.FETCH_SUCCESS, movies: data });
    } catch (error) {
      dispatch({ type: actionTypes.FETCH_ERROR });
    }
  };

  const getVideo = async (id) => {
    try {
      if (!id) {
        return;
      } else {
        //
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );

        const data = await response.data.results.find(
          (movieTrailer) => movieTrailer.name === "Official Trailer"
        );
        if (data) {
          setOpen(!open);
          setMovieId(data.key);
        } else {
          return;
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, [movieAPI]);

  
  const Movie = () => {
    return (
      <div className="">
        {movieId && (
          <Fragment>
            <Dialog
              open={open}
              handler={handleOpen}
              className="bg-trasnaprent border-none outline-none"
            >
              <DialogBody className="flex flex-col items-center justify-center ">
                <YouTube
                  videoId={movieId}
                  id={movieId}
                  opts={{
                    playerVars: {
                      autoplay: 1,
                    },
                  }}
                />
              </DialogBody>
            </Dialog>
          </Fragment>
        )}
      </div>
    );
  };

  if (state.loading) {
    return <ClipLoader color="#fa1717" loading size={150} />;
  }

  return (
    <>
      {movieAPI && (
        <div className="">
          <div className="py-4 pl-4 -translate-y-48">
            <h2 className="font-sans text-2xl text-white font-medium tracking-normal no-underline ">
              {title}
            </h2>
          </div>
          <div className="flex items-center overflow-x-scroll overflow-y-hidden scrollbar-hide -translate-y-48">
            {state.movies.map((movie) => {
              return (
                <div
                  onClick={() => getVideo(movie.id)}
                  className="flex flex-col py-8 items-center hover:scale-125   transition duration-500 ease-in-out cursor-pointer"
                  key={movie.id}
                >
                  <div
                    className={
                      cardSize
                        ? "h-[275px] w-[225px] mr-4"
                        : "h-[225px] w-[175px]  mr-4 "
                    }
                  >
                    <img
                      className="h-full w-full bg-center bg-no-repeat bg-cover rounded-lg "
                      src={`${url}${
                        movie?.poster_path || movie?.backdrop_path
                      } `}
                      alt={movie.name}
                    ></img>
                  </div>
                  <div className="text-center pb-4">
                    <h3 className="font-sans text-lg text-neutral-600 font-bold tracking-normal no-underline ">
                      {movie?.title || movie?.original_title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
          <div>{Movie()}</div>
          {state.error && (
            <div className="">
              <h1 className="text-white font-sans text-4xl z-50 pl-4">
                Ups... Something went wrong please reload the page{" "}
              </h1>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default React.memo(MovieRow);
