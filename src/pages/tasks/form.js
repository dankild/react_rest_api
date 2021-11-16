import React from "react";
import Get from "../../rest/get";
import Form from "../../parts/form";
import Loader from "../../parts/loader";

export default function TaskForm(props){
    let users = Get('users');
	let ready = () => users.length >= 1;

    let [task, setTask] = React.useState(
        {fact:"", user_id:0}
    )
    
    
    let myform = (
        <>
        <div class="form-floating mb-3">
            <input 
                type="text" 
                className="form-control" 
                id="floatingInput" 
                placeholder="Task" 
                value={task.fact}
                onChange={e => setTask({fact:e.target.value})}
                required/>
            <label for="floatingInput">Task</label>
        </div>

        {ready() ? <>
            <p>Choose one of users to asignee task</p>
            <select 
                class="form-select" 
                aria-label="Default select example" 
                value={task.user_id}
                required>
                {users.map((user) => {
                    return <option 
                                key={user.id} 
                                onChange={e => setTask({user_id:user.id})}>
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