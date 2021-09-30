import React, { Component } from 'react'
import { Helmet } from 'react-helmet';

import Navigation from './navigation';
import Home from './Home/Home';
import OurModels from './OurModels/OurModels';
import Fitness from './Fitness/Fitness';
import Workshop from './Workshops/Workshops';
import Benefits from './Benefits/Benefits';
import FAQ from './FAQ/FAQ';
import Contact from './Contact/contact';
import JsonData from '../data/data.json';
import Applications from './Applications/Applications';
import Sponsors from './Sponsors/Sponsors';
import Footer from '../Components/footer';
import SmoothScroll from 'smooth-scroll';
import Fonmm from './FoNMM/fonmm';

export const scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true,
})

export class Tma extends Component {
	state = {
		tmaData: {},
	}
	gettmaData() {
		this.setState({ tmaData: JsonData })
	}

	componentDidMount() {
		this.gettmaData();
	}

	render() {
		return (
			<div>
				<Helmet>
					<title>Taahirah Modeling Academy</title>
				</Helmet>
				<Navigation />
				<Home />
				<div id='fonmm' className='text-center'>
					<div className='container'>
						<div className='section-title'>
							<h2>Face of Ngaka Modiri Molema</h2>
							</div>
							<Fonmm  data={this.state.tmaData.FoNMM}/>
							{/* <p>Do you have what it takes to be the Face of Ngaka Modiri Molema?</p>
							<p>Your journey starts by clicking the button bellow!</p>
							<a href='/fonmm' type="submit" className="btn btn-custom btn-lg">
								Register
							</a> */}
					</div>
				</div>
				<OurModels data={this.state.tmaData.Models} />
				<Fitness data={this.state.tmaData.Fitness} />
				<Workshop data={this.state.tmaData.Workshops} />
				<Benefits data={this.state.tmaData.Benefits} />
				<FAQ data={this.state.tmaData.FAQ} />
				<Applications data={this.state.tmaData.About} />
				<Sponsors />
				<Contact data={this.state.tmaData.Contact} />
				<Footer />
			</div>
		)
	}
}

export default Tma;