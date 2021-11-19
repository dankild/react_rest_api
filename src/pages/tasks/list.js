import React from "react";

import Table from "../../parts/table";
import AppLink from "../../parts/link";
import useFetch from "../../parts/fetch";
import Buttons from "../../parts/buttons";

let readiness = ['Pending', 'In Progress', 'Done']

export default function TaskList(){

    let tasks = useFetch("GET", 'facts');
    let users = useFetch("GET", 'users');
    let head = ['ID', 'Task', 'Assignee', 'Readiness', ''];

    function madeRow(array){
        return (
            <tr>
               {array.map(e =>  <td className="align-middle">{e}</td>)}
            </tr>
        )
    }
    function Body(){
        return tasks.map((task) => {return (
            madeRow([
                task.id, 
                <AppLink to={"/tasks/"+task.id} text={task.fact}/>,
                <AppLink to={"/users/"+task.user_id} text={users[task.user_id-1].username}/>,
                <Buttons link={task.id}/>
                ])
            )
        })
    }
    
    return <Table 
                title="Tasks" 
                head={head} 
                body={Body} 
                ready={tasks && users}
                button={{
                    state:true,
                    text:'task',
                    link:"/tasks/create"}}
            />
}
