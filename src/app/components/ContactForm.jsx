import React from "react";
import { AiOutlineSend } from "react-icons/ai";

const ContactForm = () => {
  return (
    <div className="min-h-auto w-[70vw] flex items-center justify-center px-4 py-8 sm:p-6 bg-black font-sans">
      <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 lg:p-12 w-full max-w-4xl xl:max-w-7xl overflow-hidden mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">
          Contact Me
        </h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 relative z-10">
          {/* Full Name */}
          <div className="flex flex-col">
            <label
              htmlFor="fullName"
              className="text-gray-600 text-sm sm:text-base font-medium mb-1 sm:mb-1.5"
            >
              Full Name <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Full Name"
              required
              className="p-2 sm:p-3 text-sm sm:text-base border border-gray-300 rounded-md sm:rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-50 text-gray-800"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-gray-600 text-sm sm:text-base font-medium mb-1 sm:mb-1.5"
            >
              Email <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              required
              className="p-2 sm:p-3 text-sm sm:text-base border border-gray-300 rounded-md sm:rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-50 text-gray-800"
            />
          </div>

          {/* Mobile No. */}
          <div className="flex flex-col">
            <label
              htmlFor="mobileNo"
              className="text-gray-600 text-sm sm:text-base font-medium mb-1 sm:mb-1.5"
            >
              Mobile No.
            </label>
            <input
              type="tel"
              id="mobileNo"
              placeholder="Mobile No."
              className="p-2 sm:p-3 text-sm sm:text-base border border-gray-300 rounded-md sm:rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-50 text-gray-800"
            />
          </div>

          {/* Subject */}
          <div className="flex flex-col">
            <label
              htmlFor="subject"
              className="text-gray-600 text-sm sm:text-base font-medium mb-1 sm:mb-1.5"
            >
              Subject <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Subject"
              required
              className="p-2 sm:p-3 text-sm sm:text-base border border-gray-300 rounded-md sm:rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-50 text-gray-800"
            />
          </div>

          {/* Message */}
          <div className="col-span-1 md:col-span-2 flex flex-col">
            <label
              htmlFor="message"
              className="text-gray-600 text-sm sm:text-base font-medium mb-1 sm:mb-1.5"
            >
              Message <span className="text-red-500 ml-1">*</span>
            </label>
            <textarea
              id="message"
              placeholder="Message"
              rows="3"
              className="min-h-[100px] sm:min-h-[120px] p-2 sm:p-3 text-sm sm:text-base border border-gray-300 rounded-md sm:rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-50 text-gray-800 resize-y"
              required
            ></textarea>
          </div>

          {/* Send Button */}
          <div className="col-span-1 md:col-span-2 flex justify-start mt-2 sm:mt-3">
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 font-bold py-2 px-5 sm:py-2.5 sm:px-7 rounded-lg flex items-center justify-center transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-sm sm:shadow-md text-sm sm:text-base"
            >
              Send{" "}
              <span className="ml-2 text-base sm:text-lg">
                <AiOutlineSend />
              </span>
            </button>
          </div>
        </form>

        {/* Contact Image - Hidden on small screens, shown on medium and up */}
        <div className="hidden sm:block absolute bottom-0 right-0 w-40 md:w-56 lg:w-64 xl:w-80 z-10">
          <img
            src="/connactimg.png"
            alt="Contact Illustration"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
