import React from "react";
import { Link } from "react-router-dom";

import FetchObjs from "./fetch";

function Navbar() {
	let users = FetchObjs('users');

	let ready = () => users.length >= 1;

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
								<Link to="/todos" className="nav-link"> Todo List</Link>
							</li>
							<li className="nav-item">
								<Link to="/users" className="nav-link"> User List</Link>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Users
								</a>
								<ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
									{ready() 
										?
										users.map((e) => { return (
											<li>
												<Link to={"/users/"+e.id} className="dropdown-item" >{e.id}. {e.username}</Link>
											</li>
										)}) 
										:
										<li>
											<a className="dropdown-item" href="">Fetching users...</a>
										</li>
									}
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</nav>
	)
}


export default Navbar;