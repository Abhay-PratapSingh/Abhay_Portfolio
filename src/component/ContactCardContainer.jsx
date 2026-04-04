import React, { useState, useRef, useEffect } from 'react'
import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

const ContactCardContainer = () => {

    const [activeIndex, setActiveIndex] = useState(null);
    const containerRef = useRef(null);
    const timeoutRef = useRef(null);
    const formRef = useRef();

    const labels = ["LinkedIn", "Email", "WhatsApp", "GitHub", "Phone", "Twitter"];

    useEffect(() => {
        if (activeIndex !== null) {
            timeoutRef.current = setTimeout(() => {
                setActiveIndex(null);
            }, 2000);
        }

        return () => clearTimeout(timeoutRef.current);
    }, [activeIndex]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setActiveIndex(null);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <>

            <div className='flex flex-col items-center mt-8 mb-4 w-fit mx-auto ' id="Contact">
                <h2 className='text-emerald-400 text-xl sm:text-2xl md:text-3xl font-medium pb-2'>
                    Contact Now
                </h2>
                <div className="h-[2px] bg-emerald-400 w-full rounded"></div>
            </div>

            <div className='grid md:grid-cols-2 gap-10 p-6 sm:p-10'>

                {/* LEFT SECTION */}
                <div
                    ref={containerRef}
                    className='bg-slate-900 border border-emerald-400 rounded-xl p-6 sm:p-8 
                    hover:shadow-lg hover:shadow-emerald-500/20 
                    active:shadow-lg active:shadow-emerald-500/20
                    hover:scale-[1.02] active:scale-[0.98]
                    transition-all duration-300'>

                    <div className='grid 
                    grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 place-content-center h-full'>

                        {[
                            { Icon: FaLinkedin, link: "https://www.linkedin.com/in/abhay-pratap-singh-25a253288" },
                            { Icon: FaEnvelope, link: "mailto:abhaypsingh884@gmail.com" },
                            { Icon: FaWhatsapp, link: "https://wa.me/918707411386" },
                            { Icon: FaGithub, link: "https://github.com/Abhay-PratapSingh" },
                            { Icon: FaPhoneAlt, link: "tel:+918707411386" },
                            { Icon: FaXTwitter, link: "https://x.com/abhaypr35239964" }
                        ].map(({ Icon, link }, i) => (

                            <a
                                key={i}
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => {
                                    setActiveIndex(activeIndex === i ? null : i);
                                }}
                                className='relative flex items-center justify-center p-4 sm:p-5 rounded-xl 
                                border border-emerald-400 text-gray-400 
                                hover:text-white hover:bg-emerald-500 
                                active:text-white active:bg-emerald-500
                                hover:scale-105 active:scale-95
                                hover:shadow-md hover:shadow-emerald-500/20
                                active:shadow-md active:shadow-emerald-500/30
                                transition-all duration-300 group'>

                                <Icon className="text-2xl sm:text-4xl" />

                                <span
                                    className={`absolute -top-10 left-1/2 -translate-x-1/2 
                                    bg-slate-800 text-white text-xs px-3 py-1 rounded-md 
                                    whitespace-nowrap shadow-md shadow-emerald-500/20
                                    transition-all duration-300 pointer-events-none
                                    ${activeIndex === i
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-2"
                                        }
                                    group-hover:opacity-100 group-hover:translate-y-0
                                    `}
                                >
                                    {labels[i]}

                                    <span className="absolute left-1/2 -bottom-1 w-2 h-2 
                                    bg-slate-800 rotate-45 -translate-x-1/2"></span>
                                </span>

                            </a>

                        ))}

                    </div>

                </div>

                {/* RIGHT SECTION */}
                <div className='p-5 sm:p-6 bg-slate-900 text-white 
                border border-emerald-400 rounded-xl 
                hover:shadow-lg hover:shadow-emerald-500/20 
                active:shadow-lg active:shadow-emerald-500/20
              
                transition-all duration-300'>

                    <form
                        autoComplete="off"
                        ref={formRef}
                        className='flex flex-col gap-4 h-full '
                        onSubmit={(e) => {
                            e.preventDefault();

                            const name = e.target[0].value.trim();
                            const email = e.target[1].value.trim().toLowerCase();
                            e.target[1].value = email;

                            const message = e.target[2].value.trim();

                            const hasNumber = /\d/.test(name);
                            const cleanName = name.replace(/\s+/g, "");

                            if (cleanName.length < 3 || hasNumber) {
                                alert("Name must be at least 3 characters and contain no numbers ❌");
                                return;
                            }

                            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                            if (!emailRegex.test(email)) {
                                alert("Please enter a valid email ❌");
                                return;
                            }

                            const cleanMessage = message.replace(/\s+/g, "");

                            if (cleanMessage.length < 5) {
                                alert("Message must be at least 5 characters ❌");
                                return;
                            }

                            emailjs.sendForm(
                                "service_qthib38",
                                "template_futblje",
                                formRef.current,
                                "CuCPCtuOBciQ9ET6p"
                            )
                                .then(() => {
                                    alert("Message sent successfully ✅");
                                    e.target.reset();
                                })
                                .catch(() => {
                                    alert("Failed to send ❌");
                                });
                        }}
                    >

                        <input
                            autoComplete="off"
                            name="name"
                            className='p-3 rounded-md border border-gray-600 bg-slate-800 text-white 
    focus:outline-none focus:ring-2 focus:ring-emerald-400 
    focus:shadow-md focus:shadow-emerald-500/20
    active:ring-2 active:ring-emerald-400
    active:shadow-md active:shadow-emerald-500/20
    transition-all duration-300'
                            type="text"
                            placeholder='Please enter your name here'
                        />

                        <input
                            autoComplete="off"
                            name="email"
                            type="email"
                            className='p-3 rounded-md border border-gray-600 bg-slate-800 text-white 
    focus:outline-none focus:ring-2 focus:ring-emerald-400 
    focus:shadow-md focus:shadow-emerald-500/20
    active:ring-2 active:ring-emerald-400
    active:shadow-md active:shadow-emerald-500/20
    transition-all duration-300'
                            placeholder='Please enter your e-mail here'
                        />

                        <textarea
                            autoComplete="off"
                            name="message"
                            rows="3"
                            className='p-3 rounded-md border border-gray-600 bg-slate-800 text-white 
    focus:outline-none focus:ring-2 focus:ring-emerald-400 
    focus:shadow-md focus:shadow-emerald-500/20 
    active:ring-2 active:ring-emerald-400
    active:shadow-md active:shadow-emerald-500/20
    transition-all duration-300 resize-none'
                            placeholder='Please write your message here'>
                        </textarea>

                        <button
                            className='mt-2 px-6 py-2 w-fit 
                            rounded-xl border border-emerald-400 text-gray-400 
                            hover:text-white hover:bg-emerald-500 
                            active:text-white active:bg-emerald-500
                            hover:scale-105 active:scale-95
                            hover:shadow-md hover:shadow-emerald-500/20
                            active:shadow-md active:shadow-emerald-500/30
                            transition-all duration-300'>
                            Submit
                        </button>

                    </form>

                </div>

            </div>

        </>
    )
}

export default ContactCardContainer