import React from "react";
import Post from "../rest/post";

export default function Form(props){
    return (
        <form className="wrapper text-center">
            <h1>{props.title}</h1><br/>
            
            {props.form}

            <br/><br/>
            <input 
                className="btn btn-primary align-center" 
                type="submit" 
                value="Submit" />
        </form>
    )
}
