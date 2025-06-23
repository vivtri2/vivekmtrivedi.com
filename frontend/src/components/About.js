import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section name="about" className="w-full bg-[#FAFAFA] text-gray-300 font-sans p-6 sm:p-8"> 
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
              Hi, I’m <span className="text-[#C23B22]">Vivek</span>. Building Data-Driven AI Solutions, from Cloud to Hardware
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <p className="leading-relaxed max-w-[500px]">
              I design and deliver robust AI and data architectures for industries where performance, scale, and security matter most. 
              From large-scale data migrations to architecting full-stack AI solutions on AWS, I bring a passion for solving complex 
              problems and empowering teams to drive business transformation.
              <br /><br />
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
