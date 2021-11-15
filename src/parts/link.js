import { Link } from "react-router-dom";

export default function AppLink(props){
    return (
        <Link to={props.to} 
            className="text-dark text-decoration-none">
            {props.text}
        </Link>
    )
}