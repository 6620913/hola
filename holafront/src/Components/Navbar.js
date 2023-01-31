import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		
		<NavLink to="/" activeStyle>
			Home
		</NavLink>
		<NavLink to="/problems" activeStyle>
			Problems
		</NavLink>
		<NavLink to="/ide" activeStyle>
			IDE
		</NavLink>
		<NavLink to="/sign-up" activeStyle>
			Sign Up
		</NavLink>
		<NavLink to="/about" activeStyle>
			About
		</NavLink>
		
		<NavLink to="/contact" activeStyle>
			Contact Us
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
