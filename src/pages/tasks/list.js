import React from "react";

import Get from "../../rest/get";
import Table from "../../parts/table";
import AppLink from "../../parts/link";
import Buttons from "../../parts/buttons";

export default function TaskList(){

    let todos = Get('facts');
    let users = Get('users');
    let head = ['ID', 'Task', 'Assignee', ''];
    {/*let strikethrough = (text, task) => task.likes >0 ? <span style={{textDecoration: 'lineThrough'}}>{text}</span> : text*/}

    function Body(){
        return todos.map((todo) => {return (
            <tr>
                <td className="align-middle">{todo.id}</td>
                <td className="align-middle">
                     <AppLink 
                        to={"/tasks/"+todo.id} 
                        text={todo.fact}/>
                </td>
                <td className="align-middle">
                    <AppLink to={"/users/"+todo.user_id} 
                    text={users[todo.user_id-1].username}/>
                </td>
                <td className="align-middle text-end">
                    <Buttons link={todo.id}/>
                </td>
            </tr>
            )})
    }
    
    return <Table 
                title="Tasks" 
                head={head} 
                body={Body} 
                ready={todos && users}
            />
}