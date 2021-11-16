import { Link } from "react-router-dom";

export default function DropdownCreate(){
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Create
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><Link to={"/users/create"} className="dropdown-item" >Create User</Link></li>
                <li><Link to={"/tasks/create"} className="dropdown-item" >Create Task</Link></li>
            </ul>
        </li>
    )
}