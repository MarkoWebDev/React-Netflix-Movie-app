import React, { Fragment, useState } from "react";
import { Dialog, DialogHeader, DialogBody } from "@material-tailwind/react";

const MovieInfo = ({ open, movieInfo }) => {
  const [openModal, setOpenModal] = useState(open);

  const handleOpen = () => setOpenModal(!open);
  const url = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="w-96">
      {openModal && movieInfo.id && (
        <Fragment>
          <Dialog
            open={openModal}
            handler={handleOpen}
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
            className="bg-transparent flex flex-col items-center"
          >
            <DialogHeader>
              <div>
                <h3 className="font-sans text-2xl text-white font-bold tracking-normal no-underline text-center">
                  {movieInfo.title || movieInfo.orginal_title}
                </h3>
              </div>
            </DialogHeader>
            <DialogBody>
              <div className="flex flex-col items-center bg-gray-900 rounded-xl">
                <img
                  className="h-96 w-full"
                  src={`${url}${
                    movieInfo?.poster_path || movieInfo?.backdrop_path
                  } `}
                  alt={movieInfo?.title || movieInfo?.original_title}
                ></img>

                <div className="flex flex-col pt-6 w-[600px]">
                  <div>
                    <p className="font-sans text-sm text-gray-400 font-bold tracking-normal no-underline text-center">
                      {movieInfo?.overview}
                    </p>
                  </div>

                  <div className="flex items-center justify-around pt-4">
                    <div>
                      <span className="font-sans text-sm text-blue-700 font-bold tracking-normal no-underline text-center">
                        Popularity:{" "}
                        <span className="text-gray-400">
                          {Math.round(movieInfo?.popularity)}
                        </span>
                      </span>
                    </div>
                    <div className="flex items center">
                      <span className="font-sans text-sm text-blue-700 font-bold tracking-normal no-underline text-center">
                        Vote average:{" "}
                        <span className="text-gray-400">
                          {Math.round(movieInfo?.vote_average)}
                        </span>
                      </span>
                    </div>
                    <div>
                      <span className="font-sans text-sm text-blue-700 font-bold tracking-normal no-underline text-center">
                        Vote Count:{" "}
                        <span className="text-gray-400">
                          {movieInfo?.popularity}
                        </span>
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between w-full px-4 py-6">
                    <div>
                      <p className="font-sans text-sm text-blue-700 font-bold tracking-normal no-underline text-center">
                        Runtime:{" "}
                        <span className="text-gray-400">
                          {movieInfo.runtime}min.
                        </span>
                      </p>
                    </div>
                    <div>
                      <p className="font-sans text-sm text-red-600 font-bold tracking-normal no-underline text-center">
                        Movie tagline: {movieInfo.tagline}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </DialogBody>
          </Dialog>
        </Fragment>
      )}
    </div>
  );
};

export default MovieInfo;
