import React, { useContext } from "react";
import { UserContext } from "../../Store/CreateUserContext";

const NetflixHome = () => {
  const [state, dispatch] = useContext(UserContext);

  const { username, image } = state;

  console.log("state", state);

  return (
    <div>
      {username}
      <div>{image && <img src={image} alt="test"></img>}</div>
    </div>
  );
};

export default NetflixHome;
