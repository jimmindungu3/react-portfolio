import React from "react";
import { SlSettings } from "react-icons/sl";
import { FaRegLightbulb } from "react-icons/fa";
import { TfiBlackboard } from "react-icons/tfi";

const Services = () => {
  return (
    <div>
      <h1 className="mb-8 text-gray-200 font-bold text-center text-2xl">
        My Services
      </h1>
      <div className="mx-4 md:grid md:grid-cols-3 md:max-w-6xl md:space-x-6 md:mx-auto md:px-4"> {/* Reduced space here */}
        {/* Consultancy Card */}
        <div className="mb-12 max-w-96 mx-auto flex flex-col bg-blue-950 bg-opacity-50 border border-bronze shadow-lg rounded-lg overflow-hidden md:h-full md:mt-36">
          <FaRegLightbulb className="w-24 h-24 text-bronze mx-auto mt-4" />
          <div className="flex-grow p-4 flex flex-col">
            <h2 className="text-xl text-center text-bronze font-bold mb-2 md:mb-8">
              Web Consultancy
            </h2>
            <p className="text-gray-50 flex-grow">
              Elevate your web strategy with expert consultancy. I provide tailored advice to optimize your digital presence, leverage cutting-edge technologies, and drive your web solutions forward.
            </p>
          </div>
        </div>
        {/* Web Development Card */}
        <div className="mb-12 max-w-96 mx-auto flex flex-col bg-blue-950 bg-opacity-50 border border-gold shadow-lg rounded-lg overflow-hidden md:h-full">
          <SlSettings className="w-24 h-24 text-yellow-500 mx-auto mt-4" />
          <div className="flex-grow p-4 flex flex-col">
            <h2 className="text-xl text-center text-yellow-500 font-bold mb-2 md:mb-8">
              Web Development
            </h2>
            <p className="text-gray-50 flex-grow">
              Transform your ideas into powerful web solutions. I specialize in building modern, responsive, and user-friendly websites using the latest technologies. Let's build something amazing together!
            </p>
          </div>
        </div>
        {/* Web Development Training Card */}
        <div className="mb-12 max-w-96 mx-auto flex flex-col bg-blue-950 bg-opacity-50 border border-silver shadow-lg rounded-lg overflow-hidden md:h-full md:mt-36">
          <TfiBlackboard className="w-24 h-24 text-silver mx-auto mt-4" />
          <div className="flex-grow p-4 flex flex-col">
            <h2 className="text-xl text-center text-silver font-bold mb-2 md:mb-8">
              Web Development Training
            </h2>
            <p className="text-gray-50 flex-grow">
              Transform your skills into expertise. I offer hands-on, practical web development training to help you build modern, responsive, and user-friendly websites. Master the latest technologies and take your web development journey to the next level. Let's start building your future today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
