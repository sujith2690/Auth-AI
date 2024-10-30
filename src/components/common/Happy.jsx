import React from 'react'

const Happy = () => {
    const customerLogos = ['logo 1.png', 'logo 2.png', 'logo 3.png', 'logo 4.png', 'logo 5.png',]
    return (
        <div>
            <div className='relative'>
                <div className='absolute w-full h-full text-gray-200 max-h-[250px] gap-6 bg-[#060F1AE5] flex flex-col items-center justify-center z-10'>
                    <h2 className='text-sm md:text-2xl lg:text-5xl text-center'>
                        Join Our <span className='text-[#22AAD2] '>1500+</span> Happy Customers
                    </h2>
                    <div className='grid place-items-center grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-10 p-2'>
                        {
                            customerLogos.map((item, i) => (
                                <div className='flex items-center justify-center ' key={i}>
                                    <img className='w-28 h-6 md:w-36 md:h-10' src={`images/homePage/customers/${item}`} alt="" />
                                </div>
                            ))
                        }
                    </div>
                    <div>
                        <img src="" alt="" />
                    </div>
                </div>
                <img className='w-full max-h-[250px] object-cover z-0' src="images/homePage/Background Image3.png" alt="" />
            </div>
        </div>
    )
}

export default Happy