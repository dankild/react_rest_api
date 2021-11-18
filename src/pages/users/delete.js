import React from "react";
import { useParams } from "react-router-dom";

import Get from "../../rest/get";
import Delete from "../../rest/delete";
import Loader from "../../parts/loader";

export default function UserDelete(){
    let { id } = useParams();
    let user = Get('users/'+id)
    let answer = Delete('users/'+id)

    let page = <Loader />
    if (user && answer){
        page = <p>{answer}</p>
    } 
    return page
}