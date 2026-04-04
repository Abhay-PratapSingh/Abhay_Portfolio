import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

import TestimonialCard from './TestimonialCard'
import image1 from '../assets/CoachingOwner.png'
import image2 from '../assets/JwelleryShopOwner.jpeg'

const TestimonialCardCollection = () => {

    const review = [
        {
            image: image2,
            feedback: `"Abhay delivered an exceptional website that perfectly reflects the elegance of our jewellery brand. His attention to detail and modern design approach truly enhanced our online presence. The overall experience was seamless and highly professional."`,
            ownerName: "Pradeep Gupta",
            businessName: "Pradeep Jewellers"
        },
        {
            image: image1,
            feedback: `"Abhay created a highly professional and user-friendly website for Misha Coaching Center. The design is clean, modern, and perfectly represents our educational values. His understanding of our requirements and timely delivery made the entire process smooth and hassle-free."`,
            ownerName: "Mahendra Mishra",
            businessName: "Mishra Coaching Center"
        }
    ]

    return (
        <>
            <div>

                {/* Heading (UNCHANGED) */}
                <div className='flex flex-col w-fit items-center mx-auto mb-4'>
                    <h2 className='text-emerald-400 text-xl sm:text-2xl md:text-3xl font-medium flex justify-center pb-2'>
                        Client Testimonials
                    </h2>
                    <div className='h-[2px] bg-emerald-400 w-full rounded'></div>
                </div>

                {/* Slider */}
                <div className='m-auto w-[75%] mb-20 relative overflow-visible'>

                    {/* LEFT ARROW */}
                    <div className='swiper-button-prev hidden md:block !-left-12'></div>

                    {/* RIGHT ARROW */}
                    <div className='swiper-button-next hidden md:block !-right-12'></div>

                    <Swiper
                        modules={[Autoplay, Navigation]}
                        navigation={true}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        loop={true}
                        spaceBetween={20}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 1 },
                            1024: { slidesPerView: 1 },
                        }}
                    >
                        {review.map((item, index) => (
                            <SwiperSlide key={index}>
                                <TestimonialCard {...item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>

            </div>
        </>
    )
}

export default TestimonialCardCollection