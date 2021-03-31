import React, { Component } from 'react'

import Questions from './Questions.json';

class FAQ extends Component{
    render() {
        return(
            <div id="faq" className="text-center">
                <div className="section-title">
                    <h2>
                        FAQ
                    </h2>
                    <div>
                        {Questions.FAQ.map((item, i) => (
                            <ul key={i}>
                                <h3>{item.question}</h3>
                                <p>{item.answer}</p>
                            </ul>
                        ))}
                    </div>
                    <div>
                        <ul>
                            <h3>How much is the fee?</h3>
                            <p>- REGISTRATION FEE: R150 (models will recieve a T-shirt after registration payment)</p>
                            <p>- Per month: R250</p>
                            <p>- Private lessons: R300 (per month)</p>
                        </ul>
                        <ul>
                            <h3>Application requirements?</h3>
                            <p>*after filling in the application form, the following should be attached:</p>
                            <p>- Copy of ID/ Birth Certificate</p>
                            <p>- scanned proof of payment</p>
                            <p>- Head size and full length photo</p>
                        </ul>
                        <ul>
                            <h3>What are the benefits?</h3>
                            <p>- Photoshoots</p>
                            <p>- Events to attend</p>
                            <p>- Z-card and portfolios</p>
                            
                        </ul>
                        <ul>
                            <h3>Where are you based?</h3>
                            <p>- Country: South Africa</p>
                            <p>- Province: North West</p>
                            <p>- City: Mafikeng, 2745</p>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default FAQ;


// REGISTRATION FEE: R150 (models will receive a T-shirt after registration fee
//     payment)
//     -per month: R250
//     -private lessons: R300 (per month)