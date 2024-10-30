import React from 'react'

const Team = () => {
    return (
        <div className="flex items-center justify-center min-h-[150px] bg-inherit px-4 py-10">
            <div className="flex flex-col md:flex-row items-center justify-center max-w-5xl w-full gap-2 md:gap-10 p-4 relative">

                {/* Text Section */}
                <div className="flex flex-col gap-3 md:w-1/2 text-center md:text-left z-10">
                    <p className="text-[#22AAD2] text-sm md:text-lg">― Our Expert Team</p>
                    <h3 className="text-xl md:text-3xl font-bold text-white">Meet Our Team</h3>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        It refers to the use of computers to store, retrieve, transmit, and manipulate information. In simpler terms, IT encompasses all aspects of technology that help us process and manage information efficiently.
                    </p>
                </div>

                {/* Image Section */}
                <div className="flex gap-4 md:gap-2 overflow-hidden z-10">
                    {/* First Image with Overlay */}
                    <div className="relative w-32 md:w-48 lg:w-56 h-[180px] lg:h-[300px]">
                        <img src="images/aboutPage/team1.png" className="w-full h-full object-cover rounded-lg" alt="Team member 1" />
                        <div className="absolute bottom-2 left-1 right-1 transform  bg-[#0A1828] bg-opacity-70  text-white md:text-sm lg:text-base rounded-lg">
                            <p className="font-bold text-center text-base">Liam Smith</p>
                            <p className="text-sm text-[#22AAD2] text-center">CEO & Co-Founder</p>
                        </div>
                    </div>


                    {/* Second Image with Semi-Transparent Overlay */}
                    <div className="relative w-24 md:w-28 h-[180px] lg:h-[300px]">
                        <img src="images/aboutPage/team2.png" className="w-full h-full object-cover rounded-lg" alt="Team member 2" />
                        <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg"></div>
                    </div>

                    {/* Third Image with Semi-Transparent Overlay */}
                    <div className="relative w-24 md:w-28 lg:w-20 h-[180px] lg:h-[300px]">
                        <img src="images/aboutPage/team3.png" className="w-full h-full object-cover rounded-lg" alt="Team member 3" />
                        <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
