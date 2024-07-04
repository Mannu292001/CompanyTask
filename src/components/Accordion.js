// src/Accordion.js
import React, { useState } from 'react';

const AccordionItem = ({ title, content, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200">
            <button
                className="w-full text-left py-4 px-6 focus:outline-none flex justify-between items-center"
                onClick={onClick}
            >
                <span className="font-medium text-gray-800">{title}</span>
                <span className="text-gray-500">{isOpen ? '-' : '+'}</span>
            </button>
            {isOpen && (
                <div className="px-6 pb-4 text-gray-700">
                    {content}
                </div>
            )}
        </div>
    );
};

const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const items = [
        { title: 'What does LOREM mean?', content: '‘Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document. The text is intentionally unintelligible so that the viewer is not distracted by the content. The language is not real Latin and even the first word ‘Lorem’ does not exist. It is said that the lorem ipsum text has been common among typesetters since the 16th century.' },
        { title: 'Where can I subscribe to your newsletter?', content: 'We often send out our newsletter with news and great offers. We will never disclose your data to third parties and you can unsubscribe from the newsletter at any time. Subscribe here to our newsletter.' },
        { title: 'Where can I edit my billing and shipping address?', content: 'If you created a new account after or while ordering you can edit both addresses (for billing and shipping) in your customer account.' },
        { title: 'Do I have the right to return an item?', content: 'Yes. If there are any problems with an item, you can send it back to us and we’ll be pleased to replace it free of charge. If the item can no longer be delivered, the money will be refunded in cash or in the form of a voucher. You must notify us of any problems within seven days of receiving the item. However, we assume no liability for damage caused during shipping by the postal/delivery service. For more information, please refer to our General Terms & Conditions (GTC)' },
        { title: 'Where can I find your disclaimer and privacy policy?', content: 'All data will be treated as strictly confidential and will not be disclosed to third parties. Take a look on our disclaimer and Privacy Policy.' },
        { title: 'Do you accept orders via Phone or E-mail?', content: 'No, we do not take orders via Phone, E-mail or Social Media. Please order on our online shop, which is opened 24/7.' },
    ];

    return (
        <div className="max-w-3xl mx-auto my-8">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openIndex === index}
                    onClick={() => toggleAccordion(index)}
                />
            ))}
        </div>
    );
};

export default Accordion;
