import React, { useEffect, useState } from "react";
import data from "../data/portfolioData";
import AOS from "aos";
import "aos/dist/aos.css";
import ShowCard from "./ShowCard";

const Work2 = () => {
  const [nextItems, setNextItems] = useState(6);
  const [portfolios, setPortfolios] = useState(data);
  const [showCard, setShowCard] = useState(false);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleLoadMore = () => {
    setNextItems((prev) => prev + 3);
  };

  const handleShowCard = (id) => {
    setShowCard(true);
    setActiveId(id);
  };

  return (
    <section name="work" className="w-full min-h-screen bg-[#0a192f] text-gray-300 font-sans p-6 sm:p-8">
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full">
        
        {/* Heading */}
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-[#C23B22]">Work</h2>
          <p className="py-4">Here’s a selection of my recent projects. Click to view details!</p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.slice(0, nextItems).map((portfolio, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
            >
              <img
                src={portfolio.imgUrl}
                alt={portfolio.title}
                className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <button
                  onClick={() => handleShowCard(portfolio.id)}
                  className="text-white border border-white px-4 py-2 rounded hover:bg-[#C23B22] hover:border-[#C23B22] transition-colors duration-300"
                >
                  See Details
                </button>
              </div>
            </div>
          )).reverse()}
        </div>

        {/* Load More Button */}
        {nextItems < portfolios.length && data.length > 6 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={handleLoadMore}
              className="text-white border-2 px-6 py-3 hover:bg-[#C23B22] hover:border-[#C23B22] rounded-md transition-all duration-300"
            >
              Load More
            </button>
          </div>
        )}

        {/* ShowCard Modal */}
        {showCard && <ShowCard setShowCard={setShowCard} activeId={activeId} />}
      </div>
    </section>
  );
};

export default Work2;
