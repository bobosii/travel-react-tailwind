import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="max-w-[1240px] mx-auto py-4 flex flex-col">
        <div className="sm:flex text-center justify-between items-center">
          <h1>BEACHES.</h1>
          <div className="flex flex-row justify-between items-center w-full sm:max-w-[280px] my-4">
            <FaTwitter className="icon" />
            <FaFacebook className="icon" />
            <FaYoutube className="icon" />
            <FaPinterest className="icon" />
            <FaInstagram className="icon" />
          </div>
        </div>
        <div className="flex justify-between">
          <ul className="lg:flex">
            <li>About</li>
            <li>Partnerships</li>
            <li>Careers</li>
            <li>Newsroom</li>
            <li>Advertising</li>
          </ul>
          <ul className="text-right lg:flex">
          <li>Home</li>
          <li>Destination</li>
          <li>Travel</li>
          <li>View</li>
          <li>Book</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
