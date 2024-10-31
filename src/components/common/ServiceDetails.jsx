import React, { useEffect, useState } from 'react';
import { FaPlay } from "react-icons/fa";
import webImage1 from '../../assets/images/services/web/Image1.png';
import webImage2 from '../../assets/images/services/web/Image3.png';
import webVideo from '../../assets/images/services/web/web.mp4';
import mobImage1 from '../../assets/images/services/mobile/mobile1.png';
import mobImage2 from '../../assets/images/services/mobile/mobile2.png';
import mobVideo from '../../assets/images/services/mobile/video.mp4';
import cloudImage1 from '../../assets/images/services/cloud/Image1.png';
import cloudImage2 from '../../assets/images/services/cloud/Image2.png';
import cloudVideo from '../../assets/images/services/cloud/video.mp4';
import aiImage1 from '../../assets/images/services/ai/Image1.png';
import aiImage2 from '../../assets/images/services/ai/Image2.png';
import aiVideo from '../../assets/images/services/ai/video.mp4';
import dataImage1 from '../../assets/images/services/data/Image1.png';
import dataImage2 from '../../assets/images/services/data/Image2.png';
import dataVideo from '../../assets/images/services/data/video.mp4';
import itImage1 from '../../assets/images/services/it/Image1.png';
import itImage2 from '../../assets/images/services/it/Image2.png';
import itVideo from '../../assets/images/services/it/video.mp4';
import chatImage1 from '../../assets/images/services/chat/Image1.png';
import chatImage2 from '../../assets/images/services/chat/Image2.png';
import chatVideo from '../../assets/images/services/it/video.mp4';
import analysisImage1 from '../../assets/images/services/analysis/Image1.png';
import analysisImage2 from '../../assets/images/services/analysis/Image2.png';
import analysisVideo from '../../assets/images/services/analysis/video.mp4';
import naturalImage1 from '../../assets/images/services/natural/Image1.png';
import naturalImage2 from '../../assets/images/services/natural/Image2.png';
import naturalVideo from '../../assets/images/services/natural/video.mp4';


