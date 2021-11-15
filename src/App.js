import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar   from "./parts/navbar";
import Footer   from "./parts/footer";
import NoMatch  from "./pages/404"
import Home     from "./pages/home";
import Todo     from "./pages/todo";
import User     from "./pages/user";
import TodoList from "./pages/todos";
import UserList from "./pages/users";

function App() { 
  return (
    <div>
      <Navbar /> <br/><br/>
      <div className="container">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="users" element={<UserList />}>
            <Route path=":id" element={<User />}>
              {/*<Route path="edit" element={<UserEdit />} />
              <Route path="delete" element={<UserDelete />} />*/}
            </Route>
          </Route>
          <Route path="todos" element={<TodoList />}>
            <Route path=":id" element={<Todo />} >
              {/*<Route path="edit" element={<TodoEdit />} />
              <Route path="delete" element={<TodoDelete />} />*/}
            </Route>
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App;


//<Route path="/" element={<Home />} />
//<Route path="about" element={<About />} />