import React from 'react'

export const CarouselItem = ({ image, title }) => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <img className='w-[5rem] h-[5rem] md:h-[10rem] md:w-[10rem] lg:h-[14rem] lg:w-[14rem] rounded-full object-cover object-center' src={image} alt='' />
            <span className='py-5 text-sm lg:text-xl text-gray-400'>{title}</span>
        </div>
    )
}
