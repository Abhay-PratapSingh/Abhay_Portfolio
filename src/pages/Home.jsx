import React, { useRef } from 'react'
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import ProjectCardCollection from '../component/ProjectCardCollection';
import ContactCardContainer from '../component/ContactCardContainer';
import TestimonialCardCollection from '../component/TestimonialCardCollection';
import Footer from '../component/Footer';


const Home = () => {

    const projectRef = useRef(null);

    const scrollToProjects = () => {
        projectRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (

        <>
            <div className='pt-40   min-h-[60vh] md:min-h-screen   flex items-start md:items-center justify-center text-[#E5E7EB] bg-[#020617] font-[Inter]'>

                <div className='text-center max-w-2xl px-4'>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                        className='mb-4 text-white text-3xl sm:text-4xl md:text-5xl font-semibold'
                    >
                        Hii, I'm Abhay Pratap Singh
                    </motion.h1>

                    <h2 className='mb-4 text-emerald-400 text-xl sm:text-2xl md:text-3xl font-medium'>
                        <TypeAnimation
                            sequence={[
                                "Full Stack MERN Developer",
                                2000,
                                "React Developer",
                                2000,
                                "Node.js Developer",
                                2000,
                            ]}
                            speed={50}
                            repeat={Infinity}
                        />
                    </h2>

                    <p className='mb-6 text-gray-400 text-sm sm:text-base md:text-lg'>
                        Currently working at  <span className="text-emerald-400 font-medium"> Tata Consultancy Services </span> and passionate about building
                        modern full-stack web applications using the MERN stack.
                    </p>

                    <div className='flex flex-wrap gap-4 justify-center'>

                        <a
                            href="https://www.linkedin.com/in/abhay-pratap-singh-25a253288"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='w-52 px-6 py-2 bg-emerald-500 text-white rounded-full transition-all duration-200 hover:bg-emerald-600 hover:scale-105 active:scale-95 active:bg-emerald-700'
                        >
                            Connect Now
                        </a>

                        <a

                            href="/AbhayResume.pdf"
                            download="Abhay_Pratap_Singh_Resume.pdf"
                            className='w-52 px-6 py-2 bg-emerald-500 text-white rounded-full transition-all duration-200 hover:bg-emerald-600 hover:scale-105 active:scale-95 active:bg-emerald-700'
                        >
                            Download Resume
                        </a>

                        <a
                            onClick={scrollToProjects}
                            className='w-52 px-6 py-2 bg-emerald-500 text-white rounded-full transition-all duration-200 hover:bg-emerald-600 hover:scale-105 active:scale-95 active:bg-emerald-700 cursor-pointer text-center'
                        >
                            View My Latest Work
                        </a>

                    </div>
                </div>

            </div>

            <div ref={projectRef} className="scroll-mt-24" id="projects" >
                <ProjectCardCollection />
            </div>



            <div id="contact" className="scroll-mt-24">
                <ContactCardContainer />
            </div>




            <TestimonialCardCollection />

        </>
    )
}

export default Home