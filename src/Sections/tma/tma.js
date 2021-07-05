import React, { Component } from 'react'
import { Helmet } from 'react-helmet';

import Navigation from './Containers/navigation';
import Home from './Containers/Home/Home';
import OurModels from './Containers/OurModels/OurModels';
import Fitness from './Containers/Fitness/Fitness';
import Workshop from './Containers/Workshops/Workshops';
import Benefits from './Containers/Benefits/Benefits';
import FAQ from './Containers/FAQ/FAQ';
import Contact from './Containers/Contact/contact';
import JsonData from '../../data/data.json';
import Applications from './Containers/Applications/Applications';
import Sponsors from './Containers/Sponsors/Sponsors';
import Footer from '../../Components/footer';

export class Tma extends Component {
	state = {
		tmaData: {},
	}
	gettmaData() {
		this.setState({tmaData : JsonData})
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
				<OurModels data={this.state.tmaData.Models}/>
				<Fitness data={this.state.tmaData.Fitness}/>
				<Workshop data={this.state.tmaData.Workshops}/>
				<Benefits data={this.state.tmaData.Benefits}/>
				<FAQ data={this.state.tmaData.FAQ}/>
				<Applications data={this.state.tmaData.About}/>
				<Sponsors />
				<Contact data={this.state.tmaData.Contact} />
				<Footer />
      		</div>
    	)
  	}
}

export default Tma;