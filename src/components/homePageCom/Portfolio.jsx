import React from 'react'
import Buttons from '../common/Buttons'
import image1 from '../../assets/images/portfolio/Image1.png'
import image2 from '../../assets/images/portfolio/Image2.png'
import image3 from '../../assets/images/portfolio/Image3.png'
import image4 from '../../assets/images/portfolio/Image4.png'

const Portfolio = () => {
    const portFolioContent = [
        {
            image: image1,
            title: 'Figo Tech',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus purus sit amet varius aliquet.'
        },
        {
            image: image2,
            title: 'News Feed',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus purus sit amet varius aliquet.'
        },
        {
            image: image3,
            title: 'Food Application',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus purus sit amet varius aliquet.'
        },
        {
            image: image4,
            title: 'Crio Loan App',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus purus sit amet varius aliquet.'
        },
    ]
    return (
        <div className='flex flex-col items-center justify-center p-5 overflow-auto bg-inherit'>
            <div className='p-5 space-y-5'>
                <div>
                    <p className='text-[#22AAD2] text-center text-sm md:text-2xl'>― Our Portfolio</p>
                </div>
                <h5 className='flex flex-col text-xl md:text-2xl lg:text-4xl text-center'>
                    Work Speaks Volumes: Discover Our Projects
                </h5>
            </div>
            <div className=''>
                <div className='grid grid-cols-2 gap-4'>
                    {portFolioContent.map((item, i) => (
                        <div key={i} className={`relative h-full overflow-hidden rounded-2xl ${i % 2 === 1 ? 'mt-3' : ''}`}>
                            <img src={item.image} alt="" loading='lazy' className='md:w-[400px]  md:h-[500px] object-cover' />
                            <div className='absolute inset-0 bg-gradient-to-t from-[#132030] to-transparent'>
                                <div className='absolute bottom-0 left-0 w-full p-2 md:p-10 flex flex-col gap-3'>
                                    <h5 className='text-lg md:text-xl '>{item.title}</h5>
                                    <p className='text-[#E3E3E3] text-sm lg:text-'>{item.description}</p>
                                    <div className='mt-2'>
                                        <Buttons content={'Learn more'} className='w-fit px-4 py-2 text-sm md:text-base lg:text-lg' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Portfolio