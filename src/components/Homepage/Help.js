import React from 'react';
import { useState } from "react";

export default function Help() {

    

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const FAQData = [
        {
            id: 1,
            question: "How do i get started as a Driver ?",
            answer: " To get started as a driver, you need to register as a driver on the platform. You will be required to provide your personal information. Once you have registered, you will be able to post a ride by providing the details of your trip. "
        },
        {
            id: 2,
            question: "How do i get started as a Pessenger ?",
            answer: " To get started as a passenger, you need to register as a passenger on the platform. You will be required to provide your information. Once you have registered, you will be able to see the available rides and book a ride of your choice by contacting the driver. "
        },
        {
            id: 3,
            question: "Can I change my name?",
            answer: "You can only change your display name. not the name which you use to login to platform. To do so, you need to go to the profile settings page and change your display name."
        },
        {
            id: 4,
            question: "Why isn't everyone using RideHub?",
            answer: "Because RideHub is a new platform, and maybe because patrol is not expensive enough yet. "
        },
        {
            id: 5,
            question: "I have a question that is not listed here. What do I do?",
            answer: "You can contact us through the contact page and we will get back to you as soon as possible. "
        },

    ];


    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 text-center text-white">
                        <h1 style={{ fontSize: '60px', marginBottom: '40px', marginTop: '60px' }}>Help</h1>
                        <h2>Frequently Asked Questions</h2>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12 text-white mt-5">
                        <ul>
                            {FAQData.map((faq, index) => (
                                <li key={faq.id}>
                                    <h4>
                                        {faq.question + " "}
                                        <button
                                            className="btn btn-warning"
                                            onClick={() => toggleAnswer(index)}
                                        >
                                            {openIndex === index ? '-' : '+'}
                                        </button>
                                    </h4>
                                    {openIndex === index && <h5 style={{fontFamily:"sans-serif"}} >{faq.answer}</h5>}
                                    <br />
                                </li>
                                
                            ))}
                        </ul>

                    </div>
                </div>
            </div>


        </div>
    )

}
