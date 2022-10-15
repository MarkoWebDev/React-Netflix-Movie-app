import React, { Suspense } from "react";
import MovieRow from "./MovieRow";
import { movieAddress } from "../../MoviesGenres";

const MoviesRows = () => {
  return (
    <div className="relative bg-black px-4 ">
      <Suspense fallback={<div>Loading ...</div>}>
        <MovieRow
          cardSize
          title="Popular Movies"
          movieAPI={movieAddress.PopularMovies}
        ></MovieRow>
        <MovieRow
          title="TopRated Movies"
          movieAPI={movieAddress.TopRatedMovies}
        ></MovieRow>
        <MovieRow
          title="Crime Movies"
          movieAPI={movieAddress.CrimeMovies}
        ></MovieRow>
        <MovieRow
          title="Adventure Movies"
          movieAPI={movieAddress.AdventureMovies}
        ></MovieRow>
        <MovieRow
          title="Comedy Movies"
          movieAPI={movieAddress.ComedyMovies}
        ></MovieRow>
        <MovieRow
          title="Thriller Movies"
          movieAPI={movieAddress.ThrillerMovies}
        ></MovieRow>
        <MovieRow
          title="Family Movies"
          movieAPI={movieAddress.FamilyMovies}
        ></MovieRow>
        <MovieRow
          title="Animation Movies"
          movieAPI={movieAddress.AnimationMovies}
        ></MovieRow>
        <MovieRow
          title="History Movies"
          movieAPI={movieAddress.HistoryMovies}
        ></MovieRow>
      </Suspense>
    </div>
  );
};

export default MoviesRows;
