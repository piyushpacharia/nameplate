import React, { useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const faqs = [
    {
        question: 'What is the estimated delivery time?',
        answer: 'Estimated delivery times vary by location. Generally, orders are delivered within 5-7 business days. Shipping confirmation and tracking will be provided once the order is dispatched.'
    },
    {
        question: 'Do you ship internationally?',
        answer: 'Yes, we ship internationally. Shipping costs and delivery times will vary based on the destination.'
    },
    {
        question: 'What should I do if I receive a damaged item?',
        answer: 'If you receive a damaged item, please contact us within 7 days of receiving your order with photos of the damaged product, and we will assist you with a replacement or refund.'
    },
    {
        question: 'What is the estimated delivery time?',
        answer: 'Estimated delivery times vary by location. Generally, orders are delivered within 5-7 business days. Shipping confirmation and tracking will be provided once the order is dispatched.'
    },
    {
        question: 'Do you ship internationally?',
        answer: 'Yes, we ship internationally. Shipping costs and delivery times will vary based on the destination.'
    },
    {
        question: 'What should I do if I receive a damaged item?',
        answer: 'If you receive a damaged item, please contact us within 7 days of receiving your order with photos of the damaged product, and we will assist you with a replacement or refund.'
    },
    {
        question: 'What is the estimated delivery time?',
        answer: 'Estimated delivery times vary by location. Generally, orders are delivered within 5-7 business days. Shipping confirmation and tracking will be provided once the order is dispatched.'
    },
    {
        question: 'Do you ship internationally?',
        answer: 'Yes, we ship internationally. Shipping costs and delivery times will vary based on the destination.'
    },
    {
        question: 'What should I do if I receive a damaged item?',
        answer: 'If you receive a damaged item, please contact us within 7 days of receiving your order with photos of the damaged product, and we will assist you with a replacement or refund.'
    },
];

function AccordionItem({ question, answer, isOpen, onToggle }) {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className="flex justify-center">
            <div className='md:w-[80%] w-full'>
                <h2>
                    <button
                        type="button"
                        onClick={onToggle}
                        className="flex items-center justify-between !w-[100%] p-4 font-medium text-gray-500 border border-b-0 border-gray-200 focus:ring-1 focus:ring-gray-200 bg-gray-100"
                    >
                        <span>{question}</span>
                        <IoIosArrowDown className={`transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
                    </button>
                </h2>
                <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className="p-4 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <p className="text-gray-500 dark:text-gray-400">{answer}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ShippingPolicy() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="container mx-auto px-4 md:px-10 py-8">
            <h1 className="text-3xl font-bold mb-6">Shipping Policy</h1>
            <p className="mb-6">
                We understand how important it is for you to receive your Housenama nameplate quickly and safely. That's why we've created a transparent shipping process that ensures quality and timely delivery. Following are the terms and conditions that constitute our Shipping Policy.
            </p>

            <h2 className="text-2xl font-semibold mb-4">FAQs</h2>

            <div className="">
                {faqs.map((faq, index) => (
                    <AccordionItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === index}
                        onToggle={() => toggleAccordion(index)}
                    />
                ))}
            </div>
            <div>
                <h1 className='poppins-bold text-3xl my-6'>Contacting the Courier Company Directly</h1>
                <ul className='list-disc md:px-20 px-5 '>
                    <li>For any delivery enquiries/instructions, you can contact the courier company directly using the information below.</li>
                    <li>Please keep your AWB Number / Tracking Number handy, as the courier company will require it to access your shipment details.</li>
                    <li>You can find your tracking number by checking the shipment notification email. Alternatively, you can click on the tracking link provided to you via WhatsApp.</li>
                    <li>On the page that opens up, you will see the estimated delivery date followed by a map, and right below it you will find the courier company's name and your tracking number.</li>
                    <li> IMPORTANT NOTE: Once your order is picked up, most courier companies will not accept requests to modify the delivery address or phone number associated with the shipment.</li>
                </ul>




            </div>
        </div>
    );
}
