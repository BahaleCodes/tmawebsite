import React, { Component } from "react";
import emailjs from 'emailjs-com';

import apiKeys from '../Applications/AppForm/apiKeys';
import insta from '../../../../img/ins.jpeg';
import fb from '../../../../img/fb.png';
import Icon from '../../../../Components/Icon/Icon';
import Spinner from "../../../../Components/Spinner/Spinner";

export class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contactForm: {
				name: props.name,
				email: props.email,
				message: props.message,
				loading: false,
			}
		}
	}
	handleName = (e) => {
		var contactForm = this.state.contactForm;
		contactForm.name = e.target.value;

		this.setState({contactForm: contactForm});
	}
	handleEmail = (e) => {
		var contactForm = this.state.contactForm;
		contactForm.email = e.target.value;

		this.setState({contactForm: contactForm});
	}
	handleMessage = (e) => {
		var contactForm = this.state.contactForm;
		contactForm.message = e.target.value;

		this.setState({contactForm: contactForm});
	}

	handleSubmit = (e) => {
        e.preventDefault();
        this.setState({loading: true});
        var nm = this.state.contactForm.name;
		var mess = this.state.contactForm.message;
        let templateParams = {
            from_name: nm,
            to_name: 'Taahirah',
            subject: 'Contact Form',
            message_html: mess,
			from_email: this.state.contactForm.email
        };
        emailjs.send(apiKeys.SERVICE_ID, "template_spkntrh", templateParams, apiKeys.USER_ID)
        .then( result => {
            alert('Message sent, we will respond shortly. Thank you.', result.text);
            this.setState({loading: false});
            },
            error => {
                alert('An error was encounter, Please try again', error.text);
                this.setState({loading: false});
            }
        )
		this.resetForm();
    }
	resetForm = () => {
		this.setState({
			name: '',
			email: '',
			subject: '',
			message: '',
		})
	}
	render() {
		let form;
		if (this.state.loading) {
			form = <Spinner />
		}
		return (
		<div>
			<div id="contact">
				<div className="container">
					<h2>
						About Us
					</h2>
					<div className="about-text">
						<p>
							{
								this.props.data
								? this.props.data.paragraph
								: 'loading...'
							}
						</p>
					</div>
					<div className="col-md-8">
						<div className="row">
							<div className="section-title">
								
								<h2>Get In Touch</h2>
								<p>
									Please fill out the form below to send us an email and we
									will get back to you as soon as possible.
								</p>
							</div>
							<form name="sentMessage" id="contactForm" onSubmit={this.handleSubmit}>
								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<input
												type="text"
												id="name"
												className="form-control"
												placeholder="Name"
												required
												value={this.state.name}
												onChange={this.handleName.bind(this)}
											/>
											<p className="help-block text-danger"></p>
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<input
												type="email"
												id="email"
												className="form-control"
												placeholder="Email"
												required="required"
												value={this.state.email}
												onChange={this.handleEmail.bind(this)}
											/>
											<p className="help-block text-danger"></p>
										</div>
									</div>
								</div>
								<div className="form-group">
									<textarea
										name="message"
										id="message"
										className="form-control"
										rows="4"
										placeholder="Message"
										required
										value={this.state.message}
										onChange={this.handleMessage.bind(this)}
										></textarea>
									<p className="help-block text-danger"></p>
								</div>
								{form}
								<button type="submit" className="btn btn-custom btn-lg">
									Send Message
								</button>
							</form>
						</div>
					</div>
					<div className="col-md-3 col-md-offset-1 contact-info">
						<div className="contact-item">
							<h3>Contact Info</h3>
						</div>
						<div className="contact-item">
							<p>
								<span>
									<i className="fa fa-phone"></i> WhatsApp
								</span>{" "}
								{
									this.props.data 
									? this.props.data.phone 
									: "loading"}
							</p>
						</div>
						<div className="contact-item">
							<p href="t.modelingacademy@gmail.com">
								<span>
									<i className="fa fa-envelope-o"></i> Email
								</span>{" "}
								{
									this.props.data 
									? this.props.data.email 
									: "loading"}
							</p>
						</div>
					</div>
					<div className="col-md-12">
						<div className="row">
							<div className="social">
                                <ul>
                                    <li>
                                        <a href={this.props.data ? this.props.data.facebook : '/'} >
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={this.props.data ? this.props.data.linkedIn : '/'} >
                                            <i className="fa fa-linkedIn"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={this.props.data ? this.props.data.instagram : '/'} >
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
							</div>
						</div>
					</div>
				</div>
			</div>
        	<div id="footer">
          		<div className="container text-center">
            		<h1>Powered by Bahale Codes</h1>
          		</div>
        	</div>
      	</div>
    	);
  	}
}

export default Contact;
