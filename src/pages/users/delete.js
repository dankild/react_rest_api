import React from "react";
import { useParams } from "react-router-dom";

import useFetch from "../../parts/fetch";
import Loader from "../../parts/loader";

export default function UserDelete(){
    let { id } = useParams();
    let user = useFetch("GET", 'users/'+id);
    let answer = useFetch("DELETE",'users/'+id);

    let page = <Loader />
    if (user && answer){
        page = <p>{answer.message}</p>
    } 
    return page
}