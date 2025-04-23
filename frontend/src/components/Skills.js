import React, { useEffect } from 'react'
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
        AOS.init();
    }, [])

    return (
        <div name='skills' className='w-full h-screen text-gray-300 bg-[#0a192f] font-sans'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#C23B22]'>Skills</p>

                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 my-4'>
                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                        <div data-aos='zoom-in-up' data-aos-duration='1000'>
                            <img src={HTML} className='w-20 mx-auto' alt="html icon" />
                            <p className='my-4'>HTML</p>
                        </div>
                    </div>

                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                        <div data-aos='zoom-in-up' data-aos-duration='1500'>
                            <img src={CSS} className='w-20 mx-auto' alt="css icon" />
                            <p className='my-4'>CSS</p>
                        </div>
                    </div>

                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                        <div data-aos='zoom-in-up' data-aos-duration='2500'>

                            <img src={ReactLogo} className='w-20 mx-auto' alt="react icon" />
                            <p className='my-4'>ReactJs</p>
                        </div>
                    </div>

                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                        <div data-aos='zoom-in-up' data-aos-duration='3000'>
                            <img src={GithubLogo} className='w-20 mx-auto' alt="github icon" />
                            <p className='my-4'>Github</p>
                        </div>
                    </div>

                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                        <div data-aos='zoom-in-up' data-aos-duration='3500'>

                            <img src={FirebaseLogo} className='w-20 mx-auto' alt="firebase icon" />
                            <p className='my-4'>Firebase</p>
                        </div>
                    </div>

                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                        <div data-aos='zoom-in-up' data-aos-duration='4000'>

                            <img src={TailwindLogo} className='w-20 mx-auto' alt="tailwind icon" />
                            <p className='my-4'>Tailwind CSS</p>
                        </div>
                    </div>

                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                        <div data-aos='zoom-in-up' data-aos-duration='4500'>

                            <img src={NodeJsLogo} className='w-20 mx-auto' alt="nodejs icon" />
                            <p className='my-4'>Nodejs</p>
                        </div>
                    </div>

                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                        <div data-aos='zoom-in-up' data-aos-duration='5000'>

                            <img src={ApacheSparkLogo} className='w-20 mx-auto' alt="apachespark icon" />
                            <p className='my-4'>Apache Spark</p>
                        </div>
                    </div>

                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                        <div data-aos='zoom-in-up' data-aos-duration='5500'>

                            <img src={DatabricksLogo} className='w-20 mx-auto' alt="databricks icon" />
                            <p className='my-4'>Databricks</p>
                        </div>
                    </div>

                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                        <div data-aos='zoom-in-up' data-aos-duration='6000'>

                            <img src={DockerLogo} className='w-20 mx-auto' alt="docker icon" />
                            <p className='my-4'>Docker</p>
                        </div>
                    </div>

                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                        <div data-aos='zoom-in-up' data-aos-duration='6500'>

                            <img src={GraphQLLogo} className='w-20 mx-auto' alt="graphql icon" />
                            <p className='my-4'>GraphQL</p>
                        </div>
                    </div>

                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                        <div data-aos='zoom-in-up' data-aos-duration='7500'>

                            <img src={MongoDBLogo} className='w-20 mx-auto' alt="mongodb icon" />
                            <p className='my-4'>MongoDB</p>
                        </div>
                    </div>

                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                        <div data-aos='zoom-in-up' data-aos-duration='8000'>

                            <img src={PostgreSQLLogo} className='w-20 mx-auto' alt="postgresql icon" />
                            <p className='my-4'>PostgreSQL</p>
                        </div>
                    </div>

                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                        <div data-aos='zoom-in-up' data-aos-duration='8500'>

                            <img src={PostmanLogo} className='w-20 mx-auto' alt="postman icon" />
                            <p className='my-4'>Postman</p>
                        </div>
                    </div>

                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                        <div data-aos='zoom-in-up' data-aos-duration='9000'>

                            <img src={PythonLogo} className='w-20 mx-auto' alt="python icon" />
                            <p className='my-4'>Python</p>
                        </div>
                    </div>

                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                        <div data-aos='zoom-in-up' data-aos-duration='9500'>

                            <img src={SnowflakeLogo} className='w-20 mx-auto' alt="snowflake icon" />
                            <p className='my-4'>Snowflake</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Skills