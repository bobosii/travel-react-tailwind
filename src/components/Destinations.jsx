import React from "react";
import BaraBora from "../assets/borabora.jpg";
import BaraBora2 from "../assets/borabora2.jpg";
import KeyWest from "../assets/keywest.jpg";
import Maldives from "../assets/maldives.jpg";
import Maldives2 from "../assets/maldives2.jpg";

const Destinations = () => {
  return (
    <div className="max-w-[1240px] py-16 px-4 mx-auto text-center">
      <h1>All-Inclusive Resorts</h1>
      <p>On the Carribbean's Best Beaches</p>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <img
          className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
          src={BaraBora}
          alt="/"
        />
        <img className="w-full h-full object-cover" src={BaraBora2} alt="/" />
        <img className="w-full h-full object-cover" src={Maldives} alt="/" />
        <img className="w-full h-full object-cover" src={Maldives2} alt="/" />
        <img className="w-full h-full object-cover" src={KeyWest} alt="/" />
      </div>
    </div>
  );
};

export default Destinations;
