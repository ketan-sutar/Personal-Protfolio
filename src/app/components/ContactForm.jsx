import React from "react";
import { AiOutlineSend } from "react-icons/ai";

const ContactForm = () => {
  return (
    <div className="w-full flex items-center justify-center px-4 py-8 sm:py-12 bg-black font-sans">
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 lg:p-12 w-full max-w-7xl flex flex-col lg:flex-row gap-10">
        {/* Avatar Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src="/connactimg.png"
            alt="Contact Avatar"
            className="w-60 h-60 sm:w-72 sm:h-72 object-cover rounded-full shadow-lg"
          />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 text-center lg:text-left">
            Contact Me
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {/* Full Name */}
            <div className="flex flex-col">
              <label
                htmlFor="fullName"
                className="text-gray-600 font-medium mb-1"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                required
                placeholder="Full Name"
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 bg-gray-50 text-gray-800"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-600 font-medium mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="Email"
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 bg-gray-50 text-gray-800"
              />
            </div>

            {/* Mobile No. */}
            <div className="flex flex-col">
              <label
                htmlFor="mobileNo"
                className="text-gray-600 font-medium mb-1"
              >
                Mobile No.
              </label>
              <input
                type="tel"
                id="mobileNo"
                placeholder="Mobile No."
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 bg-gray-50 text-gray-800"
              />
            </div>

            {/* Subject */}
            <div className="flex flex-col">
              <label
                htmlFor="subject"
                className="text-gray-600 font-medium mb-1"
              >
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                required
                placeholder="Subject"
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 bg-gray-50 text-gray-800"
              />
            </div>

            {/* Message */}
            <div className="col-span-1 md:col-span-2 flex flex-col">
              <label
                htmlFor="message"
                className="text-gray-600 font-medium mb-1"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                rows="4"
                required
                placeholder="Your message"
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 bg-gray-50 text-gray-800 resize-y"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="col-span-1 md:col-span-2 flex justify-start mt-2">
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 font-bold py-2.5 px-6 rounded-lg flex items-center transition-all hover:-translate-y-1 duration-300 shadow-md"
              >
                Send{" "}
                <span className="ml-2 text-lg">
                  <AiOutlineSend />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
