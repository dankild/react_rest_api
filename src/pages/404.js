import { Link } from "react-router-dom";

export default function NoMatch(){
    return (
        <>
            <h1>Error 404</h1>
            <p>Maybe you make error in address, please check it.</p>

            <Link to="/" className="btn btn-secondary" role="button">To Home</Link>
        </>
    )
}