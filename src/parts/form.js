import React from "react";

import useFetch from './fetch';

function Sender(s){
    return useFetch(s.method, s.link, s.data, true)
}

export default function Form(props){
    return (
        <form className="wrapper text-center" 
            onSubmit={Sender(props.submit)}>
            <h1>{props.title}</h1><br/>
            
            {props.form}

            <br/><br/>
            <input type="submit" value={props.title}
                className="btn btn-primary align-center"/>
        </form>
    )
}
