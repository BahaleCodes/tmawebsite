import React, { Component } from 'react';
import * as emailjs from 'emailjs-com'
import Helmet from 'react-helmet';

import './AppForm.css';
import apiKeys from './apiKeys';
import Spinner from '../../../../../Components/Spinner/Spinner';

class AppForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appForm: {
                fullname: props.fullname,
                age: props.age,
                idnumber: props.idnumber,
                sex: props.sex,
                status: props.status,
                occupation: props.occupation,
                contactnumber: props.contactnumber,
                email: props.email,
                relationship: props.relationship,
                guardname: props.guardname,
                guardnumber: props.guardnumber,
                guardemail: props.guardemail,
                height: props.height,
                weight: props.weight,
                waist: props.waist,
                shoesize: props.shoesize,
                shirtsize: props.shirtsize,
                loading: false,
          }
        }
      }

    handleFname = (e) => {
        var appForm = this.state.appForm;
        appForm.fullname = e.target.value;

        this.setState({appForm: appForm});
    }
    handleAge = (e) => {
        var appForm = this.state.appForm;
        appForm.age = e.target.value;

        this.setState({appForm: appForm});
    }
    handleId = (e) => {
        var appForm = this.state.appForm;
        appForm.idnumber = e.target.value;

        this.setState({appForm: appForm});
    }
    handleSex = (e) => {
        var appForm = this.state.appForm;
        appForm.sex = e.target.value;

        this.setState({appForm: appForm});
    }
    handleStatus = (e) => {
        var appForm = this.state.appForm;
        appForm.status = e.target.value;

        this.setState({appForm: appForm});
    }
    handleOQ = (e) => {
        var appForm = this.state.appForm;
        appForm.occupation = e.target.value;

        this.setState({appForm: appForm});
    }
    handleCall = (e) => {
        var appForm = this.state.appForm;
        appForm.contactnumber = e.target.value;

        this.setState({appForm: appForm});
    }        
    handleEmail = (e) => {
        var appForm = this.state.appForm;
        appForm.email = e.target.value;

        this.setState({appForm: appForm});
    } 
    handleRela = (e) => {
        var appForm = this.state.appForm;
        appForm.relationship = e.target.value;

        this.setState({appForm: appForm});
    }
    handleGname = (e) => {
        var appForm = this.state.appForm;
        appForm.guardname = e.target.value;

        this.setState({appForm: appForm});
    }
    handleGnum = (e) => {
        var appForm = this.state.appForm;
        appForm.guardnumber = e.target.value;

        this.setState({appForm: appForm});
    }
    handleGemail = (e) => {
        var appForm = this.state.appForm;
        appForm.guardemail = e.target.value;

        this.setState({appForm: appForm});
    }
    handleH = (e) => {
        var appForm = this.state.appForm;
        appForm.height = e.target.value;

        this.setState({appForm: appForm});
    }
    handleW = (e) => {
        var appForm = this.state.appForm;
        appForm.weight = e.target.value;

        this.setState({appForm: appForm});
    }
    handleWa = (e) => {
        var appForm = this.state.appForm;
        appForm.waist = e.target.value;

        this.setState({appForm: appForm});
    }
    handleSsize = (e) => {
        var appForm = this.state.appForm;
        appForm.shoesize = e.target.value;

        this.setState({appForm: appForm});
    }
    handleShirt = (e) => {
        var appForm = this.state.appForm;
        appForm.shirtsize = e.target.value;

        this.setState({appForm: appForm});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({loading: true});
        var nm = this.state.appForm.fullname;
        var ag = this.state.appForm.age;
        var idn = this.state.appForm.idnumber;
        var st = this.state.appForm.status;
        var gen = this.state.appForm.sex;
        var wrk = this.state.appForm.occupation;
        var nmb = this.state.appForm.contactnumber;
        var eml = this.state.appForm.email;
        var gardname = this.state.appForm.guardname;
        var gardemail = this.state.appForm.guardemail;
        var gardnum = this.state.appForm.guardnumber;
        var gardrele = this.state.appForm.relationship;

        var h = this.state.appForm.height;
        var w = this.state.appForm.weight;
        var wa = this.state.appForm.waist;
        var ss = this.state.appForm.shoesize;
        var tss = this.state.appForm.shirtsize;

        const message = JSON.stringify(this.state.appForm);
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
            gardian: "Guardian Name: "+gardname+
                    ", Guardian E-mail: "+gardemail+
                    ", Guardian Number: "+gardnum+
                    ", Guardian Relationship: "+gardrele,
            height: h,
            weight: w,
            waist: wa,
            shoe: ss,
            size: tss,
            message_html: message
         };
        emailjs.send(apiKeys.SERVICE_ID, apiKeys.TEMPLATE_ID, templateParams, apiKeys.USER_ID)
        .then( result => {
            alert('Message sent, We will respond shortly. Thank you. Please go back to the Home page', result.text);
            this.setState({loading: false});
            },
            error => {
                alert('An error was encounter, Please try again', error.text);
                this.setState({loading: false});
            }
        )
        console.log(this.state.appForm.fullname);
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.appForm[key]
            });
        }
        let form = (
            <form className={"AppForm"} onSubmit={this.handleSubmit} >
                        <h1>Applicant's Information</h1>
                        <div className="container">
                            <h4>Full Name</h4>
                            <input type="text" value={this.state.appForm.fullname} onChange={this.handleFname.bind(this)} name="fullname" size="50" placeholder="Your Answer" required />
                            <br />
                            <br />
                        </div>
                        <br/>
                        <div className="container">
                            <h4>Age (must be between 5-35 years)</h4>
                            <input type="text" value={this.state.appForm.age} onChange={this.handleAge.bind(this)} name="age" size="50" placeholder="Your Answer" required />
                            <br />
                            <br />
                        </div>
                        <br/>
                        <div className="container">
                            <h4>ID Number</h4>
                            <input type="text"value={this.state.appForm.idnumber} onChange={this.handleId.bind(this)} name="idnumber" size="50" placeholder="Your Answer" required />
                            <br />
                            <br />
                        </div>
                        <br/>
                        <div className="container">
                            <h4>Status</h4>
                            <select onChange={this.handleStatus.bind(this)} value={this.state.appForm.status} className="dropdown" required >
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
                            <h4>Sex</h4>
                            <select onChange={this.handleSex.bind(this)} value={this.state.appForm.sex} className="dropdown" required >
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
                            <h4>Occupation</h4>
                            <select onChange={this.handleOQ.bind(this)} value={this.state.appForm.occupation} className="dropdown" required >
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
                            <h4>Contact Number</h4>
                            <input value={this.state.appForm.contactnumber} onChange={this.handleCall.bind(this)} type="text" name="contactnumber" size="50" placeholder="Your Answer" required />
                            <br />
                            <br />
                        </div>
                        <br/>
                        <div className="container">
                            <h4>Email Address</h4>
                            <input value={this.state.appForm.email} onChange={this.handleEmail.bind(this)} type="email" name="email" size="50" placeholder="Your Answer" required />
                            <br />
                            <br />
                        </div>
                        <br />
                        <h1>Guardian details</h1>
                        <h4>Please enter the guardian’s details if you are under 18 years</h4>
                        <div className="container">
                            <br />
                            <h4>Relationship to child</h4>
                            <input value={this.state.appForm.relationship} onChange={this.handleRela.bind(this)} type="text" name="relationship" size="50" placeholder="Your answer"/>
                            <br/>
                            {}
                            <br/>
                        </div>
                        <br />
                        <div className="container">
                            <h4>Name and Surname</h4>
                            <input value={this.state.appForm.guardname} onChange={this.handleGname.bind(this)} type="text" name="gname" size="50" placeholder="Your answer"/>
                            <br />
                            {}
                            <br />
                        </div>
                        <br />
                        <div className="container">
                            <h4>Contact Number</h4>
                            <input value={this.state.appForm.guardnumber} onChange={this.handleGnum.bind(this)} type="text" name="gnumber" size="50" placeholder="Your answer"/>
                        </div>
                        <br />
                        <div className="container">
                            <h4>Email Address</h4>
                            <input value={this.state.appForm.guardemail} onChange={this.handleGemail.bind(this)} type="text" name="gemail" size="50" placeholder="Your answer"/>

                        </div>
                        <br />
                        <div className="section-title"></div>
                        <h1>Measurements</h1>
                        <h4>Due to COVID-19, we will only have photo-shoots, private lessons and online coaching.</h4>
                        <div className="container">
                            <br />
                            <h4>Height (cm)</h4>
                            <input value={this.state.appForm.height} onChange={this.handleH.bind(this)} type="text" name="height" size="10" placeholder="Your answer" required />
                            <br/>
                            {}
                            <br/>
                        </div>
                        <br />
                        <div className="container">
                            <h4>Weight (kg)</h4>
                            <input value={this.state.appForm.weight} onChange={this.handleW.bind(this)} type="text" name="weight" size="10" placeholder="Your answer" required />
                            <br />
                            {}
                            <br />
                        </div>
                        <br />
                        <div className="container">
                            <h4>Waist (cm)</h4>
                            <input value={this.state.appForm.waist} onChange={this.handleWa.bind(this)} type="text" name="waist" size="10" placeholder="Your answer" required />
                        </div>
                        <br />
                        <div className="container">
                            <h4>Shoe size</h4>
                            <input value={this.state.appForm.shoesize} onChange={this.handleSsize.bind(this)} type="text" name="shoesize" size="10" placeholder="Your answer" required />
                        </div>
                        <div className="container">
                            <h4>T-shirt size</h4>
                            <select onChange={this.handleShirt.bind(this)} value={this.state.appForm.shirtsize} className="dropdown" required >
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
                            <h1>N.B for application to be considered please remember to pay:</h1>
                            <h4>Registration fee R150 (free T-shirt)</h4>
                            <h4>Per month- R250</h4>
                            <h4>Private lessons- R300 per month</h4>
                            <br/>
                            <br/>
                            <h1>Banking Details</h1>
                            <h4>FNB</h4>
                            <h4>Account name: Taahirah Modeling Academy</h4>
                            <h4>Account number: 62829917882</h4>
                            <h4>Reference: (Name and Surname)</h4>

                            <br/>
                            <h1>After paying, please remember to email you:</h1>
                            <h4>Proof of payment</h4>
                            <h4>Copy of ID</h4>
                            <h4>Half and full length Picture</h4>
                        </div>
                        <br />
                    <br/>
                    <button className="Apply">
                        Submit
                    </button>
                </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div id="contact" className="text-center">
                <Helmet>
                    <title>Application</title>
                </Helmet>
                <div className="container">
                    <div className="Heading">
                        <h2>TMA Application Form</h2>
                        <h3>Applications are currently closed. Please follow us on our social media platforms to see when applications will be reopened.</h3>
                        <br></br>
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
                                            <i className="fa fa-linkedIn"></i>
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
            //         <h3>Applications are currently closed. Please follow us on our social media platforms to see when will the we reopen applications.</h3>
            //     </div>
                    // {/* {form} */}
            // </div>
        )
    }
}

export default AppForm;