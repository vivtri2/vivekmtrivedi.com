import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section name="about" className="w-full min-h-screen bg-[#0a192f] text-gray-300 font-sans p-6 sm:p-8">
      <div className="flex flex-col justify-center items-center w-full h-full">
        
        {/* Section Heading */}
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8">
            <h2 className="text-4xl font-bold inline border-b-4 border-[#C23B22]">About</h2>
          </div>
          <div></div>
        </div>

        {/* About Content */}
        <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
          <div 
            className="sm:text-right text-4xl font-bold"
            data-aos="fade-right"
          >
            <p>
              Hi, I’m <span className="text-[#C23B22]">Vivek</span>. I design data systems that scale and deliver insights.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <p className="leading-relaxed max-w-[500px]">
              I’m a Data Engineer with a strong foundation in cloud infrastructure, secure ETL pipelines, and distributed
              data processing. I've built HIPAA-compliant pipelines, real-time dashboards, and predictive analytics systems
              using AWS, Databricks, PySpark, and Snowflake. 
              <br /><br />
              Certified in AWS and Databricks, I specialize in translating complex business needs into reliable,
              scalable, and modern data architectures. My goal is to grow into a Solutions Architect, building systems that
              are secure, observable, and deeply aligned with business outcomes.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
