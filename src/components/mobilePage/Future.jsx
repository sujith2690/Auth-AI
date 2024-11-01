import React from 'react'
import image1 from '../../assets/images/mobile/mobile1.png'

const Future = () => {
    const content = 'The integration of advanced technology into mobile applications has paved the way for highly personalized and efficient user experiences. Mobile health apps, for instance, now leverage real-time data and predictive analysis to help users monitor and improve their well-being more effectively than ever before.'
    return (
        // <div className="flex flex-col justify-center items-center min-h-[150px] bg-[#132030] ">
        //     <div className='flex items-center justify-center p-10 md:p-16 max-w-6xl'>
        //         <div className=" flex w-full md:w-auto gap-8 md:p-6">
        //             <div>
        //                 <img
        //                     src={image1} className='w-full h-full object-cover rounded-lg'
        //                     alt="home2.png"
        //                     loading='lazy'
        //                 />
        //             </div>
        //             <div className="absolute bottom-0 left-0 flex w-full flex-col gap-6 items-center justify-center bg-[#060F1AE5] md:p-4 md:static md:bg-transparent text-left">
        //                 <p className="text-[#E3E3E3] text-[12px] md:text-lg font-thin">
        //                     {content}
        //                 </p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
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
                            {/* <p className="text-[#22AAD2] text-[12px] md:text-lg">― Mobile Applications</p>
                            <h3 className="text-lg md:text-3xl font-bold text-white">{heading}</h3> */}
                            <p className="text-[#E3E3E3] text-[12px] md:text-sm font-thin ">
                                {content}
                            </p>
                        </div>
                    </div>
                    {/* <div>
                        <p className="text-[#E3E3E3]  md:flex text-[12px] md:text-base font-thin">
                            {content2}
                        </p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Future