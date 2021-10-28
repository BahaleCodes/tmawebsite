import React, { useState } from "react";
import emailjs from 'emailjs-com';

import apiKeys from '../Applications/AppForm/apiKeys';
import Spinner from "../../Components/Spinner/Spinner";

const Contact = (props) => {
	const [data, setData] = useState({
		name: "",
		email: "",
		message: "",
		loading: false,
		error: false,
		done: false
	});
	const handleInputChange = event => {
		setData({
			...data,
			[event.target.name]: event.target.value
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setData({ ...data, loading: true });
		var nm = data.name;
		var mess = data.message;
		let templateParams = {
			from_name: nm,
			to_name: 'Taahirah',
			subject: 'Contact Form',
			message_html: mess,
			from_email: data.email
		};
		emailjs.send(apiKeys.SERVICE_ID, "template_spkntrh", templateParams, apiKeys.USER_ID)
			.then(result => {
				alert('Message sent, we will respond shortly. Thank you.', result.text);
				setData({ loading: false });
			},
				error => {
					alert('An error was encounter, Please try again', error.text);
					setData({ loading: false });
				}
			)
	}
	const form = (
		<form name="sentMessage" id="contactForm" onSubmit={handleSubmit}>
			<div className="row">
				<div className="col-md-6">
					<div className="form-group">
						<input
							type="text"
							id="name"
							className="form-control"
							placeholder="Name"
							required
							value={data.name}
							onChange={handleInputChange}
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
							value={data.email}
							onChange={handleInputChange}
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
					value={data.message}
					onChange={handleInputChange}
				></textarea>
				<p className="help-block text-danger"></p>
			</div>
			<button type="submit" className="btn btn-custom btn-lg">
				Send Message
			</button>
		</form>
	)
	const loading = (
		<div>
			<Spinner />
		</div>
	)

	return (
		<div>
			<div id="contact">
				<div className="container">
					<div className="col-md-8">
						<div className="row">
							<div className="section-title">

								<h2>Get In Touch</h2>
								<p>
									Please fill out the form below to send us an email and we
									will get back to you as soon as possible.
								</p>
							</div>
							{!data.loading && !data.error && !data.done && form}
							{data.loading && !data.error && !data.done}
							{!data.loading && data.error && !data.done}
							{!data.loading && !data.error && data.done}
						</div>
					</div>
					<div className="col-md-3 col-md-offset-1 contact-info">
						<div className="contact-item">
							<h3>Contact Info</h3>
						</div>
						<div className="contact-item">
							<p>
								<span>
									<i className="fa fa-whatsapp"></i> WhatsApp
								</span>{" "}
								{
									props.data
										? props.data.phone
										: "loading"
								}
							</p>
						</div>
						<div className="contact-item">
							<p href="t.modelingacademy@gmail.com">
								<span>
									<i className="fa fa-envelope-o"></i> Email
								</span>{" "}
								{
									props.data
										? props.data.email
										: "loading"}
							</p>
						</div>
					</div>
					<div className="col-md-12">
						<div className="row">
							<div className="social">
								<ul>
									<li>
										<a href={props.data ? props.data.facebook : '/'} >
											<i className="fa fa-facebook"></i>
										</a>
									</li>
									<li>
										<a href={props.data ? props.data.linkedIn : '/'} >
											<i className="fa fa-linkedin"></i>
										</a>
									</li>
									<li>
										<a href={props.data ? props.data.instagram : '/'} >
											<i className="fa fa-instagram"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
