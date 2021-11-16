import React from "react";
import { useParams } from "react-router-dom";

import Get from "../../rest/get";
import Loader from "../../parts/loader";
import Buttons from "../../parts/buttons";

export default function Task(){
    let { id } = useParams();

    let task = Get('facts/'+id);
    let user = Get('/users/'+task.user_id);

    let ready = () => task !== undefined && user !== undefined

    return (
        <div className="card" style={{width: '25rem'}}>
            {ready() ?
            <div class="card-body">
                <h5 class="card-title">Task</h5>
                <p class="card-text">
                    <strong>Assignee:</strong> {user.username} ({user.id}) <br/>
                    <strong>Task:</strong> {task.fact} ({task.id}) <br/>
                    <strong>Start date:</strong> {task.created_at}
                </p>
                <Buttons link={'tasks/'+task.id}/>
            </div>:
            <Loader />
            }
        </div>
    )
}