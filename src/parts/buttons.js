import React from "react";
import { Link } from "react-router-dom";

export default function Buttons(props) {
    let littleButtons = [
        [props.link, "btn btn-outline-dark", "View"],
        [props.link+'edit', "btn btn-outline-dark", "Edit"],
        [props.link+'delete', "btn btn-outline-danger", "Delete"]
    ];
    return (
        <div class="d-grid gap-2 d-md-block">
            {littleButtons.map((data) => {
                return <Link to={data[0]} className={data[1]} role="button">{data[2]}</Link>
            })}
        </div>
    )
}