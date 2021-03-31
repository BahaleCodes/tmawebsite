import React from 'react';
import {Helmet} from 'react-helmet';

import logo from '../img/TMAlogo.jpeg';

const sections = () => {
    return(
        <div className={"text-center"}>
            <Helmet>
                <title>Sections</title>
            </Helmet>
            <div className="container" >
                <div className="portfolio-item">
					<div className="hover-bg">
                    	{" "}
                            <a
                                title="Taahirah Modeling Academy"
                                data-lightbox-gallery="gallery1"
                                href={"/tma"}
								>
                                    <div className="hover-text">
                        				<h4>TMA</h4>
                      				</div>
									<img
										src={logo}
										className="img-responsive"
										alt="Project Title"
									/>{" "}
								</a>{" "}
							</div>
                </div>
            </div>
        </div>
    )
}

export default sections;