import React from 'react';
import { Button } from "@nextui-org/react";


const Hero = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="justify-center">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white flex flex-col">
            <span className="text-transparent bg-gradient-to-tr from-yellow-600 to-purple-600 bg-clip-text">
              {"Hackathons"}
            </span>
            <span className="text-5xl">{" Simplified"}</span>
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Experience the future of{" "}
            <span className="text-transparent bg-gradient-to-tr from-yellow-600 to-purple-600 bg-clip-text">
              hackathons
            </span>{" "}
            with our cutting-edge virtual platform. Designed for both organizers
            and attendees, our platform provides a seamless, interactive, and
            engaging experience that redefines what a{" "}
            <span className="text-transparent bg-gradient-to-tr from-yellow-600 to-purple-600 bg-clip-text">
              hackathon
            </span>{" "}
            can be.
          </p>
          {/* <Button color="default" href='#start' className='smooth-scroll'>Get started</Button> */}
          <div className="relative left-0 right-0 flex justify-center py-8">
            <div className="scroll">
              <div className="chevron"></div>
              <div className="chevron"></div>
              <div className="chevron"></div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Hero;