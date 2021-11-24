import { useParams } from "react-router-dom";

import MyAlert from "../../parts/alert";
import Delete from "../../parts/delete";
import useFetch from "../../parts/fetch";
import Loader from "../../parts/loader";

export default function UserDelete(){
    let { id } = useParams();
    let {call_danger} = MyAlert('users/');
    let tasks = useFetch('GET', 'facts/');
    let page = '';

    if (tasks){
        console.log('tasks: '+JSON.stringify(tasks))
        for (let task of tasks){
            console.log(`${id} == ${task.user_id} = ${id == task.user_id}`)
            if (id == task.user_id){
                page = call_danger('Cannot delete user, that have tasks.');
            } 
        }
    }

    return <>{Delete('users/', id)}{page}</>;
}

