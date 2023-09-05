/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import BaraBora from "../assets/borabora.jpg";
import BaraBora2 from "../assets/borabora2.jpg";
import KeyWest from "../assets/keywest.jpg";
import Maldives from "../assets/maldives.jpg";
import Maldives2 from "../assets/maldives2.jpg";
import Maldives3 from "../assets/maldives3.jpg";

const SelectsCard = (props) => {
  return (
    <div className="relative">
        <img className='w-full h-full object-cover' src={props.bg} />
        <div className="bg-gray-900/30 absolute left-0 top-0 w-full h-full">
          <p className="text-white bottom-4 left-4 font-bold text-2xl absolute">{props.text}</p>
        </div>
      </div>
  )
}

export default SelectsCard