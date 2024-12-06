import React, { useEffect, useState } from "react";
import axios from "axios";

const Message = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const wakeUpServer = async () => {
      try {
        await axios.get("https://gmailer-ecmm.onrender.com");
        console.log("Render server woken up");
      } catch (err) {
        console.error("Error waking up server:", err);
      }
    };

    // Ping the server every 5 minutes
    const interval = setInterval(wakeUpServer, 5 * 60 * 1000);

    // Initial wake-up call
    wakeUpServer();

    // Cleanup on component unmount
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "https://gmailer-ecmm.onrender.com/hire-me",
        formData
      );

      if (response.status === 200) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (err) {
      console.error("Error sending message:", err);
      setError(
        err.response?.data ||
          "There was an error sending your message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-4  mb-12">
      <div className="max-w-96 md:max-w-6xl mx-auto">
        <div className="border border-blue-900 border-opacity-80 w-full rounded-lg bg-blue-950 bg-opacity-50 p-4 pb-8">
          <h1 className="pt-4 font-bold text-2xl text-center text-yellow-500 mb-4">
            Hire Me
          </h1>

          {success && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
              Message sent successfully!
            </div>
          )}

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col space-y-1">
              <label
                className="text-gray-200 px-2 font-semibold"
                htmlFor="name"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                required
                id="name"
                className="px-2 rounded-md py-2 bg-gray-300 focus:outline focus:outline-yellow-500 focus:outline-2"
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col space-y-1">
              <label className="px-2 text-white font-semibold" htmlFor="email">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                required
                id="email"
                className="px-2 rounded-md py-2 bg-gray-300 focus:outline focus:outline-yellow-500 focus:outline-2"
                type="email"
                name="email"
                placeholder="email@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col space-y-1">
              <label
                className="text-white px-2 font-semibold"
                htmlFor="message"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                id="message"
                className="px-2 rounded-md py-2 bg-gray-300 focus:outline focus:outline-yellow-500 focus:outline-2"
                name="message"
                rows={4}
                placeholder="Greetings! I would love to hire you for a web project. Can we have a meeting to discuss more?"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`py-2 px-6 rounded text-lg font-semibold transition-colors ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-yellow-500 hover:bg-gray-200 active:bg-yellow-700 text-black"
              }`}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Message;
