"use client";
import { useState } from "react";
import Head from "next/head";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    services: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add your form submission logic here
  };

  return (
    <>
      <Head>
        <title>Contact - Code by Dennis</title>
        <meta name="description" content="Let's start a project together" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Details first on small screens */}
            <div className="order-1 lg:order-2 lg:pl-8">
              {/* Profile Image */}
              <div className="mb-8">
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center">
                  <img
                    src="/ketanimg.jpeg" // replace with your actual image path
                    alt="Dennis Snellenberg"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-gray-500 text-sm uppercase mb-2">
                    CONTACT DETAILS
                  </h3>
                  <p className="text-white mb-2">sutarketan35@gmail.com</p>
                  <p className="text-white">91+ 9819603908</p>
                </div>

                <div>
                  <h3 className="text-gray-500 text-sm uppercase mb-2">
                    SOCIALS
                  </h3>
                  <div className="space-y-2">
                    <a
                      href="#"
                      className="block text-white hover:text-gray-300 transition-colors"
                    >
                      Instagram
                    </a>

                    <a
                      href="#"
                      className="block text-white hover:text-gray-300 transition-colors"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Left Column - Form */}
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl lg:text-5xl font-light mb-16 leading-tight">
                Let's start a
                <br />
                project together
              </h1>

              <form onSubmit={handleSubmit} className="space-y-12">
                {/* Question 1 */}
                <div className="border-b border-gray-700 pb-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <span className="text-gray-500 text-sm mt-1">01</span>
                    <label className="text-xl font-medium">
                      What's your name?
                    </label>
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe *"
                    className="w-full bg-transparent text-gray-400 placeholder-gray-600 text-lg focus:outline-none focus:text-white transition-colors"
                    required
                  />
                </div>

                {/* Question 2 */}
                <div className="border-b border-gray-700 pb-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <span className="text-gray-500 text-sm mt-1">02</span>
                    <label className="text-xl font-medium">
                      What's your email?
                    </label>
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@doe.com *"
                    className="w-full bg-transparent text-gray-400 placeholder-gray-600 text-lg focus:outline-none focus:text-white transition-colors"
                    required
                  />
                </div>

                {/* Question 3 */}
                <div className="border-b border-gray-700 pb-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <span className="text-gray-500 text-sm mt-1">03</span>
                    <label className="text-xl font-medium">
                      What's the name of your organization?
                    </label>
                  </div>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    placeholder="John & Doe ®"
                    className="w-full bg-transparent text-gray-400 placeholder-gray-600 text-lg focus:outline-none focus:text-white transition-colors"
                  />
                </div>

                {/* Question 4 */}
                <div className="border-b border-gray-700 pb-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <span className="text-gray-500 text-sm mt-1">04</span>
                    <label className="text-xl font-medium">
                      What services are you looking for?
                    </label>
                  </div>
                  <input
                    type="text"
                    name="services"
                    value={formData.services}
                    onChange={handleInputChange}
                    placeholder="Web Design, Web Development"
                    className="w-full bg-transparent text-gray-400 placeholder-gray-600 text-lg focus:outline-none focus:text-white transition-colors"
                  />
                </div>

                {/* Question 5 */}
                <div className="pb-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <span className="text-gray-500 text-sm mt-1">05</span>
                    <label className="text-xl font-medium">Your message</label>
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Hello Dennis, can you help me with ... *"
                    rows={4}
                    className="w-full bg-transparent text-gray-400 placeholder-gray-600 text-lg focus:outline-none focus:text-white transition-colors resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-8 relative flex items-center justify-end max-w-md mx-auto">
                  {/* Horizontal line */}
                  <hr className="w-full border-gray-700" />

                  <button
                    type="submit"
                    aria-label="Send message"
                    className="absolute right-6 bg-blue-600 hover:bg-blue-700 text-white w-20 h-20 rounded-full shadow-lg flex items-center justify-center text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition"
                  >
                    Send it
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
