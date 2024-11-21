import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-96 md:max-w-6xl mx-auto text-gray-200">
      <div className="bg-blue-950 bg-opacity-50 rounded-t-lg flex justify-between space-x-2 px-4 py-6">
        <div>
          Designed and built by{" "}
          <span className="text-yellow-500 text-lg font-bold">CodeShark🦈</span>
        </div>
        <div className="flex space-x-4 text-gray-200 text-lg">
          <a
            href="https://github.com/jimmindungu3"
            target="_blank"
            className="hover:text-yellow-500 active:text-white transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.youtube.com/@DevsToday"
            target="_blank"
            className="hover:text-yellow-500 active:text-white transition-colors"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.linkedin.com/in/jamesndunguthedev/"
            target="_blank"
            className="hover:text-yellow-500 active:text-white transition-colors"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://x.com/ndunguthedev"
            target="_blank"
            className="hover:text-yellow-500 active:text-white transition-colors"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.tiktok.com/@jamestheswdev"
            target="_blank"
            className="hover:text-yellow-500 active:text-white transition-colors"
          >
            <FaTiktok />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
