import React from "react";

import Get from "../../rest/get";
import Buttons from "../../parts/buttons";
import AppLink from "../../parts/link";
import Table from "../../parts/table";

export default function TaskList(){

    let todos = Get('facts');
    let users = Get('users');
    let head = ['ID', 'Task', 'Assignee', ''];

    function Body(){
        return todos.map((todo) => {return (
            <tr>
                <td className="align-middle">{todo.id}</td>
                <td className="align-middle">{todo.fact}</td>
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
    let ready = () => todos.length >= 1 && users.length >=1
    
    return <Table title="Tasks" head={head} body={Body} ready={ready}/>
}