import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';

import Home from './Home/Home';
import OurModels from './OurModels/OurModels';
import Contact from './Contact/contact';
import JsonData from '../data/data.json';
import Applications from './Applications/Applications';
import SmoothScroll from 'smooth-scroll';
import Fonmm from './FoNMM/fonmm';
import Fees from './Fees/Fees';
import Projects from './Projects';

export const scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true,
})

const Tma = () => {
	const [tmaData, setTmaData] = useState({});
	const [show2021Models, setShow2021Models] = useState(false);
	const [show2022Models, setShow2022Models] = useState(false);

	useEffect(() => {
		setTmaData(JsonData);
	}, []);

	return (
		<div id='tma'>
			<Helmet>
				<title>Taahirah Modeling Academy</title>
			</Helmet>
			{/* <Navigation /> */}
			<Home />
			<div id='fonmm' className='text-center'>
				<div className='container'>
					<div className='section-title'>
						<h2>Face of Ngaka Modiri Molema</h2>
					</div>
					<Fonmm data={tmaData.FoNMM} />
					{/* <p>Do you have what it takes to be the Face of Ngaka Modiri Molema?</p>
							<p>Your journey starts by clicking the button bellow!</p>
							<a href='/fonmm' type="submit" className="btn btn-custom btn-lg">
								Register
							</a> */}
				</div>
			</div>
			<div id='our-models' className='container text-center'>
				<div className='section-title'>
					<h2>Our Models</h2>
				</div>
				<div className='row'>
					{
						show2021Models
							? <OurModels toggle={
								() => (setShow2021Models(prevShow2021Models => !prevShow2021Models))
							} data={tmaData.Models} />
							: <button className='btn-custom' onClick={
								() => (setShow2021Models(prevShow2021Models => !prevShow2021Models))
							} >2021 Models</button>
					}
					<br />
					{
						show2022Models
							? <div>
								<h2>2022 applications will be open from the 1st of November</h2>
								<a className={'text'} href='/applications'>For more information on the 2022 applications <span>Click Here</span></a>
								<br />
								<button className={'btn-custom'} onClick={
									() => (setShow2022Models(prevShow2022Models => !prevShow2022Models))
								} >Hide 2022 Models</button>
							</div>
							: <button className='btn-custom' onClick={
								() => (setShow2022Models(prevShow2022Models => !prevShow2022Models))
							} >2022 Models</button>
					}
				</div>
			</div>
			<Fees data={tmaData.Fees} />
			<Applications data={tmaData.About} />
			<Projects />
			<Contact data={tmaData.Contact} />
		</div>
	)
}

export default Tma;