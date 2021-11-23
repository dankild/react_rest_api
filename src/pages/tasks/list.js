import React from "react";

import Table from "../../parts/table";
import AppLink from "../../parts/link";
import useFetch from "../../parts/fetch";
import Buttons from "../../parts/buttons";

export default function TaskList(){

    let tasks = useFetch("GET", 'facts');
    let users = useFetch("GET", 'users');
    let head = ['ID', 'Task', 'Assignee', ''];

    function username(task){
        for (let user of users){
            if (user.id == task.user_id) {
                return user.username
            }
        }
    }

    function Body(){
        return tasks.map((task) => {return (
            <tr>
                <td className="align-middle">{task.id}</td>
                <td className="align-middle"><AppLink to={"/tasks/"+task.id} text={task.task}/></td>
                <td className="align-middle"><AppLink to={"/users/"+task.user_id} text={username(task)}/></td>
                <td className="align-middle text-end"><Buttons link={'tasks/'+task.id}/></td>
            </tr>
        )})
    }
    
    return <Table 
                title="Tasks" 
                head={head} 
                body={Body} 
                ready={tasks && users}
                button={{
                    state:true,
                    text:'task',
                    link:"/tasks/create"}}
            />
}
