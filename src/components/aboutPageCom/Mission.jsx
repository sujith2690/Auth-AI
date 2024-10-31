import React from 'react'
import image1 from '../../assets/images/aboutPage/mission.png'

const Mission = () => {
    const content = 'is to empower innovation through ethical AI, ensuring that every technological advancement is firmly rooted in integrity and responsibility. We recognize that innovation is not merely about cutting-edge technology; it must also align with ethical principles that enhance trust and accountability. As such, we are dedicated to catalyzing transformative change across various industries, leveraging the immense power of artificial intelligence to tackle unique challenges and unlock new opportunities for growth and efficiency.'
    return (
        <div className="flex flex-col justify-center items-center min-h-[150px] bg-[#132030] ">
            <div className='flex items-center justify-center p-10 md:p-16 max-w-6xl'>
                <div className="relative flex w-full md:w-auto gap-8 md:p-6">
                    <div>
                        <img
                            src={image1} className='w-full h-full object-cover rounded-lg'
                            alt="home2.png"
                            loading='lazy'
                        />
                    </div>
                    <div className="absolute bottom-0 left-0 flex w-full flex-col gap-6 items-center justify-center bg-[#060F1AE5] md:p-4 md:static md:bg-transparent text-left">
                        <p className="text-[#E3E3E3] text-sm md:text-lg font-thin">
                            <span className='font-bold'>Our mission </span> {content}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mission