import React, { Component } from 'react';

import JsonData from '../../data/data.json';

class Charity extends Component{
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
                  <h2>Charity Section</h2>
              </div>
          )
      }
}

export default Charity;