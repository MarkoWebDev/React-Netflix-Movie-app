import React from "react";
import { footer1 } from "../../footerData";
import { footer2 } from "../../footerData";
import { footer3 } from "../../footerData";
import { footer4 } from "../../footerData";

const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-4 justify-items-center py-6 w-3/5 items-center mx-auto">
        <div>
          <p className="text-gray-700 font-sans text-md font-normal tracking-normal no-underline pb-4">
            Questions? Contact us.
          </p>
          {footer1.map((item) => {
            return (
              <div key={item.id} className="h-12">
                <p className="text-gray-700 font-sans text-sm font-normal tracking-normal no-underline pb-4">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
        <div>
          {footer2.map((item) => {
            return (
              <div key={item.id} className="h-12">
                <p className="text-gray-700 font-sans text-sm font-normal tracking-normal no-underline pb-4">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
        <div>
          {footer3.map((item) => {
            return (
              <div key={item.id} className="h-12">
                <p className="text-gray-700 font-sans text-sm font-normal tracking-normal no-underline pb-4">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
        <div>
          {footer4.map((item) => {
            return (
              <div key={item.id} className="h-12">
                <p className="text-gray-700 font-sans text-sm font-normal tracking-normal no-underline pb-4">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
