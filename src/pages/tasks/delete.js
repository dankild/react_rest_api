import React from "react";
import { useParams } from "react-router-dom";

import Loader from "../../parts/loader";
import useFetch from "../../parts/fetch";

export default function TaskDelete(){
    let { id } = useParams();
    let user = useFetch("GET", 'facts/'+id)
    let answer = useFetch("DELETE",'facts/'+id)

    let page = <Loader />
    if (user && answer){
        page = <p>{answer}</p>
    } 
    return page
}