import { Routes, Route } from "react-router-dom";

import NoMatch    from "../pages/404";
import Home       from "../pages/home";

import User       from "../pages/users/one";
import UserList   from "../pages/users/list";
import UserCreate from "../pages/users/create";
import UserEdit   from "../pages/users/edit";
import UserDelete from "../pages/users/delete";

import Task       from "../pages/tasks/one";
import TaskList   from "../pages/tasks/list";
import TaskCreate from "../pages/tasks/create";
import TaskEdit   from "../pages/tasks/edit";
import TaskDelete from "../pages/tasks/delete";

export default function Main(){
    return (
        <div className="container">
            <br/><br/>
            <Routes>
                <Route path="*"                  element={<NoMatch/>}/>
                <Route path="/"                  element={<Home/>}/>
                <Route path="/users"             element={<UserList/>}/>
                <Route path="/tasks"             element={<TaskList/>}/>
                <Route path="/users/:id"         element={<User/>}/>
                <Route path="/tasks/:id"         element={<Task/>}/>
                <Route path="/users/create"      element={<UserCreate/>}/>
                <Route path="/tasks/create"      element={<TaskCreate/>}/>
                <Route path="/users/:id/edit"    element={<UserEdit />}/>
                <Route path="/tasks/:id/edit"    element={<TaskEdit />}/>
                <Route path="/users/:id/delete"  element={<UserDelete />}/>
                <Route path="/tasks/:id/delete"  element={<TaskDelete />}/>
            </Routes>
        </div>
    )
}