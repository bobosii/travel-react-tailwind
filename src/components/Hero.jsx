import React from 'react'
import beachVid from "../assets/beachVid.mp4"

const Hero = () => {
  return (
    <div className="w-full h-screen relative -z-10">
        <video src={beachVid}/>
    </div>
  )
}

export default Hero