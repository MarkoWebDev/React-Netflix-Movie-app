import "./App.css";
import Home from "./Components/Home/Home";
import LoginHome from "./Components/Login/LoginHome";
import NetflixHome from "./Components/Netflix/NetflixHome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateUserContext from "./Store/CreateUserContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CreateUserContext>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route
              path="/netflix"
              element={<NetflixHome></NetflixHome>}
            ></Route>
            <Route path="/login" element={<LoginHome></LoginHome>}></Route>
          </Routes>
        </CreateUserContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
