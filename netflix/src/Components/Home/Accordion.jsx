import React, { useState } from "react";

const Accordion = ({ title, text }) => {
  const [open, setOpen] = useState(false);

  const openAccordion = () => {
    setOpen(!open);
  };

  return (
    <div className="flex flex-col w-full mb-2 cursor-pointer">
      <div
        className="flex justify-between w-[850px] h-20 font-light bg-neutral-800 items-center"
        onClick={openAccordion}
      >
        <div>
          <h3 className="font-sans text-3xl text-white font-bold tracking-normal no-underline  ml-4">
            {title}
          </h3>
        </div>
        <div className="text-white text-3xl text-center mr-4">
          {open ? "✖" : "✚"}
        </div>
      </div>
      <div className="w-[850px]">
        {open && (
          <p className="text-white font-sans text-2xl font-normal tracking-normal no-underline pb-4">
            {text}
          </p>
        )}
      </div>
    </div>
  );
};

export default Accordion;
