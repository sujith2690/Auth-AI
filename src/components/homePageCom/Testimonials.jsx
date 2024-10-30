import React from 'react'
import Buttons from '../Buttons'
import Carousel from '../common/carousel'

const Testimonials = () => {
    return (
        <div className='flex flex-col items-center justify-center p-5 overflow-auto bg-inherit'>
            <div className='p-5 flex flex-col gap-3'>
                <div>
                    <h4 className='text-[#22AAD2] text-center text-sm md:text-2xl'>― Our Testimonials</h4>
                </div>
                <h5 className='flex  flex-col text-xl md:text-2xl lg:text-4xl text-center'>
                What They Say About Us
                </h5>
            </div>
            <div className=''>
                <Carousel />
            </div>

        </div>
    )
}

export default Testimonials