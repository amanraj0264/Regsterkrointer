import { useState } from 'react';

import { IoIosArrowUp } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

export const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    }

    const faqData = [
        {
            question: 'Can I recover deleted files from desktop with this software?',
            answer: 'React is a JavaScript library for building user interfaces.',
        },
        {
            question: 'Can I recover deleted files from desktop with this software?',
            answer: 'You can create a React component using a JavaScript function or class.',
        },
        {
            question: 'Can I recover deleted files from desktop with this software?',
            answer: 'Props are inputs to a React component, passed from the parent component.',
        },
        {
            question: 'Can I recover deleted files from desktop with this software?',
            answer: 'Props are inputs to a React component, passed from the parent component.',
        },
        {
            question: 'Can I recover deleted files from desktop with this software?',
            answer: 'Props are inputs to a React component, passed from the parent component.',
        },
    ];

    return (
        <>
            <div className="max-w-[1200px] mx-auto p-4 mb-10 ">
                <h5 className='text-center py-2 text-[#EB8D15] text-xl'>FAQ</h5>
                <h1 className="text-3xl font-bold text-center text-[#3C2109] mb-6">Frequently Asked Questions</h1>
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className="border-l-4 border-primary  rounded-lg shadow-sm p-4"
                        >
                            <button
                                className="w-full text-left flex justify-between items-center font-semibold"
                                onClick={() => toggleFAQ(index)}
                            >
                                {item.question}
                                <span>
                                    {activeIndex === index ? <IoIosArrowUp/> : <MdKeyboardArrowDown/>}
                                </span>
                            </button>
                            {activeIndex === index && (
                                <p className="mt-2 text-gray-700 text-start">{item.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}