import React, { useState } from 'react'
import { FaKey, FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-toastify'; // ✅ added Toastify

const ForgotPassword = () => {

    const navigate = useNavigate(); // ✅ for redirect after success

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleReset = async (e) => {
        e.preventDefault();

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error("Please enter a valid email", { autoClose: 2000 });
            return;
        }

        // Password validation
        const passwordRegex = /^(?=.*[!@#$%^&*()_+=[\]{};':"\\|,.<>/?-]).{6,}$/;
        if (!passwordRegex.test(newPassword)) {
            toast.error("Password must be at least 6 characters and include 1 special character", { autoClose: 2000 });
            return;
        }

        // Confirm password match
        if (newPassword !== confirmPassword) {
            toast.error("Passwords do not match", { autoClose: 2000 });
            return;
        }

        try {
            const res = await axios.post(
                `${import.meta.env.VITE_API_URL}/api/auth/forgot-password`,
                { email, newPassword, confirmPassword }
            );

            // ✅ Success Toast
            toast.success(res.data.msg, {
                className: "bg-emerald-500 text-white font-bold shadow-lg rounded-xl p-4",
                bodyClassName: "text-sm sm:text-base",
                autoClose: 2000,
                position: "top-center",
            });

            // ✅ Redirect to Login after 2 seconds
            setTimeout(() => {
                navigate("/Login");
            }, 2000);

        } catch (err) {
            toast.error(err.response?.data?.msg || "Something went wrong", {
                autoClose: 2000,
                position: "top-center",
            });
        }
    };

    return (
        <div className='flex flex-col items-center justify-center px-4 pt-24 pb-10 min-h-[calc(100vh-60px)] bg-[#020617]'>

            <h1 className='py-3 text-green-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center'>
                Reset Your Password
            </h1>

            <FaKey className="p-2 text-green-400 
            w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-28 lg:w-32 lg:h-32" />

            <div className='flex flex-col
            w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl text-emerald-400 mt-6 border border-emerald-400 rounded-xl 
            hover:shadow-lg hover:shadow-emerald-500/20 
            active:shadow-lg active:shadow-emerald-500/20
            transition-all duration-300 bg-slate-900'>

                <form onSubmit={handleReset} className='w-full flex flex-col px-3 sm:px-5 md:px-6 items-center'>

                    {/* Email */}
                    <input
                        type="email"
                        placeholder='Enter your Email Here'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='p-2 mt-2 rounded-md border border-gray-600 bg-slate-800 text-white 
                        my-2 w-full text-xs sm:text-sm md:text-base lg:text-lg outline-none focus:border-emerald-400'
                    />

                    {/* New Password */}
                    <div className="relative w-full">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder='Enter new Password Here'
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className='p-2 my-2 mb-4 rounded-md border border-gray-600 bg-slate-800 text-white 
                            w-full text-xs sm:text-sm md:text-base lg:text-lg outline-none focus:border-emerald-400
                            pr-10'
                        />
                        <span
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>

                    {/* Confirm Password */}
                    <div className="relative w-full">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder='Confirm new Password Here'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className='p-2 my-1 mb-4 rounded-md border border-gray-600 bg-slate-800 text-white 
                            w-full text-xs sm:text-sm md:text-base lg:text-lg outline-none focus:border-emerald-400
                            pr-10'
                        />
                        <span
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                        >
                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>

                    <button
                        type="submit"
                        className='p-2 
                        w-full sm:w-fit text-xs sm:text-sm md:text-base lg:text-lg my-2 rounded-xl border border-emerald-400 text-green-400 
                        hover:text-white hover:bg-emerald-500 
                        active:text-white active:bg-emerald-500
                        hover:scale-105 active:scale-95
                        hover:shadow-md hover:shadow-emerald-500/20
                        active:shadow-md active:shadow-emerald-500/30
                        transition-all duration-300'>
                        Click Here to Update Password
                    </button>

                    <NavLink
                        to="/Login"
                        className='text-green-400 text-xs sm:text-sm md:text-base lg:text-lg mt-2 mb-1 text-center
                      hover:text-white active:text-white focus:text-white transition-colors duration-300'>
                        Go Back to Login
                    </NavLink>

                </form>
            </div>
        </div>
    )
}

export default ForgotPassword;