import React from 'react'

const Something = () => {
    return (
        <>
            <div className='bg-inherit p-10'>
                <div className='relative flex items-center justify-center'>
                    {/* First Image (Background) */}
                    <img className='w-5/6 max-h-[500px] object-cover z-0' src="images/homePage/Background Image3.png" alt="Background" />
                    {/* Background Overlay */}
                    <div className='absolute inset-0 bg-[#060F1AE5] opacity-90 z-10'></div>
                    {/* Gradient Container */}
                    <div className='absolute inset-0 flex flex-col items-center justify-center z-20'>
                        <div className='h-5/6 rounded-3xl bg-gradient-to-r from-[#0788AEE5] to-[#22AAD2E5] gap-6 flex flex-col items-center justify-center relative p-5'>
                            {/* Second Image as Background of this div */}
                            <img className='absolute inset-0 w-full h-full object-cover z-0 opacity-20' src="images/homePage/Background Image 1.png" alt="Overlay Image" />
                            {/* Content Over the Second Image */}
                            <h1 className='text-xl md:text-4xl font-extrabold lg:text-6xl flex flex-col text-center items-center justify-center z-10 p-5'>
                                Let's Build Something Amazing <span>Together! Connect with Us Today!</span>
                            </h1>
                            <p className='text-[#E3E3E3] text-sm text-center z-10 flex flex-col md:flex-row mb-2 w-1/2'>
                                Join us on a journey into the future of business—where innovation meets responsibility and success is built on a foundation of trust. Together, let’s unlock the potential of AI and transform your vision into reality
                            </p>
                            <button className={` cursor-pointer bg-black rounded-full text-white px-8 py-1 text-sm border-0 border-[#A0EAFF] `}>
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Something