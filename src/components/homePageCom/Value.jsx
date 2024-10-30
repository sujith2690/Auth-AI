import React from 'react'

const Value = () => {
    const barData = [
        {
            name: 'IT Consulting',
            percentage: '90'
        },
        {
            name: 'Cloud Migration Services',
            percentage: '92'
        },
        {
            name: 'Web Application Development',
            percentage: '95'
        },
        {
            name: 'APP Application Development',
            percentage: '98'
        },
    ]
    const integrity = [
        {
            image: 'images/homePage/Vector4.png',
            subHeading: 'Innovation and Excellence',
            content: 'Leading the future with cutting-edge solutions.'
        },
        {
            image: 'images/homePage/Vector5.png',
            subHeading: 'Integrity and Transparency',
            content: ' Building trust, fostering relationships, and ensuring accountability.'
        },
    ]
    return (
        <>
            <div className='flex flex-col items-center justify-center bg-inherit p-5'>
                <div>
                    <div className='flex flex-col md:flex-row items-center justify-center'>
                        <div className='w-2/3 md:w-1/2'>
                            <div className='p-2  flex flex-col gap-3'>
                                <p className='text-[#22AAD2] text-start text-sm md:text-lg '>― Our Value</p>
                                <h3 className='flex flex-col text-2xl md:text-3xl lg:text-5xl'>
                                    Integrity at Our Core,<span>Innovation in Our Spirit</span>
                                </h3>
                                <div className=''>
                                    <p className='text-sm md:text-base tracking-tighter font-extralight'>Our diverse expertise spans multiple industries, empowering businesses of all sizes to harness the transformative power of AI and unlock invaluable data-driven insights.</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                {
                                    integrity.map((item, i) => (
                                        <div key={i} className='flex gap-4 items-center'>
                                            <div>
                                                <div className='w-20 h-20 rounded-full bg-gradient-to-r from-[#0788AE] to-[#22AAD2] flex items-center justify-center '>
                                                    <img src={item.image} loading='lazy' alt="" />
                                                </div>
                                            </div>
                                            <div className=''>
                                                <h4 className='text-lg'>{item.subHeading}</h4>
                                                <div>
                                                    <p className='text-sm tracking-tighter font-extralight'>{item.content}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='bg-[#060F1A] rounded-2xl p-5'>
                            <div className='flex flex-col gap-5 md:gap-5 md:p-5' >
                                {
                                    barData.map((item, i) => (
                                        <div key={i} className='flex flex-col gap-2' >
                                            <p className='flex items-center justify-between px-3'>{item.name} <span>{item.percentage}%</span></p>
                                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                                <div
                                                    className="bg-[#22AAD2] h-2.5 rounded-full"
                                                    style={{ width: `${item.percentage}%` }} // Use inline style for dynamic width
                                                ></div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Value