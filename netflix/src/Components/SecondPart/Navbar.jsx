import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Store/CreateUserContext";
import NetflixHeader from "./NetflixHeader";
import { useNavigate } from "react-router-dom";
import { actionStates } from "../../UserReducer";
import avatar from "../../images/avatar.png";
import axios from "axios";

const Navbar = () => {
  const [state, dispatch] = useContext(UserContext);

  const { username, image } = state;

  const navigate = useNavigate();
  const { DISPATCH_USER } = actionStates;
  const [searchMovie, setSearchMovie] = useState("");
  const [movie, setMovie] = useState([]);

  

  const handleLogout = () => {
    dispatch({
      type: DISPATCH_USER,
      username: null,
      password: null,
      image: null,
    });
    localStorage.clear();
    navigate("/");
  };

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

  return (
    <div>
      <div
        className={
          "flex justify-between bg-transparent w-full fixed top-0 duration-500 h-16"
        }
      >
        <div></div>
        <div className="flex items-center ">
          <h3 className=" font-sans text-lg text-white font-bold tracking-normal no-underline mr-2">
            {username.length > 5 ? username.substring(0, 1) : username}
          </h3>
          <div onClick={handleLogout}>
            {image ? (
              <img
                className="h-10 w-10 rounded-md cursor-pointer mr-4"
                src={image}
                alt="test"
              ></img>
            ) : (
              <img
                className="h-10 w-10 rounded-md cursor-pointer mr-4"
                src={avatar}
                alt="smile"
              ></img>
            )}
          </div>
        </div>
      </div>

      <NetflixHeader></NetflixHeader>
    </div>
  );
};

export default Navbar;
