import React, { Component } from "react";
import NavigationItems from "../../../Components/Navigation/Navigation-Items";

export class Navigation extends Component {
	render() {
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

						<a className="navbar-brand page-scroll" href="/tma">
							TMA
						</a>{" "}
					</div>

					<div
						className="collapse navbar-collapse"
						id="bs-example-navbar-collapse-1"
					>
						<NavigationItems />
						<a className="navbar-brand page-scroll" href="/tma#fonmm">
							<span className='special'>FoNMM</span>
						</a>{" "}
					</div>
				</div>
			</nav>
		);
	}
}

export default Navigation;