import VideoPlayModal from './VideoPlayModal';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {

    const { serviceName } = useParams();
    const [serviceContent, setServiceContent] = useState({})
    // console.log(serviceName, '------55----serviceName')
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayVideo = () => {
        setIsPlaying((prev) => !prev);
    };
    const data = [
        {
            item: 'Website',
            heading: 'Website Application Development',
            image1: webImage1,
            image2: webImage2,
            subHeading: "Website application development is the process of creating interactive digital experiences that serve specific purposes.",
            content1: "In today's interconnected world, website applications have become an integral part of our daily lives. From e-commerce platforms to social media networks, from educational resources to government services, these digital tools have revolutionized the way we interact, communicate, and conduct business. The development of website applications is a complex process that involves a blend of creativity, technical expertise, and a deep understanding of user needs.",
            content2: "At the core of website application development lies the interplay of front-end and back-end development. The front-end, or client-side, is what the user sees and interacts with. It encompasses the design, layout, and functionality of the website's interface. Popular front-end technologies include HTML, CSS, and JavaScript frameworks like React, Angular, and Vue.js. These tools enable developers to create visually appealing and intuitive user experiences.",
            video: webVideo,
        },
        {
            item: 'Mobile Application',
            heading: "Website Application Development",
            image1: mobImage1,
            image2: mobImage2,
            subHeading: "Mobile applications have revolutionized the way we interact with technology, transforming our daily lives in countless ways.",
            content: "One of the key differences between mobile and web app development is the platform-specific nature of mobile apps. While web apps can be accessed on any device with a web browser, mobile apps are designed for specific platforms, such as iOS and Android. This necessitates developing separate versions for each platform, often using different programming languages and development environments.",
            content2: "Performance is another critical factor in mobile app development. With limited processing power and battery life, mobile devices demand optimized apps that run smoothly and efficiently. Developers must carefully consider factors such as memory usage, network connectivity, and power consumption to ensure a positive user experience.",
            video: mobVideo,
        },
        {
            item: 'Cloud Migration',
            heading: "Cloud Migration Services",
            subHeading: "Cloud migration, the process of transitioning data, applications, and infrastructure from on-premises environments to a cloud-based platform, has become a strategic imperative for businesses of all sizes.",
            image1: cloudImage1,
            image2: cloudImage2,
            content: "One of the primary drivers of cloud migration is the need for scalability. Traditional on-premises infrastructure can be inflexible, making it difficult to accommodate rapid growth or fluctuating workloads. Cloud platforms, on the other hand, offer virtually unlimited scalability, allowing businesses to easily adjust their resources to meet changing demands. This flexibility can significantly reduce costs and improve operational efficiency.",
            content2: "Cost-effectiveness is another compelling reason for organizations to consider cloud migration. Cloud providers often offer pay-as-you-go pricing models, which can result in significant cost savings compared to the upfront investments required for on-premises infrastructure. Additionally, cloud platforms can help reduce IT operational costs by automating routine tasks and eliminating the need for on-premises data centers.",
            video: cloudVideo
        },
        {
            item: 'AI Development',
            heading: "AI Development",
            subHeading: "Artificial Intelligence (AI) has rapidly evolved from a concept in science fiction to a transformative force reshaping industries and societies.",
            image1: aiImage1,
            content: "At the heart of AI development is the creation of algorithms and models that enable machines to learn from data and improve their performance over time. Machine learning, a subset of AI, involves training algorithms on large datasets to recognize patterns, make predictions, and automate tasks. Deep learning, a more advanced form of machine learning, utilizes artificial neural networks to process complex data and learn from it.",
            content2: "AI development has a wide range of applications across various domains. In healthcare, AI is being used to diagnose diseases, develop new treatments, and personalize patient care. In finance, AI-powered systems are used for fraud detection, risk assessment, and algorithmic trading. In manufacturing, AI is driving automation, improving efficiency, and enhancing product quality.",
            image2: aiImage2,
            video: aiVideo
        },
        {
            item: 'Data Science',
            heading: "Data Science Services",
            subHeading: "Data science, the interdisciplinary field of extracting insights and knowledge from data, has become an indispensable tool for businesses and organizations across various industries.",
            image1: dataImage1,
            content: "At the core of data science services lies the ability to collect, clean, and prepare data for analysis. Data scientists employ a variety of techniques to ensure data quality and reliability, including data cleansing, normalization, and feature engineering. Once the data is prepared, it can be subjected to statistical analysis, machine learning algorithms, and other data mining techniques to uncover meaningful patterns and trends.",
            content2: "One of the key benefits of data science services is the ability to make data-driven decisions. By analyzing vast amounts of data, businesses can gain valuable insights into customer behavior, market trends, and operational efficiency. Data science services also play a crucial role in driving innovation. By leveraging advanced analytics techniques, businesses can develop new products and services, identify emerging opportunities, and stay ahead of the competition. Additionally, data science can be used to create predictive models that can forecast future trends and anticipate risks.  ",
            image2: dataImage2,
            video: dataVideo
        },
        {
            item: 'IT Consulting',
            heading: "IT Consulting & Strategy",
            subHeading: "IT consulting and services have become an indispensable component of modern businesses, providing expert guidance and support to navigate the complex and ever-evolving world of information technology.",
            image1: itImage1,
            content: "One of the primary roles of IT consulting firms is to help businesses align their IT strategies with their overall business objectives. By conducting thorough assessments and analyses, consultants can identify areas for improvement and recommend solutions that optimize efficiency, reduce costs, and enhance competitiveness. This may involve implementing new technologies, upgrading existing systems, or restructuring IT operations.",
            content2: "IT consulting firms also play a vital role in addressing the security challenges faced by businesses today. In an increasingly interconnected world, protecting sensitive data from cyber threats is crucial. Consultants can help organizations assess their security vulnerabilities, implement robust security measures, and develop incident response plans to minimize the impact of potential breaches.",
            image2: itImage2,
            video: itVideo
        },
        {
            item: 'Chatbot Development',
            heading: "Chatbot Development",
            subHeading: "Chatbots, sophisticated software applications designed to simulate human conversation, have become increasingly prevalent in various industries.",
            image1: chatImage1,
            content: "Chatbots are powered by natural language processing (NLP), a field of artificial intelligence that enables machines to understand and interpret human language. NLP techniques allow chatbots to process and analyze text, extract meaning, and generate appropriate responses. This capability has led to the development of chatbots that can engage in meaningful conversations, answer questions, and even provide personalized recommendations.",
            content2: "One of the primary benefits of chatbots is their ability to improve customer service. By automating routine tasks and providing immediate responses to customer inquiries, chatbots can reduce wait times, enhance customer satisfaction, and free up human agents to handle more complex issues. Additionally, chatbots can be used to collect customer feedback and insights, helping businesses to identify areas for improvement and tailor their offerings to meet customer needs.",
            image2: chatImage2,
            video: chatVideo
        },
        {
            item: 'data Analysis',
            heading: "Data Analytics & Business Intelligence",
            subHeading: "Data analytics and business intelligence (BI) have emerged as critical tools for organizations seeking to gain competitive advantages in today's data-driven world.",
            image1: analysisImage1,
            content: "Data analytics involves the process of examining data to uncover patterns, trends, and insights. It encompasses a wide range of techniques, including statistical analysis, machine learning, and data mining. By applying these methods to large datasets, organizations can extract valuable information that can be used to inform decision-making.",
            content2: "Business intelligence, on the other hand, focuses on providing actionable insights to support strategic decision-making. BI tools and platforms enable organizations to collect, store, and analyze data from various sources, transforming raw data into meaningful information that can be easily understood and visualized.",
            image2: analysisImage2,
            video: analysisVideo
        },
        {
            item: 'Natural Language',
            heading: "Natural Language Processing (NLP)",
            subHeading: "Natural Language Processing (NLP) is a field of artificial intelligence that focuses on enabling computers to understand, interpret, and generate human language.",
            image1: naturalImage1,
            content: "NLP has a wide range of applications across various domains. In customer service, chatbots and virtual assistants powered by NLP can provide immediate responses to customer inquiries and automate routine tasks. In healthcare, NLP can be used to analyze medical records, extract information from clinical notes, and assist in drug discovery. In the legal field, NLP can be used to automate document review, extract key information from legal contracts, and provide legal research assistance.",
            content2: "As NLP technology continues to advance, we can expect to see even more innovative applications emerging. For example, NLP-powered systems could be used to create intelligent personal assistants that can understand our needs and preferences, or to develop more accurate and natural-sounding language translation tools.However, the development of NLP is not without its challenges. Issues such as bias, privacy, and ethical considerations must be carefully addressed.",
            image2: naturalImage2,
            video: naturalVideo
        },
    ]
    useEffect(() => {
        const dataFinding = () => {
            const serviceData = data.find(item => item.item.toLowerCase() === serviceName.toLowerCase());
            if (!serviceData) {
                return <div className="text-white">Service not found</div>;
            }
            setServiceContent(serviceData)
        }
        dataFinding()
    }, [serviceName])

    return (
        <div className='flex items-center justify-center bg-inherit p-5'>
            <div className='flex items-center justify-center p-5'>
                <div className='md:w-4/6 flex flex-col gap-10'>
                    <div className='flex flex-col md:flex-row items-center justify-between gap-2 md:gap-16 '>
                        <div className=' md:w-1/2'>
                            <h3 className="text-lg md:text-3xl font-bold text-white">{serviceContent.heading}</h3>
                        </div>
                        <div className=' md:w-1/2'>
                            <p className="text-[#22AAD2]  text-sm lg:text-lg text-center md:text-start">
                                {serviceContent.subHeading}
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <img src={serviceContent.image1} alt="Overlayed" className="w-full h-full object-cover rounded-2xl" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#04050b] to-transparent rounded-2xl"></div>
                    </div>

                    <div className='flex items-center justify-between gap-5'>
                        <div className="flex md:flex-col flex-row gap-3">
                            <p className='text-[10px] md:text-sm'>
                                {serviceContent.content}
                            </p>
                        </div>
                        <div className="flex md:flex-col flex-row gap-3">
                            <p className='text-[10px] md:text-sm'>
                                {serviceContent.content2}
                            </p>
                        </div>
                    </div>

                    <div className='relative w-full flex items-center justify-center'>
                        {!isPlaying ? (
                            <div className="relative w-full">
                                <img src={serviceContent.image2} alt="Video thumbnail" className="w-full h-full object-cover rounded-2xl" />
                                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button onClick={handlePlayVideo} className="md:w-16 md:h-16 w-10 h-10 rounded-full bg-white flex items-center justify-center">
                                        <FaPlay className="text-black md:w-6 md:h-6" />
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <VideoPlayModal handlePlayVideo={handlePlayVideo} video={serviceContent.video} setIsPlaying={setIsPlaying} isPlaying={isPlaying} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;