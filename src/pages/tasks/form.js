import React from "react";
import Form from "../../parts/form";
import Loader from "../../parts/loader";
import useFetch from "../../parts/fetch";

export default function TaskForm(props){
    let users = useFetch("GET", 'users');

    let [task, setTask] = React.useState(props.prevState.task);
    let [userId, setUserId] = React.useState(props.prevState.user_id);
    
    let title = props.action+" Task"

    let form = (
        <>       
        <div className="form-floating mb-3">
            <input 
                type="text" 
                className="form-control" 
                id="floatingInput" 
                placeholder="Task" 
                value={task}
                onChange={e => setTask(e.target.value)}
                required/>
            <label for="floatingInput">Task</label>
        </div>

        {users ? <>
            <p>Choose one of users to asignee task</p>
            <select 
                className="form-select" 
                value={userId}
                onChange={e => setUserId(e.target.value)}
                required>
                {users.map((user) => {
                    return <option 
                                key={user.id} 
                                value={user.id}>
                                {user.id}. {user.username}
                            </option>
                })}
            </select></>
            : <Loader/>
        }
        </>
    )

    return Form(
        props.method, 
        title,
        'facts/'+props.link,
        form,
        {user_id:Number(userId), task:task, likes:1});
}