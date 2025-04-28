import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import HTML from '../asset/html.png';
import CSS from '../asset/css.png';
import TailwindLogo from '../asset/tailwind.png';
import ReactLogo from '../asset/react.png';
import FirebaseLogo from '../asset/firebase.png';
import GithubLogo from '../asset/github.png';
import NodeJsLogo from '../asset/node.png';
import ApacheSparkLogo from '../asset/apachespark.png';
import DatabricksLogo from '../asset/databricks.png';
import DockerLogo from '../asset/docker.png';
import GraphQLLogo from '../asset/graphql.png';
import MongoDBLogo from '../asset/mongodb.png';
import PostgreSQLLogo from '../asset/postgresql.png';
import PostmanLogo from '../asset/postman.png';
import PythonLogo from '../asset/python.png';
import SnowflakeLogo from '../asset/snowflake.png';

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const skills = [
    { img: HTML, name: "HTML" },
    { img: CSS, name: "CSS" },
    { img: ReactLogo, name: "React" },
    { img: GithubLogo, name: "GitHub" },
    { img: FirebaseLogo, name: "Firebase" },
    { img: TailwindLogo, name: "TailwindCSS" },
    { img: NodeJsLogo, name: "Node.js" },
    { img: ApacheSparkLogo, name: "Apache Spark" },
    { img: DatabricksLogo, name: "Databricks" },
    { img: DockerLogo, name: "Docker" },
    { img: GraphQLLogo, name: "GraphQL" },
    { img: MongoDBLogo, name: "MongoDB" },
    { img: PostgreSQLLogo, name: "PostgreSQL" },
    { img: PostmanLogo, name: "Postman" },
    { img: PythonLogo, name: "Python" },
    { img: SnowflakeLogo, name: "Snowflake" },
  ];

  return (
    <section name="skills" className="w-full min-h-screen bg-[#0a192f] text-gray-300 font-sans p-6 sm:p-8">
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full">
        
        {/* Heading */}
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-[#C23B22]">Skills</h2>
          <p className="py-4">Technologies and tools I've worked with</p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="shadow-md shadow-[#040c16] hover:scale-110 transition-transform duration-300 rounded-md p-4"
              data-aos="zoom-in-up"
              data-aos-delay={idx * 100}
            >
              <img src={skill.img} alt={`${skill.name} icon`} className="w-20 mx-auto" />
              <p className="mt-4">{skill.name}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
