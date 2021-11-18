import { Link } from "react-router-dom";

export default function DropdownCreate(){
    return (
        <li className="nav-item dropdown" key="create_list">
            <a className="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Create
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li key="CU"><Link to={"/users/create"} className="dropdown-item" >Create User</Link></li>
                <li key="CT"><Link to={"/tasks/create"} className="dropdown-item" >Create Task</Link></li>
            </ul>
        </li>
    )
}