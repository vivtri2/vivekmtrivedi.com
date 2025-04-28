import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section name="home" className="w-full bg-[#0a192f] font-sans pt-[150px] pb-[100px] px-6 sm:px-8 min-h-screen">
      <div className="max-w-[1000px] mx-auto">
        
        <p className="text-[#C23B22] font-bold sm:text-2xl" data-aos="fade-down">
          Hi, my name is
        </p>

        <h1 className="text-5xl sm:text-7xl font-bold text-[#e1e6f5]" data-aos="fade-right" data-aos-delay="100">
          Vivek Trivedi
        </h1>

        <h2 className="text-3xl sm:text-5xl font-bold text-[#8892b0]" data-aos="fade-up" data-aos-delay="200">
          Building modern data platforms with an architect’s mindset.
        </h2>

        <p className="py-5 max-w-[700px] text-[#8892b0]" data-aos="fade-up" data-aos-delay="300">
          With a background in building HIPAA-compliant ETL systems, scalable Spark pipelines, and event-driven architectures,
          I specialize in designing cloud-native solutions that power real-time insights and enterprise-grade analytics. 
          My work spans AWS, Databricks, and Snowflake, with hands-on experience in tools like PySpark, Docker, GraphQL, 
          and QuickSight. Whether migrating frontend logic to backend services or optimizing Spark clusters for performance, 
          I approach every project with a balance of precision, scalability, and end-to-end ownership.
        </p>

        <div data-aos="fade-up" data-aos-delay="400">
          <Link activeClass="active" to="work" smooth={true} duration={1000} offset={-80}>
            <button className="text-white group border-2 px-6 py-3 my-4 flex items-center hover:bg-[#C23B22] hover:border-[#C23B22] transition-all duration-300">
              View My Projects
              <span className="group-hover:ml-6 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Home;
