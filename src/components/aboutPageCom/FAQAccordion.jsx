import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const FAQAccordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: 'What is your return policy?',
            answer: 'You can return any unused item within 30 days for a full refund.',
        },
        {
            question: 'How do I track my order?',
            answer: 'You can track your order using the tracking link sent to your email after shipment.',
        },
        {
            question: 'Do you ship internationally?',
            answer: 'Yes, we ship to many countries worldwide. Shipping fees may vary based on the location.',
        },
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    useEffect(() => {
        AOS.init({
            duration: 500, // Animation duration
            easing: 'ease-in-out', // Easing function
            once: true, // Whether animation should happen only once
        });
    }, []);

    return (
        <div className="flex items-center py-5 justify-center bg-inherit">
            <div className='w-5/6 md:w-4/6 flex flex-col gap-5'>
                <div className='flex flex-col gap-4 p-4'>
                    <p className='text-[#22AAD2] text-start text-sm md:text-center md:text-lg'>― FAQ</p>
                    <h3 className='flex flex-col text-center text-xl md:text-4xl'>
                        Frequently Asked Questions
                    </h3>
                </div>
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="flex flex-col gap-4 border-[#22AAD259] bg-[#0A1828] border-t-2 rounded-xl"
                        data-aos="fade-up" // AOS animation for each FAQ
                    >
                        <div
                            className="flex justify-between items-center py-4 cursor-pointer p-3"
                            onClick={() => toggleAccordion(index)}
                        >
                            <h4 className='text-sm md:text-xl'>{faq.question}</h4>
                            {openIndex === index ? (
                                <FaChevronUp className="text-xl text-gray-500" />
                            ) : (
                                <FaChevronDown className="text-xl text-[#22AAD2]" />
                            )}
                        </div>
                        {openIndex === index && (
                            <div className="p-2 text-[#B5B3B3] text-sm text-center pb-3" data-aos="fade-in"> {/* AOS animation for answer */}
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQAccordion;
