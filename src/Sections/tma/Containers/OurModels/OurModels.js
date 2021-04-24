import React, { Component } from "react";

import OurModel from './OurModel';

export class OurModels extends Component {
	render() {
		return (
			<div id="our-models" className="text-center">
				<div className="container">
					<div className="section-title">
						<h2>
							Our Models
						</h2>
					</div>
					<div className="row">
						{
							this.props.data
							? this.props.data.map((d, i) => (
								<OurModel key={`${d.name}-${i}`}
									link={d.link}
									name={d.name}
									pic={d.pic}
									/>
							))
							: 'loading'
						}
            		</div>
          		</div>
        	</div>
   		);
  	}
}

export default OurModels;
