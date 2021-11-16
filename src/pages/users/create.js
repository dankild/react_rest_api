import React from "react";
import UserForm from "./form";

export default function UserCreate(){
    let [user, setUser] = React.useState({username: '', password:''})

    return <UserForm action="Create" value={user} setter={setUser} />
}
