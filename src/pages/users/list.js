import React from "react";

import Table from "../../parts/table";
import AppLink from "../../parts/link";
import useFetch from "../../parts/fetch";
import Buttons from "../../parts/buttons";

export default function UserList(){   
    let users = useFetch("GET", 'users');
    let head = ['ID', 'Username', '']

    function Body(){
        return users.map((user) => {return (
            <tr key={user.id}>
                <td className="align-middle">{user.id}</td>
                <td className="align-middle">
                    <AppLink to={"/users/"+user.id} 
                    text={user.username}/>
                </td>
                <td className="align-middle text-end">
                    <Buttons link={user.id}/>
                </td>
            </tr>
        )})
    }

    return <Table 
                title="User List" 
                head={head} 
                body={Body} 
                ready={users} 
                button={{
                    state:true,
                    text:'user',
                    link:"/users/create"}}
            />
}