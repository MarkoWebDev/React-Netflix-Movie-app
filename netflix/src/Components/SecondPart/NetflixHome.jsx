import React, { Suspense } from "react";
import Navbar from "./Navbar";
import MoviesRows from "./MoviesRows";

const NetflixHome = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading ...</div>}>
        <Navbar></Navbar>
        <MoviesRows></MoviesRows>
      </Suspense>
    </div>
  );
};

export default NetflixHome;
