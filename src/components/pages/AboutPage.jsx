import React from 'react'
import CommonHero from '../common/CommonHero'
import Vision from '../aboutPageCom/Vision'
import Goals from '../aboutPageCom/Goals'
import Clients from '../common/Clients'
import Mission from '../aboutPageCom/Mission'
import Something from '../common/Something'
import Team from '../aboutPageCom/Team'
import Testimonials from '../common/Testimonials'
import Happy from '../common/Happy'
import Footer from '../common/Footer'

const AboutPage = () => {
    const heading = 'About Us'
    const content = 'At AUTH AI SOLUTIONS, we leverage the transformative power of artificial intelligence to catalyze remarkable change across industries. Our unwavering commitment to transparency and reliability is what truly sets us apart in a crowded market place .We empower organizations with cutting-edge AI technologies that elevate data-driven insights, streamline complex processes, and ignite strategic growth.'
    return (
        <>
            <CommonHero heading={heading} content={content} />
            <Vision />
            <Goals />
            <Clients />
            <Mission />
            <Something />
            <Team />
            <Testimonials />
            <Happy />
            <Footer />
        </>
    )
}

export default AboutPage