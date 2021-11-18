import React from "react";
import TaskForm from "./form";

export default function TaskCreate(){
    return <TaskForm 
                action="Create" 
                prevState={{task: "", user_id:"", likes: 0}} 
                method='post'
                link='users'
            />
}
