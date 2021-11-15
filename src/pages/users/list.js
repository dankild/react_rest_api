import React from "react";

import FetchObjs from "../../parts/fetch";
import Buttons from "../../parts/buttons";
import AppLink from "../../parts/link";
import Table from "../../parts/table";

export default function UserList(){   
    let users = FetchObjs('users');
    let head = ['ID', 'Username', '']
    let ready = () => users.length >=1

    function Body(){
        return users.map((user) => {return (
            <tr>
                <td className="align-middle">{user.id}</td>
                <td className="align-middle">
                    <AppLink to={"/users/"+user.id} 
                    text={user.username}/>
                </td>
                <td className="align-middle text-end">
                    <Buttons link={user.id+"/"}/>
                </td>
            </tr>
        )})
    }

    return <Table title="User List" head={head} body={Body} ready={ready} />
}