import React from 'react'
import backGroundImage from '../../assets/images/Background Image 1.png';


const CommonHero = ({ heading, content }) => {

    return (

        <div className='relative'>
            <div className='absolute w-full h-full text-gray-200 max-h-[300px] gap-6 bg-[#060F1AE5] flex flex-col items-center justify-center z-10'>
                <div className='flex items-center justify-center'>
                    <div className='w-1/2 flex flex-col items-center justify-center'>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl text-center whitespace-nowrap">
                            {heading}
                        </h1>
                        <p className='text-[#B5B3B3] text-sm text-center'>
                            {content}
                        </p>
                    </div>
                </div>
            </div>
            <img className='w-full max-h-[300px] object-cover z-0' src={backGroundImage} alt="" />
        </div>
    )
}

export default CommonHero