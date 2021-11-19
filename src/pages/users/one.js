import React from "react";
import { useParams } from "react-router-dom";

import Table from "../../parts/table";
import AppLink from "../../parts/link";
import useFetch from "../../parts/fetch";
import Buttons from "../../parts/buttons";

let readiness = ['Pending', 'In Progress', 'Done']

export default function User(){
    let head = ['ID', 'Task', 'Readiness', ''];

    let { id } = useParams();
    let user = useFetch('GET', 'users/'+id);
    let tasks = useFetch('GET', 'users/'+id+'/facts');

    let title = () => user ? user.username+"'s tasks:" : "Tasks:"

    function Body(){
        return (tasks 
            ? 
            tasks.map((task) => {return (task.id == user?.id ?
            <tr key={task.id}>
                <td className="align-middle">{task.id}</td>
                <td className="align-middle">
                    <AppLink to={"/tasks/"+task.id} 
                        text={readiness[task.likes]}/></td>
                <td className="align-middle">{task.like}</td>
                <td className="align-middle text-end">
                    <Buttons link={task.id}/>
                </td>
            </tr>
            :'')}) 
            :
            <tr>
                <td className="align-middle">
                    No Tasks
                </td>
            </tr>
        )
    }

    return <Table 
                title={title()} 
                head={head} 
                body={Body} 
                ready={user}
                button={{
                    state:false,
                    text:'user',
                    link:"/users/create"}}
            />
}