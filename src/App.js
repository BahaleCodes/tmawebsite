import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom';

import JsonData from './data/fonmm.json';
import Tma from './screens/tma';
// import Charity from './Sections/charity/charity';
import AppForm from './screens/Applications/AppForm/AppForm';
import Remofilwe from './screens/OurModels/Remofilwe/Remofilwe';
import Tuelo from './screens/OurModels/Tuelo/Tuelo';
import Karabo from './screens/OurModels/Karabo/Karabo';
import Thato from './screens/OurModels/Thato/Thato';
import Refentse from './screens/OurModels/Refentse/Refentse';
import Kitso from './screens/OurModels/Kitso/Kitso';
import Sections from './screens/Sections';
import ayanda from './screens/OurModels/Ayanda/Ayanda';
import bokamoso from './screens/OurModels/bokamoso/bokamoso';
import bonoloS from './screens/OurModels/BonoloS/Bonolo-s';
import bonolo from './screens/OurModels/Bonolo/Bonolo';
import ipeleng from './screens/OurModels/Ipeleng/Ipeleng';
import izabella from './screens/OurModels/Izabela/Izabella';
import jennifer from './screens/OurModels/Jennifer/Jenifor';
import jermaine from './screens/OurModels/Jermaine/Jermaine';
import kekgabile from './screens/OurModels/Kekgabile/Kekgabile';
import keletso from './screens/OurModels/Keletso/Keletso';
import ketshepaone from './screens/OurModels/Ketshepaone/Ketshepaone';
import lerato from './screens/OurModels/Lerato/Lerato';
import malebogo from './screens/OurModels/Malebogo/Malebogo';
import miguela from './screens/OurModels/Miguela/Miguela';
import naledi from './screens/OurModels/Naledi/Naledi';
import nalediS from './screens/OurModels/NalediS/Naledi-s';
import omphile from './screens/OurModels/Omphile/Omphile';
import orefile from './screens/OurModels/Orefile/Orefile';
import oteng from './screens/OurModels/Oteng/Oteng';
import pabalelo from './screens/OurModels/Pabalelo/Pabalelo';
import thabiso from './screens/OurModels/Thabiso/Thabiso';
import thabo from './screens/OurModels/Thabo/Thabo';
import tlotlego from './screens/OurModels/Tlotlego/Tlotlego';
import zureida from './screens/OurModels/Zureida/Zureida';
import melagries from './screens/OurModels/Melagries/Melagries';
import bontle from './screens/OurModels/Bontle/Bontle';
import RemofilweBadise from './screens/OurModels/RemofilweBadise/RemofilweBadise';
import jerome from './screens/OurModels/Jerome/Jerome';
import kegomoditswe from './screens/OurModels/Kegomoditswe/Kegomoditswe';
import tshegofatso from './screens/OurModels/Tshegofatso/Tshegofatso';
import fonmmForm from './screens/FoNMM/fonmm-form';
import Finalists from './screens/FoNMM/finalists';
import About from './screens/About';
import Navigation from './screens/Navigation';
import Footer from './components/footer';

const App = () => {
	const [data, setData] = useState({});

	useEffect(() => {
		setData(JsonData)
	}, []);

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
			<Route path='/finalists' render={(props) => (<Finalists data={data} />)} />
			<Footer />
		</div>
	)
}

export default App;
