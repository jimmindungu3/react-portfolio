import React from "react";

const Message = () => {
  return (
    <div className="max-w-96 md:max-w-6xl mx-auto mb-12">
      <div className="border border-blue-900 border-opacity-80 w-full md:max-w-full rounded-lg bg-blue-950 bg-opacity-50 p-4 pb-8">
        <h1 className="pt-4 font-bold text-2xl text-center text-yellow-500 mb-4">
          Leave a Message
        </h1>
        <form>
          <div className="flex flex-col space-y-1 mb-4">
            <label className="text-gray-200 px-2 font-semibold" htmlFor="name">
              Your Name
            </label>
            <input
              className="px-2 rounded-md py-2 bg-gray-300 focus:outline focus:outline-bronze focus:outline-2"
              type="text"
              name="name"
              placeholder="John Doe"
            />
          </div>
          <div className="flex flex-col space-y-1 mb-4">
            <label className="px-2 text-white font-semibold" htmlFor="email">
              Email
            </label>
            <input
              className="px-2 rounded-md py-2 bg-gray-300 focus:outline focus:outline-bronze focus:outline-2"
              type="text"
              name="email"
              placeholder="email@example.com"
            />
          </div>
          <div className="flex flex-col space-y-1 mb-4">
            <label className="text-white px-2 font-semibold" htmlFor="message">
              Message
            </label>
            <textarea
              className="px-2 rounded-md py-2 bg-gray-300 focus:outline focus:outline-bronze focus:outline-2"
              name="message"
              id="message"
              rows={4}
              placeholder="Greetings I would love to hire you for a web project. Can we have a meeting to discuss more? Please let me know...!"
            ></textarea>
          </div>
          <button className="mt-4 py-2 px-6 rounded bg-yellow-500 text-lg text-black font-semibold hover:bg-gray-200 active:bg-yellow-500 transition-colors">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Message;
