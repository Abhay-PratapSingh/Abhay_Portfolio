import React from 'react'
import image1 from '../assets/CoachingOwner.png'
import image2 from '../assets/JwelleryShopOwner.jpeg'

const TestimonialCard = ({ image, feedback, ownerName, businessName }) => {
    return (

        <div className='flex flex-col md:flex-row justify-center items-center p-4 
        bg-slate-900 border border-emerald-400 rounded-xl
        hover:shadow-lg hover:shadow-emerald-500/20 
        active:shadow-lg active:shadow-emerald-500/20
        hover:scale-[1.02] active:scale-[0.98]
        transition-all duration-300'>

            {/* IMAGE + NAME */}
            <div className='md:shrink-0 md:w-[20%] flex flex-col items-center pl-2 pt-2 md:pt-0'>

                <img
                    className='w-24 h-24 sm:w-28 sm:h-28 md:w-28 md:h-28 
                    rounded-full border border-emerald-400 object-cover  hover:shadow-lg hover:shadow-emerald-500/20 
        active:shadow-lg active:shadow-emerald-500/20
        hover:scale-[1.02] active:scale-[0.98]
        transition-all duration-300'
                    src={image}
                    alt="client-2"
                />

                {/* NAME */}
                <h2 className='pt-3 text-emerald-400 text-center w-full 
                text-sm sm:text-base md:text-lg'>
                    {ownerName}
                </h2>

            </div>

            {/* TEXT */}
            <div className='text-gray-300 p-5 text-center md:text-left'>

                <p className='text-sm sm:text-base md:text-lg leading-relaxed'>
                    {feedback}
                    <br />
                    — <span className='text-emerald-400'>{ownerName}<br />(Owner,{businessName})</span>
                </p>

            </div>

        </div>

    )
}

export default TestimonialCard