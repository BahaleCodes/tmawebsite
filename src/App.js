import React, { Component } from 'react'
import { Route } from 'react-router-dom';

import JsonData from './data/fonmm.json';

import Tma from './TMA/tma';
// import Charity from './Sections/charity/charity';
import AppForm from './TMA/Applications/AppForm/AppForm';
import Remofilwe from './TMA/OurModels/Remofilwe/Remofilwe';
import Tuelo from './TMA/OurModels/Tuelo/Tuelo';
import Karabo from './TMA/OurModels/Karabo/Karabo';
import Thato from './TMA/OurModels/Thato/Thato';
import Refentse from './TMA/OurModels/Refentse/Refentse';
import Kitso from './TMA/OurModels/Kitso/Kitso';
import Sections from './TMA/Sections';
import ayanda from './TMA/OurModels/Ayanda/Ayanda';
import bokamoso from './TMA/OurModels/bokamoso/bokamoso';
import bonoloS from './TMA/OurModels/BonoloS/Bonolo-s';
import bonolo from './TMA/OurModels/Bonolo/Bonolo';
import ipeleng from './TMA/OurModels/Ipeleng/Ipeleng';
import izabella from './TMA/OurModels/Izabela/Izabella';
import jennifer from './TMA/OurModels/Jennifer/Jenifor';
import jermaine from './TMA/OurModels/Jermaine/Jermaine';
// import katlego from './TMA/OurModels/Katlego/Katlego';
import kekgabile from './TMA/OurModels/Kekgabile/Kekgabile';
import keletso from './TMA/OurModels/Keletso/Keletso';
import ketshepaone from './TMA/OurModels/Ketshepaone/Ketshepaone';
// import kokeletso from './TMA/OurModels/Kokeletso/Kokeletso';
import lerato from './TMA/OurModels/Lerato/Lerato';
import malebogo from './TMA/OurModels/Malebogo/Malebogo';
import miguela from './TMA/OurModels/Miguela/Miguela';
import naledi from './TMA/OurModels/Naledi/Naledi';
import nalediS from './TMA/OurModels/NalediS/Naledi-s';
import omphile from './TMA/OurModels/Omphile/Omphile';
import orefile from './TMA/OurModels/Orefile/Orefile';
import oteng from './TMA/OurModels/Oteng/Oteng';
import pabalelo from './TMA/OurModels/Pabalelo/Pabalelo';
import thabiso from './TMA/OurModels/Thabiso/Thabiso';
import thabo from './TMA/OurModels/Thabo/Thabo';
import tlotlego from './TMA/OurModels/Tlotlego/Tlotlego';
import zureida from './TMA/OurModels/Zureida/Zureida';
import melagries from './TMA/OurModels/Melagries/Melagries';
import bontle from './TMA/OurModels/Bontle/Bontle';
import RemofilweBadise from './TMA/OurModels/RemofilweBadise/RemofilweBadise';
import jerome from './TMA/OurModels/Jerome/Jerome';
import kegomoditswe from './TMA/OurModels/Kegomoditswe/Kegomoditswe';
import tshegofatso from './TMA/OurModels/Tshegofatso/Tshegofatso';
import fonmmForm from './TMA/FoNMM/fonmm-form';
import Finalists from './TMA/FoNMM/finalists';
import About from './TMA/About';
import Navigation from './TMA/Navigation';
import Footer from './Components/footer';

export class App extends Component {
	state = {
		landingPageData: {},
	}
	getlandingPageData() {
		this.setState({ landingPageData: JsonData })
	}

	componentDidMount() {
		this.getlandingPageData();
	}

	render() {
		return (
			<div>
				<Navigation />
				<Route path="/" exact component={Sections} />
				<Route path='/fonmm' component={fonmmForm} />
				<Route path="/tma" component={Tma} />
				{/* <Route path="/charity" component={Charity} /> */}
				<Route path='/about-us' component={About} />
				<Route path="/remofilwe" component={Remofilwe} />
				<Route path="/tuelo" component={Tuelo} />
				<Route path="/karabo" component={Karabo} />
				<Route path="/thato" component={Thato} />
				<Route path="/refentse" component={Refentse} />
				<Route path="/kitso" component={Kitso} />
				<Route path="/ayanda" component={ayanda} />
				<Route path="/bokamoso" component={bokamoso} />
				<Route path="/bonolo-dingoko" component={bonolo} />
				<Route path="/bonolo-saliwe" component={bonoloS} />
				<Route path="/bontle" component={bontle} />
				<Route path="/ipeleng" component={ipeleng} />
				<Route path="/izabella" component={izabella} />
				<Route path="/jennifer" component={jennifer} />
				<Route path="/keenan" component={jermaine} />
				<Route path="/kekgabile" component={kekgabile} />
				<Route path="/keletso" component={keletso} />
				<Route path="/ketshepaone" component={ketshepaone} />
				<Route path="/lerato" component={lerato} />
				<Route path="/malebogo" component={malebogo} />
				<Route path="/melagries" component={melagries} />
				<Route path="/miguela" component={miguela} />
				<Route path="/naledi-m" component={naledi} />
				<Route path="/naledi-s" component={nalediS} />
				<Route path="/omphile" component={omphile} />
				<Route path="/orefile" component={orefile} />
				<Route path="/oteng" component={oteng} />
				<Route path="/pabalelo" component={pabalelo} />
				<Route path="/remofilwe-b" component={RemofilweBadise} />
				<Route path="/thabiso" component={thabiso} />
				<Route path="/thabo" component={thabo} />
				<Route path="/tlotlego" component={tlotlego} />
				<Route path="/zureida" component={zureida} />
				<Route path="/jerome" component={jerome} />
				<Route path="/kegomoditswe" component={kegomoditswe} />
				<Route path="/tshegofatso" component={tshegofatso} />
				<Route path="/applications" component={AppForm} />
				<Route path='/finalists' render={(props) => (<Finalists data={this.state.landingPageData.fonmm}/>)} />
				<Footer />
			</div>
		)
	}
}

export default App;
