import React, { useState } from 'react';
import * as emailjs from 'emailjs-com'
import Helmet from 'react-helmet';

import apiKeys from './apiKeys';
import Spinner from '../../../Components/Spinner/Spinner';

const AppForm = (props) => {
    const [data, setData] = useState({
        firstName: "null",
        lastName: "null",
        age: "null",
        sex: "null",
        status: "null",
        occupation: "null",
        contactnumber: "null",
        email: "null",
        relationship: "null",
        guardfname: "null",
        guardlname: "null",
        guardnumber: "null",
        guardemail: "null",
        height: "null",
        weight: "null",
        waist: "null",
        shoesize: "null",
        shirtsize: "null",
        loading: false,
        done: false,
        error: false,
    });

    const handleInputChange = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setData({
            ...data,
            loading: true
        });
        var nm = `${data.firstName} ${data.lastName}`;

        const message = `You have an application from ${nm}.`
        let templateParams = {
            from_name: nm,
            name: 'Taahirah',
            subject: 'Application Form',
            email: data.email,
            message_html: message
        };
        await fetch('https://tmamern.herokuapp.com/api/model/create', {
            method: 'POST',
            body: JSON.stringify({
                "firstName": data.firstName,
                "lastName": data.lastName,
                "age": data.age,
                "sex": data.sex,
                "status": data.status,
                "occupation": data.occupation,
                "contactnumber": data.contactnumber,
                "email": data.email,
                "relationshipToChild": data.relationship,
                "guardFirstname": data.guardfname,
                "guardLastname": data.guardlname,
                "guardnumber": data.guardnumber,
                "guardemail": data.guardemail,
                "height": data.height,
                "weight": data.weight,
                "waist": data.waist,
                "shoesize": data.shoesize,
                "shirtsize": data.shirtsize
            }),
            headers: ({
                "Content-Type": "application/json"
            })
        })
            .then(result => {
                if (result.ok) {
                    emailjs.send(apiKeys.SERVICE_ID, apiKeys.TEMPLATE_ID, templateParams, apiKeys.USER_ID)
                        .then(result => {
                            alert('Message sent, We will respond shortly. Thank you. Please go back to the Home page', result.text);
                            setData({
                                loading: false,
                                done: true
                            });
                        },
                            error => {
                                alert('An error was encounter, Please try again', error.text);
                                setData({
                                    loading: false,
                                    error: true
                                });
                            }
                        )
                }
            })
            .then(() => {
                fetch('https://tmaapi.herokuapp.com/api/application/', {
                    method: 'POST',
                    body: JSON.stringify({
                        "firstName": data.firstName,
                        "lastName": data.lastName,
                        "age": data.age,
                        "sex": data.sex,
                        "idNum": "null",
                        "status": data.status,
                        "occupation": data.occupation,
                        "contactnumber": data.contactnumber,
                        "email": data.email,
                        "relationshipToChild": data.relationship,
                        "guardFirstname": data.guardfname,
                        "guardLastname": data.guardlname,
                        "guardnumber": data.guardnumber,
                        "guardemail": data.guardemail,
                        "height": data.height,
                        "weight": data.weight,
                        "waist": data.waist,
                        "shoesize": data.shoesize,
                        "shirtsize": data.shirtsize
                    }),
                    headers: ({
                        "Content-Type": "application/json"
                    })
                })
            })
            .catch(() => {
                alert('An error was encounter, Please try again');
                setData({
                    loading: false,
                    done: false,
                    error: true
                });
            })
    }

    const formElementsArray = [];
    for (let key in data) {
        formElementsArray.push({
            id: key,
            config: data[key]
        });
    }
    const guardian = (
        <div>
            <h1 className='text'>Guardian details</h1>
            <h4 className='text'>Please enter the guardian’s details if you are under 18 years</h4>
            <h4 className='text'>Relationship to child</h4>
            <input
                onChange={handleInputChange}
                type="text"
                name="relationship"
                size="50"
                placeholder="Your answer" />
            <h4 className='text'>First Name</h4>
            <input
                onChange={handleInputChange}
                type="text"
                name="guardfname"
                size="50"
                placeholder="Your answer"
            />
            <h4 className='text'>Surname</h4>
            <input
                onChange={handleInputChange}
                type="text"
                name="guardlname"
                size="50"
                placeholder="Your answer"
            />
            <h4 className='text'>Contact Number</h4>
            <input
                onChange={handleInputChange}
                type="text"
                name="guardnumber"
                size="50"
                placeholder="Your answer"
            />
            <h4 className='text'>Email Address</h4>
            <input
                onChange={handleInputChange}
                type="text"
                name="guardemail"
                size="50"
                placeholder="Your answer"
            />
        </div>
    )
    const form = (
        <form className={"AppForm"} onSubmit={handleSubmit} >
            <h1 className='text'>Applicant's Information</h1>
            <h4 className='text'>First Name</h4>
            <input
                type="text"
                onChange={handleInputChange}
                name="firstName"
                size="50"
                placeholder="Your Answer"
            />
            <h4 className='text'>Last Name</h4>
            <input
                type="text"
                onChange={handleInputChange}
                name="lastName"
                size="50"
                placeholder="Your Answer"
            />
            <h4 className='text'>Age (must be between 5-35 years)</h4>
            <input
                type="text"
                onChange={handleInputChange}
                name="age"
                size="50"
                placeholder="Your Answer"
            />
            <h4 className='text'>Status</h4>
            <select onChange={handleInputChange} className="dropdown" name='status' >
                <option value={"null"}>Your Answer</option>
                <option value={"Married"}>Married</option>
                <option value={"Single"}>Single</option>
                <option value={"Divorced"}>Divorced</option>
                <option value={"Separated"}>Separated</option>
            </select>


            <h4 className='text'>Sex</h4>
            <select onChange={handleInputChange} className="dropdown" name='sex' >
                <option value={"null"}>Your Answer</option>
                <option value={"Female"}>Female</option>
                <option value={"Male"}>Male</option>
                <option value={"LGBTG"}>LGBTG</option>
            </select>


            <h4 className='text'>Occupation</h4>
            <select onChange={handleInputChange} className="dropdown" name='occupation' >
                <option value={"null"}>Your Answer</option>
                <option value={"Student"}>Student</option>
                <option value={"Unemployed"}>Unemployed</option>
                <option value={"Employed"}>Employed</option>
            </select>
            <h4 className='text'>Contact Number</h4>
            <input
                onChange={handleInputChange}
                type="text"
                name="contactnumber"
                size="50"
                placeholder="Your Answer"
            />
            <h4 className='text'>Email Address</h4>
            <input
                onChange={handleInputChange}
                type="email"
                name="email"
                size="50"
                placeholder="Your Answer"
            />
            {
                data.age < 18
                    ? guardian
                    : <br />
            }
            <div className="section-title"></div>
            <h1 className='text'>Measurements</h1>
            <h4 className='text'>Due to COVID-19, we will only have photo-shoots, private lessons and online coaching.</h4>
            <h4 className='text'>Height (cm)</h4>
            <input
                onChange={handleInputChange}
                type="text"
                name="height"
                size="10"
                placeholder="Your answer"
            />
            <h4 className='text'>Weight (kg)</h4>
            <input
                onChange={handleInputChange}
                type="text"
                name="weight"
                size="10"
                placeholder="Your answer"
            />
            <h4 className='text'>Waist (cm)</h4>
            <input
                onChange={handleInputChange}
                type="text"
                name="waist"
                size="10"
                placeholder="Your answer"
            />
            <h4 className='text'>Shoe size</h4>
            <input
                onChange={handleInputChange}
                type="text"
                name="shoesize"
                size="10"
                placeholder="Your answer"
            />
            <h4 className='text'>T-shirt size</h4>
            <select onChange={handleInputChange} className="dropdown" name='shirtsize' >
                <option value={"null"}>Your Answer</option>
                <option value={"XS"}>XS</option>
                <option value={"S"}>S</option>
                <option value={"M"}>M</option>
                <option value={"L"}>L</option>
                <option value={"XL"}>XL</option>
                <option value={"XXL"}>XXL</option>
            </select>
            <h1 className='text'>N.B for application to be considered please remember to pay the application fee:</h1>
            <h3 className='text'>Please revisit the <a className='text' href='/tma#fees'>2022 Fees Packages</a> in the landing page to get more information howmuch you should pay</h3>

            <h1 className='text'>Banking Details</h1>
            <h3 className='text'>Information on the banking details will be sent to you, as soon as application is reviewed</h3>

            <h1 className='text'>After paying, please remember to email you:</h1>
            <h4 className='text'>Proof of payment</h4>
            <h4 className='text'>Copy of ID</h4>
            <h4 className='text'>Half and full length Picture</h4>


            <button className="Apply">
                Submit
            </button>
        </form >
    );
    const loadingForm = (
        <div>
            <Spinner />
            <h2 className='text'>Is this taking too long?</h2>
            <button className='btn-custom' onClick={() => {
                setData({
                    firstName: "null",
                    lastName: "null",
                    age: "null",
                    sex: "null",
                    status: "null",
                    occupation: "null",
                    contactnumber: "null",
                    email: "null",
                    relationship: "null",
                    guardfname: "null",
                    guardlname: "null",
                    guardnumber: "null",
                    guardemail: "null",
                    height: "null",
                    weight: "null",
                    waist: "null",
                    shoesize: "null",
                    shirtsize: "null",
                    loading: false,
                    done: false,
                    error: false,

                })
            }} >Try Again</button>
            <br />
            <h3 className='text'>If you're tring this for the 3rd time please contact us and we will fix this error.</h3>
            <br />
            <a className='btn-custom' href='/tma#contact'>Tell us about the Error</a>
        </div>
    );
    const errorForm = (
        <div className='body-padding text-center'>
            <h1 className='text'>ERROR!</h1>
            <h1 className='text'>Please try again</h1>
            <h3 className='text'>This error may be caused by using an email or phone number that is already ready in our system.</h3>
            <h3 className='text'>We need you to fill in all the information that is relevant to your application.</h3>
            <button className='btn-custom' onClick={() => {
                setData({
                    firstName: "null",
                    lastName: "null",
                    age: "null",
                    sex: "null",
                    status: "null",
                    occupation: "null",
                    contactnumber: "null",
                    email: "null",
                    relationship: "null",
                    guardfname: "null",
                    guardlname: "null",
                    guardnumber: "null",
                    guardemail: "null",
                    height: "null",
                    weight: "null",
                    waist: "null",
                    shoesize: "null",
                    shirtsize: "null",
                    loading: false,
                    done: false,
                    error: false,

                })
            }} >Try Again</button>
        </div>
    );
    const doneForm = (
        <div className='body-padding text-center'>
            <div className='section-title'>
                <h1 className='text'>Keep an eye open for a response from the academy</h1>
                <h3 className='text'>The bank details will be emailed to you after the review of your application</h3>
                <h3 className='text'>In the mean time, please view the 2022 Fees packages to ensure you pay for the package that best suits you.</h3>
                <br />
                <a href='/tma#fees' className='btn-custom'>2022 FEES</a>
            </div>
            <a href={'/tma'} className='btn-custom'>DONE</a>
        </div>
    )
    return (
        <div id="app-form" className="text-center">
            <Helmet>
                <title>Application</title>
            </Helmet>
            <div className="container">
                <div className="Heading">
                    <h2 className='text'>TMA Application Form</h2>
                    <h3 className='text'>Applications are currently open.</h3>
                    <h3 className='text'>Please fill in the following form with your information</h3>
                    <br></br>
                    {!data.loading && !data.error && !data.done && form}
                    {data.loading && !data.error && !data.done && loadingForm}
                    {!data.loading && data.error && !data.done && errorForm}
                    {!data.loading && !data.error && data.done && doneForm}
                    <br />
                </div>
            </div>
        </div>
        // <div className={"text-center"}>
        //     <Helmet>
        //         <title>Application</title>
        //     </Helmet>
        //     <div className="Heading">
        //         <h2>TMA Application Form</h2>
        //         <h3 className='text'>Applications are currently closed. Please follow us on our social media platforms to see when will the we reopen applications.</h3>
        //     </div>
        // {/* {form} */}
        // </div>
    )
}

export default AppForm;