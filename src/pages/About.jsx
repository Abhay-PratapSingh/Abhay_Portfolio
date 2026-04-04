import React, { useState, useEffect, useRef } from 'react';
import DevloperImage from '../assets/Devloper_Image.png';
import { SiOpenai, SiGoogle } from "react-icons/si";
import { motion } from "framer-motion";
import {
    SiMongodb,
    SiExpress,
    SiReact,
    SiNodedotjs
} from "react-icons/si";
import { SiGithubcopilot } from "react-icons/si";

import { SiPostman, SiGit, SiGithub, SiTailwindcss, SiJavascript } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaRobot } from "react-icons/fa";

const About = () => {

    const [activeTooltip, setActiveTooltip] = useState(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setActiveTooltip(null);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (activeTooltip !== null) {
            const timer = setTimeout(() => {
                setActiveTooltip(null);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [activeTooltip]);

    return (
        <div className='bg-[#020617] pt-24 md:pt-28'>

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-10 md:gap-16 items-center md:items-start'>

                {/* LEFT SIDE */}
                <div className='w-full md:w-[45%] flex flex-col items-center text-center md:text-left gap-4'>

                    <div className='border border-green-400 rounded-2xl p-1 w-[220px] sm:w-[260px] md:w-[280px] h-[260px] sm:h-[300px] md:h-[340px]'>
                        <img
                            className='w-full h-full object-cover rounded-xl'
                            src={DevloperImage}
                            alt="Abhay Pratap Singh"
                        />
                    </div>

                    {/* <h3 className='text-green-400 text-2xl sm:text-3xl md:text-2xl font-semibold tracking-wide'>
                        Abhay Pratap Singh
                    </h3> */}


                    <motion.h3
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className='text-green-400 text-2xl sm:text-3xl md:text-2xl font-semibold tracking-wide'
                    >
                        Abhay Pratap Singh
                    </motion.h3>










                    <h3 className='text-gray-400 text-lg sm:text-xl md:text-2xl'>
                        MERN Stack Developer
                    </h3>

                </div>

                {/* RIGHT SIDE */}
                <div className='w-full md:w-[55%] flex flex-col gap-4'>

                    <h2 className='text-2xl sm:text-3xl font-semibold text-green-400'>
                        About Me
                    </h2>

                    <p className='text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed'>
                        Hi, I’m a <span className="text-green-400 font-medium">MERN Stack Developer</span> focused on building scalable and responsive web applications. I help businesses create modern, user-friendly products that perform well and support their growth.
                    </p>

                    <h2 className='text-lg sm:text-xl font-semibold text-green-400 mt-2'>
                        Designation
                    </h2>

                    <p className='text-gray-400 text-sm sm:text-base md:text-lg pb-0'>
                        I am currently working as an IOTDE Analyst at <span className="text-green-400 font-medium">Tata Consultancy Services (TCS)</span>
                        with 1+ year of professional experience.
                    </p>

                    {/* ✅ MERN SECTION (TOOLTIP ADDED ONLY) */}
                    <div
                        ref={containerRef}
                        className="flex justify-between items-center mt-6 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto"
                    >

                        {[
                            { icon: <SiMongodb />, color: "text-green-500", label: "MongoDB", letter: "M" },
                            { icon: <SiExpress />, color: "text-gray-300", label: "Express", letter: "E" },
                            { icon: <SiReact />, color: "text-blue-400", label: "React.js", letter: "R" },
                            { icon: <SiNodedotjs />, color: "text-green-400", label: "Node.js", letter: "N" }
                        ].map((item, index) => (

                            <div key={index}
                                className="relative flex flex-col items-center gap-1 sm:gap-2 cursor-pointer"
                                onClick={() => setActiveTooltip(index)}
                            >

                                <div className={`${item.color} text-4xl sm:text-5xl md:text-6xl lg:text-7xl`}>
                                    {item.icon}
                                </div>

                                <span className={`${item.color} text-sm sm:text-base md:text-lg lg:text-xl font-semibold`}>
                                    {item.letter}
                                </span>

                                {activeTooltip === index && (
                                    <div className="absolute -top-10 flex flex-col items-center z-50">

                                        {/* Tooltip Text */}
                                        <div className="text-white text-xs px-1 py-1 rounded-md bg-green-400 backdrop-blur-sm whitespace-nowrap">
                                            {item.label}
                                        </div>

                                        {/* Arrow */}
                                        <div className="w-2 h-2 bg-green-400 rotate-45 -mt-1"></div>

                                    </div>
                                )}

                            </div>

                        ))}

                    </div>

                </div>
            </div>

            {/* CORE SKILLS */}
            <div className='mt-16 px-4 sm:px-6 lg:px-12 flex flex-col items-center'>

                <h2 className='text-2xl sm:text-3xl font-semibold text-green-400 text-center'>
                    Tec Stack
                </h2>



                <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-10'>

                    <div className='h-[130px] flex flex-col items-center justify-center gap-3 rounded-2xl bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e1b4b] border border-yellow-400/30 shadow-lg shadow-yellow-400/10 hover:shadow-yellow-400/40 hover:scale-105 active:scale-95 transition duration-300 cursor-pointer group'>
                        <SiJavascript className='text-3xl text-yellow-400 group-hover:scale-110 transition' />
                        <span className='text-gray-300 group-hover:text-white text-xs sm:text-sm md:text-[15px] lg:text-sm xl:text-base leading-snug text-center break-words'>JavaScript</span>
                    </div>

                    <div className='h-[130px] flex flex-col items-center justify-center gap-3 rounded-2xl bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e1b4b] border border-cyan-400/30 shadow-lg shadow-cyan-400/10 hover:shadow-cyan-400/40 hover:scale-105 active:scale-95 transition duration-300 cursor-pointer group'>
                        <SiTailwindcss className='text-3xl text-cyan-400 group-hover:scale-110 transition' />
                        <span className='text-gray-300 group-hover:text-white text-xs sm:text-sm md:text-[15px] lg:text-sm xl:text-base leading-snug text-center break-words'>Tailwind CSS</span>
                    </div>

                    <div className='h-[130px] flex flex-col items-center justify-center gap-3 rounded-2xl bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e1b4b] border border-orange-400/30 shadow-lg shadow-orange-400/10 hover:shadow-orange-400/40 hover:scale-105 active:scale-95 transition duration-300 cursor-pointer group'>
                        <SiPostman className='text-3xl text-orange-400 group-hover:scale-110 transition' />
                        <span className='text-gray-300 group-hover:text-white text-xs sm:text-sm md:text-[15px] lg:text-sm xl:text-base leading-snug text-center break-words'>API Integration</span>
                    </div>

                    <div className='h-[130px] flex flex-col items-center justify-center gap-3 rounded-2xl bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e1b4b] border border-purple-400/30 shadow-lg shadow-purple-400/10 hover:shadow-purple-400/40 hover:scale-105 active:scale-95 transition duration-300 cursor-pointer group'>
                        <SiReact className='text-3xl text-purple-400 group-hover:scale-110 transition' />
                        <span className='text-gray-300 group-hover:text-white text-xs sm:text-sm md:text-[15px] lg:text-sm xl:text-base leading-snug text-center break-words'>Component UI</span>
                    </div>

                </div>

                {/* TOOLS */}
                <div className="mt-16 w-full overflow-hidden mb-6">
                    <h2 className="text-center text-2xl sm:text-3xl font-semibold text-green-400 mb-10">
                        Tools
                    </h2>

                    <div className="flex gap-8 animate-scroll whitespace-nowrap">

                        {[...[
                            { name: "VS Code", icon: <VscVscode />, color: "text-blue-400" },
                            { name: "Git", icon: <SiGit />, color: "text-red-400" },
                            { name: "GitHub", icon: <SiGithub />, color: "text-gray-300" },
                            { name: "Postman", icon: <SiPostman />, color: "text-orange-400" },
                            { name: "ChatGPT", icon: <SiOpenai />, color: "text-emerald-400" },
                            { name: "Gemini", icon: <SiGoogle />, color: "text-violet-400" },



                            { name: "Copilot", icon: <SiGithubcopilot />, color: "text-cyan-400" }
                        ],
                        ...[
                            { name: "VS Code", icon: <VscVscode />, color: "text-blue-400" },
                            { name: "Git", icon: <SiGit />, color: "text-red-400" },
                            { name: "GitHub", icon: <SiGithub />, color: "text-gray-300" },
                            { name: "Postman", icon: <SiPostman />, color: "text-orange-400" },
                            { name: "ChatGPT", icon: <SiOpenai />, color: "text-emerald-400" },
                            { name: "Gemini", icon: <SiGoogle />, color: "text-violet-400" },
                            { name: "Copilot", icon: <FaRobot />, color: "text-cyan-400" }
                        ]].map((tool, index) => (

                            <div key={index}
                                className="group min-w-[180px] h-[110px]
                                flex items-center justify-center gap-4
                                rounded-2xl
                                bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e1b4b]
                                border border-purple-500/20
                                shadow-lg shadow-purple-500/10
                                hover:shadow-purple-500/40
                                hover:scale-105
                                transition duration-300">

                                <span className={`text-3xl ${tool.color}`}>
                                    {tool.icon}
                                </span>

                                <span className="text-gray-300 group-hover:text-white whitespace-nowrap">
                                    {tool.name}
                                </span>

                            </div>
                        ))}

                    </div>
                </div>

            </div>

            {/* WHY CHOOSE ME */}
            <div className='w-full mt-16 flex flex-col items-center mb-8 px-4'>

                <h2 className='text-2xl sm:text-3xl font-semibold text-green-400 text-center'>
                    What I Bring ?
                </h2>

                <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-10'>

                    {[
                        "1+ Year Experience at TCS",
                        "Strong in Backend & API Integration",
                        "Focus on Performance & Clean UI",
                        "Built Real-World MERN Projects"
                    ].map((text, i) => (

                        <div key={i}
                            className='h-[130px] flex items-center justify-center text-center px-3 sm:px-4 rounded-2xl
                            bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e1b4b]
                            border border-green-400/30 shadow-lg shadow-green-400/10
                            hover:shadow-green-400/40 hover:scale-105 active:scale-95
                            transition duration-300 cursor-pointer group'>

                            <span className='text-gray-300 group-hover:text-white 
                            text-xs sm:text-sm md:text-[15px] lg:text-sm xl:text-base
                            leading-snug text-center break-words'>
                                {text}
                            </span>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    )
}

export default About;