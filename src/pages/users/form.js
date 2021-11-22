import React from "react";
import Form from "../../parts/form";

export default function UserForm(props){
    let [name, setName] = React.useState(props.prevState.username)

    let title = props.action+" User "

    let form = (
            <div className="form-floating mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    id="floatingInput" 
                    placeholder="User" 
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required/>
                <label 
                    for="floatingInput">
                    User
                </label>
            </div>  
    )
    
    return Form(
        props.method, 
        title,
        'users/'+props.link,
        form,
        {username:name});
}



