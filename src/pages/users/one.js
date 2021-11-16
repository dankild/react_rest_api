import React from "react";
import { useParams } from "react-router-dom";

import Get from "../../rest/get";
import Table from "../../parts/table";
import Buttons from "../../parts/buttons";

export default function User(){
    let head = ['ID', 'Todo', ''];

    let { id } = useParams();
    let user = Get('users/'+id);
    let todos = Get('/users/'+id+'/facts');
    let ready = () => user !== undefined && todos.length >=1
    let title = user.username+"'s tasks:"

    function Body(){
        return todos.map((todo) => {return (
            <tr>
                <td className="align-middle">{todo.id}</td>
                <td className="align-middle">{todo.fact}</td>
                <td className="align-middle text-end">
                    <Buttons 
                        link={todo.id}
                    />
                </td>
            </tr>
            )})
    }

    return <Table title={title} head={head} body={Body} ready={ready}/>
}