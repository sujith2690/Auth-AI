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
import ContentView from '../common/ContentView'
import GoalImage from '../../assets/images/aboutPage/goals.png'
import missionImage1 from '../../assets/images/aboutPage/mission.png'


const AboutPage = () => {
    const heading = 'About Us'
    const content = 'At AUTH AI SOLUTIONS, we leverage the transformative power of artificial intelligence to catalyze remarkable change across industries. Our unwavering commitment to transparency and reliability is what truly sets us apart in a crowded market place .We empower organizations with cutting-edge AI technologies that elevate data-driven insights, streamline complex processes, and ignite strategic growth.'
    const content1 = "At AUTH AI SOLUTIONS, we don’t just build AI; we craft intelligent ecosystems that evolve and thrive alongside your business.Situated in the heart of Bengaluru's vibrant innovation hub, our dedicated team of tech-savvy engineers, data scientists, and AI visionaries is driven by a singular mission: to redefine what’s possible with artificial intelligence.Our diverse expertise spans multiple industries, empowering businesses of all sizes to harness the transformative power of AI and unlock invaluable data-driven insights.we expertly blend cutting-edge technology with a deep understanding of human potential. Whether we’re teaching machines to understand and i"
    const content2 = "inter prehumen language, crafting in tell igent automation systems, or transforming intricate data into actionable insights, we continually push the boundaries of what’s possible. In an era where AI is rapidly advancing, we recognize that trust is the cornerstone of meaning ful innovation. From every line of code to every strateg ic initiative, weinfuse our work with commitment to ethical AI , ensuring fairness, accountability, and long-term sustainability. What truly sets us apart is our unwavering commitment to integrity and transparency."
    const headingGoal = 'Our Visionary Goals'
    const missionContent = 'is to empower innovation through ethical AI, ensuring that every technological advancement is firmly rooted in integrity and responsibility. We recognize that innovation is not merely about cutting-edge technology; it must also align with ethical principles that enhance trust and accountability. As such, we are dedicated to catalyzing transformative change across various industries, leveraging the immense power of artificial intelligence to tackle unique challenges and unlock new opportunities for growth and efficiency.'

    return (
        <>
            <CommonHero heading={heading} content={content} />
            <Vision />
            <ContentView heading={headingGoal} image1={GoalImage} content={content1} content2={content2} />
            <Clients />
            <ContentView image1={missionImage1} content={missionContent} />
            <Something />
            <Team />
            <Testimonials />
            <Happy />
            <Footer />
        </>
    )
}

export default AboutPage