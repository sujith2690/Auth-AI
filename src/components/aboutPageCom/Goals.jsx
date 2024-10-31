import React from 'react'
import image1 from '../../assets/images/aboutPage/goals.png'

const Goals = () => {
    const content = "At AUTH AI SOLUTIONS, we don’t just build AI; we craft intelligent ecosystems that evolve and thrive alongside your business.Situated in the heart of Bengaluru's vibrant innovation hub, our dedicated team of tech-savvy engineers, data scientists, and AI visionaries is driven by a singular mission: to redefine what’s possible with artificial intelligence.Our diverse expertise spans multiple industries, empowering businesses of all sizes to harness the transformative power of AI and unlock invaluable data-driven insights.we expertly blend cutting-edge technology with a deep understanding of human potential. Whether we’re teaching machines to understand and i"
    const content2 = "inter prehumen language, crafting in tell igent automation systems, or transforming intricate data into actionable insights, we continually push the boundaries of what’s possible. In an era where AI is rapidly advancing, we recognize that trust is the cornerstone of meaning ful innovation. From every line of code to every strateg ic initiative, weinfuse our work with commitment to ethical AI , ensuring fairness, accountability, and long-term sustainability. What truly sets us apart is our unwavering commitment to integrity and transparency."
    return (
        <div className="flex flex-col justify-center items-center min-h-[150px] bg-[#060F1A]">
            <h3 className='text-xl md:text-3xl font-bold text-white'>Our Visionary Goals</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-5xl p-4 relative">
                <div className='p-5'>
                    <div className="relative flex w-full md:w-auto gap-8">
                        <div className="absolute flex items-center justify-center bottom-0 left-0  w-full flex-col gap-6  bg-[#060F1AE5] md:static md:bg-transparent text-left">
                            <p className="text-[#E3E3E3] text-sm md:text-lg font-thin">
                                {content}
                            </p>
                        </div>
                        <div>
                            <img
                                src={image1} className='w-full h-full object-cover rounded-lg'
                                alt="home2.png"
                                loading='lazy'
                            />
                        </div>
                    </div>
                    <div>
                        <p className="text-[#E3E3E3] text-sm md:text-lg font-thin mt-2">
                            {content2}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Goals