import React from "react";
import { useParams } from "react-router-dom";

import UserForm from "./form";
import Get from "../../rest/get";
import Loader from "../../parts/loader";

export default function UserEdit(){
    let { id } = useParams();
    let user = Get('users/'+id)

    let page = <Loader />
    if (user){
        page = <UserForm 
                action="Edit" 
                prevState={user} 
                method='put'
                link={'users/'+id}
            />
    }

    return page
}
