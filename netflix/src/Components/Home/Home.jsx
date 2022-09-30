import React from "react";
import Header from "./Header";
import Body from "./Body";
import tv from "../../images/tv.png";
import phone from "../../images/phone.jpg";
import devices from "../../images/devices.png";
import kids from "../../images/kids.png";
import { accordionData } from "../../accordionData";
import Accordion from "./Accordion";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="bg-black">
      <Header></Header>
      <Body
        img={tv}
        title="Enjoy on your TV."
        text="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blue-ray players, and more."
      ></Body>
      <Body
        reverse
        img={phone}
        title="Download your shows and watch offline."
        text="Save your favorites easily and always have something to watch."
      ></Body>
      <Body
        img={devices}
        title="Watch everywhere"
        text="Stream unlimited movies and TV shows on your phone, tablet, laptop and TV wi paying more."
      ></Body>
      <Body
        reverse
        img={kids}
        title="Create profiles for kids"
        text="Send kids on adventures with their favorite characters in a space made just for them-free with your membership."
      ></Body>
      <div className="bg-black flex flex-col justify-center  items-center  pt-12 border-b-8 border-neutral-800">
        <h1 className="font-sans text-5xl text-white font-bold tracking-normal no-underline pb-4">
          Frequntley Asked Questions
        </h1>
        <div className="flex flex-col justify-center items-center pt-12">
          {accordionData.map((item) => {
            return (
              <Accordion
                key={item.id}
                title={item.title}
                text={item.text}
              ></Accordion>
            );
          })}
        </div>
        <div className="pt-12 pb-6">
          <p className="text-white font-sans text-lg font-normal tracking-normal no-underline pb-4">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="flex pb-12 items-center justify-center">
            <input
              className="min-w-[450px] h-16 w-[600px] pl-4 outline-none bordder-0 text-black"
              placeholder="Email address"
            ></input>
            <button className="bg-red-600 h-16 w-36 text-white text-xl font-sans">
              Get Stared
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
