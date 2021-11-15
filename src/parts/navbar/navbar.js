import React from "react";
import { Link } from "react-router-dom";

import DropdownCreate from "./dropdownCreate";
import DropdownUser from "./dropdownUsers";

function Navbar() {

    return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid">
					<Link to="/" className="navbar-brand">Todo API App</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavDropdown">
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link to="/" className='nav-link'>Home</Link>
							</li>
							<li className="nav-item">
								<Link to="/todos" className="nav-link">Tasks</Link>
							</li>
							<DropdownUser/>
							<DropdownCreate/>
						</ul>
					</div>
				</div>
			</nav>
	)
}


export default Navbar;