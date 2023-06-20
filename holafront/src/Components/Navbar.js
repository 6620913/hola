import React from "react";
// import { Nav, NavLink, NavMenu }
import { NavLink } from "react-router-dom";
// from "./NavbarElements";

const Navbar = () => {
	return (
		<>


			<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<div class="container-fluid">
					<a class="navbar-brand" href="#">Navbar</a>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarNav">
						<ul class="navbar-nav">
							<li class="nav-item">
								<a class="nav-link active" aria-current="page" href="#"> <NavLink to="/" activeStyle>
									Home
								</NavLink></a>


							</li>
							<li class="nav-item">
								<a class="nav-link" href="#"><NavLink to="/problems" activeStyle>
									Problems
								</NavLink></a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#"><NavLink to="/ide" activeStyle>
									IDE
								</NavLink></a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#" ><NavLink to="/signup" activeStyle>
									Sign Up
								</NavLink></a>

							</li>

							<li class="nav-item">
								<a class="nav-link" href="#">
									<NavLink to="/about" activeStyle>
										About
									</NavLink></a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#"><NavLink to="/contact" activeStyle>
									Contact Us
								</NavLink></a>
							</li>
						</ul>
					</div>
				</div>
			</nav>








		</>
	);
};

export default Navbar;
