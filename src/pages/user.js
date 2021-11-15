import React from "react";
import { useParams } from "react-router-dom";

import FetchObjs from "../parts/fetch";
import Buttons from "../parts/buttons";
import Table from "../parts/table";

export default function User(){
    let head = ['ID', 'Todo', ''];

    let { id } = useParams();
    let user = FetchObjs('users/'+id);
    let todos = FetchObjs('users/'+id+'/facts');
    let ready = () => user !== undefined && todos.length >=1

    function Body(){
        return todos.map((todo) => {return (
            <tr>
                <td className="align-middle">{todo.id}</td>
                <td className="align-middle">{todo.fact}</td>
                <td className="align-middle text-end">
                    <Buttons link={todo.id.toString()+"/"}/>
                </td>
            </tr>
            )})
    }

    
    return <Table title={user.username+" todos:"} head={head} body={Body} ready={ready}/>
}