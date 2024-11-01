import React from 'react'

const ContentView = ({ content, image1, content2,heading }) => {
    return (
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
                            {/* <p className="text-[#22AAD2] text-[12px] md:text-lg">― Mobile Applications</p> */}
                            <h3 className="text-lg md:text-3xl font-bold text-white">{heading}</h3>
                            <p className="text-[#E3E3E3] text-[12px] md:text-sm font-thin ">
                                {content}
                            </p>
                        </div>
                    </div>
                    <div>
                        <p className="text-[#E3E3E3]  md:flex text-[12px] md:text-base font-thin">
                            {content2}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentView