import React from 'react'
import MobileHead from '../mobilePage/MobileHead'
import CommonHero from '../common/CommonHero'
import RunningBar from '../mobilePage/RunningBar'
import Footer from '../common/Footer'
import Future from '../mobilePage/Future'
import Something from '../common/Something'

const MobileApplication = () => {
    const content = "The process of creating software applications designed to run on mobile devices such as smartphones and tablets. These apps can be native (built specifically for a platform like iOS or Android), hybrid (a mix of native and web elements), or web-based, accessible through a mobile browser."
    return (
        <>
            <CommonHero heading={'Mobile Application Development'} content={content} />
            <MobileHead />
            <Something/>
            <RunningBar/>
            <Future/>
            <Footer/>
        </>
    )
}

export default MobileApplication