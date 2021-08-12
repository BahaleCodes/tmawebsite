import React, { useState } from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com';

import apiKeys from '../../Containers/Applications/AppForm/apiKeys';
import Footer from '../../../../Components/footer';
import Navigation from '../navigation';

const FonmmForm = () => {
    const [didSubmit, setDidSubmit] = useState(false);
    const initialState = {
        first_name: '',
        last_name: '',
        age: 0,
        sex: '',
        occupation: '',
        phone_number: 0,
        email: '',
        category: '',
        occupation_other: '',
        sub_district: '',
        sub_other: '',
        gemail: 'none@none.com',
        gnumber: 'null',
        gfname: 'null',
        glname: 'null',
        relationship: 'null',
        half_pic: null,
        full_pic: null,
        isSubmitting: false,
        errorFound: false

    }
    const [data, setData] = useState(initialState);
    const handleInputChange = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
        console.log(data.half_pic);
    };
    const handleFImage = (e) => {
        setData({
            ...data,
            full_pic: e.target.files[0]
        })
    };
    const handleHImage = (e) => {
        setData({
            ...data,
            half_pic: e.target.files[0]
        })
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setData({
            ...data,
            isSubmitting: true
        });
        const formData = new FormData();

        formData.append("firstName", data.first_name);
        formData.append("lastName", data.last_name);
        formData.append("age", data.age);
        formData.append("sex", data.sex);
        formData.append("occupation", `${data.occupation} ${data.occupation_other}`);
        formData.append("contactnumber", data.phone_number);
        formData.append("email", data.email);
        formData.append("category", data.category);
        formData.append("sub_district", `${data.sub_district} ${data.sub_other}`);
        formData.append("relationshipToChild", data.relationship);
        formData.append("guardFirstname", data.gfname);
        formData.append("guardLastname", data.glname);
        formData.append("guardnumber", data.gnumber);
        formData.append("guardemail", data.gemail);
        formData.append("half_pic", data.half_pic);
        formData.append("full_pic", data.full_pic);
        
        await axios.post('https://tmaapi.herokuapp.com/api/FoNMM/', formData, {
            headers: { "Content-Type": "application/json" }
        })

        .then(res => {
            if (res.bad) {
                return res.json
            }
            var nm = `${data.first_name} ${data.last_name}`;
            var mess = `${nm} has applied for the Face of Ngaka Modiri Molema Pageant. Please go to the admin dashboard to review application`;
            let templateParams = {
                from_name: nm,
                to_name: 'Taahirah',
                subject: 'Face of Ngaka Modiri Molema',
                message_html: mess,
                from_email: data.email
            };
            emailjs.send(apiKeys.SERVICE_ID, "template_spkntrh", templateParams, apiKeys.USER_ID)
            .then( result => {
                alert('Message sent, we will respond shortly. Thank you.', result.text);
                setData({
                    ...data,
                    isSubmitting: false
                })                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                },
                error => {
                    alert('An error was encounter, Please try again', error.text);
                }
            )
            // setData({
            //     ...data,
            //     errorFound: true
            // })
        })
            .catch(error => {
                console.log(error.message);
                return;
            });
        setDidSubmit(true);
    }

    const personalInfo = (
        <div className='section'>
            <h2>Personal Information</h2>
            <h4>First Name</h4>
            <input
                type="text"
                id='first_name'
                name="first_name"
                size="50"
                placeholder="* Your Answer"
                required
                onChange={handleInputChange}
            />
            <h4>Last Name</h4>
            <input
                type="text"
                id='last_name'
                name="last_name"
                size="50"
                placeholder="* Your Answer"
                required
                onChange={handleInputChange}
            />
            <br />
            <h4>Age </h4>
            <input
                type="number"
                id='age'
                name="age"
                size="5"
                placeholder="* Your Answer"
                required
                onChange={handleInputChange}
            />
            <br />
            <h4>Sex</h4>
            <select className="dropdown" required name='sex' id='sex' onChange={handleInputChange}>
                <option value={"null"}>* Your Answer</option>
                <option value={"Female"}>Female</option>
                <option value={"Male"}>Male</option>
                <option value={"LGBTQIA+"}>LGBTG</option>
            </select>
            <br />
            <h4>Occupation</h4>
            <select className="dropdown" id='occupation' name='occupation' required onChange={handleInputChange}>
                <option value={"null"}>* Your Answer</option>
                <option value={"Student"}>Student</option>
                <option value={"Unemployed"}>Unemployed</option>
                <option value={"Employed"}>Employed</option>
                <option value={"Other"}>Other</option>
            </select>
            {
                data.occupation === 'Other'
                    ? <div className='op-sec'>
                        <br />
                        <input
                            id='occupation_other'
                            name='occupation_other'
                            type='text'
                            placeholder='* Your Answer'
                            className='form-control'
                            required
                            onChange={handleInputChange}

                        />
                    </div>
                    : <br />
            }
            <br />
            <h4>WhatsApp Number</h4>
            <input
                type="number"
                id='phone_number'
                name="phone_number"
                size="10"
                placeholder="* Your Answer"
                required
                onChange={handleInputChange}
            />
            <h4>Email Address</h4>
            <input
                type="email"
                id='email'
                name="email"
                size="50"
                placeholder="* Your Answer"
                required
                onChange={handleInputChange}
            />
            <br />
            <br />
            <h4>Category</h4>
            <select className="dropdown" id='category' name='category' required onChange={handleInputChange} >
                <option value={"null"}>* Your Answer</option>
                <option value={"Pre Teen"}>Pre Teen: 8-12 years</option>
                <option value={"Jnr Teen"}>Jnr Teen: 13-15 years</option>
                <option value={"Teen"}>Teen: 16-19 years</option>
                <option value={"Senior"}>Senior: 20-29 years</option>
                <option value={"Miss Drag"}>Miss Drag: 17-27 years</option>
            </select>
            <br />
            <h4>Sub-District</h4>
            <select className="dropdown" id='sub_district' name='sub_district' required onChange={handleInputChange} >
                <option value={"null"}>* Your Answer</option>
                <option value={"Mafikeng"}>Mafikeng</option>
                <option value={"Ratlou"}>Ratlou</option>
                <option value={"Tswaing"}>Tswaing</option>
                <option value={"Ditsobotla"}>Ditsobotla</option>
                <option value={"Ramotshere Moiloa"}>Ramotshere Moiloa</option>
                <option value={"Other"}>Other</option>
            </select>
            {
                data.sub_district === 'Other'
                    ? <div className='op-sec'>
                        <br />
                        <input
                            id='sub_other'
                            name='sub_other'
                            type='text'
                            placeholder='* Your Answer'
                            className='form-control'
                            required
                            onChange={handleInputChange}
                        />
                    </div>
                    : <br />
            }
        </div>
    )
    const guardian = (
        <div className='section'>
            <h2>Guardian details</h2>
            <h4>Please enter the guardian’s details if you are under 18 years</h4>
            <br />
            <h4>Relationship to child</h4>
            <input
                type="text"
                id='relationship'
                name="relationship"
                size="50"
                placeholder="* Your answer"
                required
                onChange={handleInputChange}
            />
            <br />
            <h4>First Name</h4>
            <input
                type="text"
                id='gfname'
                name="gfname"
                size="50"
                placeholder="* Your answer"
                required
                onChange={handleInputChange}
            />
            <br />
            <h4>Last Name</h4>
            <input
                type="text"
                id='glname'
                name="glname"
                size="50"
                placeholder="* Your answer"
                required
                onChange={handleInputChange}
            />
            <br />
            <h4>Contact Number</h4>
            <input
                type="text"
                name="gnumber"
                size="50"
                placeholder="* Your answer"
                required
                onChange={handleInputChange}
            />
            <h4>Email Address</h4>
            <input
                type="text"
                name="gemail"
                size="50"
                placeholder="* Your answer"
                required
                onChange={handleInputChange}
            />
        </div>
    )
    const files = (
        <div className='section'>
            <h2>Files</h2>
            <h4>Half Picture (Portrait)</h4>
            <input
                type='file'
                id='half_pic'
                name='half_pic'
                accept='image/png, image/jpeg, image/jpg'
                onChange={handleHImage}
                required
            />
            <br />
            <h4>Full Body Picture</h4>
            <input
                type='file'
                id='full_pic'
                name='full_pic'
                accept='image/png, image/jpeg, image/jpg'
                onChange={handleFImage}
                required
            />
            <br />
        </div>
    )

    const didSubmitContent = (
        <React.Fragment>
            <div className="load-cnt">
                <h2>You are successfully Applied for the Face of Ngaka Modiri Molema pageant!</h2>
                <h4>Please keep an eye open for a response from our admin with further instructions for the application</h4>
                <div>
                    <a className={'btn btn-default submit'} href='/tma#fonmm'>
                        Done
                    </a>
                </div>
            </div>
        </React.Fragment>
    )
    const isSubmittingApplication = (
        <div className="load-cnt">
            <h2>Sending Data...</h2>
            <p>This might take some time, especially because of the great quality of you images.</p>
            <p>Please don't leave this page till instructed.</p>
        </div>
    );
    const errorDiv = (
        <div className='load-cnt'>
            <h2>ERROR</h2>
            <p>We have encountered an error uploading your information</p>
            <p>Please try again and if the error persists, contact the website Admin by clicking the contact us button bellow, which will direct you to where you can leave us a message.</p>
            <div>
                    <a className={'btn-default-secondary'} href='/tma#contact'>
                        Contact Us
                    </a>
                </div>
                <div>
                    <a className={'btn btn-default submit'} href='/tma#fonmm'>
                        Done
                    </a>
                </div>
        </div>
    )
    const formContainer = (
        <form className={"AppForm"} onSubmit={handleSubmit} validate>
            <h1>Applicant's Information</h1>
            {personalInfo}
            <br />
            {
                (
                    data.category === 'Pre Teen' ||
                    data.category === 'Jnr Teen' ||
                    data.category === 'Teen') &&
                    data.age < 18 &&
                    !data.age == 0
                    ? guardian
                    : <br />
            }
            <br />
            {files}
            <br />
            <div className='btn-section'>
                <button className="btn btn-custom btn-lg">
                    Submit
                </button>
            </div>
        </form>
    )
    return (
        <div>
            <Navigation />
            <div id='fonmm-form' className='text-center'>
                <div className='container'>
                    {!data.errorFound && !data.isSubmitting && !didSubmit && formContainer}
                    {!data.errorFound && data.isSubmitting && isSubmittingApplication}
                    {!data.errorFound && !data.isSubmitting && didSubmit && didSubmitContent}
                    {data.errorFound && errorDiv }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default FonmmForm;