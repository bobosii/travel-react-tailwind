import React from "react";
import BaraBora from "../assets/borabora.jpg";
import BaraBora2 from "../assets/borabora2.jpg";
import KeyWest from "../assets/keywest.jpg";
import Maldives from "../assets/maldives.jpg";
import Maldives2 from "../assets/maldives2.jpg";
import Maldives3 from "../assets/maldives3.jpg";
import SelectsCard from "./SelectsCard";

const Selects = () => {
  return (
    <div className="max-w-[1240px] grid mx-auto sm:grid-cols-2 lg:grid-cols-3 px-4 py-16 gap-4">
      <SelectsCard bg={BaraBora} text = "Bora Bora" />
      <SelectsCard bg={BaraBora2} text = "Maldives" />
      <SelectsCard bg={Maldives} text = "Antigua" />
      <SelectsCard bg={Maldives2} text = "Cozumel" />
      <SelectsCard bg={Maldives3} text = "Jamaica" />
      <SelectsCard bg={KeyWest} text = "Antalya" />
    </div>
  );
};

export default Selects;
