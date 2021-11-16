import React from "react";
import { Link } from "react-router-dom";

import DropdownCreate from "./dropdownCreate";
import DropdownUser from "./dropdownUsers";

function navItems(){
	let links = [
		['/', 'Home'],
		['/tasks', 'Tasks'],
	]
	return links.map(link => {
		return (
			<li className="nav-item">
				<Link to={link[0]} className='nav-link'>{link[1]}</Link>
			</li>
		)})
}

export default function Navbar() {
    return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<Link to='/' className="navbar-brand">Todo API App</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav">
						{navItems()}
						<DropdownUser/>
						<DropdownCreate/>
					</ul>
				</div>
			</div>
		</nav>
	)
}