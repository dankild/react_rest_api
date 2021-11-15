import React from "react";
import Loader from "../../parts/loader";
import Get from "../../rest/get";
import Form from "../../parts/form";

export default function TodoCreate(){
	let users = Get('users');
	let ready = () => users.length >= 1;
    
    let myform = (
        <>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="Task" required/>
                <label for="floatingInput">Task</label>
            </div>

            {ready() ?
                <select class="form-select" aria-label="Default select example" required>
                    <option selected>Choose one of users to asignee task</option>
                    {users.map((user) => {
                        return <option value={user.id}>{user.id}. {user.username}</option>
                    })}
                </select>
                : <Loader/>
            }
        </>
    )

    return <Form title="Create Task" form={myform}/>
}