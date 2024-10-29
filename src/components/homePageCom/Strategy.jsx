import React from 'react'

const Strategy = () => {
    const strategies = [
        {
            image: 'images/homePage/Vector1.png',
            subHead: 'Mobile Application Development',
            content: 'Achieve Mobile Supremacy through Custom App Development Solutions'
        },
        {
            image: 'images/homePage/Vector2.png',
            subHead: 'IT Consulting & Strategy',
            content: 'Connect IT and Business for Unparalleled Success with Our Expert Consulting, Aligning IT and Growth'
        },
        {
            image: 'images/homePage/Vector3.png',
            subHead: 'Website Application Development',
            content: 'Our full-stack development services provide end - to -end  solutions'
        },
    ]
    return (
        <div className='bg-[#060F1A] flex items-center'>
            <div className='max-w-[1640px]  mx-auto p-4 py-4 grid md:grid-cols-3 place-items-center gap-6 mt-12 md:mt-0'>
                {
                    strategies.map((item, i) => (
                        <div key={i} className='bg-[#0A1828] w-full h-full md:w-72 md:h-[150px] p-5 px-5 py-3 text-white rounded-xl  flex flex-col justify-between '>
                            <div className='flex items-center gap-2'>
                                <div>
                                    <img src={item.image} alt={item.image} className='object-contain w-12 h-12' loading='lazy' />
                                </div>
                                <p className='text-lg md:text-xl '>{item.subHead}</p>
                            </div>
                            <p className='text-sm p-2 text-[#E3E3E3] font-thin text-start overflow-hidden'>
                                {item.content}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Strategy