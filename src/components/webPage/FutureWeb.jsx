import React from 'react';
import image1 from '../../assets/images/web/web2.png';

const FutureWeb = () => {
    const content = "Web applications rely on a diverse set of software tools and technologies. Front-end frameworks like React, Angular, and Vue.js enable developers to build interactive and engaging user interfaces. On the back-end, technologies like Node.js, Django, and Ruby on Rails handle server-side logic, database interactions, and application security. These tools, combined with cloud services like AWS, Azure, and Google Cloud, empower developers to create scalable and robust web applications that meet the evolving demands of users and businesses alike.";

    return (
        <div className="flex justify-center items-center min-h-[150px] bg-[#060F1A]" data-aos="fade-up">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-5xl p-4 relative">
                <div className='p-5'>
                    <div className="flex flex-col md:flex-row w-full md:w-auto gap-8 md:p-6">
                        <div data-aos="zoom-in" data-aos-delay="200">
                            <img
                                src={image1}
                                className='w-full h-full object-cover rounded-lg'
                                alt="A web application interface"
                                loading='lazy'
                            />
                        </div>
                        <div className="flex w-full flex-col md:gap-6 items-start justify-start bg-[#060F1AE5] md:p-4 md:static md:bg-transparent text-left">
                            <p className="text-[#E3E3E3] text-sm md:text-sm font-thin" data-aos="fade-left" data-aos-delay="100">
                                {content}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FutureWeb;
