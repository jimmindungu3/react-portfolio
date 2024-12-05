import React, { useRef } from "react";

const Navbar = () => {
  const scrollToBottomRef = useRef(null);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed top-0 left-0 w-full z-30">
      <div className="bg-gray-950 bg-opacity-90">
        <div className="max-w-6xl mx-auto">
          <div className="p-4 flex justify-between">
            <div className="text-yellow-500 text-2xl font-bold hover:cursor-pointer">
              CodeShark🦈
            </div>
            <div className="space-x-4">
              <button
                onClick={scrollToBottom}
                className="py-2 px-4 rounded bg-transparent border border-yellow-500 text-yellow-500 hover:text-gray-200 hover:border-gray-200 active:border-yellow-500 active:text-yellow-500 transition-colors"
              >
                Hire Me
              </button>
              {/* <button onClick={toggleTheme} disabled className="text-2xl">
                {theme === "dark" ? "🌙" : "☀️"}
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
