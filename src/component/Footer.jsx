import React from 'react'
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className=' mt-auto'>

            <div className='
                text-center 
                py-4 px-2
                bg-[#020617]/80 
                text-emerald-400 
                flex flex-row justify-center items-center gap-3
                
                text-xs sm:text-sm md:text-base
                
                border-t border-emerald-400/30
                shadow-inner shadow-emerald-500/10
            '>

                {/* NAME */}
                <a
                    href="https://wa.me/918707411386?text=Hi%20Abhay%20Sir"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        font-medium
                        hover:text-emerald-300 
                        no-underline 
hover:no-underline 
focus:no-underline 
active:no-underline
                        hover:scale-105
                        active:scale-95
                        transition-all duration-200
                        
                        
                    "
                >
                    Abhay Pratap Singh © {new Date().getFullYear()}
                </a>

                {/* SOCIAL ICONS */}
                <div className="flex gap-3 text-lg">

                    <a
                        href="https://www.linkedin.com/in/abhay-pratap-singh-25a253288"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-emerald-300 hover:scale-110 active:scale-95 transition-all duration-200"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="https://github.com/Abhay-PratapSingh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-emerald-300 hover:scale-110 active:scale-95 transition-all duration-200"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://wa.me/918707411386"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-emerald-300 hover:scale-110 active:scale-95 transition-all duration-200"
                    >
                        <FaWhatsapp />
                    </a>

                </div>

            </div>
        </footer>
    )
}

export default Footer