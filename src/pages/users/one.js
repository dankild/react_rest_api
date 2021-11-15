import React from "react";
import { useParams } from "react-router-dom";

import FetchObjs from "../../parts/fetch";
import Buttons from "../../parts/buttons";
import AppLink from "../../parts/link";
import Table from "../../parts/table";

export default function User(){
    let head = ['ID', 'Todo', ''];

    let { id } = useParams();
    let user = FetchObjs('users/'+id);
    let todos = FetchObjs('users/'+id+'/facts');
    let ready = () => user !== undefined && todos.length >=1
    let title = user.username+"'s todos:"

    function Body(){
        return todos.map((todo) => {return (
            <tr>
                <td className="align-middle">{todo.id}</td>
                <td className="align-middle">{todo.fact}</td>
                <td className="align-middle text-end">
                    <Buttons 
                        link={todo.id+"/"}
                    />
                </td>
            </tr>
            )})
    }

    return <Table title={title} head={head} body={Body} ready={ready}/>
}