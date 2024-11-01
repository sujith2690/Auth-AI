import React from 'react'
import image1 from '../../assets/images/web/web2.png'

const FutureWeb = () => {
    const content = "Web applications rely on a diverse set of software tools and technologies. Front-end frameworks like React, Angular, and Vue.js enable developers to build interactive and engaging user interfaces. On the back-end, technologies like Node.js, Django, and Ruby on Rails handle server-side logic, database interactions, and application security. These tools, combined with cloud services like AWS, Azure, and Google Cloud, empower developers to create scalable and robust web applications that meet the evolving demands of users and businesses alike."
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
                        <p className="text-[#E3E3E3] text-[10px] md:text-lg font-thin">
                            {content}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FutureWeb