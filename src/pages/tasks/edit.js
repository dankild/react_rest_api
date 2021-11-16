import React from "react";
import { useParams } from "react-router-dom";

import TaskForm from "./form";
import Get from "../../rest/get";

export default function TaskEdit(){
    let { id } = useParams();

    let imported_task = Get("facts/"+id);
    let [task, setTask] = React.useState({task: "", user_id:""});

    setTask({task:imported_task.fact, user_id:imported_task.user_id})
    
	return <TaskForm action="Edit" value={task} setter={setTask} />
}