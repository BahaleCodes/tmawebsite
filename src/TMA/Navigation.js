import React from "react";

const Navigation = () => {
	return (
		<nav id="menu" className="navbar navbar-default navbar-fixed-top">
			<div className="container">
				<div className="navbar-header">
					<button
						type="button"
						className="navbar-toggle collapsed"
						data-toggle="collapse"
						data-target="#bs-example-navbar-collapse-1"
					>
						{" "}
						<span className="sr-only">Toggle navigation</span>{" "}
						<span className="icon-bar"></span>{" "}
						<span className="icon-bar"></span>{" "}
						<span className="icon-bar"></span>{" "}
					</button>
					<a className='navbar-brand page-scroll' href='/'>
						<div className="nav-pic">
							<img alt="Company Logo" className="img" src="img/TMA.jpg" />
						</div>
					</a>{' '}
				</div>
				<div
					className="collapse navbar-collapse"
					id="bs-example-navbar-collapse-1"
				>

					<ul className="nav navbar-nav navbar-right">
						<li>
							<a href={"/tma#our-models"} className='page-scroll'>
								Our Models
							</a>
						</li>
						<li>
							<a href={"/about-us"} className='page-scroll'>
								About Us
							</a>
						</li>
						<li>
							<a href={"/tma#applications"} className='page-scroll'>
								Applications
							</a>
						</li>
						<li>
							<a href={"/tma#contact"} className='page-scroll'>
								Contact Us
							</a>
						</li>
					</ul>
					{/* <a className="navbar-brand page-scroll" href="/tma#fonmm">
						<span className='special'>FoNMM</span>
					</a>{" "} */}
				</div>
			</div>
		</nav>
	);
}

export default Navigation;
