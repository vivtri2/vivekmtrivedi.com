import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-[#0a192f] flex flex-col justify-center items-center p-6 sm:p-8 font-sans"
    >
      <form
        action="https://getform.io/f/ayvkxzrb"
        method="POST"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-[#C23B22] text-gray-300">
            Contact
          </h2>
          <p className="text-gray-300 py-4">
            Submit the form below to get in touch with me!
          </p>
        </div>

        <input
          className="bg-gray-300 p-3 rounded-md focus:outline-none mb-4"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="bg-gray-300 p-3 rounded-md focus:outline-none mb-4"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          className="bg-gray-300 p-3 rounded-md focus:outline-none mb-6"
          name="message"
          placeholder="Your Message"
          rows="8"
          required
        ></textarea>

        <button className="text-white border-2 px-6 py-3 flex items-center justify-center hover:bg-[#C23B22] hover:border-[#C23B22] transition-all duration-300 font-sans m-auto">
          Let's Connect
          <HiArrowNarrowRight className="ml-3" />
        </button>
      </form>

      <div className="flex flex-col items-center text-gray-300 mt-12">
        <h5 className="text-2xl font-bold mb-2">Contact Me</h5>
        <p className="mb-6">vivtri2@gmail.com</p>

        <div className="flex space-x-6">
          <a
            className="text-2xl hover:text-[#C23B22] transition-colors"
            href="https://github.com/vivtri2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="text-2xl hover:text-[#C23B22] transition-colors"
            href="https://www.linkedin.com/in/vivek-trivedi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>Made by Vivek Trivedi © 2025</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
