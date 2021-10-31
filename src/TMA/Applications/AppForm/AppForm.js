import React, { useState } from 'react';
import * as emailjs from 'emailjs-com'
import Helmet from 'react-helmet';

import apiKeys from './apiKeys';
import Spinner from '../../../Components/Spinner/Spinner';

const AppForm = (props) => {
    const [data, setData] = useState({
        fullname: null,
        age: null,
        idnumber: null,
        sex: null,
        status: null,
        occupation: null,
        contactnumber: null,
        email: null,
        relationship: null,
        guardname: null,
        guardnumber: null,
        guardemail: null,
        height: null,
        weight: null,
        waist: null,
        shoesize: null,
        shirtsize: null,
        loading: false,
        done: false, 
        error: false,
        minor: false
    });

    const handleInputChange = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setData({ 
            ...data,
            loading: true 
        });
        var nm = data.fullname;
        var ag = data.age;
        var idn = data.idnumber;
        var st = data.status;
        var gen = data.sex;
        var wrk = data.occupation;
        var nmb = data.contactnumber;
        var eml = data.email;
        var gardname = data.guardname;
        var gardemail = data.guardemail;
        var gardnum = data.guardnumber;
        var gardrele = data.relationship;

        var h = data.height;
        var w = data.weight;
        var wa = data.waist;
        var ss = data.shoesize;
        var tss = data.shirtsize;

        const message = JSON.stringify(data);
        let templateParams = {
            from_name: nm,
            name: 'Taahirah',
            subject: 'Application Form',
            age: ag,
            idNum: idn,
            status: st,
            gender: gen,
            work: wrk,
            num: nmb,
            email: eml,
            gardian: "Guardian Name: " + gardname +
                ", Guardian E-mail: " + gardemail +
                ", Guardian Number: " + gardnum +
                ", Guardian Relationship: " + gardrele,
            height: h,
            weight: w,
            waist: wa,
            shoe: ss,
            size: tss,
            message_html: message
        };
        emailjs.send(apiKeys.SERVICE_ID, apiKeys.TEMPLATE_ID, templateParams, apiKeys.USER_ID)
            .then(result => {
                alert('Message sent, We will respond shortly. Thank you. Please go back to the Home page', result.text);
                setData({ loading: false, done: true });
            },
                error => {
                    alert('An error was encounter, Please try again', error.text);
                    setData({ loading: false });
                }
            )
        console.log(data.fullname);
    }

    const formElementsArray = [];
    for (let key in data) {
        formElementsArray.push({
            id: key,
            config: data[key]
        });
    }
    let form = (
        <form className={"AppForm"} onSubmit={handleSubmit} >
            <h1 className='text'>Applicant's Information</h1>
            <div className="container">
                <h4 className='text'>First Name</h4>
                <input type="text" value={data.fullname} onChange={handleInputChange} name="fullname" size="50" placeholder="Your Answer" required />
                <br />
                <br />
                <h4 className='text'>Last Name</h4>
                <input type="text" value={data.fullname} onChange={handleInputChange} name="fullname" size="50" placeholder="Your Answer" required />
                <br />
                <br />
            </div>
            <br />
            <div className="container">
                <h4 className='text'>Age (must be between 5-35 years)</h4>
                <input  type="text" value={data.age} onChange={handleInputChange} name="age" size="50" placeholder="Your Answer" required />
                <br />
                <br />
            </div>
            <br />
            <div className="container">
                <h4 className='text'>ID Number</h4>
                <input  type="text" value={data.idnumber} onChange={handleInputChange} name="idnumber" size="50" placeholder="Your Answer" required />
                <br />
                <br />
            </div>
            <br />
            <div className="container">
                <h4 className='text'>Status</h4>
                <select onChange={handleInputChange} value={data.status} className="dropdown" required >
                    <option value={"null"}>Your Answer</option>
                    <option value={"Married"}>Married</option>
                    <option value={"Single"}>Single</option>
                    <option value={"Divorced"}>Divorced</option>
                    <option value={"Separated"}>Separated</option>
                </select>
                <br />
                <br />
            </div>
            <br />
            <div className="container">
                <h4 className='text'>Sex</h4>
                <select onChange={handleInputChange} value={data.sex} className="dropdown" required >
                    <option value={"null"}>Your Answer</option>
                    <option value={"Female"}>Female</option>
                    <option value={"Male"}>Male</option>
                    <option value={"LGBTG"}>LGBTG</option>
                </select>
                <br />
                <br />
            </div>
            <br />
            <div className="container">
                <h4 className='text'>Occupation</h4>
                <select onChange={handleInputChange} value={data.occupation} className="dropdown" required >
                    <option value={"null"}>Your Answer</option>
                    <option value={"Student"}>Student</option>
                    <option value={"Unemployed"}>Unemployed</option>
                    <option value={"Employed"}>Employed</option>
                </select>
                <br />
                <br />
            </div>
            <br />
            <div className="container">
                <h4 className='text'>Contact Number</h4>
                <input  value={data.contactnumber} onChange={handleInputChange} type="text" name="contactnumber" size="50" placeholder="Your Answer" required />
                <br />
                <br />
            </div>
            <br />
            <div className="container">
                <h4 className='text'>Email Address</h4>
                <input  value={data.email} onChange={handleInputChange} type="email" name="email" size="50" placeholder="Your Answer" required />
                <br />
                <br />
            </div>
            <br />
            <h1 className='text'>Guardian details</h1>
            <h4 className='text'>Please enter the guardian’s details if you are under 18 years</h4>
            <div className="container">
                <br />
                <h4 className='text'>Relationship to child</h4>
                <input  value={data.relationship} onChange={handleInputChange} type="text" name="relationship" size="50" placeholder="Your answer" />
                <br />
                { }
                <br />
            </div>
            <br />  
            <div className="container">
                <h4 className='text'>Name and Surname</h4>
                <input  value={data.guardname} onChange={handleInputChange} type="text" name="gname" size="50" placeholder="Your answer" />
                <br />
                { }
                <br />
            </div>
            <br />
            <div className="container">
                <h4 className='text'>Contact Number</h4>
                <input  value={data.guardnumber} onChange={handleInputChange} type="text" name="gnumber" size="50" placeholder="Your answer" />
            </div>
            <br />
            <div className="container">
                <h4 className='text'>Email Address</h4>
                <input  value={data.guardemail} onChange={handleInputChange} type="text" name="gemail" size="50" placeholder="Your answer" />

            </div>
            <br />
            <div className="section-title"></div>
            <h1 className='text'>Measurements</h1>
            <h4 className='text'>Due to COVID-19, we will only have photo-shoots, private lessons and online coaching.</h4>
            <div className="container">
                <br />
                <h4 className='text'>Height (cm)</h4>
                <input  value={data.height} onChange={handleInputChange} type="text" name="height" size="10" placeholder="Your answer" required />
                <br />
                { }
                <br />
            </div>
            <br />
            <div className="container">
                <h4 className='text'>Weight (kg)</h4>
                <input  value={data.weight} onChange={handleInputChange} type="text" name="weight" size="10" placeholder="Your answer" required />
                <br />
                { }
                <br />
            </div>
            <br />
            <div className="container">
                <h4 className='text'>Waist (cm)</h4>
                <input  value={data.waist} onChange={handleInputChange} type="text" name="waist" size="10" placeholder="Your answer" required />
            </div>
            <br />
            <div className="container">
                <h4 className='text'>Shoe size</h4>
                <input  value={data.shoesize} onChange={handleInputChange} type="text" name="shoesize" size="10" placeholder="Your answer" required />
            </div>
            <div className="container">
                <h4 className='text'>T-shirt size</h4>
                <select onChange={handleInputChange} value={data.shirtsize} className="dropdown" required >
                    <option value={"null"}>Your Answer</option>
                    <option value={"XS"}>XS</option>
                    <option value={"S"}>S</option>
                    <option value={"M"}>M</option>
                    <option value={"L"}>L</option>
                    <option value={"XL"}>XL</option>
                    <option value={"XXL"}>XXL</option>
                </select>
                <br />
                <br />
            </div>
            <div className="container">
                <h1 className='text'>N.B for application to be considered please remember to pay the application fee:</h1>
                <h3 className='text'>Please revisit the <a className='text' href='/tma#fees'>2022 Fees Packages</a> in the landing page to get more information howmuch you should pay</h3>
                <br />
                <br />
                <h1 className='text'>Banking Details</h1>
                <h3 className='text'>Information on the banking details will be sent to you, as soon as application is reviewed</h3>
                <br />
                <h1 className='text'>After paying, please remember to email you:</h1>
                <h4 className='text'>Proof of payment</h4>
                <h4 className='text'>Copy of ID</h4>
                <h4 className='text'>Half and full length Picture</h4>
            </div>
            <br />
            <br />
            <button className="Apply">
                Submit
            </button>
        </form>
    );
    if (data.loading) {
        form = <Spinner />;
    }
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
                    {form}
                </div>
                <div className="col-md-12">
                    <div className="row">
                        <div className="social">
                            <ul>
                                <li>
                                    <a href={'https://www.facebook.com/Taahirah-Modeling-Academy-100298541503442/'} >
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href={'https://www.linkedin.com/in/taahirah-zungu-95a194203/?originalSubdomain=za'} >
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href={'https://www.instagram.com/taahirah_modeling_academy/?hl=en'} >
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
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