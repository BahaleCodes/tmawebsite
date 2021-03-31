import React, { Component } from "react";

import pic1 from '../../../../img/Monochrome images/IMG_8563.jpg';
import pic2 from '../../../../img/Monochrome images/IMG_8576.jpg';
import pic3 from '../../../../img/Monochrome images/IMG_8586bnw.jpg';
import pic4 from '../../../../img/Monochrome images/IMG_8637.jpg';
import pic5 from '../../../../img/Monochrome images/IMG_8648.jpg';
import pic6 from '../../../../img/Monochrome images/IMG_8664.jpg';

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
						<div className="col-sm-6 col-md-4 col-lg-4">
							<div className="portfolio-item">
								<div className="hover-bg">
                    			{" "}
                    				<a
										title="Remofilwe Dire"
										data-lightbox-gallery="gallery1"
										href={"/remofilwe"}
										>
                      					<div className="hover-text">
                        					<h4>Remofilwe Dire</h4>
                      					</div>
										<img
											src={pic1}
											className="img-responsive"
											alt="Project Title"
										/>{" "}
									</a>{" "}
								</div>
							</div>
						</div>
              			<div className="col-sm-6 col-md-4 col-lg-4">
							<div className="portfolio-item">
								<div className="hover-bg">
									{" "}
									<a
										title="Tuelo Perez"
										data-lightbox-gallery="gallery1"
										href={"/tuelo"}
										>
										<div className="hover-text">
											<h4>Tuelo Perez</h4>
										</div>
										<img
											src={pic2}
											className="img-responsive"
											alt="Project Title"
										/>{" "}
									</a>{" "}
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-md-4 col-lg-4">
							<div className="portfolio-item">
								<div className="hover-bg">
									{" "}
									<a
										title="Karabo Sefatsa"
										data-lightbox-gallery="gallery1"
										href={"/karabo"}
										>
										<div className="hover-text">
											<h4>Karabo Sefatsa</h4>
										</div>
										<img
											src={pic3}
											className="img-responsive"
											alt="Project Title"
										/>{" "}
									</a>{" "}
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-md-4 col-lg-4">
							<div className="portfolio-item">
								<div className="hover-bg">
									{" "}
									<a
										title="Thato Motsatsi"
										data-lightbox-gallery="gallery1"
										href={"/thato"}
										>
										<div className="hover-text">
											<h4>Thato Motsatsi</h4>
										</div>
										<img
											src={pic4}
											className="img-responsive"
											alt="Project Title"
										/>{" "}
									</a>{" "}
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-md-4 col-lg-4">
							<div className="portfolio-item">
								<div className="hover-bg">
									{" "}
									<a
										title="Refentse Phutieagae"
										data-lightbox-gallery="gallery1"
										href={"/refentse"}
										>
										<div className="hover-text">
											<h4>Refentse Phutieagae</h4>
										</div>
										<img
											src={pic5}
											className="img-responsive"
											alt="Project Title"
										/>{" "}
									</a>{" "}
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-md-4 col-lg-4">
							<div className="portfolio-item">
								<div className="hover-bg">
									{" "}
									<a
										title="Kitso Kwenamore"
										data-lightbox-gallery="gallery1"
										href={"/kitso"}
										>
										<div className="hover-text">
											<h4>Kitso Kwenamore</h4>
										</div>
										<img
											src={pic6}
											className="img-responsive"
											alt="Project Title"
										/>{" "}
									</a>{" "}
								</div>
							</div>
						</div>
            		</div>
          		</div>
        	</div>
   		);
  	}
}

export default OurModels;
