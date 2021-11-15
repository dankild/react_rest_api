import React from "react";

import FetchObjs from "../parts/fetch";
import Buttons from "../parts/buttons";

export default function TodoList(){

    let [todos, setTodos] = React.useState([]); FetchObjs('facts', setTodos);
    let [users, setUsers] = React.useState([]); FetchObjs('users', setUsers);

    function ready(){
        return todos.length >= 1 && users.length >=1
    }
    
    return(
        <div>
            <h1>Todo List</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Todo</th>
                        <th>Assignee</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {ready() ?
                        todos.map((todo) => {return (
                            <tr>
                                <td>{todo.id}</td>
                                <td>{todo.fact}</td>
                                <td>{users[todo.user_id-1].username}</td>
                            </tr>
                        )}) :
                        <tr><td>Loading ...</td> </tr>
                    }
                </tbody>
            </table>
        </div> 
    )
}