import React from "react";
import TaskForm from "./form";

export default function TaskCreate(){
    let [task, setTask] = React.useState({task: "", user_id:""})
	return <TaskForm action="Create" value={task} setter={setTask} />
}