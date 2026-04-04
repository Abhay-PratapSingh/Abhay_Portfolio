import React from 'react'
import ProjectCard from './ProjectCard'
import image1 from '../assets/project1.png'
import image2 from '../assets/project2.png'
import image3 from '../assets/project3.png'

const ProjectCardCollection = () => {
    return (

        < >

            <div className=' flex flex-col items-center  w-fit mx-auto  mt-10 sm:mt-6 md:mt-0 mb-4'>
                <h2 className=' text-emerald-400 text-xl sm:text-2xl md:text-3xl font-medium flex justify-center pb-2 '>My Latest Projects </h2>
                <div className="h-[2px] bg-emerald-400 w-full rounded"></div>
            </div>


            <div className='flex gap-6   text-[#E5E7EB] bg-[#020617] font-[Inter]    flex-col          md:flex-row'>


                <ProjectCard

                    image={image1}
                    title="Jwellery Website"
                    demo="https://pradeepjewellers.vercel.app/ "
                    github="https://github.com/Abhay-PratapSingh/client-jewellery-website"
                    details="https://pradeepjewellers.vercel.app/"





                />
                <ProjectCard

                    image={image2}
                    title="Personal Porfolio"
                    demo="/"
                    github="https://pradeepjewellers.vercel.app/"
                    details="/"





                />
                <ProjectCard

                    image={image3}
                    title="Coaching Website"
                    demo="https://mishra-coachingcenter.netlify.app/"
                    github="https://github.com/Abhay-PratapSingh/Mishra-Coaching-Center-Website"
                    details="https://mishra-coachingcenter.netlify.app/"





                />


            </div>
        </>
    )
}

export default ProjectCardCollection