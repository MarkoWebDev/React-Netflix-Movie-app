import "./App.css";
import React, { useState, useEffect } from "react";
import Home from "./Components/Home/Home";
import LoginHome from "./Components/Login/LoginHome";
import NetflixHome from "./Components/SecondPart/NetflixHome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateUserContext from "./Store/CreateUserContext";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [loading, setLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  if (loading) {
    return (
      <div className="grid place-items-center h-screen object-fit bg-gray-800">
        <ClipLoader color="#fa1717" loading size={300} speedMultiplier={0.5} />;
      </div>
    );
  }
  return (
    <div className="App">
      <BrowserRouter>
        <CreateUserContext>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route
              path="/netflix"
              element={
                user && !loading ? (
                  <NetflixHome></NetflixHome>
                ) : (
                  <LoginHome></LoginHome>
                )
              }
            ></Route>
            <Route path="/login" element={<LoginHome></LoginHome>}></Route>
          </Routes>
        </CreateUserContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
