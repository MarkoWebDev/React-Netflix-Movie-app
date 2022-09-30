import React from "react";
import header from "../../images/netflix-header.jpg";
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const language = [
    {
      id: "1",
      name: "English",
    },
    {
      id: "2",
      name: "Test",
    },
  ];
  const navigate = useNavigate();

  return (
    <div className="flex flex-col relative text-center bg-gradient-to-r from-slate-900 via-slate-700 to-slate-600 border-b-8 border-neutral-800">
      <div className="flex w-full justify-between items-center absolute px-16 z-30">
        <div>
          <img className="h-28" src={logo} alt="netflix"></img>
        </div>
        <div>
          <select className="h-8 bg-transparent text-white w-24 border border-white">
            {language.map((lang) => {
              return (
                <option className="bg-gray-600" key={lang.id}>
                  {lang.name}
                </option>
              );
            })}
          </select>
          <button
            className="bg-red-600 ml-4 w-24 h-8 text-white rounded-md"
            onClick={() => navigate("/login")}
          >
            Sign In
          </button>
        </div>
      </div>
      <div className="absolute flex flex-col w-full justify-center inset-0 text-center z-10">
        <h1 className="font-sans text-6xl text-white font-bold tracking-normal no-underline pb-4">
          Unlimited movies, TV <br></br>shows and more.
        </h1>
        <p className="text-white font-sans text-3xl font-normal tracking-normal no-underline pb-4">
          Watch anywhere. Cancel anytime.
        </p>
        <p className="text-white font-sans text-2xl font-normal tracking-normal no-underline pb-4">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex justify-center items-center">
          <div>
            <input
              className="w-[600px] h-16 text-black outline-none border-0 pl-4"
              placeholder="Email address"
            ></input>
          </div>
          <div>
            <button className="bg-red-600 h-16 w-36 font-sans text-white cursor-pointer font-bold">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <img
        className="bg-cover bg-no-repeat bg-center mix-blend-overlay h-[850px]"
        src={header}
        alt="home"
      ></img>
    </div>
  );
};

export default Header;
