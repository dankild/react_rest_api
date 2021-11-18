import React from "react";
import UserForm from "./form";

export default function UserCreate(){
    return <UserForm 
                action="Create" 
                prevState={{username: ''}} 
                method='post'
                link='users'
            />
}
