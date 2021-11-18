import React from "react";
import Get from "../../rest/get";
import Form from "../../parts/form";
import Loader from "../../parts/loader";

export default function TaskForm(props){
    let users = Get('users');
	let ready = () => users.length >= 1;

    let [task, setTask] = React.useState();
    let [userId, setUserId] = React.useState();
    
    let myform = (
        <>
        <div className="form-floating mb-3">
            <input 
                type="text" 
                className="form-control" 
                id="floatingInput" 
                placeholder="Task" 
                value={props.value.fact}
                onChange={e => setTask(e.target.value)}
                required/>
            <label for="floatingInput">Task</label>
        </div>

        {ready() ? <>
            <p>Choose one of users to asignee task</p>
            <select 
                className="form-select" 
                aria-label="Default select example" 
                value={props.value.user_id}
                required>
                {users.map((user) => {
                    return <option 
                                key={user.id} 
                                onChange={e => setUserId(user.id)}>
                                {user.id}. {user.username}
                            </option>
                })}
            </select></>
            : <Loader/>
        }
        </>
    )

    return <Form title={props.action+" Task"} form={myform}/>
}