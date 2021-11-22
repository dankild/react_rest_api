import React from "react";
import { useParams } from "react-router-dom";

import UserForm from "./form";
import useFetch from "../../parts/fetch";
import Loader from "../../parts/loader";

export default function UserEdit(){
    let { id } = useParams();
    let user = useFetch("GET", 'users/'+id)

    let page = <Loader />
    if (user){
        page = <UserForm 
                action="Edit" 
                prevState={user} 
                method='PUT'
                link={id}
            />
    }

    return page
}
