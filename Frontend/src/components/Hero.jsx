import React from "react";
import passport from "../assets/passport.png";

const Hero = () => {
  return (
    <div className="max-w-6xl mx-auto h-screen flex items-center justify-center">
      <div className="text-center text-gray-200">
        <img
          className="p-1 mx-auto h-44 rounded-full border border-gray-400 hover:shadow-md hover:shadow-yellow-500"
          src={passport}
          alt="my passport"
        />
        <p className="mt-12 text-xl font-semibold">Hi there...</p>
        <p className="mt-4 text-3xl font-bold">
          I'm James a.k.a <span className="text-yellow-500">CodeShark</span>
        </p>
        <p className="mt-4 text-lg">
          I'm a{" "}
          <span className="text-yellow-500 font-semibold">Fullstack Web Developer</span>{" "}
          and a <span className="text-yellow-500 font-semibold">TVET Trainer</span> based
          in Nairobi, Kenya.
        </p>
        <button className="mt-12 py-2 px-6 rounded bg-yellow-500 text-lg text-black font-semibold hover:bg-gray-200 active:bg-yellow-500 transition-colors">
          <a
            href="/James Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default Hero;