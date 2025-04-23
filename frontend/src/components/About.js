import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300 font-sans">
          <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
              <div className="sm:text-right pb-8">
                <p className="text-4xl font-bold inline border-b-8 border-[#C23B22]">About</p>
              </div>
              <div></div>
            </div>
      
            <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
              <div className="sm:text-right text-4xl font-bold" data-aos="fade-right" data-aos-duration="1000">
                <p>
                  Hi, I’m <span className="text-[#C23B22]">Vivek</span>. I design data systems that scale and deliver insights.
                </p>
              </div>
              <div data-aos="fade-up" data-aos-duration="1000">
                <p>
                  I’m a Data Engineer with a strong foundation in cloud infrastructure, secure ETL pipelines, and distributed
                  data processing. Over the years, I’ve built HIPAA-compliant pipelines, real-time dashboards, and predictive
                  analytics systems using AWS, Databricks, PySpark, and Snowflake. With certifications in AWS and Databricks,
                  I specialize in translating business needs into reliable, scalable, and modern data architectures. My goal
                  is to evolve into a Solutions Architect, building systems that are secure, observable, and deeply aligned
                  with business outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
    )
}

export default About