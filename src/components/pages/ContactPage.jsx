import React from 'react'
import CommonHero from '../common/CommonHero'
import Contact from '../contactPage/Contact'
import FormSubmission from '../contactPage/FormSubmission'
import Location from '../contactPage/Location'
import Footer from '../common/Footer'

const ContactPage = () => {


    return (
        <>
            <CommonHero heading={'Contact Us'} />
            <Contact />
            <FormSubmission />
            <Location />
            <Footer />
        </>
    )
}

export default ContactPage