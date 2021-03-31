import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import { Route, BrowserRouter } from 'react-router-dom';

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

export class Tma extends Component {
	state = {
		landingPageData: {},
	}
	getlandingPageData() {
		this.setState({landingPageData : JsonData})
  	}

  	componentDidMount() {
    	this.getlandingPageData();
  	}
	
	render() {
		return (
			<div>
				<Helmet>
					<title>Taahirah Modeling Academy</title>
				</Helmet>
				<Navigation />
				<Home />
				<OurModels />
				<Fitness data={this.state.landingPageData.Fitness}/>
				<Workshop data={this.state.landingPageData.Workshops}/>
				<Benefits data={this.state.landingPageData.Benefits}/>
				<FAQ data={this.state.landingPageData.FAQ}/>
				<Applications data={this.state.landingPageData.About}/>
				<Sponsors />
				<Contact data={this.state.landingPageData.Contact} />
      		</div>
    	)
  	}
}

export default Tma;
