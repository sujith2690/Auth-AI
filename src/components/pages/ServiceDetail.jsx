import React from 'react'
import CommonHero from '../common/CommonHero'
import ServiceDetails from '../common/ServiceDetails'
import Something from '../common/Something'
import Testimonials from '../common/Testimonials'
import Happy from '../common/Happy'
import Footer from '../common/Footer'

const ServiceDetail = () => {
    const heading = 'Service Detail'
    const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor arcu velit. Integer id quam dignissim, imperdiet ex sit amet, ullamcorper quam. '

    const data = [
        {
            title: 'Website Application Development',
            content: 'Website application development is the process of creating interactive digital experiences that serve specific purposes.',
            summary: "In today's interconnected world, website applications have become an integral part of our daily lives. From e-commerce platforms to social media networks, from educational resources to government services, these digital tools have revolutionized the way we interact, communicate, and conduct business. The development of website applications is a complex process that involves a blend of creativity, technical expertise, and a deep understanding of user needs.",
            summary2: "At the core of website application development lies the interplay of front-end and back-end development. The front-end, or client-side, is what the user sees and interacts with. It encompasses the design, layout, and functionality of the website's interface. Popular front-end technologies include HTML, CSS, and JavaScript frameworks like React, Angular, and Vue.js. These tools enable developers to create visually appealing and intuitive user experiences."
        }
    ]
    return (
        <>
            <CommonHero heading={heading} content={content} />
            <ServiceDetails />
            <Something />
            <Testimonials />
            <Happy />
            <Footer />
        </>
    )
}

export default ServiceDetail