import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Project = () => {
    return (
        <div className='flex flex-col items-center justify-center px-4 pt-24 pb-10 min-h-[calc(100vh-60px)] bg-[#020617] ' >

            {/* Heading */}
            <h1 className='py-3 text-green-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center'>
                User Login
            </h1>

            <FaUserAlt className="p-2 text-gray-400 
            w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-28 lg:w-32 lg:h-32 " />

            {/* Card */}
            <div className='flex flex-col
            w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl text-emerald-400 mt-6 border border-emerald-400 rounded-xl 
            hover:shadow-lg hover:shadow-emerald-500/20 
            active:shadow-lg active:shadow-emerald-500/20
            hover:scale-[1.02] active:scale-[0.98]
            transition-all duration-300 bg-slate-900'>

                <form className='w-full flex flex-col p-3 sm:p-5 md:p-6 items-center'>

                    {/* Email */}
                    <input
                        type="email"
                        placeholder='Enter your Email Here'
                        className='p-2 mt-2 rounded-md border border-gray-600 bg-slate-800 text-white 
                        my-2 w-full text-xs sm:text-sm md:text-base lg:text-lg outline-none focus:border-emerald-400
                        hover:shadow-lg hover:shadow-emerald-500/20 
                        active:shadow-lg active:shadow-emerald-500/20
                        hover:scale-[1.02] active:scale-[0.98]
                        transition-all duration-300'
                    />

                    {/* Password */}
                    <input
                        type="password"
                        placeholder='Enter your Password Here'
                        className='p-2 my-2 mb-4 rounded-md border border-gray-600 bg-slate-800 text-white 
                        w-full text-xs sm:text-sm md:text-base lg:text-lg outline-none focus:border-emerald-400
                        hover:shadow-lg hover:shadow-emerald-500/20 
                        active:shadow-lg active:shadow-emerald-500/20
                        hover:scale-[1.02] active:scale-[0.98]
                        transition-all duration-300'
                    />

                    {/* Forgot Password */}
                    <NavLink
                        to="/ForgotPassword"
                        className='text-green-400 text-xs sm:text-sm md:text-base lg:text-lg my-2 text-center
                        hover:text-white active:text-white focus:text-white transition-colors duration-300'>
                        Forgot Password
                    </NavLink>


                    {/* Button */}
                    <button
                        type="button"
                        className='p-2 
                        w-full sm:w-fit text-xs sm:text-sm md:text-base lg:text-lg my-2 rounded-xl border border-emerald-400 text-gray-400 
                        hover:text-white hover:bg-emerald-500 
                        active:text-white active:bg-emerald-500
                        hover:scale-105 active:scale-95
                        hover:shadow-md hover:shadow-emerald-500/20
                        active:shadow-md active:shadow-emerald-500/30
                        transition-all duration-300'>
                        Click Here to login
                    </button>

                    {/* Signup */}

                    <NavLink

                        to="/SignUp"
                        className='text-green-400 text-xs sm:text-sm md:text-base lg:text-lg mt-2 mb-1 text-center
                      hover:text-white active:text-white focus:text-white transition-colors duration-300'>
                        Don't have an account? Sign up

                    </NavLink>

                </form>
            </div>

        </div>
    )
}

export default Project