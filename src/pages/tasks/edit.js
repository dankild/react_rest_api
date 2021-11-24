import React from "react";
import { useParams } from "react-router-dom";

import TaskForm from "./form";
import Loader from "../../parts/loader";
import useFetch from "../../parts/fetch";

export default function TaskEdit(){
    let { id } = useParams();
    let task = useFetch("GET", 'facts/'+id)

    let page = <Loader />
    if (task){
        page = <TaskForm 
                action="Edit" 
                prevState={task} 
                method='put'
                link={id}
                message="Task succesfully edited."
            />
    }

    return page
}
