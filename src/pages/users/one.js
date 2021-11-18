import React from "react";
import { useParams } from "react-router-dom";

import Get from "../../rest/get";
import Table from "../../parts/table";
import AppLink from "../../parts/link";
import Buttons from "../../parts/buttons";

export default function User(){
    let head = ['ID', 'Task', ''];

    let { id } = useParams();
    let user = Get('users/'+id);
    let tasks = Get('users/'+id+'/facts');

    let title = () => user ? user.username+"'s tasks:" : "Tasks:"

    function Body(){
        return (tasks 
            ? 
            tasks.map((task) => {return (task.id == user?.id ?
            <tr key={task.id}>
                <td className="align-middle">{task.id}</td>
                <td className="align-middle">
                    <AppLink to={"/tasks/"+task.id} 
                        text={task.fact}/></td>
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
            />
}