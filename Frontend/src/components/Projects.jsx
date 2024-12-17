import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import tiketa from "../assets/tiketa.png";
import store from "../assets/store.png";

const Projects = () => {
  return (
    <div className="text-white max-w-6xl mx-auto px-4 md:mt-80 md:px-4">
      <h1 className="mb-8 mt-20 text-gray-200 font-bold text-center text-2xl">
        Projects
      </h1>
      {/* TIKETA */}
      <div className="md:flex md:space-x-8">
        <div className="grid grid-cols-2 gap-4 max-w-96 border border-transparent md:max-w-full md:rounded-md md:p-2 mx-auto">
          <img src={tiketa} alt="Tiketa" className="h-full rounded-md" />
          <div className="block md:grid md:grid-rows">
            <h1 className="mb-4 text-yellow-500 text-xl font-bold">Tiketa</h1>
            <p>
              An online ticketing system. Event organizers signup and create
              events, users browse and buy tickets. This app has an intuitive
              and responsive UI making it user friendly.
            </p>
            <div className="flex mt-4 gap-8 text-xl text-yellow-500">
              <a
                className="hover:text-white"
                href="https://github.com/jimmindungu3/Tiketa"
                target="_blank"
              >
                <FaGithub />
              </a>
              <a
                className="hover:text-white"
                href="https://tiketa.vercel.app/"
                target="_blank"
              >
                <FaRocket />
              </a>
            </div>
          </div>
        </div>

        {/* JAMES STORE */}
        <div className="mt-16 grid grid-cols-2 gap-4 max-w-96 border border-transparent md:max-w-full  md:rounded-md md:p-2 mx-auto md:mt-0">
          <img src={store} alt="James store" className="h-full rounded-md" />
          <div className="block md:grid md:grid-rows">
            <h1 className="mb-4 text-yellow-500 text-xl font-bold">
              James Store
            </h1>
            <p>
              An online store with full cart functionality. Products can be
              filtered by category, added to cart and checked out.
            </p>
            <div className="flex mt-4 gap-8 text-xl text-yellow-500">
              <a
                className="hover:text-white"
                href="https://github.com/jimmindungu3/James-Store-Frontend"
                target="_blank"
              >
                <FaGithub />
              </a>
              <a
                className="hover:text-white"
                href="https://james-store-with-node-backend.vercel.app/"
                target="_blank"
              >
                <FaRocket />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
