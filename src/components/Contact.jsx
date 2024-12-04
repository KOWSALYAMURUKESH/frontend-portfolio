import React, { useState } from "react";
import Footer from "./common/Footer";

 





const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
    alert("Thank you! Your message has been sent.");
  };

  return (
    <div className="bg-blue-50 flex flex-col items-center min-h-screen font-sans mt-20 ">
      <h1 className="font-bold text-4xl pt-7 pb-5 text-center animate-fade-in ">
          Contact Me
        </h1>
      <p className="text-gray-600 text-center mb-7">
        Feel free to reach out by filling out this form!
      </p>
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-lg hover:shadow-lg transition-shadow duration-300 md:max-w-lg sm:mx-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-transform transform hover:scale-105 duration-200"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      <div className="max-w-sm  min-w-full" >
      <Footer></Footer>
      </div>
    </div>
    
  );
};

export default Contact;
