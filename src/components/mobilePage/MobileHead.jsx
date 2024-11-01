import React from 'react'
import image1 from '../../assets/images/mobile/mobile3.png'
const MobileHead = () => {
    const heading = 'Technology into Mobile Application'
    const content = 'Integrating technology into mobile applications has redefined how we live, work, and connect. With innovations like AI, IoT, and AR, apps now offer smarter, more interactive user experiences. For instance, AI enhances voice recognition, while IoT enables control over smart devices, making everyday tasks more convenient and accessible.'
    const content2 = 'Cloud computing and 5G have further transformed app performance and accessibility. The cloud allows for faster processing and smaller app sizes, while 5G supports data-intensive, real-time apps, making immersive AR and VR experiences possible on mobile devices. This integration of technology has pushed mobile apps to new levels, constantly evolving to better serve modern needs.'

    return (
        <>
            <div className="flex justify-center items-center min-h-[150px] bg-[#060F1A]">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-5xl p-4 relative">
                    <div className='p-5'>
                        <div className=" flex flex-col md:flex-row w-full md:w-auto gap-8 md:p-6">
                            <div>
                                <img
                                    src={image1} className='w-full h-full object-cover rounded-lg'
                                    alt="home2.png"
                                    loading='lazy'
                                />
                            </div>
                            <div className=" flex w-full flex-col md:gap-6 items-start justify-start bg-[#060F1AE5] md:p-4 md:static md:bg-transparent text-left">
                                <p className="text-[#22AAD2] text-sm md:text-lg">― Mobile Applications</p>
                                <h3 className="text-lg md:text-3xl font-bold text-white">{heading}</h3>
                                <p className="text-[#E3E3E3] text-sm md:text-sm font-thin ">
                                    {content}
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className="text-[#E3E3E3]  md:flex text-sm md:text-base font-thin">
                                {content2}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            
        </>
    )
}

export default MobileHead