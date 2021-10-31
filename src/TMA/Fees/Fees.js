import React from 'react';

const Fees = () => {
    return (
        <div id='fees'>
            <div className='container'>
                <div className='text-center'>
                    <div className='section-title'>
                        <h2 className='text'>2022 Fees packages</h2>
                    </div>
                </div>
                <div className="col-md-9 body-padding">
                    <h2 className='text'>Please Note:</h2>
                    <h4 className='text'> - It is compulsory to pay the registration fee</h4>
                    <h4 className='text'> - Once the registration fee has been paid, you receive a free TMA T-shirt</h4>
                    <h4 className='text'> - Each package has 3 options: Monthly fee; Quarterly fee; Once off payment (11 months contract)</h4>
                </div>
                <div className='col-md-9 body-padding'>
                    <div>
                        <h3 className='text'>Package 1</h3>
                        <ul>
                            <li> - Registration fee: R180</li>
                            <li> - Monthly fee: R250</li>
                            <li> - Quarterly fee (every 3 months) : R700</li>
                            <li> - Once off payment (11 months): R2700</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text'>Package 2</h3>
                        <ul>
                            <li> - Registration fee: R180</li>
                            <li> - Monthly fee: R350</li>
                            <li> - Quarterly fee (every 3 months): R1000</li>
                            <li> - Once off payment (11 months): R3800</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text'>Package 3</h3>
                        <ul>
                            <li> - Registration fee: R180</li>
                            <li> - Monthly fee: R400</li>
                            <li> - Quarterly fee (every 3 months): R1100</li>
                            <li> - Once off payment (11 months): R4300</li>
                        </ul>
                    </div>
                </div>
            </div>
            <br />
        </div>
    )
}

export default Fees;
