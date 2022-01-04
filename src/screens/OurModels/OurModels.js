import React from "react";

import OurModel from './OurModel';

const OurModels = (props) => {
	return (
		<div id="our-models" className="text-center">
			<div className="container">
				<button onClick={props.toggle} className='btn-custom'>Hide 2021 Models</button>

				<div className="row">
					{
						props.data
							? props.data.map((d, i) => (
								<OurModel key={`${d.name}-${i}`}
									link={d.link}
									name={d.name}
									pic={d.pic}
									pics={d.pics}
								/>
							))
							: 'loading'
					}
				</div>
			</div>
		</div>
	);
}

export default OurModels;
