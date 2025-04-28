import React, { useEffect } from 'react';
import data from '../data/portfolioData';
import { FaTimes } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ShowCard = ({ activeId, setShowCard }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const portfolio = data.find(item => item.id === activeId);

  return (
    <div className="fixed inset-0 w-full h-full z-20 bg-[#0a192f] bg-opacity-90 backdrop-blur-md flex justify-center items-center font-sans p-4">
      <div className="relative w-full max-w-[500px] bg-[#1a1f2e] rounded-lg shadow-lg p-6 animate-fade-in">
        
        {/* Close Button */}
        <button
          onClick={() => setShowCard(false)}
          className="absolute top-4 right-4 text-gray-300 hover:text-[#C23B22] hover:scale-125 transition-all duration-300"
        >
          <FaTimes size={24} />
        </button>

        {/* Image */}
        <div className="flex justify-center mb-6">
          <img src={portfolio.imgUrl} alt="portfolio" className="rounded-lg" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-100 mb-4 text-center">
          {portfolio.title}
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-6 leading-relaxed text-center">
          {portfolio.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {portfolio.tech.map((tech, index) => (
            <span
              key={index}
              className="bg-[#0a192f] text-gray-300 text-xs sm:text-sm py-1 px-3 rounded-full border border-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Live Site Button */}
        <div className="flex justify-center">
          <a
            href={portfolio.siteUrl}
            target="_blank"
            rel="noreferrer"
            className="text-white group border-2 px-6 py-2 flex items-center hover:bg-[#C23B22] hover:border-[#C23B22] transition-all duration-300 text-sm rounded-md"
          >
            Live Site
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShowCard;
