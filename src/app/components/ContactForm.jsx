import React from 'react';
import { AiOutlineSend } from "react-icons/ai";

const ContactForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100 font-sans">
      <div className="relative bg-white rounded-3xl shadow-xl p-8 md:p-12 w-full max-w-4xl overflow-hidden">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Contact Me</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          {/* Full Name */}
          <div className="flex flex-col">
            <label htmlFor="fullName" className="text-gray-600 font-medium mb-2 flex items-center">
              <i className="fas fa-user mr-2 text-gray-500"></i> Full Name <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Full Name"
              required
              className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-50 text-gray-800"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-600 font-medium mb-2 flex items-center">
              <i className="fas fa-envelope mr-2 text-gray-500"></i> Email <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              required
              className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-50 text-gray-800"
            />
          </div>

          {/* Mobile No. */}
          <div className="flex flex-col">
            <label htmlFor="mobileNo" className="text-gray-600 font-medium mb-2 flex items-center">
              <i className="fas fa-mobile-alt mr-2 text-gray-500"></i> Mobile No.
            </label>
            <input
              type="tel"
              id="mobileNo"
              placeholder="Mobile No."
              className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-50 text-gray-800"
            />
          </div>

          {/* Subject */}
          <div className="flex flex-col">
            <label htmlFor="subject" className="text-gray-600 font-medium mb-2 flex items-center">
              Subject <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Subject"
              required
              className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-50 text-gray-800"
            />
          </div>

          {/* Message */}
          <div className="col-span-1 md:col-span-2 flex flex-col">
            <label htmlFor="message" className="text-gray-600 font-medium mb-2 flex items-center">
              Message <span className="text-red-500 ml-1">*</span>
            </label>
            <textarea
              id="message"
              placeholder="Message"
              rows="5"
              required
              className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-50 text-gray-800 resize-y"
            ></textarea>
          </div>

          {/* Send Button */}
          <div className="col-span-1 md:col-span-2 flex justify-start mt-4">
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 font-bold py-4 px-8 rounded-xl flex items-center justify-center transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg"
            >
              Send <span className="ml-3"><AiOutlineSend /></span>
            </button>
          </div>
        </form>

        {/* Contact Image */}
        <div className="absolute bottom-0 right-0 w-64 md:w-80 lg:w-96 z-10">
          <img src="/connactimg.png" alt="Contact Illustration" className="w-full h-auto object-cover" />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;