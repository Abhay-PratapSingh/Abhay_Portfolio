import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const mobileLink = (path) =>
        `block px-5 py-2 transition duration-200 ${location.pathname + location.hash === path
            ? "text-emerald-400"
            : "text-gray-300"
        }`;
    return (
        <>
            <nav className="bg-[#0F172A]/80 backdrop-blur-md border-b border-gray-800 fixed top-0 left-0 w-full h-20 z-50 flex items-center px-4 md:px-2 font-[Inter]">

                {/* Logo */}
                <h1 className="text-emerald-400 whitespace-nowrap p-2 pr-2 
                text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
                    Abhay| MERN Developer
                </h1>

                {/* Hamburger */}
                <button
                    className="ml-auto text-2xl sm:text-3xl md:hidden text-emerald-400"
                    onClick={() => setMenuOpen(true)}
                >
                    ☰
                </button>

                {/* Desktop Menu */}
                <ul className="hidden md:flex w-full flex items-center gap-6 justify-between flex-1
                text-sm md:text-base lg:text-lg">

                    <li>
                        <NavLink
                            className="
                            
                            
                         relative inline-block  px-5 py-2  

    text-gray-300 hover:text-emerald-500   

    after:content-[''] after:absolute after:left-1/2 after:-bottom-1 
    after:h-[1.5px] after:w-0 after:bg-emerald-500 
    after:transition-all after:duration-300 
    after:-translate-x-1/2 hover:after:w-full
                            
                            
                            
                            "
                            to="/">
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            className="
                            
                            relative inline-block  px-5 py-2  

    text-gray-300 hover:text-emerald-500   

    after:content-[''] after:absolute after:left-1/2 after:-bottom-1 
    after:h-[1.5px] after:w-0 after:bg-emerald-500 
    after:transition-all after:duration-300 
    after:-translate-x-1/2 hover:after:w-full
                            
                            
                            
                            "



                            to="/About">
                            About
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            className="
                            
                            
                           relative inline-block  px-5 py-2  

    text-gray-300 hover:text-emerald-500   

    after:content-[''] after:absolute after:left-1/2 after:-bottom-1 
    after:h-[1.5px] after:w-0 after:bg-emerald-500 
    after:transition-all after:duration-300 
    after:-translate-x-1/2 hover:after:w-full
                            
                            
                            "
                            to="/#projects">
                            Project
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            className="
                            
                             relative inline-block  px-5 py-2  

    text-gray-300 hover:text-emerald-500   

    after:content-[''] after:absolute after:left-1/2 after:-bottom-1 
    after:h-[1.5px] after:w-0 after:bg-emerald-500 
    after:transition-all after:duration-300 
    after:-translate-x-1/2 hover:after:w-full
                            "
                            to="/#contact"     >
                            Contact
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            className="
                            relative inline-block  px-5 py-2  

    text-gray-300 hover:text-emerald-500   

    after:content-[''] after:absolute after:left-1/2 after:-bottom-1 
    after:h-[1.5px] after:w-0 after:bg-emerald-500 
    after:transition-all after:duration-300 
    after:-translate-x-1/2 hover:after:w-full"
                            to="/Login"
                        >
                            Login
                        </NavLink>
                    </li>

                </ul>

            </nav>


            {/* Overlay */}
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black/20 md:hidden z-40"
                    onClick={() => setMenuOpen(false)}
                />
            )}

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-slate-950/70 backdrop-blur-md z-50 transform transition-transform duration-500 md:hidden ${menuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                onClick={(e) => e.stopPropagation()}
            >

                {/* Close button */}
                <button
                    className="text-2xl p-4 ml-auto block text-emerald-400"
                    onClick={() => setMenuOpen(false)}
                >
                    ✕
                </button>

                {/* Mobile Links */}
                <ul className="flex flex-col gap-6 p-6 text-base">

                    <li>
                        <NavLink className={mobileLink("/")} to="/" onClick={() => setMenuOpen(false)}>
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink className={mobileLink("/About")} to="/About" onClick={() => setMenuOpen(false)}>
                            About
                        </NavLink>
                    </li>

                    <li>
                        <NavLink className={mobileLink("/#projects")} to="/#projects" onClick={() => setMenuOpen(false)}>
                            Project
                        </NavLink>
                    </li>

                    <li>
                        <NavLink className={mobileLink("/#contact")} to="/#contact" onClick={() => setMenuOpen(false)}>
                            Contact
                        </NavLink>
                    </li>

                    <li>
                        <NavLink className={mobileLink("/Login")} to="/Login" onClick={() => setMenuOpen(false)}>
                            Login
                        </NavLink>
                    </li>

                </ul>

            </div>

        </>
    );
};

export default Navbar;