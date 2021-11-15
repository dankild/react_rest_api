import React from "react";

import FetchObjs from "../parts/fetch";
import Buttons from "../parts/buttons";
import Table from "../parts/table";

export default function TodoList(){

    let todos = FetchObjs('facts');
    let users = FetchObjs('users');
    let head = ['ID', 'Todo', 'Assignee'];

    function Body(){
        return todos.map((todo) => {return (
            <tr>
                <td className="align-middle">{todo.id}</td>
                <td className="align-middle">{todo.fact}</td>
                <td className="align-middle">{users[todo.user_id-1].username}</td>
                <td className="align-middle text-end">
                    <Buttons link={todo.id.toString()+"/"}/>
                </td>
            </tr>
            )})
    }
    let ready = () => todos.length >= 1 && users.length >=1
    
    return <Table title="Todo List" head={head} body={Body} ready={ready}/>
}