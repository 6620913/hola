import React from "react";
// import { Nav, NavLink, NavMenu }
import { NavLink } from "react-router-dom";
import '../Styles/navbar.css'
// from "./NavbarElements";

const Navbar = () => {
	return (
		<>


			<nav class="navbar navbar-expand-lg navbar-dark ">
				<div class="container-fluid">
					<a class="navbar-brand" href="#"><NavLink style={{textDecoration:"none",color:"white"}} to="/" activeStyle>
									Home
								</NavLink></a>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarNav">
						<ul class="navbar-nav">
					
							<li class="nav-item">
								<a class="nav-link" href="#"><NavLink style={{textDecoration:"none",color:"white"}} to="/problems" activeStyle>
									Problems
								</NavLink></a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#"><NavLink style={{textDecoration:"none",color:"white"}} to="/ide" activeStyle>
									IDE
								</NavLink></a>
							</li>


							{/* <li class="nav-item">
								<a class="nav-link" href="#" ><NavLink style={{textDecoration:"none",color:"white"}} to="/signup" activeStyle>
									Sign Up
								</NavLink></a>

							</li> */}

							<li class="nav-item">
								<a class="nav-link" href="#">
									<NavLink style={{textDecoration:"none",color:"white"}} to="/about" activeStyle>
										About
									</NavLink></a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#"><NavLink style={{textDecoration:"none",color:"white"}} to="/contact" activeStyle>
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
