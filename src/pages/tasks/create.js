import TaskForm from "./form";
import useFetch from "../../parts/fetch";
import Loader from "../../parts/loader";

export default function TaskCreate(){
    let users = useFetch('GET', 'users/')

    let form = users
                ? <TaskForm 
                    action="Create" 
                    prevState={{task: "", user_id:users[0].id}} 
                    method='post'
                    link=''
                    message="Task succesfully created."
                />
                : <Loader />
                
    return form;
}
