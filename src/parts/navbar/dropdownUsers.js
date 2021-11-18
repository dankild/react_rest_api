import { Link } from "react-router-dom";
import Get from "../../rest/get";

export default function DropdownUser(){
	let users = Get('users');

    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Users
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li className="nav-item"><Link to="/users" className="dropdown-item">All Users</Link></li>
                <li><hr className="dropdown-divider" /></li>
                {users ?
                users.map((e) => {return (
                    <li key={e.id}>
                        <Link to={"/users/"+e.id} className="dropdown-item" >
                            {e.username}
                        </Link>
                    </li>
                    )}):
                    <li><p className="dropdown-item">Fetching users...</p></li>
                }
            </ul>
        </li>
    )
}