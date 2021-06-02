import React, { Component } from 'react'
import {Route} from 'react-router-dom';

import JsonData from './data/data.json';

import Tma from './Sections/tma/tma';
import Charity from './Sections/charity/charity';
import AppForm from './Sections/tma/Containers/Applications/AppForm/AppForm';
import Remofilwe from './Sections/tma/Containers/OurModels/Remofilwe/Remofilwe';
import Tuelo from './Sections/tma/Containers/OurModels/Tuelo/Tuelo';
import Karabo from './Sections/tma/Containers/OurModels/Karabo/Karabo';
import Thato from './Sections/tma/Containers/OurModels/Thato/Thato';
import Refentse from './Sections/tma/Containers/OurModels/Refentse/Refentse';
import Kitso from './Sections/tma/Containers/OurModels/Kitso/Kitso';
import Sections from './Sections/Sections';
import ayanda from './Sections/tma/Containers/OurModels/Ayanda/Ayanda';
import bokamoso from './Sections/tma/Containers/OurModels/bokamoso/bokamoso';
import bonoloS from './Sections/tma/Containers/OurModels/BonoloS/Bonolo-s';
import bonolo from './Sections/tma/Containers/OurModels/Bonolo/Bonolo';
import ipeleng from './Sections/tma/Containers/OurModels/Ipeleng/Ipeleng';
import izabella from './Sections/tma/Containers/OurModels/Izabela/Izabella';
import jennifer from './Sections/tma/Containers/OurModels/Jennifer/Jenifor';
import jermaine from './Sections/tma/Containers/OurModels/Jermaine/Jermaine';
import katlego from './Sections/tma/Containers/OurModels/Katlego/Katlego';
import kekgabile from './Sections/tma/Containers/OurModels/Kekgabile/Kekgabile';
import keletso from './Sections/tma/Containers/OurModels/Keletso/Keletso';
import ketshepaone from './Sections/tma/Containers/OurModels/Ketshepaone/Ketshepaone';
import kokeletso from './Sections/tma/Containers/OurModels/Kokeletso/Kokeletso';
import lerato from './Sections/tma/Containers/OurModels/Lerato/Lerato';
import malebogo from './Sections/tma/Containers/OurModels/Malebogo/Malebogo';
import miguela from './Sections/tma/Containers/OurModels/Miguela/Miguela';
import naledi from './Sections/tma/Containers/OurModels/Naledi/Naledi';
import nalediS from './Sections/tma/Containers/OurModels/NalediS/Naledi-s';
import omphile from './Sections/tma/Containers/OurModels/Omphile/Omphile';
import orefile from './Sections/tma/Containers/OurModels/Orefile/Orefile';
import oteng from './Sections/tma/Containers/OurModels/Oteng/Oteng';
import pabalelo from './Sections/tma/Containers/OurModels/Pabalelo/Pabalelo';
import thabiso from './Sections/tma/Containers/OurModels/Thabiso/Thabiso';
import thabo from './Sections/tma/Containers/OurModels/Thabo/Thabo';
import tlotlego from './Sections/tma/Containers/OurModels/Tlotlego/Tlotlego';
import zureida from './Sections/tma/Containers/OurModels/Zureida/Zureida';
import melagries from './Sections/tma/Containers/OurModels/Melagries/Melagries';
import bontle from './Sections/tma/Containers/OurModels/Bontle/Bontle';
import RemofilweBadise from './Sections/tma/Containers/OurModels/RemofilweBadise/RemofilweBadise';
import jerome from './Sections/tma/Containers/OurModels/Jerome/Jerome';
import kegomoditswe from './Sections/tma/Containers/OurModels/Kegomoditswe/Kegomoditswe';
import tshegofatso from './Sections/tma/Containers/OurModels/Tshegofatso/Tshegofatso';


export class App extends Component {
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
        <Route path="/" exact component={Sections} />
        <Route path="/tma" component={Tma} />
        <Route path="/charity" component={Charity} />
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
        <Route path="/katlego" component={katlego} />
        <Route path="/kekgabile" component={kekgabile} />
        <Route path="/keletso" component={keletso} />
        <Route path="/ketshepaone" component={ketshepaone} />
        <Route path="/kokeletso" component={kokeletso} />
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
        <Route path="/application" component={AppForm} />
      </div>
    )
  }
}

export default App;
