import React from "react";
import Form from "../../parts/form";

export default function UserForm(props){
    let [name, setName] = React.useState(props.prevState.username)

    let myform = (
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
    
    return <Form 
                title={props.action+" User "} 
                form={myform} 
                submit={{
                    method:props.method, 
                    link:props.link, 
                    data:{username:name}
                }}
            />
}