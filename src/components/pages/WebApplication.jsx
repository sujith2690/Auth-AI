import React from 'react'
import Footer from '../common/Footer'
import CommonHero from '../common/CommonHero'
import WebHead from '../webPage/WebHead'
import RunningBar from '../mobilePage/RunningBar'
import FutureWeb from '../webPage/FutureWeb'
import Something from '../common/Something'
import FormSubmission from '../contactPage/FormSubmission'

const WebApplication = () => {
    const content ="Web application development is all about creating software that runs in a web browser. It involves both designing the user interface and coding the server-side logic, often using technologies like HTML, CSS, JavaScript, and frameworks like React and Node.js. Basically, it's the process of making web pages interactive and functional."
    return (
        <>
            <CommonHero heading={'Web Application Development'} content={content} />
            <WebHead />
            <Something/>
            <RunningBar />
            <FutureWeb />
            <FormSubmission/>
            <Footer />
        </>
    )
}

export default WebApplication