import React, { useState } from "react";
import axios from "axios"; // Make sure axios is imported

const Message = () => {
  // State for form fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [loading, setLoading] = useState(false); // Track loading state
  const [error, setError] = useState(""); // Track errors

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, phone, email, subject, message };

    setLoading(true); // Set loading to true when submission starts
    setError(""); // Reset any previous errors

    try {
      const response = await axios.post(
        "https://gmail-for-portfolio-pxk96klcz-jimmindungu3s-projects.vercel.app/hire-me",
        formData,
        { withCredentials: true }
      );

      if (response && response.status === 200) {
        alert("Message sent successfully");
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
        setSubject("");
      } else {
        alert("Some error happened");
      }
    } catch (err) {
      console.error("Error sending message:", err);
      setError("There was an error sending your message. Please try again.");
    } finally {
      setLoading(false); // Set loading to false after request completes
    }
  };

  return (
    <div className="max-w-96 md:max-w-6xl mx-auto mb-12">
      <div className="border border-blue-900 border-opacity-80 w-full rounded-lg bg-blue-950 bg-opacity-50 p-4 pb-8">
        <h1 className="pt-4 font-bold text-2xl text-center text-yellow-500 mb-4">
          Hire Me
        </h1>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="flex flex-col space-y-1 mb-4">
            <label className="text-gray-200 px-2 font-semibold" htmlFor="name">
              Your Name
            </label>
            <input
              className="px-2 rounded-md py-2 bg-gray-300 focus:outline focus:outline-bronze focus:outline-2"
              type="text"
              name="name"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col space-y-1 mb-4">
            <label className="px-2 text-white font-semibold" htmlFor="phone">
              Phone
            </label>
            <input
              className="px-2 rounded-md py-2 bg-gray-300 focus:outline focus:outline-bronze focus:outline-2"
              type="tel"
              name="phone"
              placeholder="0712345678"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col space-y-1 mb-4">
            <label className="px-2 text-white font-semibold" htmlFor="email">
              Email
            </label>
            <input
              className="px-2 rounded-md py-2 bg-gray-300 focus:outline focus:outline-bronze focus:outline-2"
              type="email"
              name="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Subject */}
          <div className="flex flex-col space-y-1 mb-4">
            <label className="px-2 text-white font-semibold" htmlFor="subject">
              Subject
            </label>
            <select
              className="px-2 rounded-md py-2 bg-gray-300 focus:outline focus:outline-bronze focus:outline-2"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            >
              <option value="" disabled>
                Select a subject
              </option>
              <option value="webDevelopment">Web Development</option>
              <option value="webTraining">Web Development Training</option>
              <option value="webConsultation">Web Consultation</option>
            </select>
          </div>

          {/* Message */}
          <div className="flex flex-col space-y-1 mb-4">
            <label className="text-white px-2 font-semibold" htmlFor="message">
              Message
            </label>
            <textarea
              className="px-2 rounded-md py-2 bg-gray-300 focus:outline focus:outline-bronze focus:outline-2"
              name="message"
              rows={4}
              placeholder="Greetings! I would love to hire you for a web project. Can we have a meeting to discuss more? Please let me know...!"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading} // Disable button during submission
            className="mt-4 py-2 px-6 rounded bg-yellow-500 text-lg text-black font-semibold hover:bg-gray-200 active:bg-yellow-500 transition-colors"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default Message;
