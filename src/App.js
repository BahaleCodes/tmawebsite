import React, { Component } from 'react'
import {Route} from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Tma from './Sections/tma/tma';
// import Charity from './Sections/charity/charity';
import AppForm from './Sections/tma/Containers/Applications/AppForm/AppForm';
import JsonData from './data/data.json';
import Remofilwe from './Sections/tma/Containers/OurModels/Remofilwe/Remofilwe';
import Tuelo from './Sections/tma/Containers/OurModels/Tuelo/Tuelo';
import Karabo from './Sections/tma/Containers/OurModels/Karabo/Karabo';
import Thato from './Sections/tma/Containers/OurModels/Thato/Thato';
import Refentse from './Sections/tma/Containers/OurModels/Refentse/Refentse';
import Kitso from './Sections/tma/Containers/OurModels/Kitso/Kitso';
import Sections from './Sections/Sections';

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
        {/* <Route path="/charity" component={Charity} /> */}
        <Route path="/remofilwe" component={Remofilwe} />
        <Route path="/tuelo" component={Tuelo} />
        <Route path="/karabo" component={Karabo} />
        <Route path="/thato" component={Thato} />
        <Route path="/refentse" component={Refentse} />
        <Route path="/kitso" component={Kitso} />
        <Route path="/application" component={AppForm} />
      </div>
    )
  }
}

export default App;
