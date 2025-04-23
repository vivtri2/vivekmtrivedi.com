import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillFileEarmarkPersonFill } from 'react-icons/bs';
import { Link, animateScroll as scroll } from "react-scroll";


const Navbar = () => {
    const [navView, setNavView] = useState(false);


    const handleNav = () => {

        setNavView(!navView)
    }


    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-10 font-sans'>
            <div>
                <TypeAnimation
                    sequence={[
                        "Data Engineer", 1000,
                        "Cloud Architect", 1000,
                        "ETL Specialist", 1000,
                        "Cloud Infrastructure Expert", 1000,
                        "AWS Certified Solutions Architect", 1000,
                        "Databricks Developer", 1000,
                        "AI & ML Engineer", 1000,
                        "HIPAA-Compliant ETL Builder", 1000,
                        "GraphQL Backend Developer", 1000,
                        "CI/CD & DevOps Practitioner", 1000,
                        "Big Data Orchestrator", 1000,
                        "PostgreSQL & MongoDB Specialist", 1000,
                        "PySpark Performance Tuner", 1000,
                        "Data Quality Champion", 1000,
                        "Kinesis Stream Designer", 1000,
                        "Real-Time Analytics Engineer", 1000,
                        "Dashboard Creator (QuickSight, Tableau)", 1000,
                        "Infrastructure as Code Advocate", 1000,
                        "APIs, Retool & Postman Power User", 1000,
                        "Python + TypeScript Dev", 1000,
                        "Data Pipeline Designer", 1000,
                        "Spark SQL Expert", 1000,
                        "Kafka & Streaming Engineer", 1000,
                        "Snowflake Integrator", 1000,
                        "Terraform & CloudFormation User", 1000,
                        "API Integration Specialist", 1000,
                        "AWS Lambda + SNS Architect", 1000,
                        "Azure Blob Data Handler", 1000,
                        "Databricks Delta Lake Engineer", 1000,
                        "Databricks Notebook Chaining & Orchestration Pro", 1000,
                        "Realtime Alert System Builder", 1000,
                        "Fleet Analytics Developer", 1000,
                        "SPSS & ML Modeler", 1000,
                        "SDLC Process Improver", 1000,
                        "Tableau + Plotly Visualizer", 1000,
                        "CI/CD Pipeline Automator", 1000,
                        "Postman Power User", 1000,
                        "ETL System Strategist", 1000
                    ]}
                    speed={50}
                    repeat={Infinity}
                // style={{ fontSize: '1em' }}
                />

            </div>

            {/* menu */}
            <ul className='hidden md:flex'>
                <li>
                    <Link activeClass='active' to='home' smooth={true} duration={1000}>Home</Link>
                </li>
                <li>
                    <Link activeClass='active' to='about' smooth={true} duration={1000}>About</Link>

                </li>
                <li>
                    <Link activeClass='active' to='skills' smooth={true} duration={1000}>Skills</Link>

                </li>
                <li>
                    <Link activeClass='active' to='work' smooth={true} duration={1000}>Work</Link>

                </li>

                <li>
                    <Link activeClass='active' to='contact' smooth={true} duration={1000}>Contact</Link>

                </li>
            </ul>

            {/* absolute top-0 left-0 w-full h-screen  bg-[#0a192f] backdrop-filter backdrop-blur-lg bg-opacity-30 flex flex-col justify-center items-center */}
            {/* Humberger Menu */}
            <div className='md:hidden z-20 text-xl' onClick={handleNav}>
                {!navView ? <FaBars /> : <FaTimes />}
            </div>
            
            <ul className={!navView ? 'absolute top-0 right-0 left-0 flex flex-col items-center justify-center transition-all duration-700 -translate-y-[100vh]'
                : 'md:hidden absolute w-full h-screen top-0 right-0 left-0 flex flex-col justify-center items-center bg-[#0a192f] backdrop-filter backdrop-blur-lg bg-opacity-30 z-10 transition-all duration-700 translate-y-0'}>

                <li className='py-4 text-3xl font-semibold'>
                    <Link onClick={handleNav} activeClass='active' to='home' smooth={true} duration={1000}>Home</Link>

                </li>
                <li className='py-4 text-3xl font-semibold'>
                    <Link onClick={handleNav} activeClass='active' to='about' smooth={true} duration={1000}>About</Link>

                </li>
                <li className='py-4 text-3xl font-semibold'>
                    <Link onClick={handleNav} activeClass='active' to='skills' smooth={true} duration={1000}>Skills</Link>

                </li>
                <li className='py-4 text-3xl font-semibold'>
                    <Link onClick={handleNav} activeClass='active' to='work' smooth={true} duration={1000}>Work</Link>

                </li>
                <li className='py-4 text-3xl font-semibold'>
                    <Link onClick={handleNav} activeClass='active' to='contact' smooth={true} duration={1000}>Contact</Link>

                </li>


            </ul>

            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#171515]'>
                        <a href="https://github.com/vivtri2" rel='noreferrer' target='_blank' className='flex justify-between items-center w-full text-gray-300'>
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#0A66C2]'>
                        <a href="https://www.linkedin.com/in/vivek-trivedi/" rel='noreferrer' target='_blank' className='flex justify-between items-center w-full text-gray-300'>
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#565f69]'>
                        <a href="/Vivek_Trivedi_Resume.pdf" rel='noreferrer' target='_blank' className='flex justify-between items-center w-full text-gray-300'>
                            Resume <BsFillFileEarmarkPersonFill size={30} />
                        </a>
                    </li>



                </ul>

            </div>



        </div>
    )
}

export default Navbar