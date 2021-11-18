import React from "react";
import { Link } from "react-router-dom";

export default function Buttons(props) {
    let littleButtons = [
        [props.link+'/edit', "btn btn-outline-dark", "Edit"],
        [props.link+'/delete', "btn btn-outline-danger", "Delete"]
    ];
    return (
        <div className="d-grid gap-2 d-md-block">
            {littleButtons.map((data) => {
                return (
                <Link 
                    to={data[0]} 
                    className={data[1]} 
                    role="button"
                    style={{marginLeft:10}}
                    key={data[2]}>
                    {data[2]}
                </Link>
            )})}
        </div>
    )
}