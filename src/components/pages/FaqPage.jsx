import React from 'react'
import CommonHero from '../common/CommonHero'
import FAQAccordion from '../aboutPageCom/FAQAccordion'
import Something from '../common/Something'
import Footer from '../common/Footer'

const FaqPage = () => {
    const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor arcu velit. Integer id quam dignissim, imperdiet ex sit amet, ullamcorper quam. "
    return (
        <>
            <CommonHero heading={'FAQ'} content={content} />
            <FAQAccordion />
            <Something/>
            <Footer/>
        </>
    )
}

export default FaqPage