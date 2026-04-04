import React from 'react'

const ProjectCard = ({ image, title, demo, github, details }) => {
    return (

        <div
            className="flex flex-col gap-2 rounded-2xl m-1 p-3
  bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e1b4b]

  border border-green-400/30
  shadow-lg shadow-green-400/10

  hover:border-green-400/60
  hover:shadow-green-400/50
  hover:scale-[0.93]

  active:scale-[0.97]

  transition-all duration-300 ease-in-out

  cursor-pointer group relative overflow-hidden"
        >

            <img
                className='w-full rounded-lg object-cover'
                src={image}
                alt="project"
            />

            <div className="h-0.5 bg-emerald-400 w-full"></div>

            <h3 className='text-sm sm:text-base md:text-lg font-semibold text-green-400 flex justify-center'>
                {title}
            </h3>

            <div className='flex gap-2 justify-between'>

                <a
                    className='text-xs sm:text-sm md:text-base px-2 py-0.5 pb-0 rounded-md

                    border border-emerald-400 text-gray-400 
                            hover:text-white hover:bg-emerald-500 
                            active:text-white active:bg-emerald-500
                            hover:scale-105 active:scale-95
                            hover:shadow-md hover:shadow-emerald-500/20
                            active:shadow-md active:shadow-emerald-500/30
                            transition-all duration-300'

                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Demo
                </a>

                <a
                    className='text-xs sm:text-sm md:text-base px-2 py-0.5 pb-0 rounded-md
                    
                   
                    border border-emerald-400 text-gray-400 
                            hover:text-white hover:bg-emerald-500 
                            active:text-white active:bg-emerald-500
                            hover:scale-105 active:scale-95
                            hover:shadow-md hover:shadow-emerald-500/20
                            active:shadow-md active:shadow-emerald-500/30
                            transition-all duration-300'


                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>

                <a
                    className='text-xs sm:text-sm md:text-base px-2 py-0.5 pb-0 rounded-md
                    
                    
                    border border-emerald-400 text-gray-400 
                            hover:text-white hover:bg-emerald-500 
                            active:text-white active:bg-emerald-500
                            hover:scale-105 active:scale-95
                            hover:shadow-md hover:shadow-emerald-500/20
                            active:shadow-md active:shadow-emerald-500/30
                            transition-all duration-300'


                    href={details}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Details
                </a>

            </div>

        </div>
    )
}

export default ProjectCard