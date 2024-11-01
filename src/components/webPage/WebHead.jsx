import React from 'react'
import image1 from '../../assets/images/web/web1.png'

const WebHead = () => {
    const heading ='Global Market in your finger'
    const content ="The global web application market is booming, driven by the increasing need for businesses to establish a strong online presence. With the rise of e-commerce, remote work, and digital services, companies are investing heavily in web applications to engage customers, facilitate transactions, and streamline operations. This market is projected to grow significantly, with a compound annual growth rate (CAGR) of around 8% from 2023 to 2032"
    const content2 ="Technological advancements, such as the adoption of responsive web design, JavaScript frameworks, and progressive web apps (PWAs), are shaping the future of web development. These innovations ensure seamless user experiences across devices, making web applications more interactive and dynamic2. As more businesses recognize the importance of a robust online presence, the demand for skilled web developers continues to rise, making this an exciting and rapidly evolving field."
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
    )
}

export default WebHead