import React from 'react';
import Buttons from '../common/Buttons';
import image from '../../assets/images/homePage/home2.png';
import { motion } from "framer-motion";
import { fadeIn } from '../../variants';

const Transform = () => {
    return (
        <div className="flex justify-center items-center min-h-[150px] bg-[#060F1A]">
            <motion.div
                className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-5xl p-4 relative"
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
            >
                <div className="flex flex-col md:flex-row w-full md:w-auto gap-8 p-6">
                    <motion.img
                        src={image}
                        className="w-full h-auto object-cover md:h-full md:w-full"
                        alt="home2.png"
                        loading="lazy"
                        variants={fadeIn("left", 0.3)}
                    />
                    <motion.div
                        className="flex w-full flex-col md:gap-6 items-start justify-start bg-[#060F1AE5] p-4 md:static md:bg-transparent text-left"
                        variants={fadeIn("up", 0.4)}
                    >
                        <motion.p
                            className="text-[#22AAD2] text-sm md:text-lg"
                            variants={fadeIn("right", 0.5)}
                        >
                            ― About Us
                        </motion.p>
                        <motion.h3
                            className="text-lg md:text-3xl font-bold text-white"
                            variants={fadeIn("up", 0.6)}
                        >
                            Transforming Visions into Reality
                        </motion.h3>
                        <motion.p
                            className="mt-4 text-sm md:text-sm text-[#E3E3E3] font-thin"
                            variants={fadeIn("up", 0.7)}
                        >
                            At AUTH AI SOLUTIONS, we leverage the transformative power of artificial intelligence to catalyze remarkable change across industries. Our unwavering commitment to transparency and reliability is what truly sets us apart in a crowded marketplace. We empower organizations with cutting-edge AI technologies that elevate data-driven insights, streamline complex processes, and ignite strategic growth.
                        </motion.p>
                        <motion.div
                            className="mt-2"
                            variants={fadeIn("up", 0.8)}
                        >
                            <Buttons content={'Learn more'} />
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Transform;
