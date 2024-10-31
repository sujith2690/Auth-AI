import React from 'react'
import CommonHero from '../common/CommonHero'
import Services from '../common/Services'
import Value from '../common/Value'
import Something from '../common/Something'
import Testimonials from '../common/Testimonials'
import Happy from '../common/Happy'
import Footer from '../common/Footer'

const ServicesPage = () => {
    const heading = 'Our Services'
    const content = 'At AUTH AI SOLUTIONS, we are not just committed to driving growth; we also cultivate a culture of continuous learning and innovation within our team. Our passionate engineers and data scientists are encouraged to explore new ideas, push boundaries, and embrace the latest advancements in AI technology.'

    return (
        <>
            <CommonHero heading={heading} content={content} />
            <Services />
            <Value />
            <Something />
            <Testimonials />
            <Happy/>
            <Footer/>
        </>
    )
}

export default ServicesPage