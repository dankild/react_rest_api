import React from "react";
import { useAlert } from 'react-alert';

import Post from "../rest/post";
import Put from "../rest/put";
import Delete from "../rest/delete";

let submit = {
    post: Post,
    put: Put,
    delete: Delete,
}

export default function Form(props){
    const bAlert = useAlert()
    const alert = e => bAlert.show(e)

    function handleSubmit(event){
        event.preventDefault();
        let s = props.submit
        let answer = submit[s.method](s.link, s.data);
        alert(answer.message)
    }

    return (
        <form className="wrapper text-center" onSubmit={handleSubmit}>
            <h1>{props.title}</h1><br/>
            
            {props.form}

            <br/><br/>
            <input 
                className="btn btn-primary align-center" 
                type="submit" 
                value={props.title} />
        </form>
    )
}
