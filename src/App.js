import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar     from "./parts/navbar";
import Footer     from "./parts/footer";

import NoMatch    from "./pages/404"
import Home       from "./pages/home";

import User       from "./pages/users/one";
import UserList   from "./pages/users/list";
import UserCreate from "./pages/users/create";
import UserEdit   from "./pages/users/edit";
import UserDelete from "./pages/users/delete";

import TodoList   from "./pages/todos/list";
import TodoCreate from "./pages/users/create";
import TodoEdit   from "./pages/users/edit";
import TodoDelete from "./pages/users/delete";

export default function App() { 
  return (
    <div>
      <Navbar /> <br/><br/>
      <div className="container">
        <Routes>
          <Route path="*"                  element={<NoMatch/>}/>
          <Route path="/"                  element={<Home/>}/>
          <Route path="/users"             element={<UserList/>}/>
          <Route path="/todos"             element={<TodoList/>}/>
          <Route path="/users/:id"         element={<User/>}/>
          {/*<Route path="/users/create"     element={<UserCreate/>}/>
          <Route path="/todos/create"      element={<TodoCreate/>}/>
          <Route path="/users/:id/edit"    element={<UserEdit />}/>
          <Route path="/todos/:id/edit"    element={<TodoEdit />}/>
          <Route path="/users/:id/delete"  element={<UserDelete />}/>
          <Route path="/todos/:id/delete"  element={<TodoDelete />}/>*/}
        </Routes>
      </div>
      <Footer />
    </div>
  )
}